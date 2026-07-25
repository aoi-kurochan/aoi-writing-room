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
            購入者アンケートでは、AIっぽくならない文章の作り方を詳しく知りたい、
            という声を多くいただきました。
          </p>
          <p className="article-summary">
            このページでは、AIが出した案や音声で話した材料に、私がどんな違和感を持ち、
            何を直して完成稿へつなげたのかを、4つの実例で紹介します。
          </p>
          <dl className="article-facts">
            <div>
              <dt>題材</dt>
              <dd>『初めてのBrainが100万円売れた私の話』</dd>
            </div>
            <div>
              <dt>見せるもの</dt>
              <dd>AIの案、音声回答、私の違和感・判断、完成稿</dd>
            </div>
            <div>
              <dt>関連する本編</dt>
              <dd>本編の{article.chapters}「AIライティングは作り込みが超重要」</dd>
            </div>
          </dl>
        </header>

        <section className="case-intro" id="examples">
          <h2>この記事で扱う「AIっぽさ」と、掲載資料</h2>
          <p>
            ここでいう「AIっぽさ」は、AIを使ったこと自体ではありません。
            文章は整っていても、書き手の経験、迷い、判断が見えず、
            誰が書いても同じような文章に見える状態を指します。
          </p>
          <h3>この記事に掲載する資料</h3>
          <p>題材は、『初めてのBrainが100万円売れた私の話』です。</p>
          <p>以下では、資料の種類を次のように区別します。</p>
          <ul>
            <li>
              <b>AIの初期案：</b>
              制作中にAIが出した案
            </li>
            <li>
              <b>音声回答の文字起こし：</b>
              私が音声で答えた内容の原文抜粋
            </li>
            <li>
              <b>私の違和感・判断：</b>
              当時のやり取りをもとに、私が何に違和感を持ち、
              何を直す・残すと決めたのかを整理したもの
            </li>
            <li>
              <b>完成稿：</b>
              最終的に本へ掲載した文章
            </li>
          </ul>
          <p>
            実際の作業記録と完成稿をもとに、何をどう直したのかが分かる形へ整理しています。
          </p>
        </section>

        <section className="case-example">
          <header>
            <span>01</span>
            <h2>AIが「書かないこと」を並べたら、読者が受け取れる内容へ直す</h2>
          </header>

          <h3>この例で起きていた「AIっぽさ」</h3>
          <p>
            AIから、「この本で扱わない内容も本文で説明する」という構成が提案されました。
          </p>
          <p>
            本の範囲を決めること自体は必要です。ただ、そのまま本文へ入れると、
            読者が最初に知りたい「この本を読むと何が分かるのか」より、
            書かれていない内容の説明が前へ出てしまいます。
          </p>

          <div className="compare-block before-block">
            <p className="compare-label">AIが出した構成案の要旨</p>
            <blockquote>
              この本で扱う内容と、扱わない内容を分け、本文で明記する。
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="compare-label">私が感じた違和感</p>
            <p>
              ただ、何を書かないかは、読者が最初に知りたいことではないと思いました。
            </p>
            <p>
              自分用の企画メモでは、扱う範囲を決めます。でも、読者向けの本文で中心に置きたいのは、
              「この本から何を受け取れるのか」です。
            </p>
            <p>
              そこで、対象外の説明を並べるのではなく、私が実際に何を経験し、
              何を振り返る本なのかを前へ出すことにしました。
            </p>
          </div>

          <div className="compare-block after-block">
            <p className="compare-label">完成稿</p>
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
            <p>本の範囲を決める作業と、読者へ価値を伝える文章は分けます。</p>
            <p>
              自分用の企画メモでは、扱わない範囲まで決めて構いません。
              読者向けの本文では、禁止事項を並べるより、
              「この本を読むと何が分かるのか」を先に書きます。
            </p>
          </aside>
        </section>

        <section className="case-example">
          <header>
            <span>02</span>
            <h2>「読者の変化」という抽象語を、読者ができることへ直す</h2>
          </header>

          <h3>この例で起きていた「AIっぽさ」</h3>
          <p>AIの初期案では、「読者の変化」という言葉が使われていました。</p>
          <p>
            意味は間違っていません。ただ、「変化」「成長」「価値」といった大きな言葉だけでは、
            読み終えた読者に何が起きるのかが見えません。
          </p>

          <div className="compare-block before-block">
            <p className="compare-label">AIの初期案</p>
            <blockquote>
              <p>Brainで売れるのは「情報」ではなく「読者の変化」です。</p>
              <p>読み終えたあと、読者がどう変わるかを先に決めます。</p>
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="compare-label">私が感じた違和感</p>
            <p>「読者の変化」だけだと、少しきれいすぎると思いました。</p>
            <p>
              まだ知らないサービスを理解できた。最初の一歩を踏み出せた。
              そこまででも、十分に価値があると思います。
            </p>
            <p>
              そこで、「最初の一歩を軽くする」という、
              読者が受け取れる具体的な価値へ言い換えました。
            </p>
          </div>

          <div className="compare-block after-block">
            <p className="compare-label">完成稿</p>
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

        <section className="case-example">
          <header>
            <span>03</span>
            <h2>成果だけの成功談に、売れなかった時間と不安を戻す</h2>
          </header>

          <h3>この例で起きていた「AIっぽさ」</h3>
          <p>売れた部数だけを書くと、発売直後から順調だった成功談に見えます。</p>
          <p>
            でも、当時の私は、最初に売れた15部が多いのか、少ないのかさえ分かっていませんでした。
            その後、売れ行きが止まった時間もあります。
          </p>
          <p>
            その迷いと時間を消すと、数字は合っていても、
            私が経験した話ではなくなってしまいます。
          </p>
          <p className="source-note">
            この音声回答は、原稿制作フローの記事でも紹介しました。
            ここでは、成功談から「AIっぽさ」を消すという角度で、もう一度見ていきます。
          </p>

          <div className="compare-block before-block">
            <p className="compare-label">音声回答の文字起こし（抜粋）</p>
            <blockquote>
              <p>
                最初ね、15部ぐらいかな。1,980円で売って。で、そっからピタッと止まったんだよね。
              </p>
              <p>2週間ぐらい、そっから売れなかったんじゃないかな。</p>
              <p>あんなに時間かけて作ったのに、と思ったね、この時は。</p>
            </blockquote>
          </div>

          <div className="feedback-block">
            <p className="compare-label">私が残すと決めたこと</p>
            <p>最初に15部売れたという数字だけで終わらせず、次の3つを残しました。</p>
            <ul>
              <li>15部が多いのか、少ないのか判断できなかったこと</li>
              <li>売れ行きが止まった約2週間</li>
              <li>「あんなに時間をかけて作ったのに」と不安になったこと</li>
            </ul>
          </div>

          <div className="compare-block after-block">
            <p className="compare-label">完成稿</p>
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
            <p>
              成果の数字だけを書かず、その数字を当時どう受け止めたのかまで確認します。
            </p>
            <p>
              比べる基準がなかったこと。止まった時間。そのときに出た言葉。
              そこまで残すと、数字だけでは見えなかった当時の実感が、読者にも伝わります。
            </p>
          </aside>
        </section>

        <section className="case-example">
          <header>
            <span>04</span>
            <h2>AIにも書ける一般論へ、自分が守る判断基準を足す</h2>
          </header>

          <h3>この例で起きていた「AIっぽさ」</h3>
          <p>「実践者の生々しさが大事」と書くだけなら、AIにも書けます。</p>
          <p>
            私が何を生々しさだと考え、原稿を書くときにどこで線を引いているのか。
            その判断基準がなければ、誰が書いても同じ一般論で終わります。
          </p>

          <div className="compare-block before-block">
            <p className="compare-label">音声回答の文字起こし（抜粋）</p>
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
            <p className="compare-label">私が文章へ残すと決めた基準</p>
            <p>
              「無料情報の寄せ集めは弱い」という一般論ではなく、
              私自身が原稿を書くときに守っている基準として残しました。
            </p>
            <p>それは、調べた事実を書いてはいけない、という意味ではありません。</p>
            <p>
              自分がやっていないことを、自分の実践として書かない。
              外部から調べた事実と、自分の経験を混ぜない。
              私が大事にしているのは、この線です。
            </p>
          </div>

          <div className="compare-block after-block">
            <p className="compare-label">完成稿</p>
            <blockquote>
              <p>特に、自分がやっていない収益の作り方を語るのは、いちばん危ないパターンです。</p>
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
            <p>一般論を書いたら、「私は実際にどこで判断しているのか」まで確認します。</p>
            <p>
              自分がやっていないことを、自分の実践として書かない。
              外部の事実は出典を確認し、自分の体験とは分けて書く。
              この判断基準まで書くことで、一般論ではなく、その人が書いた文章になります。
            </p>
          </aside>
        </section>

        <section className="anti-ai-check">
          <h2>私が公開前に確認する2つの方向</h2>
          <div className="check-grid">
            <div>
              <h3>意味と日本語</h3>
              <ul>
                <li>同じ意味を、見出しと本文で繰り返していないか</li>
                <li>比較対象がないのに「も」を使っていないか</li>
                <li>主語が「私」「著者」「あなた」などで揺れていないか</li>
                <li>声に出したとき、誰も言わない日本語になっていないか</li>
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
            AIの最初の案へ、なぜ「違う」と感じたのか。
            その材料がなければ、文章だけを整えても、
            誰が書いたのか見えない原稿へ寄りやすくなります。
          </p>
          <p>
            一方で、経験と判断基準を渡せば、AIは頼れる編集者になります。
            話した材料を整理する。重複を減らす。日本語を直す。
            原稿のどこへ置くかを提案する。ここはAIへ任せられます。
          </p>
          <p>それでも最後に、「これは私の言葉か」を決めるのは自分です。</p>
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
          <p>検証時点：{article.verified}</p>
          <p>検証資料：{article.environment}</p>
          <p>現在の状態：{article.status}</p>
          <p>掲載文は、保存されている資料と完成原稿を再照合しています。</p>
        </footer>
      </article>
      <SiteFooter />
    </main>
  );
}
