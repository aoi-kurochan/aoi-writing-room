import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../_components/SiteChrome";
import { articles } from "../../_data/content";

const article = articles[1];

const Example = ({
  id,
  number,
  title,
  sourceLabel,
  source,
  feedback,
  after,
  lesson,
}: {
  id?: string;
  number: string;
  title: string;
  sourceLabel: string;
  source: React.ReactNode;
  feedback: React.ReactNode;
  after: React.ReactNode;
  lesson: React.ReactNode;
}) => (
  <section className="case-example" id={id}>
    <header>
      <span>{number}</span>
      <h2>{title}</h2>
    </header>
    <div className="compare-block before-block">
      <p className="compare-label">{sourceLabel}</p>
      <div>{source}</div>
    </div>
    <div className="feedback-block">
      <p className="compare-label">私が返したこと・編集判断</p>
      <div>{feedback}</div>
    </div>
    <div className="compare-block after-block">
      <p className="compare-label">完成稿</p>
      <div>{after}</div>
    </div>
    <aside className="lesson-box">
      <b>ほかの原稿で応用するなら</b>
      <div>{lesson}</div>
    </aside>
  </section>
);

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
            という声を多くいただきました。実際の制作記録から、修正の判断例をまとめています。
          </p>
          <p className="article-summary">
            私が「AIっぽい」と感じるのは、語尾が整っている文章ではありません。
            書き手が経験していないことを補い、迷いを消し、どこかで見た結論へ滑らかに着地する文章です。
            ここでは、実際のログと完成稿を並べ、何を変えたのかを見せます。
          </p>
          <dl className="article-facts">
            <div><dt>題材</dt><dd>『初めてのBrainが100万円売れた私の話』</dd></div>
            <div>
              <dt>見せるもの</dt>
              <dd>AIの案、私の返答、音声材料、完成稿のうち、各判断を確認できる資料</dd>
            </div>
            <div><dt>関連する本編</dt><dd>本編の{article.chapters}「AIライティングは作り込みが超重要」</dd></div>
          </dl>
        </header>

        <section className="case-intro">
          <h2>この記事で「AIっぽさ」と呼ぶもの</h2>
          <p>
            AIが書いた文章すべてを否定する言葉ではありません。
            事実を順番に並べただけの説明、比較対象のない「も」、
            書き手が判断していない内容の補足、成功だけを滑らかにつないだ文章。
            そうした「著者が見えなくなった状態」を、この記事ではAIっぽさと呼びます。
          </p>
          <p>
            掲載するのは、保存されている企画ログ、音声回答、改稿指示、完成原稿で確認できた文章だけです。
            読みやすくするために改行と公開上不要な内輪語は整えていますが、
            後から作った文章を当時の原文として見せることはしません。
          </p>
        </section>

        <Example
          id="examples"
          number="01"
          title="「書かないこと」を並べず、渡す内容を前向きに示す"
          sourceLabel="企画段階でAIが出した構成案"
          source={
            <>
              <p>「この本で書くこと、書かないこと」</p>
              <p>
                書かないことは、売れるBrainの中身、セールスレター、ローンチ、
                メルマガ、ファネル、LTVです。ここを明記しましょう。
              </p>
            </>
          }
          feedback={
            <>
              <p>書かないことを明記することは、書いていることと同じでは？</p>
              <p>
                制作側では境界を決めます。でも読者向け本文では、
                この本で何を受け取れるのかを前向きに書く方が自然だと思いました。
              </p>
            </>
          }
          after={
            <>
              <p>
                この本では、普通の会社員である私が、Brainを出したときのことだけでなく、
                出す前から何を考えて、何をやってきたのかも、一緒に振り返ります。
              </p>
              <p>
                私が書けるのは、「普通の会社員が副業で初めて出したBrainを、
                こう考えて、こう販売した」という、一人称の経験談です。
              </p>
            </>
          }
          lesson={
            <p>
              制作メモでは扱わない範囲を決める。読者向け本文では、
              禁止事項の羅列ではなく、読めば何が分かるのかを書く。
            </p>
          }
        />

        <Example
          number="02"
          title="大きな抽象語を、読者ができることまで下ろす"
          sourceLabel="企画段階でAIが置いた中心語"
          source={
            <>
              <p>Brainで売れるのは「情報」ではなく「読者の変化」です。</p>
              <p>読み終えたあと、読者がどう変わるかを先に決めます。</p>
            </>
          }
          feedback={
            <>
              <p>
                「読者の変化」だけだと、少しきれいすぎると思いました。
                まだ知らないサービスを理解できた、最初の一歩を踏み出せた。
                そこまででも、十分に価値ではないでしょうか。
              </p>
            </>
          }
          after={
            <>
              <p>
                初心者の方にとっては、最初の一歩が、いちばん重い。
              </p>
              <p>
                Brainの価値の1つは、この最初の一歩の重さを、軽くすることです。
              </p>
              <p>
                「最初の一歩を、軽くする」だけで、しっかり価値になる。
              </p>
            </>
          }
          lesson={
            <p>
              「成長」「変化」「価値」と書いたら、読み終えた読者が何を理解し、
              何を判断し、何を始められるのかまで具体化する。
            </p>
          }
        />

        <Example
          number="03"
          title="成功の数字を、売れなかった時間まで含む実録へ戻す"
          sourceLabel="逆質問へ答えた音声材料"
          source={
            <>
              <p>同じ音声回答を、AIっぽさの修正という角度から再掲します。</p>
              <p>
                最初ね、15部ぐらいかな。1,980円で売って。で、そっからピタッと止まったんだよね。
                2週間ぐらい、そっから売れなかったんじゃないかな。
              </p>
              <p>あんなに時間かけて作ったのに、と思ったね、この時は。</p>
            </>
          }
          feedback={
            <>
              <p>
                数字だけ置くと、発売直後から順調だったように見えます。
                初めてで15部が多いか少ないか分からなかったこと、
                売上が止まり、レビューもつかなかった時間を残しました。
              </p>
            </>
          }
          after={
            <>
              <p>発売直後、最初に15部くらい売れました。</p>
              <p>
                でも、その15部が、多いのか少ないのか。当時の私には、判断がつかなかったです。
              </p>
              <p>そして、そのあと。売れ行きが、ピタッと止まりました。</p>
              <p>体感で、2週間くらい、ほとんど動かなかった。</p>
              <p>「あんなに時間をかけて作ったのに」</p>
              <p>「刺さらんかったのかな」</p>
              <p>かなり不安になりました。</p>
            </>
          }
          lesson={
            <p>
              成果の数字だけを書かない。比べる基準がなかったこと、止まった時間、
              そのときに出た言葉まで残す。
            </p>
          }
        />

        <Example
          number="04"
          title="一般論ではなく、自分が守っている線を書く"
          sourceLabel="読者像について答えた音声材料"
          source={
            <>
              <p>
                自分がやったことがないことをBrainにして書くっていうのが、
                あんまりイメージが湧かないです。
              </p>
              <p>
                基本は、その人が実践している生々しさが大事なので、
                自分がやったことをBrainにするのが一番いいかなと思っています。
              </p>
            </>
          }
          feedback={
            <>
              <p>
                「無料情報の寄せ集めは弱い」という一般論だけで終わらせず、
                私自身が原稿を書くときに守っている線として残しました。
              </p>
              <p>
                ただし、調べた事実を書くことまで禁止する意味ではありません。
                やっていないことを、自分の実践として書かないという基準です。
              </p>
            </>
          }
          after={
            <>
              <p>特に、自分がやっていない収益の作り方を語るのは、いちばん危ないパターンです。</p>
              <p>
                この「自分がやっていないことを書かない」は、私がずっと大事にしていることです。
              </p>
              <p>
                あ、この本を書いたら読まれるだろうな…と思うことでも、
                自分がやってないことは、書かない。
              </p>
            </>
          }
          lesson={
            <p>
              自分がやっていないことを、自分の実践として書かない。
              外部の事実は出典を確認し、自分の体験とは分けて書く。
            </p>
          }
        />

        <section className="anti-ai-check">
          <h2>私が公開前に確認する2つの方向</h2>
          <div className="check-grid">
            <div>
              <h3>意味と日本語</h3>
              <ul>
                <li>同じ意味を、見出しと本文で繰り返していないか</li>
                <li>比較対象がないのに「も」を使っていないか</li>
                <li>主語が「あおい」と「あなた」で揺れていないか</li>
                <li>声に出すと、誰も言わない日本語になっていないか</li>
                <li>抽象語だけで、具体的な場面が消えていないか</li>
              </ul>
            </div>
            <div>
              <h3>著者の事実と個性</h3>
              <ul>
                <li>書き手が判断していないことを勝手に補っていないか</li>
                <li>成功だけを滑らかに並べていないか</li>
                <li>読みやすさのために、個性まで削っていないか</li>
                <li>迷い、言い直し、反省が全部消えていないか</li>
                <li>外部情報を書き手の経験として書いていないか</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="case-conclusion">
          <h2>AIっぽさを消すのは、最後の言い換えではありません</h2>
          <p>
            一番大きいのは、AIへ渡す材料です。書き手が何を経験したのか。
            どこで怖かったのか。最初の案へ、なぜ「違う」と思ったのか。
            そこまで渡さなければ、AIは平均的にきれいな文章を作ります。
          </p>
          <p>
            逆に、生の材料と判断基準があれば、AIはかなり頼れる編集者になります。
            重複を整え、日本語を直し、章へ配置する。それでも最後に、
            「これは私の言葉か」を決めるのは自分です。
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
