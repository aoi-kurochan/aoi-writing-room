import Link from "next/link";
import { MarkdownDownload } from "../_components/MarkdownDownload";
import { SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { downloads } from "../_data/content";
import downloadContent from "../_data/download-content.json";

export default function Resources() {
  return (
    <main>
      <SiteHeader />
      <div className="index-shell">
        <nav className="breadcrumb" aria-label="パンくず">
          <Link href="/">あおい執筆室</Link>
          <span>/</span>
          <span>配布ファイル</span>
        </nav>
        <header className="index-header">
          <p className="article-kicker">配布ファイル</p>
          <h1>原稿制作で使えるテンプレート</h1>
          <p>
            どの工程で使うのか、編集が必要かを確認してからダウンロードしてください。
            すべてMarkdown形式のため、内容を開いて確認し、自分の本に合わせて書き換えられます。
          </p>
        </header>

        <div className="resource-list">
          {downloads.map((item) => (
            <article className="resource-card" id={`resource-${item.number}`} key={item.file}>
              <header>
                <span>{item.number}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </header>
              <dl>
                <div><dt>使うタイミング</dt><dd>{item.timing}</dd></div>
                <div><dt>使い方</dt><dd>{item.editing}</dd></div>
                <div><dt>検証・版</dt><dd>2026年7月／{item.version}</dd></div>
              </dl>
              <ol>
                {item.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <div className="resource-actions">
                <MarkdownDownload
                  content={downloadContent[item.file]}
                  fileName={item.file}
                >
                  ダウンロード ↓
                </MarkdownDownload>
                <Link href={item.relatedHref}>関連：{item.related} →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
