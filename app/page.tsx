import Link from "next/link";
import { MarkdownDownload } from "./_components/MarkdownDownload";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { articles, categories, downloads } from "./_data/content";
import downloadContent from "./_data/download-content.json";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="studio-hero">
        <div className="studio-hero-inner">
          <p className="site-label">購入者限定</p>
          <h1>あおい執筆室</h1>
          <p className="hero-lead">
            私が実際のKindle原稿制作で使っている手法、修正事例、配布ファイルをまとめています。
            実践を重ねる中で使い方が固まったものや、読者のつまずきを減らせる具体例を、随時追加します。
          </p>
          <div className="hero-principles">
            <span>自分の経験を材料にする</span>
            <span>AIに丸投げしない</span>
            <span>最後は自分で判断する</span>
          </div>
        </div>
      </section>

      <div className="home-shell">
        <section className="start-guide" aria-labelledby="start-guide">
          <div className="section-heading">
            <p>はじめて使う方へ</p>
            <h2 id="start-guide">迷ったら、この順番で進んでください</h2>
          </div>
          <ol className="start-steps">
            <li><span>1</span><p><b><Link href="/library/longform-with-codex">全体像を知る →</Link></b>現在の原稿制作フローを読みます。</p></li>
            <li><span>2</span><p><b><Link href="/library/longform-with-codex#voice">材料を出す →</Link></b>音声ダンプと逆質問を試します。</p></li>
            <li><span>3</span><p><b><Link href="/library/longform-with-codex#markdown">ルールを作る →</Link></b>共通ルールと本書専用ルールを用意します。</p></li>
            <li><span>4</span><p><b><Link href="/library/ai-voice-before-after">文章を作り込む →</Link></b>ビフォー・アフターで判断基準を確認します。</p></li>
            <li><span>5</span><p><b><Link href="/resources#resource-06">最後は自分で読む →</Link></b>AIの意見を集めても、採用する内容は自分で決めます。</p></li>
          </ol>
          <Link className="button-link" href="/library/longform-with-codex">
            最初の記事から読む
          </Link>
        </section>

        <section aria-labelledby="new-articles">
          <div className="section-heading with-action">
            <div>
              <p>最新の記事</p>
              <h2 id="new-articles">新しく追加した実践記事</h2>
            </div>
            <Link href="/library">すべての記事を見る →</Link>
          </div>

          <div className="article-grid">
            {articles.slice(0, 3).map((article, index) => (
              <Link
                className={`article-card ${index === 0 ? "article-card-primary" : ""}`}
                href={article.href}
                key={article.slug}
              >
                <span className="article-number">{article.number}</span>
                <div>
                  <p className="article-meta">
                    {article.primaryCategory}・本編{article.chapters}に関連
                  </p>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <b>記事を読む <span aria-hidden="true">→</span></b>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="category-library" aria-labelledby="category-library">
          <div className="section-heading">
            <p>工程から探す</p>
            <h2 id="category-library">今困っている工程から選ぶ</h2>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link href={`/library#${category.id}`} className="category-card" key={category.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <small>本編 {category.chapters}</small>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="download-library" aria-labelledby="downloads">
          <div className="section-heading with-action">
            <div>
              <p>配布ファイル</p>
              <h2 id="downloads">まず使いやすい3点</h2>
            </div>
            <Link href="/resources">すべての配布ファイルを見る →</Link>
          </div>
          <p className="section-intro">
            Markdownは、見出しや箇条書きを簡単な記号で整理できるテキスト形式です。
            ファイル名の末尾は<code>.md</code>。必要なものを編集して使ってください。
          </p>
          <div className="download-grid">
            {downloads.slice(0, 3).map((item) => (
              <MarkdownDownload
                className="download-card"
                content={downloadContent[item.file]}
                fileName={item.file}
                key={item.file}
              >
                <span>{item.number}</span>
                <div>
                  <b>{item.title}</b>
                  <small>{item.description}</small>
                </div>
                <i aria-hidden="true">↓</i>
              </MarkdownDownload>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
