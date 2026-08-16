import type { ReactNode } from "react";
import Image from "next/image";
import { MarkdownDownload } from "../../_components/MarkdownDownload";
import { articles } from "../../_data/content";
import downloadContent from "../../_data/download-content.json";

const article = articles[2];
const starterKit = downloadContent["08-codex-book-rewrite-starter-kit.md"];
const imageBasePath =
  process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "aoi-writing-room"}`
    : "";

function RoleSplit({ codex, human }: { codex: ReactNode; human: ReactNode }) {
  return (
    <div className="role-split" aria-label="Codexと著者の役割分担">
      <section><h3>Codexに任せたこと</h3>{codex}</section>
      <section><h3>私が決めたこと</h3>{human}</section>
    </div>
  );
}

function RevisionExample({ number, title, kind, before, finding, decision, after }: {
  number: string; title: string; kind: string; before: ReactNode;
  finding: ReactNode; decision: ReactNode; after: ReactNode;
}) {
  return (
    <article className="revision-example">
      <header><span>{number}</span><div><p>{kind}</p><h3>{title}</h3></div></header>
      <div className="revision-stages">
        <section className="revision-before"><h4>1．旧版では、こう書いていました</h4>{before}</section>
        <section><h4>2．Codexが見つけた問題</h4>{finding}</section>
        <section><h4>3．私が決めたこと</h4>{decision}</section>
        <section className="revision-after"><h4>4．完成版では、こう直しました</h4>{after}</section>
      </div>
    </article>
  );
}

function StarterKitButton({ className }: { className?: string }) {
  return (
    <aside className={`article-tool-cta ${className ?? ""}`}>
      <div>
        <p>この記事を読みながら実践したい方へ</p>
        <h2>Codex既刊リライト開始キット</h2>
        <span>記事の内容を、自分の本で試すための依頼文と確認項目を、Markdown形式（.md）のファイルにまとめました。</span>
      </div>
      <MarkdownDownload content={starterKit} fileName="08_Codex既刊リライト開始キット.md">
        開始キットをダウンロード ↓
      </MarkdownDownload>
    </aside>
  );
}

function ArticleOnlyHeader() {
  return <header className="site-header article-only-header"><div className="site-header-inner">
    <div className="site-brand" aria-label="あおい執筆室"><span>A</span><b>あおい執筆室</b></div>
    <small>既刊リライト実践記事</small>
  </div></header>;
}

function ArticleOnlyFooter() {
  return <footer className="site-footer article-only-footer"><div>
    <div className="site-footer-heading"><b>あおい執筆室</b><span>Codex既刊リライトの実録</span></div>
    <p>このページと開始キットを使って、既刊1冊のリライトを始められるようにまとめています。</p>
  </div></footer>;
}

export default function CodexBookRewrite() {
  return (
    <main>
      <ArticleOnlyHeader />
      <article className="article-shell rewrite-article-shell">
        <p className="breadcrumb" aria-label="現在地"><span>あおい執筆室</span><span>/</span><span>{article.primaryCategory}</span></p>

        <header className="article-header">
          <p className="article-kicker">はじめに</p>
          <h1>{article.title}</h1>
          <div className="article-summary">
            <p>私は最近、Codexを使って既刊（すでに出版した本）を5冊リライトしました。</p>
            <p>本文だけではなく、ChatGPTやnoteの現在の内容、表現の安全性、挿絵、次に読む本への案内、最終的なWordファイルまで。そのうちの1冊を、もう一度読者へ渡せる状態へ再編集した実録です。</p>
          </div>
          <dl className="article-facts">
            <div><dt>題材</dt><dd>『ChatGPTでnoteをはじめよう！』</dd></div>
            <div><dt>作業の流れ</dt><dd>旧版（v4）→ 作業版（v5）→ 完成版（v8）</dd></div>
            <div><dt>検証時点</dt><dd>2026年8月／Mac版Codex</dd></div>
          </dl>
        </header>

        <StarterKitButton className="article-tool-cta-top" />

        <details className="toc" open>
          <summary>この記事の目次</summary>
          <ol>
            <li><a href="#introduction">はじめに</a></li>
            <li><a href="#step-1">STEP1　直す価値のある本を選ぶ</a></li>
            <li><a href="#step-2">STEP2　残すものと変えるものを決める</a></li>
            <li><a href="#before-after">実際に、こんな箇所を直しました</a></li>
            <li><a href="#step-3">STEP3　一気に頼まず、手前から進める</a></li>
            <li><a href="#step-4">STEP4　34枚の挿絵を作り、Wordへ入れる</a></li>
            <li><a href="#step-5">STEP5　巻末と次に読む本への案内まで整える</a></li>
            <li><a href="#conclusion">さいごに</a></li>
          </ol>
        </details>

        <section id="introduction" className="rewrite-opening">
          <p className="step-label">はじめに</p>
          <h2>「直したい。でも、どこから直せばよいか分からない」から始まりました</h2>
          <p>今回の題材は、出版から1年以上が経っていた『ChatGPTでnoteをはじめよう！』です。Kindle出版を始めた頃の本の中でも、特に多くの印税を生んでくれ、今も一定数が読まれている本でした。</p>
          <p>この本のテーマには、今も需要があると思っていました。一方で、ChatGPTもnoteも日々変わっています。最新の内容が反映されていないまま本を出し続けるのは、読者に申し訳ないという気持ちがありました。</p>
          <p>ただ、1冊を最初から読み返し、どこが古くなっているのかを調べ、本文を直して、さらに全体のつながりまで確認するのは、本業がある中では簡単ではありません。直したいとは思いながら、長い間そのままになっていました。</p>
          <p>Codexを使うことで、本文の診断、事実確認、部分修正、全体監査、挿絵、巻末、Wordファイルの確認までを、1つずつ順番に進められるようになりました。最初は本文だけを直すつもりでしたが、お願いしてみると、挿絵や巻末ページまで思っていたよりあっさり形になりました。</p>
          <aside className="definition-note"><b>Codexとは？</b><p>Codexは、OpenAIのAIエージェントです。原稿などのファイルを読み、日本語で頼んだ作業を進めてもらえます。プログラミングの知識がなくても使えます。</p></aside>
          <blockquote className="main-quote">Codexへ作業は任せる。<br />でも、判断までは任せない。</blockquote>
          <p>なお、vはファイルのバージョン番号です。リライト前の公開版がv4。元のファイルを残したまま作業版v5を作り、途中で確認用の版を残しながら、完成版はv8になりました。この記事では、旧版v4と完成版v8を比べています。</p>
        </section>

        <section id="step-1">
          <p className="step-label">STEP 1</p>
          <h2>古い本ではなく、「直す価値のある本」を選ぶ</h2>
          <p>既刊が何冊もある場合、古い本を全部リライトしようとすると、それだけで止まります。大事なのは出版から何年経ったかではなく、その本へもう一度時間を使うことで価値を上げ、もう一度読者へ届けられる本になるかどうかです。</p>
          <div className="check-grid">
            <div><h3>リライト候補にしやすい本</h3><ul>
              <li>今もKindle Unlimited（Amazonの読み放題サービス）で読まれたり、注文されたりしている</li><li>本のテーマには、今も需要がある</li>
              <li>中心となる考え方は残せるが、情報や事例が古くなっている</li><li>今なら、内容や見せ方を明確に良くできる</li>
              <li>関連する本やサービスへの入口として残したい</li>
            </ul></div>
            <div><h3>リライト候補にしない本</h3><ul>
              <li>テーマそのものの需要が、ほとんどなくなっている</li><li>章の大半を書き直さないと、今の読者へ渡せない</li>
              <li>古い本を直すより、新しい本として書き直した方が価値を出せる</li><li>今後の本棚や、次に読む本の案内の中で残す役割がない</li>
            </ul></div>
          </div>
          <p>今回選んだ本は、今も読まれ、「AIを使いながらnoteとどう向き合うか」という中心も残せると思いました。ただ、少しずつ印税が落ちていたこともあり、前々から「この本は直したい」と考えていました。</p>

          <h3>今なら、最初にAmazonレビューも確認します</h3>
          <p>読者レビューには、著者だけでは気づきにくい改善点が残っています。ただし、すべての批判を採用するわけではありません。好みや立場の違いだけの意見、どこを改善すればよいか分からない単純な批判は分けて、本の内容を良くするために使える指摘だけを機械的に拾ってもらいます。</p>
          <p>この本の作業では、最初の工程としてAmazonレビューの確認を明確には入れていませんでした。ほかの本では行っているので、今なら最初に追加します。投稿者名、プロフィール画像、IDなど、個人を特定できる情報を外し、レビュー本文だけをCodexへ渡します。レビュー原文を本へ転載するためではなく、修正候補を見つけるために使います。</p>
          <div className="prompt-block"><p>実際にCodexへ渡す依頼文</p><pre>{`個人を特定できる情報を外したAmazonレビューを読み、本文と照合してください。

好みや立場の違いだけの意見、改善箇所が分からない単純な批判は分け、
本の内容を良くするために使える指摘だけを抽出してください。

指摘を「絶対修正」「修正検討」「要検討」の3段階に分け、
該当箇所、読者が困った理由、最小修正案を示してください。
まだ本文は変更しないでください。`}</pre></div>
          <ul className="review-level-list">
            <li><b>絶対修正：</b>事実、安全性、意味の誤りなど、放置すると読者が困るもの</li>
            <li><b>修正検討：</b>直すと分かりやすくなるが、著者の判断が必要なもの</li>
            <li><b>要検討：</b>好みや本の範囲にも関わるため、すぐ直さず考えるもの</li>
          </ul>
          <RoleSplit
            codex={<ul><li>旧版を読み、古くなった情報や不自然な説明の候補を出す</li><li>個人情報を外したレビューから、内容改善に使える指摘だけを拾う</li><li>修正候補を3段階に分け、最小修正案を出す</li></ul>}
            human={<ul><li>この本へ、もう一度時間を使う価値があるか決める</li><li>レビューの指摘を採用するか決める</li><li>リライト、新刊、出版停止のどれにするか決める</li></ul>}
          />
        </section>

        <section id="step-2">
          <p className="step-label">STEP 2</p>
          <h2>残すものと、変えるものを先に決める</h2>
          <p>リライトで怖いのは、古い部分を直すうちに、その本の良かったところまで消してしまうことです。この本が長く読まれた理由は、ChatGPTやnoteの操作説明だけではありません。AIを使って文章を書くとき、noteや自分の言葉とどう向き合うのか。そこが中心でした。</p>
          <div className="rule-pair">
            <div><h3>変えないもの</h3><ul><li>ChatGPTと一緒にnoteを書くという中心テーマ</li><li>初心者へ話しかける、やわらかい文体</li><li>AIへ丸投げせず、自分の言葉を残すという考え方</li><li>章全体の大きな流れ</li></ul></div>
            <div><h3>変えるもの</h3><ul><li>古くなったnoteとChatGPTの説明</li><li>個人情報や安全性に関する表現</li><li>読者へ結果を強く約束しすぎている表現</li><li>現在の機能に合わせた質問文と返答例</li><li>扉絵、挿絵、巻末、リンク、Wordファイル</li></ul></div>
          </div>
          <p>最初に頼んだのは、全面リライトではありません。まず、旧版の本文は変更せず、「絶対に直した方がよいところ」を候補として出してもらいました。</p>
          <div className="prompt-block"><p>実際にCodexへ渡す依頼文</p><pre>{`旧版の原稿を読み、現在の読者が誤解する可能性がある箇所、
事実やサービス仕様が古くなっている箇所、
安全性やコンプライアンス上、直した方がよい箇所を抽出してください。

まだ本文は変更しないでください。
該当する原文、問題、最小修正案を示してください。
著者の文体と本の中心を変えない範囲に絞ってください。`}</pre></div>
          <p>その後、私が採用する修正だけを決めて、部分的に反映しました。部分修正をすると、前後には古い説明が残りやすく、章をまたいだ矛盾や言葉の揺れも起きます。そこで、修正箇所の前後、同じ章、本全体という順で、つながりが壊れていないかも確認してもらいました。</p>
          <p>さらに、それまでのやり取りを知らない別のAIにも、初めて読む監査役として原稿を渡しました。文法上は間違っていなくても、この場面では使わない日本語や、部分修正で不自然になった箇所を見つけるためです。元から不自然だった箇所も2つ見つかり、ここで直せました。</p>
          <RoleSplit
            codex={<ul><li>古い事実、安全性、強すぎる表現を候補として出す</li><li>承認した箇所だけを作業版へ反映する</li><li>修正した前後、章、本全体の矛盾を調べる</li><li>別のAIが、初見の読者として不自然な日本語を確認する</li></ul>}
            human={<ul><li>この本で絶対に残す考え方と文体を決める</li><li>どの修正案を採用し、どれを見送るか決める</li><li>読みやすくなっても「あおいの文章」ではなくなる案は採用しない</li></ul>}
          />

          <div id="before-after" className="revision-section">
            <h2>実際に、こんな箇所を直しました</h2>
            <p>今回直したのは、誤字だけではありません。1年前には十分に意識できていなかった安全性、AIとの距離、読者への約束を、今の基準で見直しました。3つだけ、実物を紹介します。</p>
            <RevisionExample number="01" kind="安全性の見直し" title="「名前を消せば大丈夫」では足りなかった"
              before={<blockquote>個人情報が気になる方は自分の名前の部分を消せば良いでしょう。</blockquote>}
              finding={<p>名前だけを消しても、会社名、顧客名、連絡先、具体的な案件などから、本人や第三者を特定できる可能性があります。</p>}
              decision={<p>気軽に相談できる雰囲気は残しながら、「名前だけ消せば大丈夫」とは言わず、最初から大切な情報を入力しすぎない説明へ変えました。</p>}
              after={<blockquote>氏名だけでなく、会社名、顧客名、連絡先、具体的な案件、社内だけの情報などは、書かないか、内容が分からない形に置き換えるのが安心です。</blockquote>} />
            <RevisionExample number="02" kind="AIとの距離の見直し" title="AIの文章を「そのまま使ってもいい」と言わない"
              before={<blockquote>もちろん、このまま使ってもいいですし、自分の言葉で書き直してもOKです。</blockquote>}
              finding={<p>「そのまま使ってもよい」という説明は、この本が伝えている「自分の経験や言葉を残す」という考え方とずれていました。</p>}
              decision={<p>AIが自然な文章を返せるからこそ、完成品ではなく、あくまで下書きとして受け取る役割をはっきりさせました。</p>}
              after={<blockquote>もちろん、ここから自分の言葉で書き直してもOKです。むしろ、ChatGPTの文章は下書きとして受け取り、自分の経験や感覚を重ねていくことで、あなたらしい記事になっていきます。</blockquote>} />
            <RevisionExample number="03" kind="過剰な約束の見直し" title="「必ず書き上がる」と約束しない"
              before={<blockquote>まとまった時間が取れなくても、スキマ時間をうまく活かせば、1記事は必ず書き上がります。</blockquote>}
              finding={<p>使える時間や置かれている状況は人によって違うため、すべての読者へ「必ず」と約束することはできません。</p>}
              decision={<p>背中を押す雰囲気は残しながらも、できることを断定せず、少しずつ進める現実的な表現へ直しました。</p>}
              after={<blockquote>まとまった時間が取れなくても、スキマ時間をうまく使えば、少しずつ1記事へ近づいていけます。</blockquote>} />
          </div>
        </section>

        <section id="step-3">
          <p className="step-label">STEP 3</p>
          <h2>一気に頼まず、手前から1つずつ進める</h2>
          <p>今回、最初に一度はまりました。本文、事実確認、質問文、挿絵、巻末、Wordファイルまで、全部まとめてお願いした方が早いと思ったんです。</p>
          <p>ところが、Codexが一度に扱える情報量をほぼ使い切った状態になり、そこから身動きが取りにくくなりました。何度か画面が止まり、パソコン自体が落ちたこともあります。原因を切り分けられたわけではないので、Codexだけが原因とは断定できません。私のパソコンが特別に高性能ではなかったことも、影響したかもしれません。</p>
          <p>そこで、候補を出す、私が確認する、承認した分だけ直す、全体を監査する、次の章へ進む、というふうに分けました。すると、作業はかなり安定しました。「全部できそうだから、一度に全部頼む」が一番早いわけではありませんでした。</p>
          <blockquote className="main-quote"><b>一気に頼まない。手前から、1つずつ進める。</b></blockquote>
          <ol className="timeline">
            <li><span>01</span><div><b>元原稿を残す</b><p>旧版を上書きせず、作業用のファイルを複製します。</p></div></li>
            <li><span>02</span><div><b>修正候補だけ出してもらう</b><p>どこを、なぜ直すのかを先に確認します。</p></div></li>
            <li><span>03</span><div><b>採用する案を私が決める</b><p>Codexの提案を、すべて採用する必要はありません。</p></div></li>
            <li><span>04</span><div><b>承認した箇所だけ直す</b><p>勝手に作業範囲を広げず、決めた修正だけを反映します。</p></div></li>
            <li><span>05</span><div><b>部分修正後の全体を確認する</b><p>古い説明との混在、矛盾、重複、文体の変化を探します。</p></div></li>
            <li><span>06</span><div><b>別の監査役にも読んでもらう</b><p>それまでのやり取りを知らないAIに、初見の読者として確認してもらいます。</p></div></li>
            <li><span>07</span><div><b>最後にWordファイルを確認する</b><p>目次、画像、リンク、全ページの表示、安全性を検査します。</p></div></li>
          </ol>
          <RoleSplit codex={<ul><li>候補の抽出、承認箇所の反映、修正後の監査</li><li>作業記録を残し、どこまで終わったか整理する</li><li>Wordファイルの構造、画像、リンクを検査する</li></ul>}
            human={<ul><li>一工程ごとに結果を確認し、次へ進むか決める</li><li>Codexの指摘を採用するか決める</li><li>最終版として読者へ渡せるか決める</li></ul>} />
        </section>

        <section id="step-4">
          <p className="step-label">STEP 4</p>
          <h2>34枚の挿絵を作り、Wordへ入れる</h2>
          <p>旧版には、節ごとの挿絵が1枚もありませんでした。当時は、どう作ればよいのかも分からなかったからです。私は、文章だけが続く本より、内容を目で確認できる挿絵がある方が読みやすいと思っています。</p>
          <p>そこで、「1-1、1-2のような各節について、その内容を表す挿絵を作ってください」と頼みました。最終的には32節に1枚ずつ、さらに「はじめに」と「おわりに」を加えて、合計34枚です。</p>
          <p>ほぼ一度で方向性が合い、画像を作るだけではなく、対応する節へ差し込み、順番や不足がないか確認するところまで進められました。ここは、本当に楽になったと感じた部分です。</p>
          <p>ただし、短い一文だけで突然34枚が完成したわけではありません。その前にCodexは本文全体を読み、本の中心、変えないもの、既存画像の雰囲気、画像の比率や色、余白を把握していました。最初に代表の1枚を確認し、それを基準に残りを作っています。十分な文脈を共有した後だから、短い依頼でも進められました。</p>
          <figure className="article-figure article-figure-wide"><Image src={`${imageBasePath}/codex-rewrite/illustrations-34.webp`} alt="34枚の挿絵を一覧にした画像" width={1492} height={3060} /><figcaption>32節と「はじめに」「おわりに」へ入れた、合計34枚の挿絵です。</figcaption></figure>
          <div className="image-pair">
            <figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-before.webp`} alt="挿絵がなかった旧版のWordページ" width={1100} height={1424} /><figcaption>旧版v4。文章だけで進むページでした。</figcaption></figure>
            <figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-after.webp`} alt="挿絵を追加した完成版のWordページ" width={1100} height={1424} /><figcaption>完成版v8。節の内容に合わせた挿絵を加えました。</figcaption></figure>
          </div>
          <div className="image-pair image-pair-landscape">
            <figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-opening.webp`} alt="はじめにへ追加した挿絵入りページ" width={1100} height={1424} /><figcaption>「はじめに」へ追加した挿絵。</figcaption></figure>
            <figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-section.webp`} alt="本文の節へ追加した挿絵入りページ" width={1100} height={1424} /><figcaption>本文の節へ差し込んだ挿絵。</figcaption></figure>
          </div>
          <RoleSplit codex={<ul><li>各節を読み、要点に合う挿絵を設計して作る</li><li>対応するWordの節へ画像を差し込む</li><li>画像の不足、重複、順番、サイズを確認する</li></ul>}
            human={<ul><li>挿絵を入れる方針と、見た目の基準を決める</li><li>最初の代表画像を確認し、残りを作ってよいか決める</li><li>本文を理解しやすくする画像になっているか確認する</li></ul>} />
        </section>

        <section id="step-5">
          <p className="step-label">STEP 5</p>
          <h2>本文だけで終わらせず、巻末と次に読む本への案内まで整える</h2>
          <p>私の本は30冊を超えています。巻末にすべて並べても、読者は次に何を読めばよいか選びにくくなります。本ごとに関係の深い本だけを紹介したいと思っていましたが、30冊以上を手作業で整理するのは、本業がある中では難しく、ずっと諦めていました。</p>
          <p>今回は、Codexに本文と想定読者を読んでもらい、関係の深い既刊を候補として出してもらいました。最後に紹介する本は私が決め、巻末2ページに関連本6冊を配置しました。表紙、短い紹介文、Amazonへのリンクを入れ、実際にリンクが設定されているか、どの範囲を押せるかまで確認しています。</p>
          <figure className="article-figure article-figure-tall"><Image src={`${imageBasePath}/codex-rewrite/related-books-2.webp`} alt="完成版の巻末に追加した関連本の紹介ページ" width={1100} height={1424} /><figcaption>完成版v8の巻末。読了後の内容と関係が深い本だけを紹介しています。</figcaption></figure>
          <h3>こんな本棚も、Codexで作れました</h3>
          <p>本棚サイトは、今回のリライトとは別のタイミングで作ったものです。ただ、リライトした本の巻末から本棚へ進める導線を、この機会にきちんと入れました。Codexを使うと、原稿を直すだけではなく、公開してよい書名、表紙、紹介文、リンクを使って、このような案内ページを作ることもできます。</p>
          <figure className="article-figure article-figure-wide"><Image src={`${imageBasePath}/codex-rewrite/bookshelf.webp`} alt="あおいの本棚のトップページ" width={1280} height={720} /><figcaption>テーマから次に読む本を選べる「あおいの本棚」です。</figcaption></figure>
          <p className="bookshelf-link-wrap"><a className="bookshelf-link" href="https://aoi-kurochan.github.io/aoi-books/" target="_blank" rel="noreferrer">あおいの本棚を見てみる ↗</a></p>
          <aside className="warning-box"><b>公開サイトを作る場合の注意</b><p>認証のないGitHub Pagesは、URLを知っている人なら誰でも見られます。個人情報、購入者限定情報、未公開原稿、パソコン内のファイルの場所などは置かず、公開してよい情報だけで作ります。</p></aside>
          <RoleSplit codex={<ul><li>本文と関係が深い既刊を候補として出す</li><li>表紙、紹介文、リンクを使って巻末ページを作る</li><li>リンク先と、読者が押せる範囲を検査する</li></ul>}
            human={<ul><li>読了後に紹介する本を決める</li><li>紹介文が実際の内容と合っているか確認する</li><li>公開してよい情報だけが使われているか確認する</li></ul>} />
        </section>

        <section id="conclusion" className="rewrite-conclusion">
          <p className="step-label">さいごに</p>
          <h2>まずは、1冊選ぶところからで大丈夫です</h2>
          <p>最初から挿絵や本棚まで、全部やる必要はありません。まずは、今も残す価値のある既刊を1冊選ぶ。次に、絶対に変えないものと、今なら直したいものを書く。そして、本文を変更せず修正候補だけを出してもらう。最初の日は、ここまでで十分です。</p>
          <p>リライトしたからといって、印税が必ず増えるとは言えません。今回更新した5冊が今後どのように読まれるかは、これから確認します。それでも、「このまま出し続けてよいのかな」と思いながら置いていた本を、今の自分が読者へ渡せる状態まで育て直せたことには、大きな意味がありました。</p>
          <p>Codexは、読む、探す、比べる、修正候補を作る、承認した箇所を反映する、画像を作る、Wordへ入れる、最後に検査するところまで手伝ってくれます。ただし、どの本を残すのか、何を変えないのか、どの案を採用するのか、自分の言葉として読者へ渡せるのかを決めるのは、著者です。</p>
          <blockquote className="main-quote"><b>Codexへ作業は任せる。<br />でも、判断までは任せない。</b></blockquote>
        </section>

        <StarterKitButton />
        <footer className="article-end">
          <p>検証時点：2026年8月</p><p>検証環境：Macのデスクトップ版Codex</p><p>実施範囲：既刊5冊のリライト</p>
          <p>ケース：旧版v4を残して作業版v5を作り、完成版v8まで更新</p>
          <p>Codexの機能、利用できるプラン、上限、画面は変更されることがあります。利用前にOpenAI公式ページで現在の情報をご確認ください。</p>
        </footer>
      </article>
      <ArticleOnlyFooter />
    </main>
  );
}
