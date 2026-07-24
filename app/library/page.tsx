import Link from "next/link";
import { SiteFooter, SiteHeader } from "../_components/SiteChrome";
import { articles, categories } from "../_data/content";

export default function Library() {
  const availableCategories = categories.filter((category) =>
    articles.some((article) => article.categoryId === category.id),
  );
  const upcomingCategories = categories.filter((category) =>
    !articles.some((article) => article.categoryId === category.id),
  );

  return (
    <main>
      <SiteHeader />
      <div className="index-shell">
        <nav className="breadcrumb" aria-label="パンくず">
          <Link href="/">あおい執筆室</Link>
          <span>/</span>
          <span>記事一覧</span>
        </nav>
        <header className="index-header">
          <p className="article-kicker">購入者向けライブラリ</p>
          <h1>追加実践記事を、制作工程から探す</h1>
          <p>
            購入者アンケートで要望の多かった内容と、私が出版を続ける中で変わった制作方法を、
            追加実践記事としてまとめています。
          </p>
          <p>
            記事は月別ではなく、1冊を作る工程ごとに整理しています。
            本編の関連章を確認し、今知りたい内容からお選びください。
          </p>
        </header>

        <div className="library-sections">
          {availableCategories.map((category) => {
            const matched = articles.filter((article) => article.categoryId === category.id);
            return (
              <section id={category.id} className="library-category" key={category.id}>
                <header>
                  <div>
                    <p>本編の{category.chapters}</p>
                    <h2>{category.title}</h2>
                  </div>
                  <span>{matched.length}記事</span>
                </header>
                <p className="category-description">{category.description}</p>
                <div className="library-list">
                  {matched.map((article) => (
                    <Link href={article.href} className="library-row" key={article.slug}>
                      <span>{article.number}</span>
                      <div>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <small>
                          {article.originLabel}／主分類：{article.primaryCategory}／関連：{article.tags.join("・")}
                        </small>
                      </div>
                      <b aria-hidden="true">→</b>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="upcoming-categories" aria-labelledby="upcoming-categories">
            <p>今後追加する工程</p>
            <h2 id="upcoming-categories">記事を準備している領域</h2>
            <div>
              {upcomingCategories.map((category) => (
                <div id={category.id} key={category.id}>
                  <b>{category.title}</b>
                  <span>本編の{category.chapters}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
