import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../_components/SiteChrome";
import { articles } from "../../_data/content";

const article = articles[0];

export default function LongformWithCodex() {
  return (
    <main>
      <SiteHeader />
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="パンくず">
          <Link href="/">あおい執筆室</Link>
          <span>/</span>
          <Link href="/library">記事一覧</Link>
          <span>/</span>
          <span>{article.primaryCategory}</span>
        </nav>

        <header className="article-header">
          <p className="article-kicker">{article.primaryCategory}</p>
          <h1>{article.title}</h1>
          <p className="article-summary">
            AIへ「本を書いて」と頼むだけでは、あおいの本にはなりません。
            音声で材料を出し、足りないことを質問してもらい、判断をファイルへ残す。
            ここでは、実際の質問、音声回答、改稿指示、複数AIのレビューまで、現在の流れをつなげます。
          </p>
          <dl className="article-facts">
            <div><dt>題材</dt><dd>『初めてのBrainが100万円売れた私の話』</dd></div>
            <div><dt>関連する本編</dt><dd>{article.chapters}</dd></div>
            <div><dt>検証環境</dt><dd>{article.environment}</dd></div>
          </dl>
        </header>

        <details className="toc" open>
          <summary>この記事の目次</summary>
          <ol>
            <li><a href="#change">なぜ今はCodexを中心に使うのか</a></li>
            <li><a href="#voice">5分の音声ダンプで材料を出す</a></li>
            <li><a href="#questions">AIに逆質問してもらう</a></li>
            <li><a href="#case-study">1冊の実例で、材料が本文になるまでを見る</a></li>
            <li><a href="#markdown">2種類のMarkdownで前提を残す</a></li>
            <li><a href="#handoff">長くなったら、執筆チャットを分ける</a></li>
            <li><a href="#workflow">1冊を仕上げる現在の流れ</a></li>
            <li><a href="#parallel-review">複数AIを並行してレビューする</a></li>
            <li><a href="#last-word">最後に決めるのは、自分</a></li>
          </ol>
        </details>

        <section id="change">
          <h2><span>1</span>なぜ今はCodexを中心に使うのか</h2>
          <p>
            現時点では、長い原稿制作はCodexが一番進めやすいと感じています。
            理由は、会話が上手だからだけではありません。原稿、執筆ルール、構成メモなど、
            フォルダに置いた複数のファイルを読みながら作業できるからです。
          </p>
          <p>
            少し前までは、工程ごとにAIのチャットを細かく分けていました。
            長くなると動きが重くなり、前半で決めたことが後半の文章から抜けることもあったからです。
            今は、材料出しから構成、本文のかなり長いところまで、同じCodexタスクで進められます。
          </p>
          <p>
            ただし、Codexだけが唯一の選択肢ではありません。ファイルをまとめて参照できる環境を作れるなら、
            ChatGPTやClaudeでも考え方は応用できます。大事なのはAIの名前ではなく、
            最新の本文、確定事項、執筆ルールを同じ場所から読ませることです。
          </p>
          <aside className="warning-box">
            <b>未公開原稿を渡す前に</b>
            <p>
              本名、勤務先、個人メール、購入者情報、APIキー、パスワードなどは入れません。
              他人の文章や画像も、利用してよい範囲を確認してから渡します。
            </p>
          </aside>
        </section>

        <section id="voice">
          <h2><span>2</span>5分の音声ダンプで材料を出す</h2>
          <p>
            今の私は、背景や感情を長く伝えるとき、ほとんどタイピングしていません。
            Macのデスクトップ版Codexで入力欄を選び、音声入力を始め、そのまま話します。
          </p>
          <ol className="steps">
            <li><b>話す前に目的を1行で伝える</b><span>「第3章へ入れる実体験を話します」のように、使い道を先に置きます。</span></li>
            <li><b>5分程度で一度止める</b><span>これは現在の私の安全目安です。長く話しすぎて末尾が消えた経験があります。</span></li>
            <li><b>送信後に末尾を確認する</b><span>最後まで文字になっているか、数字や固有名詞が崩れていないかを見ます。</span></li>
            <li><b>正確さが必要な部分だけ打ち直す</b><span>書名、金額、日付、ファイル名はタイピングで直します。</span></li>
            <li><b>消えると困る内容は短く残す</b><span>重要な結論だけ、先にメモへ残してから話す方法もあります。</span></li>
          </ol>
          <p>
            10分近く話したあと、最後の数分が消えていたことがありました。
            あれは、本当に気絶しそうになります。5分なら絶対に消えない、という保証ではありませんが、
            失ったときのダメージを小さくするため、今はこの長さで区切っています。
          </p>
          <div className="two-column">
            <div>
              <h3>音声が向くこと</h3>
              <ul>
                <li>当時の状況や気持ち</li>
                <li>なぜそう決めたのか</li>
                <li>うまくいかなかったこと</li>
                <li>次の本や教材の方針</li>
                <li>質問へのまとまった回答</li>
              </ul>
            </div>
            <div>
              <h3>タイピングが向くこと</h3>
              <ul>
                <li>1〜2行の短い修正</li>
                <li>数字や固有名詞の訂正</li>
                <li>ファイル名の指定</li>
                <li>Yes／Noで答えられる確認</li>
              </ul>
            </div>
          </div>
          <p>
            Codexを使わない場合も、スマートフォンやパソコンの音声入力で話し、
            文字になった材料をChatGPTやClaudeへ渡せます。音声ダンプは完成原稿ではなく、
            迷い、脱線、言い直しまで含む「原稿の材料」です。
          </p>
        </section>

        <section id="questions">
          <h2><span>3</span>AIに逆質問してもらう</h2>
          <p>
            『初めてのBrainが100万円売れた私の話』は、約2万4,400字の原稿ができた段階で、
            実際に何をしたのか、何が怖かったのか、なぜその判断をしたのかが薄いと感じました。
          </p>
          <p>
            そこで、「原稿に足りない材料を出すため、私に質問してください」と頼みました。
            最初は約20問が出ましたが、現在なら5問程度ずつ出してもらい、回答を確認してから次へ進みます。
            一度に多すぎると、すでに答えたことや、既存資料を読めば分かる質問まで混ざりやすいからです。
          </p>
          <p>
            以下では、約20問の中から原稿へ大きく影響した3問を抜粋しています。
            当時の流れが分かるように、元の質問番号を残しました。
          </p>
          <blockquote>
            この原稿を、一般論の説明ではなく、著者本人の経験と判断が残る原稿へ仕上げたいです。
            原稿と既存ファイルを読み、足りない事実、具体例、感情、失敗、判断理由を引き出す質問を、
            重要な順に5問だけ作ってください。質問が必要な理由と、回答を入れる候補の章も添えてください。
            回答はまだ本文へ入れず、まず整理案を見せてください。
          </blockquote>
          <Link className="text-link" href="/resources#resource-03">
            AIからの逆質問テンプレートを見る →
          </Link>
          <div className="question-map">
            <article>
              <span>質問1</span>
              <h3>販売前に、読者からどんな質問を受けていましたか？</h3>
              <p>回答から「出版数や印税について、1〜2週間に1回ほどDMや返信をもらっていた」という材料が出ました。</p>
              <small>反映先：Brainを作ろうと思った背景</small>
            </article>
            <article>
              <span>質問3</span>
              <h3>テーマを決めるとき、捨てた案はありましたか？</h3>
              <p>個別の没企画ではなく、「最初の1冊を作る範囲へ絞った」という教材設計の判断が出ました。</p>
              <small>反映先：扱う範囲を決めた理由</small>
            </article>
            <article>
              <span>質問15</span>
              <h3>発売直後、売れ行きが止まった時期はありましたか？</h3>
              <p>15部ほど売れたあと、体感で2週間ほど動かず、不安だったという場面が出ました。</p>
              <small>反映先：発売直後の実録</small>
            </article>
          </div>
        </section>

        <section id="case-study">
          <h2><span>4</span>1冊の実例で、材料が本文になるまでを見る</h2>
          <p>
            ここからは、実際に残っている音声回答、AIが整理した改稿指示、完成原稿を順番に見ます。
            言葉を後から「それらしく」作った例ではありません。
          </p>

          <div className="artifact-stack">
            <article>
              <p className="artifact-label">1．音声回答の抜粋</p>
              <blockquote>
                最初ね、15部ぐらいかな。1,980円で売って。で、そっからピタッと止まったんだよね。
                2週間ぐらい、そっから売れなかったんじゃないかな。
                あんなに時間かけて作ったのに、と思ったね、この時は。
              </blockquote>
              <p>
                話したままなので、言い直しもあります。この段階では、きれいにまとめません。
              </p>
            </article>
            <article>
              <p className="artifact-label">2．AIが整理した改稿指示</p>
              <blockquote>
                発売直後は、最初に15部くらい売れました。その後、売れ行きがピタッと止まりました。
                2週間ほど売れなかった感覚があり、「あんなに時間をかけて作ったのに」とかなり不安になりました。
                この「止まった時間」を、第3章または第8章に入れてください。
              </blockquote>
              <p>
                音声の意味を変えず、候補の章まで整理します。
                最終的な配置は、構成全体を見て私が決めます。ただし、これもまだ完成稿ではありません。
              </p>
            </article>
            <article>
              <p className="artifact-label">3．完成稿</p>
              <blockquote>
                発売直後、最初に15部くらい売れました。<br />
                でも、その15部が、多いのか少ないのか。当時の私には、判断がつかなかったです。<br /><br />
                そして、そのあと。売れ行きが、ピタッと止まりました。<br />
                体感で、2週間くらい、ほとんど動かなかった。<br /><br />
                「あんなに時間をかけて作ったのに」<br />
                「刺さらんかったのかな」<br /><br />
                かなり不安になりました。
              </blockquote>
              <p>
                数字だけの成功談ではなく、比べる基準がなかったこと、止まった時間、当時の言葉まで残しました。
              </p>
            </article>
          </div>

          <div className="structure-diff">
            <div>
              <p className="artifact-label">初期の章案</p>
              <h3>Brainを作る前に、整えておきたいこと</h3>
              <p>扱う範囲を守るため、実践ノウハウは控えめでした。</p>
            </div>
            <span aria-hidden="true">→</span>
            <div>
              <p className="artifact-label">音声回答後の章</p>
              <h3>私が考える、売れるBrainの作り方</h3>
              <p>攻略法ではなく、本人が実際にしたことから判断基準を抽出しました。</p>
            </div>
          </div>
        </section>

        <section id="markdown">
          <h2><span>5</span>2種類のMarkdownで、前提を残す</h2>
          <p>
            Markdownは、見出しや箇条書きを簡単な記号で整理できるテキスト形式です。
            ファイル名の末尾は<code>.md</code>。装飾が少なく、AIが読みやすいのが利点です。
          </p>
          <div className="rule-pair">
            <div>
              <p className="rule-label">すべての本に共通</p>
              <h3>全書籍共通ルール</h3>
              <p>
                誤字脱字、不自然な日本語、論理の飛躍、時系列の矛盾、
                著者が経験していないことの捏造禁止など、どの本でも守ることだけを置きます。
              </p>
            </div>
            <div>
              <p className="rule-label">この1冊だけ</p>
              <h3>本書専用ルール</h3>
              <p>
                読者、トーン、固有の事実、使わない表現、強調したい中心線など、
                その本だけに必要な条件を置きます。
              </p>
            </div>
          </div>
          <p>
            今回のBrain本は、タイトルの「100万円」が強い本です。だからこそ、
            「自慢にしない」「累積売上であると明記する」「手取りと誤解させない」
            「誰でも同じ結果になるとは書かない」を、本書専用ルールへ入れました。
          </p>
          <p>
            ルールは、多ければ多いほどよいわけではありません。違和感を音声で伝え、
            「今後も使うルールだけをMarkdownへ整理してください」とAIへ頼みます。
          </p>
          <div className="inline-resource-links">
            <Link href="/resources#resource-01">全書籍共通ルールを見る →</Link>
            <Link href="/resources#resource-02">本書専用ルールを見る →</Link>
          </div>
        </section>

        <section id="handoff">
          <h2><span>6</span>長くなったら、執筆チャットを分ける</h2>
          <p>
            構成や材料の議論が長くなったあと、そのまま本文まで書き続けると、
            どれが確定事項で、どれが途中案なのか分かりにくくなります。
            そこで、本文を書き始める前に引き継ぎファイルを作ります。
          </p>
          <blockquote>
            ここまでの議論を、次の執筆チャットが取り違えないように整理してください。
            本の目的、対象読者、読者への約束、最新構成、決定事項、未決事項、本文の正本、
            参照資料、扱わない内容、共通ルール、本書専用ルール、次に着手する作業を分けてください。
          </blockquote>
          <p>
            次のチャットでは、その引き継ぎファイルと本文、必要な資料を添付し、
            「すべて理解したうえで、記載された次の作業から始めてください」と伝えます。
          </p>
          <Link className="text-link" href="/resources#resource-07">
            チャット引き継ぎテンプレートを見る →
          </Link>
        </section>

        <section id="workflow">
          <h2><span>7</span>1冊を仕上げる、現在の流れ</h2>
          <ol className="timeline">
            <li><span>01</span><div><b>材料を出す</b><p>経験、読者、伝えたいことを音声で話す。</p></div></li>
            <li><span>02</span><div><b>ルールを置く</b><p>共通ルールと、本書だけのルールを用意する。</p></div></li>
            <li><span>03</span><div><b>構成を決める</b><p>章の役割と順番を固定する。</p></div></li>
            <li><span>04</span><div><b>本文を書く</b><p>必要な材料を見ながら、章ごとに書く。</p></div></li>
            <li><span>05</span><div><b>不足を聞き返してもらう</b><p>AIの逆質問へ音声で答え、体験を足す。</p></div></li>
            <li><span>06</span><div><b>全体をつなぐ</b><p>重複、時系列、章同士の論理を整える。</p></div></li>
            <li><span>07</span><div><b>並行レビューする</b><p>複数AIへ、同じ原稿と同じ条件を渡す。</p></div></li>
            <li><span>08</span><div><b>本人が決める</b><p>提案を採用するか、最後に自分で判断する。</p></div></li>
          </ol>
          <aside className="note-box">
            <b>応用：画像制作は別タスクで進める</b>
            <p>
              出版まで時間がないときは、本文とは別のCodexタスクで表紙や挿絵を進めることがあります。
              最初から全部を同時進行する必要はありません。原稿制作に慣れてから使う小技です。
            </p>
          </aside>
        </section>

        <section id="parallel-review">
          <h2><span>8</span>複数AIを並行してレビューする</h2>
          <p>
            1つのAIと長く話していると、前提をよく知ってくれる反面、同じ方向へ寄りやすくなります。
            完成に近い同じ原稿を、新しいChatGPT、Claude、第三者AIなどのチャットへ渡し、
            同じ基準で読んでもらいます。
            すべての意見が揃うまで、本文は修正しません。
          </p>
          <div className="review-levels">
            <div><span>A</span><b>絶対修正</b><p>事実誤認、意味不明、論理矛盾、読者が迷う欠落。</p></div>
            <div><span>B</span><b>どちらかと言えば修正</b><p>直すと読みやすくなるが、唯一の正解ではない。</p></div>
            <div><span>C</span><b>今回は受け入れなくてよい</b><p>個性を消す、説明書化する、経験を勝手に足す提案。</p></div>
          </div>

          <h3>AIの提案を、採用・見送りまで判断した実例</h3>
          <p>
            『はじめてのKindle出版 30のQ&amp;A』を出版前にレビューしたときの実例です。
            外部AIの提案をCodexが原稿と執筆ルールへ照合し、最後に私が採否を決めました。
          </p>
          <div className="review-comparison">
            <article>
              <b>見送り：出版までの全体図を導入へ追加</b>
              <p>
                外部AIは、完全初心者向けに出版工程の一覧を冒頭へ足す案を出しました。
                Codexは、章順そのものが工程になっており、追加すると導入が取扱説明書調へ戻ると再分類。
                私も、今の導入の温度を守るため見送りました。
              </p>
            </article>
            <article>
              <b>見送り：ペンネームへの後悔と笑いを圧縮</b>
              <p>
                外部AIは、重複を減らすため後半を短くする案を出しました。
                Codexは、「あおいって何人おんねん」という後悔と笑いが著者の体温になっていると再分類。
                情報の重複だけではないため、そのまま残しました。
              </p>
            </article>
            <article>
              <b>採用：評価とレビューの違いを補足</b>
              <p>
                第三者AIは、星による評価と文章つきレビューが混ざり、初心者が件数を誤解すると指摘しました。
                Codexも絶対修正に再分類。見出しと冒頭を直し、2つの違いが分かるようにしました。
              </p>
            </article>
            <article className="review-decision">
              <b>この工程でしていること</b>
              <p>
                外部AIの重要度をそのまま信じず、原稿、事実、読者への影響、残したい文体へ戻って再判定します。
                誤読を防ぐ修正は採用し、説明書化や個性を消すだけの提案は見送ります。
              </p>
            </article>
          </div>
          <p>
            Codexへ任せるのは最終決定ではなく、全意見を原稿と照合した「再分類案」です。
            多数決では決めません。事実、読者への影響、残したい文体を見て、最後は私が採否を決めます。
          </p>
          <div className="inline-resource-links">
            <Link href="/resources#resource-04">AI並行レビューの依頼文を見る →</Link>
            <Link href="/resources#resource-05">3段階の統合判定を見る →</Link>
          </div>
          <aside className="warning-box">
            <b>「読みやすくして」とだけ頼むと、無難な文章へ寄ることがあります</b>
            <p>
              読みやすくする修正と、著者の個性を消す修正は別です。
              本人の自然な反応まで、効率だけで削らないようにします。
            </p>
          </aside>
        </section>

        <section id="last-word">
          <h2><span>9</span>最後に決めるのは、自分</h2>
          <p>
            AIへ任せられる範囲は、かなり広がりました。材料を整理する。足りないことを聞く。
            原稿を書く。別の角度からレビューする。意見を統合する。ここまではAIに頼めます。
          </p>
          <p>
            でも、どの言葉を残すか。どこまで公開するか。この文章は本当に自分の考えか。
            そこは、私が決めます。最後は全文を、自分で読み直します。
          </p>
          <div className="next-reading">
            <Link href="/library/ai-voice-before-after">
              次に読む：AIっぽさを消すビフォー・アフター →
            </Link>
            <Link href="/resources">
              配布ファイルをすべて見る →
            </Link>
            <Link href="/resources#resource-06">
              出版前チェックを見る →
            </Link>
          </div>
        </section>

        <footer className="article-end">
          <p>検証時点：{article.verified}</p>
          <p>検証環境：{article.environment}</p>
          <p>現在の状態：{article.status}</p>
          <p>AIの画面、モデル名、利用できる機能は変わる可能性があります。</p>
        </footer>
      </article>
      <SiteFooter />
    </main>
  );
}
