import Link from "next/link";
import { MarkdownDownload } from "./_components/MarkdownDownload";
import { SiteFooter, SiteHeader } from "./_components/SiteChrome";
import { articles, categories, downloads, productTitle } from "./_data/content";
import downloadContent from "./_data/download-content.json";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="studio-hero">
        <div className="studio-hero-inner">
          <p className="site-label">購入者限定・本編アップデート</p>
          <h1>あおい執筆室</h1>
          <div className="hero-lead">
            <p>
              このページは、『{productTitle}』を購入してくださった方のための、
              追加実践ライブラリです。
            </p>
            <p>
              本編を土台に、購入者アンケートで要望の多かった内容と、
              私が出版を続ける中で変わった原稿制作の方法を、
              追加記事と配布ファイルにまとめています。
            </p>
            <p>
              今回のアップデートを順番に読むことも、
              今つまずいている工程から必要な内容を探すこともできます。
            </p>
          </div>
          <div className="hero-principles">
            <span>自分の経験を材料にする</span>
            <span>AIに丸投げしない</span>
            <span>最後は自分で判断する</span>
          </div>
        </div>
      </section>

      <div className="home-shell">
        <section className="latest-update" aria-labelledby="latest-update">
          <div className="latest-update-copy">
            <p>最新アップデート</p>
            <h2 id="latest-update">書いた文章を、YouTube動画に変える方法</h2>
            <p>
              Kindleやnoteなど、すでにある文章から、長尺動画1本を作り、
              必要ならショート動画にも展開する手順をまとめました。
            </p>
            <div className="latest-update-actions">
              <Link
                href="https://brain-market.com/u/pokopen8866/a/bykDM0YjMgoTZsNWa0JXY?free_pass=5K2HHAOG56k6D-r-m7avuQ"
                target="_blank"
                rel="noreferrer"
              >
                Brainの無料公開記事を読む →
              </Link>
            </div>
          </div>
          <div className="latest-update-points" aria-label="今回できるようになったこと">
            <span>元文章から台本を作る</span>
            <span>画面・音声・字幕を作る</span>
            <span>長尺公開後、必要ならショートへ展開する</span>
          </div>
        </section>

        <section aria-labelledby="new-articles">
          <div className="section-heading with-action">
            <div>
              <p>記事ライブラリ</p>
              <h2 id="new-articles">これまでの実践記事</h2>
            </div>
            <Link href="/library">追加実践記事をすべて見る →</Link>
          </div>

          <div className="article-grid">
            {articles.slice(0, 2).map((article, index) => (
              <Link
                className={`article-card ${index === 0 ? "article-card-primary" : ""}`}
                href={article.href}
                key={article.slug}
              >
                <span className="article-number">{article.number}</span>
                <div>
                  <p className="article-meta">
                    {article.originLabel}
                  </p>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <small className="article-related">
                    本編の{article.chapters}に関連
                  </small>
                  <b>記事を読む <span aria-hidden="true">→</span></b>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="category-library" aria-labelledby="category-library">
          <div className="section-heading">
            <p>必要なところから読む</p>
            <h2 id="category-library">今困っている制作工程から探す</h2>
          </div>
          <p className="section-intro">
            すでに確認したい内容が決まっている方は、企画、本文、編集、出版前など、
            現在つまずいている工程からお選びください。
          </p>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link href={`/library#${category.id}`} className="category-card" key={category.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <small>本編の{category.chapters}</small>
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
                fileName={item.downloadName}
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
