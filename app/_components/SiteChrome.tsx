import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" href="/">
          <span>A</span>
          <b>あおい執筆室</b>
        </Link>
        <nav className="site-nav" aria-label="サイト内メニュー">
          <Link href="/library">記事一覧</Link>
          <Link href="/resources">配布ファイル</Link>
          <small>購入者限定</small>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="site-footer-heading">
          <b>あおい執筆室</b>
          <span>原稿制作の手法・実例・配布ファイル</span>
        </div>
        <p>
          本サイトは教材購入者向けの特典ページです。
          本サイトのURLを第三者へ共有すること、
          <br />
          および内容を転載することはお控えください。
        </p>
      </div>
    </footer>
  );
}
