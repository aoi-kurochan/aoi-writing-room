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
              実例・記事・配布ファイルとしてまとめています。
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
        <section className="start-guide" aria-labelledby="start-guide">
          <div className="section-heading">
            <p>今回のアップデート</p>
            <h2 id="start-guide">今回追加した内容を、順番に確認する</h2>
          </div>
          <p className="start-guide-intro">
            今回追加した2つの記事と配布ファイルを、原稿制作の流れに沿って確認できる順番です。
          </p>
          <ol className="start-steps">
            <li><span>1</span><p><b><Link href="/library/longform-with-codex#workflow-overview">1冊を仕上げる現在の流れを知る →</Link></b>最初に、8つの工程で全体像を確認します。</p></li>
            <li><span>2</span><p><b><Link href="/library/longform-with-codex#voice">自分にしかない経験や判断を、原稿の材料として引き出す →</Link></b>音声入力とAIからの逆質問を使います。</p></li>
            <li><span>3</span><p><b><Link href="/library/longform-with-codex#markdown">2種類のルールで、文章の個性と品質を安定させる →</Link></b>すべての本で守るルールと、その本だけのルールを分け、AIが前提を取り違えにくい状態を作ります。</p></li>
            <li><span>4</span><p><b><Link href="/library/ai-voice-before-after#examples">AIっぽさを消す判断基準を、実例で確認する →</Link></b>AIの案と完成稿を比べ、何を直し、何を残したのかを確認します。</p></li>
            <li><span>5</span><p><b><Link href="/resources#resource-06">公開前に、自分の目で事実・日本語・安全性を確認する →</Link></b>AIのレビューだけで終わらせず、出版前チェックリストで最終確認します。</p></li>
          </ol>
        </section>

        <section aria-labelledby="new-articles">
          <div className="section-heading with-action">
            <div>
              <p>今回のアップデート</p>
              <h2 id="new-articles">今回追加した実践記事</h2>
            </div>
            <Link href="/library">追加実践記事をすべて見る →</Link>
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
