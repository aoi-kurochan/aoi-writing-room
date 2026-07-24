import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const [path, expected] of [
  ["/", "あおい執筆室"],
  ["/library", "原稿制作の工程から探す"],
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
