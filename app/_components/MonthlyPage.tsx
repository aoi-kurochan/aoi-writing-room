import type { ReactNode } from "react";
import Link from "next/link";
import { articles, categories, productTitle } from "../_data/content";
import { articleMonths, articleResources, monthLabel, monthlyArticles, updateMonths } from "../_data/monthly-updates";
import { ResourceDetails } from "./ResourceDetails";

type Article = (typeof articles)[number];
const oldHomeAnchors: Record<string, string> = {
  "kindle-category-tool": "kindle-category-update",
  "ai-prompts": "ai-prompts-update",
  "writing-to-youtube": "latest-update",
};
function ArticleLink({ article, children, className }: {article: Article; children: ReactNode; className?: string}) {
  return <Link className={className} href={article.href}
    {...(article.href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</Link>;
}
function Attachments({ article }: { article: Article }) {
  const files = articleResources[article.slug];
  if (!files?.length) return null;
  return <div className="attached"><span>配布ファイル {files.length}件</span><a href={`#resource-${files[0]}`}>{files.length === 1 ? "開始キットをダウンロード ↓" : "使い方とダウンロード ↓"}</a></div>;
}
export function MonthlyPage({ libraryView = false }: { libraryView?: boolean }) {
  const latestMonth = updateMonths[0];
  const pastMonths = updateMonths.slice(1);
  const latestArticles = monthlyArticles.filter((article) => articleMonths[article.slug] === latestMonth);
  return <main className="monthly-home" id="top">
    <a className="skip" href="#updates">更新内容へ</a>
    <header className="header"><div className="header-inner">
      <Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">A</span>あおい執筆室</Link>
      <nav aria-label="サイト内メニュー"><Link href="/library">更新内容</Link><Link href="/resources">配布ファイル</Link><span className="member">購入者限定</span></nav>
    </div></header>
    <div className="shell">
      <section className="intro">
        <p className="eyebrow">購入者限定・本編アップデート</p>
        <h1>{libraryView ? "月別の更新内容" : "あおい執筆室"}</h1>
        <p>Kindle出版やAI活用の追加記事を、更新した月ごとにまとめています。<br />本教材をご購入済みの方は、追加料金なしでご利用いただけます。</p>
        <div className="quick"><a href="#updates">更新内容を見る ↓</a><a href="#downloads">配布ファイルを見る ↓</a></div>
      </section>
      <section id="updates" aria-labelledby="latest-heading">
        <div className="section-title"><h2 id="latest-heading">最新の更新</h2><span>{monthLabel(latestMonth)}</span></div>
        <div id={`month-${latestMonth}`}>
          {latestArticles.map((article) => <article className="latest" key={article.slug} data-article={article.slug}>
            <div className="date-line"><span>{monthLabel(latestMonth)}の更新</span><span className="badge">最新</span></div>
            <h3 id={oldHomeAnchors[article.slug]}>{article.title}</h3><p>{article.summary}</p>
            <ArticleLink article={article} className="read">教材と使い方を見る <span aria-hidden="true">↗</span></ArticleLink>
            {article.href.startsWith("https://brain-market.com/") && <span className="meta-note">購入者向けの無料閲覧リンクで、Brainの記事が開きます。</span>}
            <Attachments article={article} />
          </article>)}
        </div>
      </section>
      <section className="archive" id="new-articles" aria-labelledby="past-heading">
        <div className="section-title"><h2 id="past-heading">これまでの更新</h2><span>新しい月から順に掲載</span></div>
        <nav className="month-nav" aria-label="更新月から探す">{pastMonths.map((month) => <a href={`#month-${month}`} key={month}>{monthLabel(month)}</a>)}</nav>
        {pastMonths.map((month) => {
          const items = monthlyArticles.filter((article) => articleMonths[article.slug] === month);
          return <section className="month" id={`month-${month}`} key={month} aria-labelledby={`heading-${month}`}>
            <div className="month-head"><h3 id={`heading-${month}`}>{monthLabel(month)}</h3><span>{items.length}件の更新</span></div>
            {items.map((article) => <article className="article-row" key={article.slug} data-article={article.slug}>
              <div><h4 id={oldHomeAnchors[article.slug]}><ArticleLink article={article}>{article.title}</ArticleLink></h4><p>{article.summary}</p><Attachments article={article} /></div>
              <ArticleLink className="row-link" article={article}>記事を読む {article.href.startsWith("https://") ? "↗" : "→"}</ArticleLink>
            </article>)}
          </section>;
        })}
      </section>
      <section className="resources" id="downloads" aria-labelledby="downloads-heading">
        <div className="section-title"><h2 id="downloads-heading">配布ファイル</h2><span>全8件</span></div>
        <p>ファイル名を押すと使い方が開きます。すべてMarkdown形式（.md）のテキストファイルです。</p>
        <ResourceDetails />
        <Link className="all-resources" href="/resources">配布ファイルの一覧ページを見る →</Link>
      </section>
      <details className="legacy-categories" id="category-library">
        <summary>制作工程から探す</summary>
        <div className="legacy-body">
          {libraryView ? categories.map((category) => {
            const matches = articles.filter((article) => article.categoryId === category.id);
            return <section id={category.id} key={category.id}><h2>{category.title}</h2><p>本編の{category.chapters}</p>
              {matches.length ? matches.map((article) => <p key={article.slug}><ArticleLink article={article}>{article.title} →</ArticleLink></p>) : <p>記事を準備している領域です。</p>}
            </section>;
          }) : categories.map((category) => <Link key={category.id} href={`/library#${category.id}`}>{category.title} →</Link>)}
          <span id="upcoming-categories" />
        </div>
      </details>
      <footer className="footer"><div><b>あおい執筆室</b><p>『{productTitle}』の購入者向け特典ページです。<br />本サイトのURLを第三者へ共有すること、および内容を転載することはお控えください。</p></div><a className="backtop" href="#top">ページの先頭へ ↑</a></footer>
    </div>
  </main>;
}
