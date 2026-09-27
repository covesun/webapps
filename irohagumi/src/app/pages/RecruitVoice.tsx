import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";
import recruitHeroImg from "../../imports/ph_recruit.jpg";

export type Voice = {
  id: string;
  name: string;
  catchphrase: string;
  experience: string;
  atmosphere: string;
  message: string;
};

export const VOICES: Voice[] = [
  {
    id: "yh",
    name: "Y.H",
    catchphrase: "大きな声で挨拶と返事ができれば、誰でも大歓迎！",
    experience:
      "最初はわからない事ばかりでしたが、出来る事が増えて仕事を任された時に、確かな成長を感じられました。",
    atmosphere:
      "仕事中は真剣ですが、終わると社長も含めて全員で冗談を言い合って笑い合える、オンオフがはっきりした職場です。",
    message:
      "最初は右も左もわからないのは当たり前です！そこは気にせず、まずは「大きい声であいさつ＆返事」ができる人なら誰でも大歓迎です！",
  },
  {
    id: "ts",
    name: "T.S",
    catchphrase: "未経験からでも、ちゃんと一人前になれます。",
    experience:
      "大型タンクの据付を任されたとき、自分の位置決めがそのまま完成品の精度になると実感して身が引き締まりました。",
    atmosphere: "わからないことをすぐ聞ける先輩が多く、孤立しない現場です。",
    message: "体力に自信がなくても大丈夫。コツを覚えれば誰でもできる仕事です。",
  },
  {
    id: "mk",
    name: "M.K",
    catchphrase: "毎日違う現場、毎日違う達成感。",
    experience:
      "プラント配管の据付で、自分の担当部分がミリ単位でピタッと合った瞬間が忘れられません。",
    atmosphere: "年齢関係なくフラットに意見を言い合える雰囲気です。",
    message: "手先の器用さより、素直に聞く姿勢がある人と働きたいです。",
  },
  {
    id: "no",
    name: "N.O",
    catchphrase: "資格を取るたびに、任される仕事が増えていきます。",
    experience:
      "入社後に取得したクレーンの資格で、初めて一人で揚重作業を任されたときが一番の成長実感でした。",
    atmosphere: "資格取得の費用サポートがしっかりしてるので挑戦しやすいです。",
    message: "手に職をつけたい人には向いてる会社だと思います。",
  },
  {
    id: "kt",
    name: "K.T",
    catchphrase: "「ありがとう」を直接もらえる仕事です。",
    experience:
      "工期が厳しい現場を無事に納めて、お客様から直接お礼を言われたことが今でも励みになっています。",
    atmosphere: "現場が終わればみんなでよく喋る、風通しの良い職場です。",
    message: "体育会系のノリが苦手じゃない人なら、すぐ馴染めると思います。",
  },
  {
    id: "ri",
    name: "R.I",
    catchphrase: "未経験入社、今は後輩に教える側に。",
    experience:
      "最初は工具の名前も分からなかったのに、今では新人に教える立場になれたのが一番の変化です。",
    atmosphere: "頑張りをちゃんと見てくれてる会社だと感じます。",
    message:
      "続けていれば必ず成長できる仕事なので、まずは飛び込んでみてほしいです。",
  },
];

export default function RecruitVoice() {
  const { id } = useParams<{ id: string }>();
  const voice = VOICES.find((v) => v.id === id);

  if (!voice) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">ページが見つかりませんでした。</p>
          <Link to="/recruit" className="text-accent font-bold hover:underline">
            採用ページへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const idx = VOICES.findIndex((v) => v.id === id);
  const prev = idx > 0 ? VOICES[idx - 1] : null;
  const next = idx < VOICES.length - 1 ? VOICES[idx + 1] : null;

  return (
    <>
      {/* ── パンくず ──────────────────────────────────── */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link
            to="/recruit#voices"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            先輩社員の声 一覧へ戻る
          </Link>
        </div>
      </div>

      {/* ── PageHero ──────────────────────────────────── */}
      <PageHero
        img={recruitHeroImg}
        en="Staff Voice"
        ja={voice.name}
        objectPos="40% 45%"
      />

      {/* ── キャッチコピー ────────────────────────────── */}
      <section className="bg-secondary border-b border-border py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <span className="absolute -top-3 left-6 text-7xl text-accent/15 font-black leading-none select-none pointer-events-none" aria-hidden>
            "
          </span>
          <p className="text-2xl md:text-3xl font-black text-foreground leading-snug relative z-10">
            {voice.catchphrase}
          </p>
        </div>
      </section>

      {/* ── 01 仕事で培った経験 ───────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-16 items-start">
            <div className="flex-shrink-0">
              <p className="text-[5rem] font-black text-accent/10 leading-none select-none">01</p>
              <h2 className="text-sm font-black text-accent leading-snug -mt-2">
                仕事で培った経験<br />一番達成感があった現場
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground font-medium md:pt-3">
              {voice.experience}
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 職場の雰囲気 ───────────────────────────── */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_180px] gap-6 md:gap-16 items-start">
            <p className="text-lg leading-relaxed text-foreground font-medium md:pt-3 md:order-1">
              {voice.atmosphere}
            </p>
            <div className="flex-shrink-0 md:order-2 md:text-right">
              <p className="text-[5rem] font-black text-accent/10 leading-none select-none">02</p>
              <h2 className="text-sm font-black text-accent leading-snug -mt-2">
                うちの会社のここが好き<br />職場の雰囲気
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 メッセージ ─────────────────────────────── */}
      <section className="bg-accent py-14 md:py-20 relative overflow-hidden">
        <span
          className="absolute right-0 bottom-0 font-black text-white/[0.06] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
          aria-hidden
        >
          03
        </span>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-white/60 uppercase mb-8">
            Message
          </p>
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {voice.message}
          </p>
          <p className="font-black text-white/50 mt-8 text-base">— {voice.name}</p>
        </div>
      </section>

      {/* ── 前後ナビ ──────────────────────────────────── */}
      <div className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/recruit/voice/${prev.id}`}
              className="flex items-center gap-3 group"
            >
              <ArrowLeft
                size={16}
                className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
              />
              <div>
                <p className="text-xs text-muted-foreground font-bold">前の社員</p>
                <p className="font-black text-foreground group-hover:text-accent transition-colors">
                  {prev.name}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/recruit/voice/${next.id}`}
              className="flex items-center gap-3 justify-end text-right group"
            >
              <div>
                <p className="text-xs text-muted-foreground font-bold">次の社員</p>
                <p className="font-black text-foreground group-hover:text-accent transition-colors">
                  {next.name}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────── */}
      <ContactBand copy="まずは気軽にご連絡ください。" />
    </>
  );
}
