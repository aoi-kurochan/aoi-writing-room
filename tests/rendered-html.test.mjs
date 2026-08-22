import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const relativePath =
    path === "/"
      ? "../out/index.html"
      : path.endsWith(".txt")
        ? `../out${path}`
        : `../out${path}/index.html`;
  const html = await readFile(new URL(relativePath, import.meta.url), "utf8");
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

for (const [path, expected] of [
  ["/", "あおい執筆室"],
  ["/library", "追加実践記事を、制作工程から探す"],
  ["/resources", "原稿制作で使えるテンプレート"],
  ["/library/longform-with-codex", "AIで長文原稿を1冊仕上げる、現在の制作フロー"],
  ["/library/ai-voice-before-after", "あおいの原稿ビフォー・アフター"],
  ["/library/codex-book-rewrite", "1年前の本を、今の基準でリライトする。Codex活用術"],
]) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), new RegExp(expected));
  });
}

test("keeps search exclusion and purchaser notice", async () => {
  const [response, robotsResponse] = await Promise.all([render("/"), render("/robots.txt")]);
  const [html, robots] = await Promise.all([response.text(), robotsResponse.text()]);
  assert.match(html, /noindex/);
  assert.match(html, /nofollow/);
  assert.match(html, /購入者限定/);
  assert.match(html, /第三者へ共有すること/);
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \//);
});

test("embeds all eight downloads without public raw-file URLs", async () => {
  const downloadContent = JSON.parse(
    await readFile(new URL("../app/_data/download-content.json", import.meta.url), "utf8"),
  );

  for (const file of [
    "01-common-writing-rules.md",
    "02-book-specific-rules.md",
    "03-reverse-questions.md",
    "04-parallel-review.md",
    "05-review-integration.md",
    "06-final-checklist.md",
    "07-chat-handoff.md",
    "08-codex-book-rewrite-starter-kit.md",
  ]) {
    assert.match(downloadContent[file] ?? "", /^# /);
    await assert.rejects(access(new URL(`../public/downloads/${file}`, import.meta.url)));
  }

  const response = await render("/resources");
  assert.equal(response.status, 200);
  assert.doesNotMatch(await response.text(), /href="\/downloads\//);
});

test("contains no starter preview markers", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|Building your site/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("shows the latest update and direct action links", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /購入者限定・本編アップデート/);
  assert.match(html, /毎月25万円の印税が振り込まれるまでにやったこと、全部書きました/);
  assert.match(html, /最新アップデート/);
  assert.match(html, /1年前の本を、今の基準でリライトする/);
  assert.match(html, /href="(?:\/aoi-writing-room)?\/library\/codex-book-rewrite\/?"/);
  assert.match(html, /開始キットをダウンロード/);
  assert.match(html, /AIで長文原稿を1冊仕上げる、現在の制作フロー/);
  assert.match(html, /これまでの実践記事/);
  assert.doesNotMatch(html, /今回追加した2つの記事/);
  assert.doesNotMatch(html, /迷ったら、この順番で進んでください/);
});

test("uses consistent source quotation and purchaser-survey labels", async () => {
  const [longformResponse, voiceResponse] = await Promise.all([
    render("/library/longform-with-codex"),
    render("/library/ai-voice-before-after"),
  ]);
  const [longform, voice] = await Promise.all([
    longformResponse.text(),
    voiceResponse.text(),
  ]);
  const quote =
    "最初ね、15部ぐらいかな。1,980円で売って。で、そっからピタッと止まったんだよね。";

  assert.match(longform, new RegExp(quote));
  assert.match(voice, new RegExp(quote));
  assert.match(longform, /購入者アンケートでは、長文原稿を作る際のAIの使い分けを詳しく知りたい/);
  assert.match(
    voice,
    /購入者アンケートでは、「AIっぽくならない文章の作り方を詳しく知りたい」\s*という声/,
  );
  assert.doesNotMatch(longform, /本編第/);
  assert.doesNotMatch(voice, /本編第/);
});

test("explains prompts and keeps the Markdown value heading", async () => {
  const longformResponse = await render("/library/longform-with-codex");
  const longform = await longformResponse.text();

  const markdownHeading = "2種類のMarkdownで、文章の個性と品質を安定させる";
  assert.match(longform, new RegExp(markdownHeading));
  assert.match(longform, /まず、原稿と既存ファイルをAIへ渡し、次のように頼みます/);
  assert.match(longform, /本文作成へ移る前に、AIへ次のように依頼し/);
  assert.match(longform, /重要な順に作ってください/);
  assert.doesNotMatch(longform, /重要な順に5問だけ作ってください/);
});

test("keeps the Codex rewrite article factual and actionable", async () => {
  const [articleResponse, libraryResponse, resourcesResponse] = await Promise.all([
    render("/library/codex-book-rewrite"),
    render("/library"),
    render("/resources"),
  ]);
  const [article, library, resources] = await Promise.all([
    articleResponse.text(),
    libraryResponse.text(),
    resourcesResponse.text(),
  ]);

  assert.match(article, /全体像を理解するための5つの流れ/);
  assert.match(article, /実際に作業するための実践8STEP/);
  assert.match(article, /5つの流れ・1/);
  assert.match(article, /5つの流れ・5/);
  assert.match(article, /Codexに任せたこと/);
  assert.match(article, /私が決めたこと/);
  assert.match(article, /標準手順として、Amazonレビューも確認する/);
  assert.match(article, /この本では最初の工程として明確には行っていない/);
  assert.match(article, /投稿者名、プロフィール画像、IDなど、\s*個人につながる情報は必ず除きます/);
  assert.match(article, /絶対修正/);
  assert.match(article, /修正検討/);
  assert.match(article, /要検討/);
  assert.match(article, /名前の部分を消せば良いでしょう/);
  assert.match(article, /ChatGPTの文章は下書きとして受け取り/);
  assert.match(article, /少しずつ1記事へ近づいていけます/);
  assert.match(article, /32節に1枚ずつ/);
  assert.match(article, /合計34枚/);
  assert.match(article, /ここまでできれば、リライトを始める準備は十分です/);
  assert.match(article, /すでに出版しているKindle本を5冊リライト/);
  assert.match(article, /最終的なWordファイル/);
  assert.doesNotMatch(article, /リライトすれば印税が増える/);
  assert.doesNotMatch(article, /980円の単体/);
  assert.match(article, /codex-rewrite\/illustrations-34\.webp/);
  assert.match(article, /codex-rewrite\/related-books-2\.webp/);
  assert.match(article, /codex-rewrite\/bookshelf\.webp/);
  assert.doesNotMatch(article, /codex-rewrite\/word-page-before\.webp/);
  assert.match(article, /Kindleから開けることを確認したAmazonの短縮URL/);
  assert.match(article, /完成版の巻末/);
  assert.doesNotMatch(article, /完成版v8の巻末/);
  assert.match(library, /出版後に育てる/);
  assert.match(library, /codex-book-rewrite/);
  assert.match(resources, /08/);
  assert.match(resources, /Codex既刊リライト開始キット/);
  assert.match(resources, /2026年8月[\s\S]{0,50}v1\.0/);
});

test("keeps the starter kit distinct from the article flow", async () => {
  const downloadContent = JSON.parse(
    await readFile(new URL("../app/_data/download-content.json", import.meta.url), "utf8"),
  );
  const kit = downloadContent["08-codex-book-rewrite-starter-kit.md"];

  assert.match(kit, /Web記事は、作業の全体像を理解するための「5つの流れ」/);
  assert.match(kit, /実際に手を動かすための「実践8STEP」/);
  assert.match(kit, /最初の10分コース/);
  assert.match(kit, /KENPは、Kindle Unlimitedで読まれたページ数/);
  assert.match(kit, /最初に必須/);
  assert.match(kit, /ある人・必要な人だけ/);
  assert.match(kit, /実践STEP1/);
  assert.match(kit, /実践STEP8/);
  assert.match(kit, /構成案を承認した後の依頼文/);
  assert.match(kit, /代表となる挿絵を1枚だけ作ってください/);
  assert.match(kit, /巻末を更新する作業用Wordファイル（DOCX）/);
  assert.match(kit, /運営会社や公的機関が公開している一次情報を確認してください/);
  assert.match(kit, /現在の内容、確認日、参照した公式URL、旧版との違い/);
  assert.match(kit, /Kindleから開けることを確認したAmazonの短縮URL/);
  assert.match(kit, /実際のKindle環境から短縮URLを開ける/);
  assert.match(kit, /このSTEPの目的/);
  assert.match(kit, /飛ばしてよい人/);
});

test("keeps the rewrite candidate lists unbulleted", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.check-grid ul \{ margin: 0; padding: 0; list-style: none; \}/);
  assert.doesNotMatch(css, /\.check-grid li::marker/);
});

test("keeps the rewrite article self-contained", async () => {
  const response = await render("/library/codex-book-rewrite");
  const html = await response.text();
  const outboundAnchors = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((href) => !href.startsWith("#"));

  assert.deepEqual(outboundAnchors, [
    "https://brain-market.com/u/pokopen8866/a/b2gTMyYjMgoTZsNWa0JXY?free_pass=cS3lBEyyYEoSKYhj-zO1VQ",
    "https://aoi-kurochan.github.io/aoi-books/",
  ]);
  assert.doesNotMatch(html, /サイト内メニュー/);
  assert.match(html, /このリンクを第三者へ転送することはお控えください/);
  assert.match(html, /aoi-books/);
  assert.doesNotMatch(html, /developers\.openai\.com/);
  assert.match(html, /このページと開始キットを使って、既刊1冊のリライトを始められる/);
});

test("keeps the approved article 02 language and source labels", async () => {
  const response = await render("/library/ai-voice-before-after");
  const html = await response.text();

  assert.match(
    html,
    /文章は整っていても、書き手の経験、迷い、判断が見えず、\s*誰が書いても同じような文章に見える状態を指します/,
  );
  assert.match(html, /AIの構成案｜構成検討中｜要旨/);
  assert.match(html, /私からAIへの返答｜構成検討中｜要旨/);
  assert.match(html, /AIからの逆質問｜初稿完成後｜原文/);
  assert.match(html, /私の音声回答｜逆質問への回答時｜文字起こし・抜粋/);
  assert.match(html, /AIの改稿用整理｜音声回答後｜要旨/);
  assert.match(html, /私の採用判断｜改稿時/);
  assert.match(html, /完成稿｜改稿後｜実際の書籍本文/);
  assert.match(html, /私がAIへ返した問題提起（要旨）/);
  assert.match(html, /意味を変えずに読みやすく整理したものです/);
  assert.match(html, /原稿制作フローの記事でも紹介しています/);
  assert.match(html, /私が公開前に確認する2つの観点/);
  assert.match(html, /書き手の個性を感じにくい原稿へ寄りやすくなります/);
  assert.match(html, /AIっぽさは、最後の言い換えだけでは消えない/);
  assert.match(
    html,
    /AIは、売れた瞬間だけではなく、「あんなに時間をかけて作ったのに」\s*と不安になった時間も、実録として残す材料だと整理しました/,
  );
  assert.match(
    html,
    /声に出したとき、実際には使わない不自然な日本語になっていないか/,
  );
  assert.match(
    html,
    /自分が実践していないことを、自分の実践として書かないことが、\s*書く内容を決める基準になっている/,
  );
  assert.match(
    html,
    /「これは私が読者へ届けたい言葉か」を決めるのは、私です/,
  );
  assert.doesNotMatch(html, /制作時点：/);
  assert.doesNotMatch(html, /AI →|私 →/);
  assert.doesNotMatch(html, /誰も言わない日本語/);
  assert.doesNotMatch(html, /長い経験を持つ専門家/);
  assert.doesNotMatch(html, /現在の状態：/);
  assert.doesNotMatch(html, /検証資料：/);
  assert.doesNotMatch(html, /案が置かれていました/);
  assert.doesNotMatch(html, /言葉が置かれていました/);
  assert.doesNotMatch(html, /数字が実体験へ戻ります/);
  assert.doesNotMatch(html, /文章に書き手を戻します/);
  assert.doesNotMatch(html, /主語が「あおい」と「あなた」で揺れていないか/);
  assert.doesNotMatch(html, /私が公開前に確認する2つの方向/);
  assert.doesNotMatch(html, /誰が書いたのか見えない原稿/);
});

test("contains no public-blocklist sentinel strings", async () => {
  const publicBlocklistSentinels = new RegExp(
    [
      "EXTERNAL_PERSON_SAMPLE_A",
      "EXTERNAL_PERSON_SAMPLE_B",
      "EXTERNAL_SERVICE_SAMPLE",
    ].join("|"),
    "i",
  );
  assert.match("EXTERNAL_PERSON_SAMPLE_A", publicBlocklistSentinels);

  const sourceFiles = await Promise.all([
    readFile(new URL("../app/_data/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/_data/download-content.json", import.meta.url), "utf8"),
    readFile(new URL("../app/library/longform-with-codex/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/library/ai-voice-before-after/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/library/codex-book-rewrite/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/resources/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(sourceFiles.join("\n"), publicBlocklistSentinels);
});
