import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../_components/SiteChrome";
import { articles } from "../../_data/content";

const article = articles[1];

export default function AiVoiceBeforeAfter() {
  return (
    <main>
      <SiteHeader />
      <article className="article-shell case-study-shell">
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
          <p className="article-context">
            この内容は、本編の第3章「AIライティングは作り込みが超重要」を補足する追加実践記事です。
            購入者アンケートでは、「AIっぽくならない文章の作り方を詳しく知りたい」
            という声を多くいただきました。
          </p>
          <p className="article-summary">
            『初めてのBrainが100万円売れた私の話』の制作記録を使い、
            AIが出した案や、私が音声で話した材料が、実際の完成稿へ変わるまでを紹介します。
          </p>
          <dl className="article-facts">
            <div>
              <dt>題材</dt>
              <dd>『初めてのBrainが100万円売れた私の話』</dd>
            </div>
            <div>
              <dt>見せるもの</dt>
              <dd>AIの案、私の返答、音声回答、AIの整理、採用判断、完成稿</dd>
            </div>
            <div>
              <dt>関連する本編</dt>
              <dd>本編の{article.chapters}「AIライティングは作り込みが超重要」</dd>
            </div>
          </dl>
        </header>

        <section className="case-intro" id="examples">
          <h2>この記事の読み方</h2>
          <p>
            ここでいう「AIっぽさ」は、AIを使ったこと自体ではありません。
            文章は整っていても、書き手の経験、迷い、判断が見えず、
            誰が書いても同じような文章に見える状態を指します。
          </p>
          <p>4つの事例は、すべて同じ作り方ではありません。</p>
          <p>
            前半の2例は、AIが出した案へ、私が問題提起を返して直した事例です。
            後半の2例は、AIからの質問に私が音声で答え、
            自分の経験や判断を原稿へ足した事例です。
          </p>
          <p>各素材の前には、次の3点を短い補足行で表示します。</p>
          <ul>
            <li>誰が作った、何のための素材なのか</li>
            <li>制作のどの時点で生まれたのか</li>
            <li>原文、文字起こし、要旨、完成稿のどれなのか</li>
          </ul>
          <p>
            「要旨」と表示した文章は、当時のやり取りを逐語で引用したものではなく、
            意味を変えずに読みやすく整理したものです。
          </p>
          <p>
            「実際に本へ掲載した完成稿」は、最終的に出版した本から抜粋した文章です。
          </p>
        </section>

        <section className="case-group">
          <p className="case-group-label">A</p>
          <h2>AIが出した案へ、私が問題提起を返した事例</h2>
          <p>
            AIの案をそのまま整えるのではなく、
            「読者へ何を届けたいのか」という基準を返して直した2つの事例です。
          </p>
        </section>

        <section className="case-example">
          <header>
            <span>01</span>
            <h2>読者に「何が分かる本なのか」を先に伝える</h2>
          </header>

          <h3>この例から分かること</h3>
          <p>
            自分用の企画メモで本の範囲を決めることと、
            読者へ本の価値を伝えることは別です。
          </p>
          <p>
            扱わない内容の説明が前へ出ると、
            読者が最初に知りたい「この本を読むと何が分かるのか」が見えにくくなります。
          </p>

          <div className="compare-block before-block">
            <p className="material-meta">AIの構成案｜構成検討中｜要旨</p>
            <h3>AIが出した構成案の要旨</h3>
            <blockquote>
              この本で扱う内容だけでなく、扱わない内容も本文で説明する。
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="material-meta">私からAIへの返答｜構成検討中｜要旨</p>
            <h3>私がAIへ返した問題提起（要旨）</h3>
            <p>
              何を書かないかは、読者が最初に知りたいことではないのではないでしょうか。
            </p>
            <p>
              自分用の企画メモでは、扱う範囲を決めるべきです。
              でも、読者向けの本文で中心に置きたいのは、
              「この本から何を受け取れるか」です。
            </p>
            <p>
              対象外の説明を並べるのではなく、私が実際に何を経験し、
              何を振り返る本なのかを、前へ出すべきではないでしょうか。
            </p>
          </div>

          <div className="compare-block after-block">
            <p className="material-meta">完成稿｜改稿後｜実際の書籍本文</p>
            <h3>実際に本へ掲載した完成稿</h3>
            <blockquote>
              <p>
                この本では、普通の会社員である私が、Brainを出したときのことだけでなく、
                出す前から何を考えて、何をやってきたのかも、一緒に振り返ります。
              </p>
              <p>
                私が書けるのは、「普通の会社員が副業で初めて出したBrainを、
                こう考えて、こう販売した」という、一人称の経験談です。
              </p>
            </blockquote>
          </div>

          <aside className="lesson-box">
            <b>ほかの原稿へ応用するなら</b>
            <p>自分用の企画メモでは、扱わない範囲まで決めて構いません。</p>
            <p>
              読者向けの本文では、対象外の説明より先に、
              「この本を読むと何が分かるのか」を伝えます。
            </p>
          </aside>
        </section>

        <section className="case-example">
          <header>
            <span>02</span>
            <h2>「読者の変化」を、読者が得られる具体的な価値へ変える</h2>
          </header>

          <h3>この例から分かること</h3>
          <p>
            「成長」「変化」「価値」といった抽象語だけでは、
            読み終えた読者に何が起きるのかが見えません。
          </p>
          <p>
            読者が理解できること、判断できること、始められることまで具体化すると、
            本人が本当に渡したい価値が見えるようになります。
          </p>

          <div className="compare-block before-block">
            <p className="material-meta">AIの構成案｜提供価値の検討中｜初稿</p>
            <h3>AIが出した初稿</h3>
            <blockquote>
              <p>Brainで売れるのは「情報」ではなく「読者の変化」です。</p>
              <p>読み終えたあと、読者がどう変わるかを先に決めます。</p>
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="material-meta">私からAIへの返答｜提供価値の検討中｜要旨</p>
            <h3>私がAIへ返した問題提起（要旨）</h3>
            <p>「読者の変化」だけだと、少しきれいすぎるのではないでしょうか。</p>
            <p>
              まだ知らないサービスを理解できた。最初の一歩を踏み出せた。
              そこまででも、十分に価値があると思います。
            </p>
            <p>
              だから、「最初の一歩を軽くする」という、
              読者が受け取れる具体的な価値へ言い換えるべきではないでしょうか。
            </p>
          </div>

          <div className="compare-block after-block">
            <p className="material-meta">完成稿｜改稿後｜実際の書籍本文</p>
            <h3>実際に本へ掲載した完成稿</h3>
            <blockquote>
              <p>初心者の方にとっては、最初の一歩が、いちばん重い。</p>
              <p>Brainの価値の1つは、この最初の一歩の重さを、軽くすることです。</p>
              <p>「最初の一歩を、軽くする」だけで、しっかり価値になる。</p>
            </blockquote>
          </div>

          <aside className="lesson-box">
            <b>ほかの原稿へ応用するなら</b>
            <p>「成長」「変化」「価値」と書いたら、その言葉だけで終わらせません。</p>
            <p>
              読み終えた読者が、何を理解できるのか。何を判断できるのか。
              何を始められるのか。そこまで具体的にします。
            </p>
          </aside>
        </section>

        <section className="case-group">
          <p className="case-group-label">B</p>
          <h2>音声で、私自身の経験と判断を追加した事例</h2>
          <p>
            AIからの逆質問に音声で答え、
            成功談から抜けていた時間や、自分が守っている判断基準を原稿へ戻した2つの事例です。
          </p>
        </section>

        <section className="case-example">
          <header>
            <span>03</span>
            <h2>成功実績に、売れなかった時間と当時の不安を戻す</h2>
          </header>

          <h3>この例から分かること</h3>
          <p>
            成果の数字だけを書くと、発売直後から順調だった成功談に見えることがあります。
          </p>
          <p>
            数字を見たときにどう感じたのか。売れ行きが止まった時間に何を考えたのか。
            そこまで残すと、本人が実際に経験した話になります。
          </p>
          <p className="source-note">
            この音声回答は、原稿制作フローの記事でも紹介しています。
            ここでは、成功談からAIっぽさを消すという角度で、もう一度見ていきます。
          </p>

          <div className="compare-block before-block">
            <p className="material-meta">AIからの逆質問｜初稿完成後｜原文</p>
            <h3>AIから私への質問</h3>
            <blockquote>
              発売直後、思ったより売れた／売れなかったタイミングはありましたか？
            </blockquote>
          </div>

          <div className="compare-block before-block">
            <p className="material-meta">
              私の音声回答｜逆質問への回答時｜文字起こし・抜粋
            </p>
            <h3>私の音声回答（文字起こし・抜粋）</h3>
            <blockquote>
              <p>
                最初ね、15部ぐらいかな。1,980円で売って。で、そっからピタッと止まったんだよね。
              </p>
              <p>2週間ぐらい、そっから売れなかったんじゃないかな。</p>
              <p>あんなに時間かけて作ったのに、と思ったね、この時は。</p>
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="material-meta">AIの改稿用整理｜音声回答後｜要旨</p>
            <h3>AIが改稿用に整理した要旨</h3>
            <p>発売直後は、最初に15部ほど売れました。</p>
            <p>
              ただ、その15部が多いのか少ないのか、当時は判断できませんでした。
              その後、売れ行きが止まり、2週間ほど動かなかった感覚がありました。
            </p>
            <p>
              AIは、売れた瞬間だけではなく、「あんなに時間をかけて作ったのに」
              と不安になった時間も、実録として残す材料だと整理しました。
            </p>
          </div>

          <div className="feedback-block decision-block">
            <p className="material-meta">私の採用判断｜改稿時</p>
            <h3>私が完成稿へ残した判断</h3>
            <p>完成稿には、次の3つを残しました。</p>
            <ul>
              <li>15部が多いのか、少ないのか判断できなかったこと</li>
              <li>売れ行きが止まった約2週間</li>
              <li>「あんなに時間をかけて作ったのに」と不安になったこと</li>
            </ul>
          </div>

          <div className="compare-block after-block">
            <p className="material-meta">完成稿｜改稿後｜実際の書籍本文</p>
            <h3>実際に本へ掲載した完成稿</h3>
            <blockquote>
              <p>発売直後、最初に15部くらい売れました。</p>
              <p>
                でも、その15部が、多いのか少ないのか。当時の私には、判断がつかなかったです。
              </p>
              <p>そして、そのあと。売れ行きが、ピタッと止まりました。</p>
              <p>体感で、2週間くらい、ほとんど動かなかった。</p>
              <p>「あんなに時間をかけて作ったのに」</p>
              <p>「刺さらんかったのかな」</p>
              <p>かなり不安になりました。</p>
            </blockquote>
          </div>

          <aside className="lesson-box">
            <b>ほかの原稿へ応用するなら</b>
            <p>成果の数字だけを書かず、その数字を当時どう受け止めたのかまで確認します。</p>
            <p>
              比べる基準がなかったこと。止まった時間。そのときに出た言葉。
              数字の前後にある時間と感情を残すと、
              成功実績だけでは見えなかった本人の経験が伝わります。
            </p>
          </aside>
        </section>

        <section className="case-example">
          <header>
            <span>04</span>
            <h2>一般論を、自分が実際に守っている判断基準へ変える</h2>
          </header>

          <h3>この例から分かること</h3>
          <p>「実践者の生々しさが大事」と書くだけなら、誰にでも書ける一般論です。</p>
          <p>
            自分は原稿を書くとき、何を守っているのか。
            どこで「これは自分の実践ではない」と判断するのか。
            本人の基準まで書くことで、その人にしか書けない文章になります。
          </p>
          <p className="source-note">
            読者像について答える途中で、私は「自分が実際にやったことをBrainにする」
            という、書く内容の判断基準まで話していました。
          </p>

          <div className="compare-block before-block">
            <p className="material-meta">AIからの逆質問｜初稿完成後｜原文</p>
            <h3>AIから私への質問</h3>
            <blockquote>最初に想定した読者は、どんな人でしたか？</blockquote>
          </div>

          <div className="compare-block before-block">
            <p className="material-meta">
              私の音声回答｜逆質問への回答時｜文字起こし・抜粋
            </p>
            <h3>私の音声回答（文字起こし・抜粋）</h3>
            <blockquote>
              <p>
                自分がやったことがないことをBrainにして書くっていうのが、
                あんまりイメージが湧かないです。
              </p>
              <p>
                基本は、その人が実践している生々しさが大事なので、
                自分がやったことをBrainにするのが一番いいかなと思っています。
              </p>
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="material-meta">AIの改稿用整理｜音声回答後｜要旨</p>
            <h3>AIが改稿用に整理した要旨</h3>
            <p>
              自分が実際にやったことを題材にすると、
              経験の具体性や判断が原稿に残りやすい。
            </p>
            <p>
              自分が実践していないことを、自分の実践として書かないことが、
              書く内容を決める基準になっている。
            </p>
          </div>

          <div className="feedback-block decision-block">
            <p className="material-meta">私の採用判断｜改稿時</p>
            <h3>私が完成稿へ残した判断</h3>
            <p>自分がやっていないことを、自分の実践として書かない。</p>
            <p>
              読まれそうなテーマであっても、自分が実践していないことは、
              自分の経験として語らない。
            </p>
            <p>この判断基準を完成稿へ残しました。</p>
          </div>

          <div className="compare-block after-block">
            <p className="material-meta">完成稿｜改稿後｜実際の書籍本文</p>
            <h3>実際に本へ掲載した完成稿</h3>
            <blockquote>
              <p>
                特に、自分がやっていない収益の作り方を語るのは、
                いちばん危ないパターンです。
              </p>
              <p>
                この「自分がやっていないことを書かない」は、
                私がずっと大事にしていることです。
              </p>
              <p>
                あ、この本を書いたら読まれるだろうな…と思うことでも、
                自分がやってないことは、書かない。
              </p>
            </blockquote>
          </div>

          <aside className="lesson-box">
            <b>ほかの原稿へ応用するなら</b>
            <p>
              一般論を書いたら、「私は、原稿を書くときに何を基準に判断しているのか」
              まで確認します。
            </p>
            <p>
              自分が実践していないことを、自分の経験として語らない。
              この基準まで書くことで、一般論ではなく、その人が書いた文章になります。
            </p>
          </aside>
        </section>

        <section className="anti-ai-check">
          <h2>私が公開前に確認する2つの観点</h2>
          <div className="check-grid">
            <div>
              <h3>意味と日本語</h3>
              <ul>
                <li>同じ意味を、見出しと本文で繰り返していないか</li>
                <li>比較対象がないのに「も」を使っていないか</li>
                <li>主語が「私」「著者」「あなた」などで揺れていないか</li>
                <li>声に出したとき、実際には使わない不自然な日本語になっていないか</li>
                <li>抽象語だけで、具体的な場面が消えていないか</li>
              </ul>
            </div>
            <div>
              <h3>著者の事実と個性</h3>
              <ul>
                <li>書き手が判断していないことを勝手に補っていないか</li>
                <li>成功だけを滑らかに並べていないか</li>
                <li>読みやすさのために、個性まで削っていないか</li>
                <li>迷い、言い直し、反省がすべて消えていないか</li>
                <li>外部情報を書き手の経験として書いていないか</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-conclusion">
          <h2>AIっぽさは、最後の言い換えだけでは消えない</h2>
          <p>
            AIっぽさは、語尾を変えるだけでは消えません。
            AIへ渡す材料と、原稿の途中でどんな違和感を返すかによって変わります。
          </p>
          <p>
            書き手が何を経験したのか。どこで迷ったのか。
            AIの最初の案に、なぜ「違う」と感じたのか。
          </p>
          <p>
            こうした材料と判断を渡さなければ、
            AIの文章は、書き手の個性を感じにくい原稿へ寄りやすくなります。
          </p>
          <p>
            一方で、経験と判断基準を渡せば、AIは頼れる編集者になります。
          </p>
          <p>
            話した材料を整理する。重複を減らす。日本語を直す。
            原稿のどこへ置くかを提案する。ここはAIへ任せられます。
          </p>
          <p>
            それでも最後に、「これは私が読者へ届けたい言葉か」を決めるのは、私です。
          </p>
          <div className="next-reading">
            <Link href="/library/longform-with-codex">
              現在の原稿制作フローを読む →
            </Link>
            <Link href="/resources">
              AIっぽさの確認に使える配布物を見る →
            </Link>
          </div>
        </section>

        <footer className="article-end">
          <p>
            この記事は、2026年7月時点の企画ログ、逆質問、音声回答、
            完成原稿をもとに作成しています。
          </p>
        </footer>
      </article>
      <SiteFooter />
    </main>
  );
}
