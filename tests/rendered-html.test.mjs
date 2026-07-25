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

test("embeds all seven downloads without public raw-file URLs", async () => {
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

test("keeps the approved update framing and direct reading links", async () => {
  const response = await render("/");
  const html = await response.text();

  assert.match(html, /購入者限定・本編アップデート/);
  assert.match(html, /毎月25万円の印税が振り込まれるまでにやったこと、全部書きました/);
  assert.match(html, /AIで長文原稿を1冊仕上げる、現在の制作フロー/);
  assert.match(html, /href="\/library\/longform-with-codex\/?#workflow-overview"/);
  assert.match(html, /href="\/library\/ai-voice-before-after\/?#examples"/);
  assert.match(html, /href="\/resources\/?#resource-06"/);
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
  assert.match(voice, /購入者アンケートでは、AIっぽくならない文章の作り方を詳しく知りたい/);
  assert.doesNotMatch(longform, /本編第/);
  assert.doesNotMatch(voice, /本編第/);
});

test("explains prompts and keeps the Markdown value heading consistent", async () => {
  const [homeResponse, longformResponse] = await Promise.all([
    render("/"),
    render("/library/longform-with-codex"),
  ]);
  const [home, longform] = await Promise.all([
    homeResponse.text(),
    longformResponse.text(),
  ]);

  const markdownHeading = "2種類のMarkdownで、文章の個性と品質を安定させる";
  assert.match(home, new RegExp(markdownHeading));
  assert.match(longform, new RegExp(markdownHeading));
  assert.match(longform, /まず、原稿と既存ファイルをAIへ渡し、次のように頼みます/);
  assert.match(longform, /本文作成へ移る前に、AIへ次のように依頼し/);
  assert.match(longform, /重要な順に作ってください/);
  assert.doesNotMatch(longform, /重要な順に5問だけ作ってください/);
});

test("keeps the approved article 02 language and source labels", async () => {
  const response = await render("/library/ai-voice-before-after");
  const html = await response.text();

  assert.match(
    html,
    /文章は整っていても、書き手の経験、迷い、判断が見えず、\s*誰が書いても同じような文章に見える状態を指します/,
  );
  assert.match(html, /私の違和感/);
  assert.match(html, /編集判断/);
  assert.match(html, /どう直すと決めたか/);
  assert.match(html, /音声回答から整理した判断基準/);
  assert.match(html, /今回の記事用に要約したものです/);
  assert.match(html, /音声回答の文字起こし（抜粋）/);
  assert.match(html, /原稿制作フローの記事でも紹介しました/);
  assert.match(html, /私が公開前に確認する2つの観点/);
  assert.match(html, /個性を感じない原稿になりやすくなります/);
  assert.match(html, /AIっぽさは、最後の言い換えだけでは消えない/);
  assert.doesNotMatch(html, /案が置かれていました/);
  assert.doesNotMatch(html, /言葉が置かれていました/);
  assert.doesNotMatch(html, /数字が実体験へ戻ります/);
  assert.doesNotMatch(html, /文章に書き手を戻します/);
  assert.doesNotMatch(html, /主語が「あおい」と「あなた」で揺れていないか/);
  assert.doesNotMatch(html, /私が公開前に確認する2つの方向/);
  assert.doesNotMatch(html, /誰が書いたのか見えない原稿/);
});

test("contains no prohibited third-party AI name", async () => {
  const prohibitedNames = new RegExp(
    [
      "EXTERNAL_PERSON_SAMPLE_A",
      "EXTERNAL_PERSON_SAMPLE_B",
      "EXTERNAL_PERSON_SAMPLE",
    ].join("|"),
    "i",
  );
  const sourceFiles = await Promise.all([
    readFile(new URL("../app/_data/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/_data/download-content.json", import.meta.url), "utf8"),
    readFile(new URL("../app/library/longform-with-codex/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/library/ai-voice-before-after/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/resources/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(sourceFiles.join("\n"), prohibitedNames);
});
