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
  return <div className="role-split" aria-label="Codexと著者の役割分担">
    <section><h3>Codexに任せたこと</h3>{codex}</section>
    <section><h3>私が決めたこと</h3>{human}</section>
  </div>;
}

function PromptBlock({ children }: { children: string }) {
  return <div className="prompt-block">
    <p>読者向けに再現しやすく整えた依頼文</p>
    <pre>{children}</pre>
  </div>;
}

function RevisionExample({ number, title, kind, context, before, finding, decision, after }: {
  number: string; title: string; kind: string; context: ReactNode; before: ReactNode;
  finding: ReactNode; decision: ReactNode; after: ReactNode;
}) {
  return <article className="revision-example">
    <header><span>{number}</span><div><p>{kind}</p><h3>{title}</h3></div></header>
    <div className="revision-stages">
      <section><h4>1．何を説明していた箇所か</h4>{context}</section>
      <section className="revision-before"><h4>2．旧版の文章と問題</h4>{before}</section>
      <section><h4>3．Codexが指摘したこと</h4>{finding}</section>
      <section><h4>4．私が残す／変えると決めたこと</h4>{decision}</section>
      <section className="revision-after"><h4>5．完成版では、こう直しました</h4>{after}</section>
    </div>
  </article>;
}

function StarterKitButton({ className }: { className?: string }) {
  return <aside className={`article-tool-cta ${className ?? ""}`}>
    <div>
      <p>実際に自分の本で作業するときはこちら</p>
      <h2>Codex既刊リライト開始キット</h2>
      <span>この記事は全体像を理解するための「5つの流れ」、開始キットは手を動かすための「実践8STEP」です。</span>
    </div>
    <MarkdownDownload content={starterKit} fileName="08_Codex既刊リライト開始キット.md">開始キットをダウンロード ↓</MarkdownDownload>
  </aside>;
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
  return <main>
    <ArticleOnlyHeader />
    <article className="article-shell rewrite-article-shell">
      <header className="article-header rewrite-article-header">
        <h1>{article.title}</h1>
        <div className="article-summary">
          <p>私は最近、Codexを使って、すでに出版しているKindle本を5冊リライトしました。</p>
          <p>今回は、その中から『ChatGPTでnoteをはじめよう！』を実例にします。古くなった情報の確認から、挿絵、巻末の関連本、Amazon KDPへ提出するWordファイル（DOCX）まで、実際の作業から整理した5つの流れと、読者向けに整えた依頼方法をまとめました。</p>
          <p>Codexは、OpenAIのAIエージェントです。原稿などのファイルを読み、日本語でお願いした作業を進めてもらえます。プログラミングの知識がなくても使えます。</p>
        </div>
        <section className="article-audience" aria-labelledby="audience-heading">
          <h2 id="audience-heading">この教材が向いている方</h2>
          <ul><li>Kindle本を1冊以上出版している</li><li>古くなった既刊を直したいが、どこから始めればよいか分からない</li><li>Codexを使い始めたばかり、またはこれから使いたい</li></ul>
        </section>
      </header>

      <section id="introduction" className="rewrite-opening">
        <p className="step-label">はじめに</p>
        <h2>「直したい。でも、どこから直せばよいか分からない」から始まりました</h2>
        <p>今回の題材は、出版から1年以上が経っていた『ChatGPTでnoteをはじめよう！』です。Kindle出版を始めた頃の本の中でも、特に多くの印税を生んでくれ、今も一定数が読まれている本でした。</p>
        <p>この本のテーマには、今も需要があると思っていました。一方で、ChatGPTもnoteも変化しています。古い内容のまま読者へ渡し続けることに、申し訳なさを感じていました。少しずつ印税が落ちていたこともあり、前々から直したいと思っていた本です。</p>
        <p>ただ、1冊を最初から読み返し、どこが古くなっているのかを調べ、本文を直し、全体のつながりまで確認するのは、本業がある中では重い作業です。直したいとは思いながら、長い間そのままになっていました。</p>
        <p>Codexを使うことで、ようやく着手できました。この記事では、最初からきれいに進んだようには書きません。何を残すと決め、どこで失敗し、何をCodexへ任せ、何を自分で判断したのかを、実物と一緒に紹介します。</p>
      </section>

      <StarterKitButton className="article-tool-cta-top" />

      <details className="toc" open>
        <summary>5つの流れ</summary>
        <ol><li><a href="#introduction">はじめに</a></li><li><a href="#flow-1">流れ1　直す価値のある本を選ぶ</a></li><li><a href="#flow-2">流れ2　残すものと変えるものを決める</a></li><li><a href="#flow-3">流れ3　作業を分けて1つずつ進める</a></li><li><a href="#flow-4">流れ4　34枚の挿絵を作り、Wordへ入れる</a></li><li><a href="#flow-5">流れ5　巻末と次に読む本への案内まで整える</a></li><li><a href="#conclusion">さいごに</a></li></ol>
      </details>

      <section id="flow-1">
        <p className="step-label">5つの流れ・1</p>
        <h2>古い本ではなく、「直す価値のある本」を選ぶ</h2>
        <p>既刊が何冊もある場合、古い本を全部リライトしようとすると、それだけで止まります。大事なのは出版から何年経ったかではありません。その本へもう一度時間を使うことで、読者へ渡せる価値が上がるかどうかです。</p>
        <div className="check-grid"><div><h3>リライト候補にしやすい本</h3><ul><li>今もKindle Unlimited（Amazonの読み放題サービス）で読まれたり、注文されたりしている</li><li>本のテーマには、今も需要がある</li><li>中心となる考え方は残せるが、情報や事例が古くなっている</li><li>今の知識や経験を加えることで、内容を良くできる</li><li>関連する本やサービスへの入口として残したい</li></ul></div><div><h3>候補から外してよい本</h3><ul><li>テーマそのものの需要が、ほとんどなくなっている</li><li>章の大半を書き直さないと、現在の読者へ渡せない</li><li>古い本を直すより、新しい本として書く方が分かりやすい</li><li>今後の本棚や、次に読む本の案内でも残す役割がない</li></ul></div></div>
        <p>今回選んだ本は、今も読まれ、「AIを使いながらnoteとどう向き合うか」という中心も残せると思いました。テーマの価値は残っている。けれど、最新情報や安全性の説明は直したい。この差がはっきりしていたため、リライトする本に決めました。</p>
        <h3>自分の本で再現するときは、まず本文を変えずに診断してもらう</h3>
        <p>最初から書き換えてもらうのではなく、現在も残せる部分と、古くなっている可能性がある部分を分けてもらいます。</p>
        <PromptBlock>{`添付した既刊を読み、リライトする価値があるかを診断してください。

次の6項目を分けて整理してください。
1. 現在も残せる中心テーマ
2. 古くなっている可能性がある情報
3. 現在の読者が誤解する可能性がある説明
4. 小さな修正で価値を上げられる部分
5. 大幅な書き直しが必要な部分
6. リライトより新刊にした方がよい可能性

まだ本文は変更しないでください。
確認できた事実、推測、提案を分けてください。`}</PromptBlock>
        <h3>標準手順として、Amazonレビューも確認する</h3>
        <p>リライトを始めるときは、Amazonレビューも最初に確認します。この本では最初の工程として明確には行っていないため、ここからは今回の実録ではなく、ほかの本でも使っている標準手順です。レビューがない本では飛ばして構いません。</p>
        <p>レビューは、低評価の意見をすべて反映するために使うものではありません。単なる好み、著者と読者の立場の違い、どこを直せばよいのか分からない批判まで機械的に取り入れると、本の中心が崩れます。本文の品質向上に使える指摘だけを抽出してもらい、最後は著者が採用するか決めます。</p>
        <p>投稿者名、プロフィール画像、IDなど、個人につながる情報は必ず除きます。レビュー本文は、本へ転載するのではなく、修正候補を見つけるためだけに使います。</p>
        <PromptBlock>{`個人につながる情報を外したAmazonレビューを読み、本文と照合してください。

単なる好み、著者と読者の立場の違い、改善箇所が分からない批判は修正候補から外し、
本の品質向上に使える指摘だけを抽出してください。

指摘を次の3段階に分けてください。
1. 絶対修正
2. 修正検討
3. 要検討

候補ごとに、該当箇所、読者が困った理由、最小修正案を示してください。
まだ本文は変更しないでください。`}</PromptBlock>
        <ul className="review-level-list"><li><b>絶対修正：</b>事実、安全性、意味の誤りなど、放置すると読者が困るもの</li><li><b>修正検討：</b>直すと分かりやすくなるが、著者の判断が必要なもの</li><li><b>要検討：</b>好みや本の範囲にも関わるため、すぐ直さず考えるもの</li></ul>
        <RoleSplit codex={<ul><li>旧版を読み、現在も残せる中心と古くなった可能性を分ける</li><li>個人情報を外したレビューから、内容改善に使える指摘だけを拾う</li><li>修正候補を3段階に整理し、最小修正案を出す</li></ul>} human={<ul><li>この本へ、もう一度時間を使う価値があるか決める</li><li>レビューの指摘を採用するか決める</li><li>リライト、新刊、出版停止のどれにするか決める</li></ul>} />
      </section>

      <section id="flow-2">
        <p className="step-label">5つの流れ・2</p>
        <h2>残すものと、変えるものを先に決める</h2>
        <p>リライトで怖いのは、古い部分を直すうちに、その本の良かったところまで消してしまうことです。この本が長く読まれた理由は、ChatGPTやnoteの操作説明だけではありません。AIを使って文章を書くとき、noteや自分の言葉とどう向き合うのか。そこが中心でした。</p>
        <div className="rule-pair"><div><h3>変えないもの</h3><ul><li>ChatGPTと一緒にnoteを書くという中心テーマ</li><li>初心者へ話しかける、やわらかい文体</li><li>AIへ丸投げせず、自分の言葉を残すという考え方</li><li>章全体の大きな流れ</li></ul></div><div><h3>変えるもの</h3><ul><li>古くなったnoteとChatGPTの説明</li><li>個人情報や安全性に関する表現</li><li>読者へ結果を強く約束しすぎている表現</li><li>現在の機能に合わせた質問文と返答例</li><li>扉絵、挿絵、巻末、リンク、Wordファイル</li></ul></div></div>
        <p>最初に頼んだのは、全面リライトではありません。旧版は変更せず、「絶対に直した方がよいところ」を候補として出してもらいました。</p>
        <PromptBlock>{`旧版の原稿を読み、次の修正候補だけを抽出してください。

- 現在の読者が誤解する可能性がある箇所
- 事実やサービスの説明が古くなっている箇所
- 安全性の面から直した方がよい箇所
- 読者へ結果を約束しすぎている箇所

まだ本文は変更しないでください。
候補ごとに、原文、問題、最小修正案を示してください。
著者の文体と本の中心を変えない範囲に絞ってください。`}</PromptBlock>
        <p>候補を確認したあと、採用する修正だけを決めます。Codexに「良さそうなところを全部直して」と任せるのではなく、番号で指定した箇所だけを作業版へ反映してもらいました。</p>
        <PromptBlock>{`私が承認した修正だけを、作業版へ反映してください。

【承認した修正】
ここに番号または修正内容を貼る

承認していない箇所は変更しないでください。
元ファイルは上書きせず、変更した箇所を一覧で報告してください。
反映できない箇所は、推測で補わず報告してください。`}</PromptBlock>
        <p>部分修正をすると、前後には古い説明が残りやすく、章をまたいだ矛盾や言葉の揺れも起きます。そこで、修正箇所の前後、同じ章、本全体という順で、つながりが壊れていないか確認してもらいました。</p>
        <p>さらに、それまでのやり取りを知らない別のAIにも、初めて読む監査役として原稿を渡しました。文法上は間違っていなくても、この場面では使わない日本語や、部分修正で不自然になった箇所を見つけるためです。元からあった不自然な日本語も見つかり、ここで直せました。</p>
        <PromptBlock>{`この原稿を初めて読む監査役として確認してください。

これまでの制作意図を好意的に補わず、本文だけで判定してください。
不自然な日本語、初見では意味が取れない文章、前後や章をまたぐ矛盾、
修正箇所だけ文体が変わった部分を探してください。

問題がある箇所だけ、原文、問題、最小修正案を示してください。
本文はまだ変更しないでください。`}</PromptBlock>
        <RoleSplit codex={<ul><li>ChatGPTやnoteの現在の説明と違う箇所、安全性、強すぎる表現を候補として出す</li><li>私が承認した箇所だけを作業版へ反映する</li><li>修正した前後、章、本全体の矛盾を調べる</li><li>別の監査役として、不自然な日本語を初見で確認する</li></ul>} human={<ul><li>この本で絶対に残す考え方と文体を決める</li><li>どの修正案を採用し、どれを見送るか決める</li><li>読みやすくても「あおいの文章」ではなくなる案は採用しない</li></ul>} />

        <div id="before-after" className="revision-section">
          <p className="step-label">流れ2の実例</p><h2>実際に、こんな箇所を直しました</h2>
          <p>今回直したのは、誤字だけではありません。1年前には十分に意識できていなかった安全性、AIとの距離、読者への約束を、今の基準で見直しました。題材本を読んでいない方にも分かるよう、何を説明していた箇所なのかから紹介します。</p>
          <RevisionExample number="01" kind="安全性の見直し" title="「名前を消せば大丈夫」では足りなかった" context={<p>ChatGPTへ悩みや相談内容を入力するとき、個人情報をどう扱うか説明していた箇所です。</p>} before={<><blockquote>個人情報が気になる方は自分の名前の部分を消せば良いでしょう。</blockquote><p>名前だけを消せば安全だと受け取られる可能性がありました。</p></>} finding={<p>会社名、顧客名、連絡先、具体的な案件などから、本人や第三者を特定できる場合があると指摘されました。</p>} decision={<p>気軽に相談できる雰囲気は残します。ただし、「名前だけ消せば大丈夫」とは言わず、大切な情報を入力しすぎない説明へ変えました。</p>} after={<blockquote>氏名だけでなく、会社名、顧客名、連絡先、具体的な案件、社内だけの情報などは、書かないか、内容が分からない形に置き換えるのが安心です。</blockquote>} />
          <RevisionExample number="02" kind="AIとの距離の見直し" title="AIの文章を「そのまま使ってもいい」と言わない" context={<p>ChatGPTが作った文章を、noteの記事へどう使うか説明していた箇所です。</p>} before={<><blockquote>もちろん、このまま使ってもいいですし、自分の言葉で書き直してもOKです。</blockquote><p>AIの文章を完成品として使うことも勧めているように読めました。</p></>} finding={<p>本の中心である「自分の経験や言葉を残す」という考え方と、説明がずれていると指摘されました。</p>} decision={<p>AIが自然な文章を返せることは否定しません。そのうえで、完成品ではなく下書きとして受け取る役割をはっきりさせました。</p>} after={<blockquote>もちろん、ここから自分の言葉で書き直してもOKです。むしろ、ChatGPTの文章は下書きとして受け取り、自分の経験や感覚を重ねていくことで、あなたらしい記事になっていきます。</blockquote>} />
          <RevisionExample number="03" kind="過剰な約束の見直し" title="「必ず書き上がる」と約束しない" context={<p>まとまった時間が取れない人へ、スキマ時間でも記事を書けると伝えていた箇所です。</p>} before={<><blockquote>まとまった時間が取れなくても、スキマ時間をうまく活かせば、1記事は必ず書き上がります。</blockquote><p>すべての読者へ、結果を保証する言い方になっていました。</p></>} finding={<p>使える時間や置かれている状況は人によって違うため、「必ず」とは約束できないと指摘されました。</p>} decision={<p>背中を押す雰囲気は残します。ただし、できることを断定せず、少しずつ進める現実的な表現へ直しました。</p>} after={<blockquote>まとまった時間が取れなくても、スキマ時間をうまく使えば、少しずつ1記事へ近づいていけます。</blockquote>} />
        </div>
      </section>

      <section id="flow-3">
        <p className="step-label">5つの流れ・3</p><h2>一気に頼まず、作業を分けて1つずつ進める</h2>
        <p>今回、最初に一度はまりました。本文の修正、事実確認、質問文、挿絵、巻末、Wordファイルまで、全部まとめてお願いした方が早いと思ったんです。</p>
        <p>ところが、一度に扱う情報量が大きくなり、会話で使える処理量（トークン）をかなり消費しました。何度か画面が止まり、パソコン自体が落ちたこともあります。原因を切り分けられたわけではないので、「Codexはフリーズする」と一般化はできません。私のパソコンが特別に高性能ではなかったことも、影響した可能性があります。</p>
        <p>そこで、候補を出す、私が確認する、承認した分だけ直す、全体を確認する、次の作業へ進む、というふうに工程を分けました。すると、作業はかなり安定しました。「全部できそうだから、一度に全部頼む」が一番早いわけではありませんでした。</p>
        <blockquote className="main-quote"><b>一気に頼まない。作業を分けて、1つずつ進める。</b></blockquote>
        <p>今回、作業を分けた7つの工程は次のとおりです。</p>
        <ol className="timeline"><li><span>01</span><div><b>元原稿を残す</b><p>旧版を上書きせず、作業用のファイルを複製します。</p></div></li><li><span>02</span><div><b>修正候補だけ出してもらう</b><p>どこを、なぜ直すのかを先に確認します。</p></div></li><li><span>03</span><div><b>採用する案を私が決める</b><p>Codexの提案を、すべて採用する必要はありません。</p></div></li><li><span>04</span><div><b>承認した箇所だけ直す</b><p>勝手に作業範囲を広げず、決めた修正だけを反映します。</p></div></li><li><span>05</span><div><b>部分修正後の全体を確認する</b><p>古い説明との混在、矛盾、重複、文体の変化を探します。</p></div></li><li><span>06</span><div><b>別の監査役にも読んでもらう</b><p>それまでのやり取りを知らないAIに、初見の読者として確認してもらいます。</p></div></li><li><span>07</span><div><b>最後にWordファイルを確認する</b><p>目次、画像、リンク、全ページの表示、安全性を検査します。</p></div></li></ol>
        <p>会話が長くなったときも、そのまま次の大きな依頼を足しません。現在地を整理し、次に行う作業を1つだけ決めてもらいます。</p>
        <PromptBlock>{`いったん新しい作業を止めてください。

ここまでに確定したこと、未確定のこと、変更したファイル、
確認が終わった範囲を整理してください。

そのうえで、次に行う作業を1つだけ提案してください。
私が確認するまで、新しい修正は始めないでください。`}</PromptBlock>
        <RoleSplit codex={<ul><li>候補の抽出、承認箇所の反映、修正後の確認を1工程ずつ進める</li><li>作業記録を残し、どこまで終わったか整理する</li><li>Wordファイルの構造、画像、リンクを検査する</li></ul>} human={<ul><li>一工程ごとに結果を確認し、次へ進むか決める</li><li>Codexの指摘を採用するか決める</li><li>一度に頼みすぎていると感じたら、作業を止めて分け直す</li></ul>} />
      </section>

      <section id="flow-4">
        <p className="step-label">5つの流れ・4</p><h2>34枚の挿絵を作り、Wordへ入れる</h2>
        <p>旧版には、節ごとの挿絵が1枚もありませんでした。当時は、どう作ればよいのかも分からなかったからです。私は、文章だけが続く本より、内容を目で確認できる挿絵がある方が読みやすいと思っています。</p>
        <p>そこで、1-1、1-2のような節ごとに、その内容を表す挿絵を作ってもらいました。32節に1枚ずつ、さらに「はじめに」と「おわりに」を加えて、合計34枚です。画像を作るだけではなく、対応する節へ差し込み、順番や不足を確認するところまで進められました。ここは、本当に楽になったと感じた部分です。</p>
        <p>ただし、短い一文だけで突然34枚が完成したわけではありません。その前にCodexは本文全体を読み、本の中心、変えないもの、既存画像の雰囲気、画像の比率や色、余白を把握していました。最初に代表の1枚を確認し、それを基準に残りを作っています。十分な文脈を共有した後だから、短い依頼でも進められました。</p>
        <PromptBlock>{`本文を読み、各節の内容を理解しやすくする挿絵を作ります。

まず、代表となる1節だけについて、挿絵の構成案を出してください。
本文にない事実や効果は追加しないでください。

承認済みの扉絵と既存画像を、色、線、余白、人物表現の基準にしてください。
まだ残りの画像は作らないでください。`}</PromptBlock>
        <figure className="article-figure article-figure-wide"><Image src={`${imageBasePath}/codex-rewrite/illustrations-34.webp`} alt="34枚の挿絵を一覧にした画像" width={1492} height={3060} /><figcaption>32節と「はじめに」「おわりに」へ入れた、合計34枚の挿絵です。</figcaption></figure>
        <div className="image-showcase"><figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-after.webp`} alt="完成版のWordへ挿絵を入れたページ" width={1100} height={1424} /><figcaption>本文の内容に合わせて挿絵を入れた完成版。</figcaption></figure><figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-opening.webp`} alt="はじめにへ追加した挿絵入りページ" width={1100} height={1424} /><figcaption>「はじめに」へ追加した挿絵。</figcaption></figure><figure className="article-figure"><Image src={`${imageBasePath}/codex-rewrite/word-page-section.webp`} alt="本文の節へ追加した挿絵入りページ" width={1100} height={1424} /><figcaption>本文の節へ差し込んだ挿絵。</figcaption></figure></div>
        <RoleSplit codex={<ul><li>各節を読み、要点に合う挿絵を設計して作る</li><li>対応するWordの節へ画像を差し込む</li><li>画像の不足、重複、順番、サイズを確認する</li></ul>} human={<ul><li>挿絵を入れる方針と、見た目の基準を決める</li><li>最初の代表画像を確認し、残りを作ってよいか決める</li><li>見た目だけでなく、本文を理解しやすくする画像か確認する</li></ul>} />
      </section>

      <section id="flow-5">
        <p className="step-label">5つの流れ・5</p><h2>本文だけで終わらせず、巻末と次に読む本への案内まで整える</h2>
        <p>私の本は30冊を超えています。巻末にすべて並べても、読者は次に何を読めばよいか選びにくくなります。本ごとに関係の深い本だけを紹介したいと思っていましたが、30冊以上を手作業で整理するのは、本業がある中では難しく、ずっと諦めていました。</p>
        <p>今回は、次の順番で巻末を作りました。</p>
        <ol className="timeline compact-timeline"><li><span>01</span><div><b>候補を出してもらう</b><p>本文と想定読者を読み、読了後に合いそうな既刊を挙げてもらいます。</p></div></li><li><span>02</span><div><b>紹介する本を私が選ぶ</b><p>売上順ではなく、今読んだ本との関連性で決めます。</p></div></li><li><span>03</span><div><b>公開情報を揃える</b><p>正式書名、表紙、紹介文、Kindleから開けることを確認したAmazonの短縮URLを揃えます。</p></div></li><li><span>04</span><div><b>巻末ページを作る</b><p>今回は関連本6冊を2ページへ配置しました。</p></div></li><li><span>05</span><div><b>リンクを検査する</b><p>リンク先と読者が押せる範囲に加え、実際のKindle環境から開けるか確認します。</p></div></li></ol>
        <PromptBlock>{`この本の本文、想定読者、添付した既刊一覧と各本の内容資料を読み、読了後に関係の深い既刊を候補として挙げてください。

候補ごとに、次の内容を示してください。
- この本の読者と関係がある理由
- 次に読むことで広がる内容
- 短い紹介文の案
- 候補から外した方がよい本と理由

売上順ではなく、今読んだ本との関連性で提案してください。
確認できない書名や内容は推測しないでください。
まだ巻末へ反映しないでください。`}</PromptBlock>
        <PromptBlock>{`私が承認した関連本だけを、作業用DOCXの巻末へ反映してください。

支給した正式書名、表紙、紹介文、Kindleから開けることを確認したAmazonの短縮URLだけを使用してください。
反映後、表紙と書名の一致、リンク先、読者がクリックできる範囲を確認し、結果を報告してください。
実際のKindle環境での動作を確認できない場合は、「未確認」と報告してください。`}</PromptBlock>
        <figure className="article-figure article-figure-tall"><Image src={`${imageBasePath}/codex-rewrite/related-books-2.webp`} alt="完成版の巻末に追加した関連本の紹介ページ" width={1100} height={1424} /><figcaption>完成版の巻末。読了後の内容と関係が深い本だけを紹介しています。</figcaption></figure>
        <h3>応用として、本棚サイトも作れます</h3>
        <p>本棚サイトは、今回のリライトとは別のタイミングで作ったものです。ただ、リライトした本の巻末から本棚へ進める案内を、この機会にきちんと入れました。これは記事の主役ではないため、作り方は最小限にします。</p>
        <ol className="plain-steps"><li>公開してよい書籍の一覧を用意する</li><li>表紙、正式書名、短い説明、AmazonのURLを整理する</li><li>Codexへ一覧ページの制作を頼む</li><li>PCとスマホで表示を確認する</li><li>個人情報、非公開情報、パソコン内のファイルの場所がないことを確認して公開する</li></ol>
        <figure className="article-figure article-figure-wide"><Image src={`${imageBasePath}/codex-rewrite/bookshelf.webp`} alt="あおいの本棚のトップページ" width={1280} height={720} /><figcaption>テーマから次に読む本を選べる「あおいの本棚」です。</figcaption></figure>
        <p className="bookshelf-link-wrap"><a className="bookshelf-link" href="https://aoi-kurochan.github.io/aoi-books/" target="_blank" rel="noreferrer">あおいの本棚を見てみる ↗</a></p>
        <h3>最後に、KDPへ提出するWordファイルを確認する</h3>
        <p>本文の修正が終わっていても、画像が抜けていたり、リンク先が違っていたりすれば完成ではありません。最終的なWordファイルを全ページ表示し、本文と見た目の両方を確認してもらいました。</p>
        <PromptBlock>{`KDPへ提出する最終DOCXを、本文内容と表示の両方から確認してください。

確認項目：
- ファイルが正常に開くか、見出し、目次、改ページ
- 承認済み本文との一致、古い文章、誤字、文体の変化
- 画像の枚数、位置、欠落、重複、サイズ、文字切れ
- リンク先、表示文字、クリックできる範囲
- 個人情報、秘密情報、パソコン内のファイルの場所（ローカルパス）、ファイル内の作成者情報

すべてのページを画像として表示し、問題の場所と最小修正案を示してください。
まだ公開や提出はしないでください。`}</PromptBlock>
        <RoleSplit codex={<ul><li>本文と関係が深い既刊を候補として出す</li><li>承認済みの表紙、紹介文、リンクで巻末ページを作る</li><li>リンク先、押せる範囲、最終DOCXの全ページを検査する</li></ul>} human={<ul><li>読了後に紹介する本を、内容との関係性で決める</li><li>紹介文が実際の内容と合っているか確認する</li><li>Amazonの短縮URLを実際のKindle環境から開く</li><li>公開してよい情報だけが使われ、KDPへ提出できる状態か決める</li></ul>} />
      </section>

      <section id="conclusion" className="rewrite-conclusion">
        <p className="step-label">さいごに</p><h2>まずは、既刊を1冊選ぶところからで大丈夫です</h2>
        <p>最初から挿絵や本棚まで、全部やる必要はありません。まずは、今も残す価値のある既刊を1冊選ぶ。次に、絶対に変えないものと、直したいものを書く。そして、本文を変更せず、修正候補だけを出してもらう。最初の日は、ここまでで十分です。</p>
        <p>リライトしたからといって、印税が必ず増えるとは言えません。今回更新した5冊が今後どのように読まれるかは、これから確認します。それでも、「このまま出し続けてよいのかな」と思いながら置いていた本を、今の自分が読者へ渡せる状態まで育て直せたことには、大きな意味がありました。</p>
        <p>Codexは、読む、探す、比べる、修正候補を作る、承認した箇所を反映する、画像を作る、Wordへ入れる、最後に検査するところまで手伝ってくれます。ただし、どの本を残すのか、何を変えないのか、どの案を採用するのか、自分の言葉として読者へ渡せるのかを決めるのは、著者です。</p>
        <blockquote className="main-quote"><b>Codexへ作業は任せる。<br />でも、判断までは任せない。</b></blockquote>
      </section>

      <StarterKitButton />
      <footer className="article-end"><p>記事の構成：全体像を理解するための5つの流れ</p><p>開始キットの構成：実際に作業するための実践8STEP</p><p>検証時点：2026年8月</p><p>検証環境：Macのデスクトップ版Codex</p><p>実施範囲：既刊5冊のリライト</p><p>ケース：旧版v4を残して作業版v5を作り、完成版v8まで更新</p><p>vはファイルのバージョン番号です。Codexの機能、利用できるプラン、上限、画面は変更されることがあります。利用前にOpenAI公式ページで現在の情報をご確認ください。</p></footer>
    </article>
    <ArticleOnlyFooter />
  </main>;
}
