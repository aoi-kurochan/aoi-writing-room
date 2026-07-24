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
          <p className="article-kicker">記事一覧</p>
          <h1>原稿制作の工程から探す</h1>
          <p>
            記事は月別ではなく、1冊を作る工程ごとに整理しています。
            1つの記事に複数の工程が含まれる場合は、中心となる工程へ置き、関連タグを添えています。
          </p>
        </header>

        <div className="library-sections">
          {availableCategories.map((category) => {
            const matched = articles.filter((article) => article.categoryId === category.id);
            return (
              <section id={category.id} className="library-category" key={category.id}>
                <header>
                  <div>
                    <p>本編 {category.chapters}</p>
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
                          主分類：{article.primaryCategory}／関連：{article.tags.join("・")}
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
                  <span>本編 {category.chapters}</span>
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
