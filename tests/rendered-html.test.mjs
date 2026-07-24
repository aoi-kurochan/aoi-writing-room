import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const relativePath =
    path === "/" ? "../dist/client/index.html" : `../dist/client${path}/index.html`;
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
  ["/library/longform-with-codex", "長文原稿を1冊仕上げる現在の方法"],
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
  const response = await render("/");
  const html = await response.text();
  assert.match(html, /noindex/);
  assert.match(html, /nofollow/);
  assert.match(html, /購入者限定/);
  assert.match(html, /第三者へ共有すること/);
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
  assert.match(html, /href="\/library\/longform-with-codex#workflow-overview"/);
  assert.match(html, /href="\/library\/ai-voice-before-after#examples"/);
  assert.match(html, /href="\/resources#resource-06"/);
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
