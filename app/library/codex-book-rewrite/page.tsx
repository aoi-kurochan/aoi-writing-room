import type { ReactNode } from "react";
import { MarkdownDownload } from "../../_components/MarkdownDownload";
import { articles } from "../../_data/content";
import downloadContent from "../../_data/download-content.json";

const article = articles[2];
const starterKit = downloadContent["08-codex-book-rewrite-starter-kit.md"];

function RoleSplit({ codex, human }: { codex: ReactNode; human: ReactNode }) {
  return (
    <div className="role-split" aria-label="Codexと著者の役割分担">
      <section>
        <p>CODEX</p>
        <h3>Codexに任せたこと</h3>
        {codex}
      </section>
      <section>
        <p>AUTHOR</p>
        <h3>私が決めたこと</h3>
        {human}
      </section>
    </div>
  );
}

function RevisionExample({
  number,
  title,
  kind,
  before,
  finding,
  decision,
  after,
}: {
  number: string;
  title: string;
  kind: string;
  before: ReactNode;
  finding: ReactNode;
  decision: ReactNode;
  after: ReactNode;
}) {
  return (
    <article className="revision-example">
      <header>
        <span>{number}</span>
        <div>
          <p>{kind}</p>
          <h3>{title}</h3>
        </div>
      </header>
      <div className="revision-stages">
        <section className="revision-before">
          <p>旧版 v4</p>
          <h4>Before</h4>
          {before}
        </section>
        <section>
          <p>Codexの診断</p>
          <h4>見つかった問題</h4>
          {finding}
        </section>
        <section>
          <p>著者の確認</p>
          <h4>あおいの判断</h4>
          {decision}
        </section>
        <section className="revision-after">
          <p>完成版 v8</p>
          <h4>After</h4>
          {after}
        </section>
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
        <span>最初の今日はSTEP1〜3までで十分です。残りは必要になってから進められます。</span>
      </div>
      <MarkdownDownload
        content={starterKit}
        fileName="08_Codex既刊リライト開始キット.md"
      >
        Markdownをダウンロード ↓
      </MarkdownDownload>
    </aside>
  );
}

function ArticleOnlyHeader() {
  return (
    <header className="site-header article-only-header">
      <div className="site-header-inner">
        <div className="site-brand" aria-label="あおい執筆室">
          <span>A</span><b>あおい執筆室</b>
        </div>
        <small>既刊リライト実践記事</small>
      </div>
    </header>
  );
}

function ArticleOnlyFooter() {
  return (
    <footer className="site-footer article-only-footer">
      <div>
        <div className="site-footer-heading">
          <b>あおい執筆室</b>
          <span>Codex既刊リライトの実録</span>
        </div>
        <p>このページと開始キットだけで、最初の1冊を始められるようにまとめています。</p>
      </div>
    </footer>
  );
}

export default function CodexBookRewrite() {
  return (
    <main>
      <ArticleOnlyHeader />
      <article className="article-shell rewrite-article-shell">
        <p className="breadcrumb" aria-label="現在地">
          <span>あおい執筆室</span>
          <span>/</span>
          <span>{article.primaryCategory}</span>
        </p>

        <header className="article-header">
          <p className="article-kicker">{article.primaryCategory}</p>
          <h1>{article.title}</h1>
          <div className="article-summary">
            <p>私は最近、Codexを使って既刊（すでに出版した本）を5冊リライトしました。</p>
            <p>
              本文だけではなく、現在のサービス内容、表現の安全性、挿絵、巻末導線、最終的なWordファイルまで。
              1冊を、もう一度読者へ渡せる状態へ育て直した実録です。
            </p>
          </div>
          <p className="article-context">
            この内容は、本編の第3章〜第5章と、第10章を補足する追加実践記事です。
            Webでは全体像を5つのPHASEで説明し、配布する開始キットでは実作業を8STEPへ細分化しています。
          </p>
          <dl className="article-facts">
            <div><dt>題材</dt><dd>『ChatGPTでnoteをはじめよう！』</dd></div>
            <div><dt>版の関係</dt><dd>旧版v4 → 作業版v5 → 完成版v8</dd></div>
            <div><dt>検証環境</dt><dd>2026年8月／Mac版Codex</dd></div>
          </dl>
        </header>

        <StarterKitButton className="article-tool-cta-top" />

        <details className="toc" open>
          <summary>この記事の目次</summary>
          <ol>
            <li><a href="#phase-1">直す価値のある本を選ぶ</a></li>
            <li><a href="#phase-2">残すものと変えるものを決める</a></li>
            <li><a href="#before-after">旧版と完成版の実例を見る</a></li>
            <li><a href="#phase-3">一気に頼まず、手前から進める</a></li>
            <li><a href="#phase-4">32節の挿絵を作る</a></li>
            <li><a href="#phase-5">巻末と読者導線まで育て直す</a></li>
            <li><a href="#start-one">まず1冊始める</a></li>
          </ol>
        </details>

        <section className="rewrite-opening">
          <h2>「直したい。でも、どこから直せばよいか分からない」から始まりました</h2>
          <p>
            今回の題材は、出版から1年以上が経っていた『ChatGPTでnoteをはじめよう！』です。
            初期の頃に大きく印税を作ってくれ、今も一定数は読まれている本でした。
          </p>
          <p>
            テーマには、まだ需要があると思っていました。一方で、ChatGPTもnoteも変わっています。
            挿絵は1枚もなく、30冊を超えた既刊から、巻末でどの本を紹介するかも整理できていませんでした。
          </p>
          <p>
            全部を手作業で確認するのは、本業もある中では、ちょっと無理でした。
            直したいとは思いながら、長い間そのままになっていました。
          </p>
          <p>
            Codexを使うことで、本文の診断、事実確認、部分修正、全体監査、挿絵、巻末、DOCXまで、
            一連の作業として進められるようになりました。
          </p>
          <aside className="note-box">
            <b>Codexとは？</b>
            <p>
              原稿や画像などのファイルを読み、文章の確認、修正案の作成、画像づくり、Wordファイルの整形まで
              手伝えるAIです。プログラミングの知識がなくても、日本語で「何を確認してほしいか」を伝えて使えます。
            </p>
          </aside>
          <blockquote>
            Codexへ作業は任せる。<br />
            でも、判断までは任せない。
          </blockquote>
          <aside className="note-box">
            <b>v4・v5・v8の関係</b>
            <p>
              リライト前の旧版がv4です。v4を残したまま最初の作業版v5を作り、その後、本文、挿絵、
              巻末、DOCXの確認を重ね、最終的にv8まで更新しました。この記事のBefore／Afterは、
              読者が違いを確認しやすいよう、旧版v4と完成版v8を比べています。
            </p>
          </aside>
        </section>

        <section id="phase-1">
          <p className="phase-label">PHASE 1</p>
          <h2>古い本ではなく、「直す価値のある本」を選ぶ</h2>
          <p>
            既刊が何冊もある場合、古い本を全部リライトしようとすると、それだけで止まります。
            最初に見るのは、古さではありません。この本へ、もう一度時間を使う価値があるかです。
          </p>
          <div className="check-grid">
            <div>
              <h3>候補にしやすい本</h3>
              <ul>
                <li>Kindle Unlimitedで読まれたページ数（KENP）や注文が、今も一定発生している</li>
                <li>テーマ自体には、今も需要がある</li>
                <li>中心は残せるが、情報や事例が古い</li>
                <li>今の自分なら読者体験を上げられる</li>
                <li>関連本への入口として残したい</li>
              </ul>
            </div>
            <div>
              <h3>新刊も検討する本</h3>
              <ul>
                <li>テーマの役割がなくなっている</li>
                <li>現在の読者と大きくずれている</li>
                <li>章の大半を書き直さないと成立しない</li>
                <li>今の経験で新しく書く方が価値を出せる</li>
              </ul>
            </div>
          </div>
          <p>
            今回の本は、今も読まれ、「AIを使いながらnoteとどう向き合うか」という中心も残せました。
            少しずつ印税が落ちていたこともあり、この本は直す意味があると判断しました。
          </p>
          <h3>Amazonレビューも、匿名化してから確認する</h3>
          <p>
            ほかの本では行っていたのに、この本では最初の工程として明確に入れていませんでした。
            今なら、投稿者名、プロフィール画像、IDなど個人につながる情報を外し、レビュー本文だけをCodexへ渡します。
            原文を本へ転載するのではなく、「読者が困った点」を修正候補として整理するために使います。
          </p>
          <blockquote>
            匿名化したAmazonレビューを読み、本文と照合してください。指摘を「絶対修正」「修正検討」「要検討」の
            3段階に分け、該当箇所、読者が困った理由、最小修正案を示してください。まだ本文は変更しないでください。
          </blockquote>
          <ul>
            <li><b>絶対修正：</b>事実、安全性、意味の誤りなど、放置すると読者が困るもの</li>
            <li><b>修正検討：</b>直すと分かりやすくなるが、著者の判断が必要なもの</li>
            <li><b>要検討：</b>好みや本の範囲にも関わるため、すぐ直さず考えるもの</li>
          </ul>
          <RoleSplit
            codex={<ul><li>旧版を読み、古くなった可能性を探す</li><li>匿名化したレビューを3段階へ整理する</li><li>現在の説明とのずれを候補にする</li><li>改善できる範囲を整理する</li></ul>}
            human={<ul><li>この本を対象にするか</li><li>レビューから何を採用するか</li><li>テーマを本棚に残すか</li><li>新刊より、この本へ時間を使うか</li></ul>}
          />
        </section>

        <section id="phase-2">
          <p className="phase-label">PHASE 2</p>
          <h2>残すものと、変えるものを先に決める</h2>
          <p>
            リライトで怖いのは、古い部分を直すうちに、本の良かったところまで消すことです。
            この本が長く読まれた理由は、操作説明だけではありません。
            AIを使って文章を書くとき、noteや自分の言葉とどう向き合うのか。そこが中心でした。
          </p>
          <div className="rule-pair">
            <div>
              <p className="rule-label">KEEP</p>
              <h3>変えないもの</h3>
              <ul>
                <li>ChatGPTと一緒にnoteを書くという中心</li>
                <li>初心者へ話しかける、やわらかい文体</li>
                <li>AIへ丸投げせず、自分の言葉を残す考え方</li>
                <li>章全体の大きな流れ</li>
              </ul>
            </div>
            <div>
              <p className="rule-label">UPDATE</p>
              <h3>変えるもの</h3>
              <ul>
                <li>古くなったnote・ChatGPTの説明</li>
                <li>個人情報や安全性への注意</li>
                <li>強く約束しすぎている表現</li>
                <li>現在の質問文と返答例</li>
                <li>挿絵、巻末、リンク、DOCX</li>
              </ul>
            </div>
          </div>
          <p>最初に頼んだのは、全面リライトではありません。本文を変更せず、修正候補だけを出してもらいました。</p>
          <blockquote>
            旧版の原稿を読み、現在の読者が誤解する可能性がある箇所、事実やサービス仕様が古くなっている箇所、
            安全性やコンプライアンス上、直した方がよい箇所を抽出してください。まだ本文は変更しないでください。
            該当する原文、問題、最小修正案を並べ、著者の文体と本の中心を変えない範囲に絞ってください。
          </blockquote>
          <RoleSplit
            codex={<ul><li>古い事実や強すぎる表現の候補抽出</li><li>Before／After案の作成</li><li>承認箇所だけの部分反映</li></ul>}
            human={<ul><li>本の中心として何を残すか</li><li>どの候補を採用するか</li><li>どこまで直せば文体が残るか</li></ul>}
          />
        </section>

        <section id="before-after" className="revision-section">
          <p className="phase-label">REAL BEFORE / AFTER</p>
          <h2>誤字ではなく、1年前の自分の基準を更新する</h2>
          <p>
            今回の修正は、言葉をきれいにするだけではありませんでした。
            安全性、AIとの距離、読者への約束という、違う3種類の判断を更新しています。
          </p>

          <RevisionExample
            number="01"
            kind="安全性"
            title="「名前を消せば大丈夫」を直す"
            before={<blockquote>個人情報が気になる方は自分の名前の部分を消せば良いでしょう。</blockquote>}
            finding={<p>名前以外の会社名、顧客名、連絡先、案件などからも、本人や第三者を特定できる可能性があります。</p>}
            decision={<p>気軽に相談できる雰囲気は残しながら、設定だけに頼らず、最初から大事な情報を入力しすぎない説明へ変えました。</p>}
            after={<blockquote>氏名だけでなく、会社名、顧客名、連絡先、具体的な案件、社内だけの情報などは、書かないか、内容が分からない形に置き換えるのが安心です。</blockquote>}
          />

          <RevisionExample
            number="02"
            kind="AIとの距離"
            title="AIの文章を「そのまま使ってもいい」と言わない"
            before={<blockquote>もちろん、このまま使ってもいいですし、自分の言葉で書き直してもOKです。</blockquote>}
            finding={<p>そのまま使えるという説明は、本書が伝えている「自分の経験や言葉を残す」という中心とずれます。</p>}
            decision={<p>AIが自然な文章を返せるからこそ、完成品ではなく下書きとして受け取る役割を明確にしました。</p>}
            after={<blockquote>もちろん、ここから自分の言葉で書き直してもOKです。むしろ、ChatGPTの文章は下書きとして受け取り、自分の経験や感覚を重ねていくことで、あなたらしい記事になっていきます。</blockquote>}
          />

          <RevisionExample
            number="03"
            kind="過剰な約束"
            title="「必ず書き上がる」と約束しない"
            before={<blockquote>まとまった時間が取れなくても、スキマ時間をうまく活かせば、1記事は必ず書き上がります。</blockquote>}
            finding={<p>時間の使い方や状況は人によって違うため、誰にでも「必ず」と約束することはできません。</p>}
            decision={<p>読者の背中を押す雰囲気は残しながら、少しずつ進める現実的な表現へ直しました。</p>}
            after={<blockquote>まとまった時間が取れなくても、スキマ時間をうまく使えば、少しずつ1記事へ近づいていけます。</blockquote>}
          />
        </section>

        <section id="phase-3">
          <p className="phase-label">PHASE 3</p>
          <h2>一気に頼まず、手前から1つずつ進める</h2>
          <p>
            今回、いちど大きく失敗しました。本文、事実確認、質問文、挿絵、巻末、DOCXまで、
            全部まとめてお願いしようとしたんです。
          </p>
          <p>
            すると、Codexが一度に扱える情報量をほぼ使い切り、身動きが取りにくくなりました。
            「全部できそうなら、全部頼んだ方が早い」と思ったのですが、逆でした。
          </p>
          <blockquote><b>一気に頼まない。手前から、1つずつ進める。</b></blockquote>
          <ol className="timeline">
            <li><span>01</span><div><b>元原稿を残す</b><p>旧版を上書きせず、作業版を分ける。</p></div></li>
            <li><span>02</span><div><b>候補だけ出す</b><p>どこを、なぜ直すのかを先に見る。</p></div></li>
            <li><span>03</span><div><b>承認分だけ反映する</b><p>Codexの提案を全部採用しない。</p></div></li>
            <li><span>04</span><div><b>前後関係を確認する</b><p>新旧説明の混在、矛盾、重複を探す。</p></div></li>
            <li><span>05</span><div><b>章ごとに更新する</b><p>質問文と返答例を、1冊分まとめて処理しない。</p></div></li>
            <li><span>06</span><div><b>別の監査役へ渡す</b><p>新しい読み手に、日本語と全体整合を見てもらう。</p></div></li>
            <li><span>07</span><div><b>最終的なWordファイル（DOCX）を検査する</b><p>目次、画像、リンク、全ページ、安全性を確認する。</p></div></li>
          </ol>
          <p>
            ここでいう「別の監査役」は、それまでの長いやり取りを引き継いでいない、新しいAIの読み手です。
            長く一緒に作ったAIが慣れてしまった不自然さを、初見の目で確認してもらいます。
          </p>
          <RoleSplit
            codex={<ul><li>各工程の実作業と差分記録</li><li>部分修正後の文脈監査</li><li>別の監査役による確認</li><li>DOCXの構造、画像、リンク検査</li></ul>}
            human={<ul><li>次の工程へ進んでよいか</li><li>指摘を採用するか</li><li>個性を守るため、あえて直さないか</li><li>最終版として読者へ渡せるか</li></ul>}
          />
        </section>

        <section id="phase-4">
          <p className="phase-label">PHASE 4</p>
          <h2>32節の挿絵を作り、本文へ差し込む</h2>
          <p>
            旧版には、節ごとの挿絵が1枚もありませんでした。当時は、どう作ればよいのかも分からなかったからです。
          </p>
          <p>
            そこで、1-1、1-2のような各節について、その内容を表す挿絵を作ってほしいと伝えました。
            最終的には32節に1枚ずつ、さらに「はじめに」と「おわりに」を加え、合計34枚を用意しました。
          </p>
          <p>
            楽だったのは、画像を作るだけで終わらなかったことです。どの節の末尾へ入れるのかを判断し、
            DOCXへ差し込み、欠落や順番を確認するところまで進められました。
          </p>
          <aside className="note-box">
            <b>短い依頼で進められた前提</b>
            <p>
              その前に本文全体を読ませ、本の中心、変えてはいけないこと、既存画像のトーン、画像比率、色、余白を共有し、
              最初に代表の1枚を確認していました。魔法の一文ではなく、十分な文脈を渡した後だったからです。
            </p>
          </aside>
          <RoleSplit
            codex={<ul><li>各節の要点整理と挿絵設計</li><li>共通トーンでの画像制作</li><li>章別ファイル整理とDOCX差し込み</li><li>欠落、順番、サイズの確認</li></ul>}
            human={<ul><li>挿絵を入れるか</li><li>どのトーンを基準にするか</li><li>代表画像を採用するか</li><li>読者体験が本当に上がるか</li></ul>}
          />
        </section>

        <section id="phase-5">
          <p className="phase-label">PHASE 5</p>
          <h2>本文だけで終わらせず、巻末と読者導線まで育て直す</h2>
          <p>
            私の本は30冊を超えています。巻末に全部並べても、読者は選べません。
            本ごとに関係の深い本を選び、読み終えた人が次に進みやすい形へ変えたいと思っていました。
          </p>
          <p>
            今回は本文を読んだうえで関係の深い本を候補にし、巻末2ページで関連本6冊を紹介する形へ整理しました。
            表紙、紹介文、リンクを並べ、リンクが実際に組まれているかも確認しました。
          </p>
          <h3>本棚サイトは、最後の応用例</h3>
          <p>
            今回のリライトとは別のタイミングですが、Codexを使って、私の本を一覧できる本棚サイトも作りました。
            リライトした本の巻末から、この本棚へ案内する導線も入れています。
          </p>
          <p className="reference-note">本棚は、読者へ公開してよい書名、表紙、紹介文、リンクだけで作っています。</p>
          <aside className="warning-box">
            <b>GitHub Pagesを使う場合の注意</b>
            <p>
              認証を設定していない静的サイトは、URLを知っている人なら誰でも閲覧できます。
              個人情報、購入者限定情報、未公開原稿、ローカルパスなどは置かず、公開してよい情報だけで作ります。
            </p>
          </aside>
          <RoleSplit
            codex={<ul><li>関連する既刊候補の抽出</li><li>巻末ページの作成</li><li>表紙、紹介文、リンクの配置</li><li>リンク設定の検査</li></ul>}
            human={<ul><li>次に紹介する本</li><li>紹介文が内容と合っているか</li><li>どのリンクを使うか</li><li>何を公開してよいか</li></ul>}
          />
        </section>

        <section id="start-one" className="case-conclusion">
          <h2>まず1冊始めるなら、ここまでで十分です</h2>
          <p>最初から挿絵や本棚まで、全部やる必要はありません。</p>
          <ol>
            <li>今も残す価値のある既刊を1冊選ぶ</li>
            <li>変えないものと、変えたいものを書く</li>
            <li>本文を変更せず、修正候補だけ出してもらう</li>
          </ol>
          <p>
            リライトしたから印税が必ず増えるとは言えません。今回更新した5冊が今後どのように読まれるかは、これから確認します。
          </p>
          <p>
            それでも、「このまま出し続けてよいのかな」と思いながら置いていた本を、
            いまの自分が読者へ渡せる品質まで戻せたことには、大きな意味がありました。
          </p>
          <blockquote>
            <b>Codexへ作業は任せる。<br />でも、判断までは任せない。</b>
          </blockquote>
        </section>

        <StarterKitButton />

        <footer className="article-end">
          <p>検証時点：2026年8月</p>
          <p>検証環境：Macのデスクトップ版Codex</p>
          <p>実施範囲：既刊5冊のリライト</p>
          <p>ケース：旧版v4を残して作業版v5を作り、完成版v8まで更新</p>
          <p>
            Codexの機能、利用できるプラン、上限、画面は変更されることがあります。
            利用前にOpenAI公式ページで現在の情報をご確認ください。
          </p>
        </footer>
      </article>
      <ArticleOnlyFooter />
    </main>
  );
}
