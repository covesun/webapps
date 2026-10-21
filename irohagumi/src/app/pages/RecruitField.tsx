import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Shield,
  GraduationCap,
  Award,
  Coins,
  BookUser,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DayTimeline, { type TimelineItem } from "../components/DayTimeline";
import heroImg from "../../imports/ph_recruit.jpg";
import heroDarkArt from "../../imports/pagehero_dark_recruit_field.webp";
import voiceAvatar1 from "../../imports/voice_avatar_1.webp";
import voiceAvatar2 from "../../imports/voice_avatar_2.webp";
import voiceAvatar3 from "../../imports/voice_avatar_3.webp";
import voiceAvatar4 from "../../imports/voice_avatar_4.webp";
import voiceAvatar5 from "../../imports/voice_avatar_5.webp";
import voiceAvatar6 from "../../imports/voice_avatar_6.webp";
const VOICE_AVATARS = [voiceAvatar1, voiceAvatar2, voiceAvatar3, voiceAvatar4, voiceAvatar5, voiceAvatar6];

/* ── データ ─────────────────────────────────────── */

const FIELD_SCHEDULE: TimelineItem[] = [
  { type: "time", time: "7:30", title: "集合・安全及び工程確認", desc: "一日の始まり。体調確認と本日の流れを共有し、危険な箇所の点検を行います。", img: heroImg },
  { type: "time", time: "8:00", title: "朝礼・ラジオ体操・KY活動", desc: "体をほぐしてケガを予防し、お互いの顔を見て体調を確認。作業前にはKY（危険予知）活動で安全な環境をつくります（休憩後にも実施）。", img: heroImg },
  { type: "between", title: "搬入・据え付け", desc: "トラックの誘導から機材の荷降ろし、仮置き場の設置まで。工程に沿って各所の据え付けを進めます。", img: heroImg },
  { type: "time", time: "10:00", title: "小休憩" },
  { type: "between", title: "据え付け・各種溶接等", desc: "各部の据え付けを行い、必要に応じて部材を溶接します。お客様の大切な機材なので、慎重かつ丁寧に作業します。", img: heroImg },
  { type: "time", time: "12:00", title: "昼休憩" },
  { type: "time", time: "13:00", title: "午前中の作業の続き", desc: "必要に応じて各所を養生し、傷がつかないよう施工します。", img: heroImg },
  { type: "time", time: "15:00", title: "小休憩" },
  { type: "between", title: "残工事の確認・各所養生確認", desc: "雨天時や溶接箇所には適切な養生が欠かせません。危険な箇所が是正されているかも確認します。", img: heroImg },
  { type: "time", time: "17:00", title: "作業終了" },
  { type: "between", title: "片付け・現場清掃・日報報告", desc: "現場を清掃し、道具を点検して作業終了。最後に本日の日報を記入して提出します。", img: heroImg },
];

const VOICE_TABS = [
  {
    id: "q1",
    no: "01",
    label: "現場の雰囲気は？",
    answers: [
      "仕事中は真剣ですが、終わると社長も含めて全員で冗談を言い合って笑い合える、オンオフがはっきりした職場です。",
      "従業員一同、本当に仲が良いです。経験問わず、一緒に楽しんで仕事ができる方をお待ちしています。",
      "みんな面倒見がいいです。現場での動きを見てアドバイスをくれたり、最後は笑いになるようなコミュニケーションがあります。",
      "みんなで色々と話し合いながら仕事が進められる、風通しの良い環境だと思います。",
      "仕事中は厳しく指導することもありますが、休憩中になれば上下関係なくフランクに会話ができる職場です。",
      "仕事中でも楽しくでき、危険な作業前には、指揮者が気を引き締めて作業に取り掛かり、メリハリの有る雰囲気です。",
    ],
  },
  {
    id: "q2",
    no: "02",
    label: "やりがいは？",
    answers: [
      "最初はわからない事ばかりでしたが、出来る事が増えて仕事を任された時に、確かな成長を感じられました。",
      "練習を重ねた溶接技術を、実際の現場で活かして形にできた時に大きな達成感がありました。",
      "最初は高所が怖かったですが、慣れて動けるようになりました。今でも安全確認を第一に仕事に取り組みました。",
      "条件が厳しくて「うまくいくかな？」と心配だった現場でも、無事に施工を終えられた時に達成感を感じました。",
      "初めて自分に現場を任された時、責任とともに大きなやりがいを感じました。",
      "重量物や高所作業など様々な経験を通して成長できました。特に昨夏の愛知の現場での組み立て溶接は、やり切った達成感があり、良い経験になりました。",
    ],
  },
  {
    id: "q3",
    no: "03",
    label: "中途採用者へ向けたメッセージ",
    answers: [
      "最初は右も左もわからないのは当たり前です！そこは気にせず、まずは「大きい声であいさつ＆返事」ができる人なら誰でも大歓迎です！",
      "未経験者、経験者問わず、楽しんで仕事できる方と働きたいです。特に20代が現在1名なので、是非一緒に働きましょう！",
      "向上心があり、人の面倒が見れて、職人を目指す強い心を持った人を待っています！",
      "新しく入ってきた仲間と一緒に、色々と話し合いながら協力して作業を進めていきたいです。",
      "現場仕事なので作業中は教えられる時間が限られますが、現場が休みの日はみっちり教えられます。安心してください！",
      "未経験でも向上心、やる気のある方と仕事を一緒にしていたいです。",
    ],
  },
];

const BENEFITS = [
  { icon: <Shield size={22} />,      label: "社会保険完備", desc: "健康保険・厚生年金・雇用保険・労災保険" },
  { icon: <GraduationCap size={22} />, label: "資格取得支援", desc: "玉掛・クレーン・フォークリフト等の取得費用をサポート" },
  { icon: <Award size={22} />,       label: "資格・技能手当", desc: "保有資格・スキルに応じた各種手当を支給" },
  { icon: <Coins size={22} />,       label: "賞与年2回",    desc: "夏・冬の年2回支給（会社業績による）" },
  { icon: <BookUser size={22} />,    label: "退職金制度",   desc: "中小企業退職金共済（中退共）加入済み" },
];

const FIELD_SPECS = [
  { label: "募集職種", value: "土木作業員・機械据付工・仕上工・鍛冶工・管理職" },
  { label: "応募資格", value: "学歴・経験不問。未経験者歓迎。経験者・有資格者は優遇します。" },
  { label: "給与",    value: "経験・能力・保有資格を考慮のうえ決定します。詳細は面接時にご説明します。" },
  { label: "昇給",    value: "あり（能力・実績による）" },
  { label: "賞与",    value: "年2回（会社業績による）" },
  { label: "諸手当",  value: "通勤手当、資格手当、時間外手当、その他各種手当" },
  { label: "勤務地",  value: "各現場（近畿圏内が中心）" },
  { label: "勤務時間", value: "8:00〜17:00" },
  { label: "休日・休暇", value: "年間休日87日、日曜・祝日、会社カレンダーによる" },
  { label: "社会保険", value: "健康保険・厚生年金保険・雇用保険・労災保険" },
  { label: "教育制度", value: "OJT研修、資格取得支援制度、先輩社員による技術指導" },
  { label: "選考方法", value: "面接（1回）" },
];

/* ── コンポーネント ──────────────────────────────── */

export default function RecruitField() {
  const [voiceTab, setVoiceTab] = useState(0);
  return (
    <>
      <PageHero darkArt={heroDarkArt} ja="現場作業員・管理職" />

      {/* ── 一日の流れ ───────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-2">現場の一日</h2>
          <p className="text-base text-muted-foreground font-medium mb-9">※あくまで一例です</p>

          <DayTimeline items={FIELD_SCHEDULE} />
        </div>
      </section>

      {/* ── 社員の声 ─────────────────────────────── */}
      <section id="voices" className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">社員の声</h2>

          {/* タブ */}
          <div role="tablist" className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 md:mb-10">
            {VOICE_TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={voiceTab === i}
                onClick={() => setVoiceTab(i)}
                className={`flex items-center gap-3 rounded-full px-5 py-3 text-left font-black text-base md:text-lg tracking-tight border transition-colors ${
                  voiceTab === i
                    ? "bg-accent text-white border-accent"
                    : "bg-card text-foreground border-border hover:border-accent/40"
                }`}
              >
                <span className={`text-sm tabular-nums ${voiceTab === i ? "text-white/70" : "text-accent"}`}>{VOICE_TABS[i].no}</span>
                {t.label}
              </button>
            ))}
          </div>

          {/* 吹き出し */}
          <div role="tabpanel" className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-9">
            {VOICE_TABS[voiceTab].answers.map((a, i) => (
              <div key={`${voiceTab}-${i}`} className="flex items-start gap-3.5 md:gap-[18px]">
                <div className="flex-shrink-0 w-14 h-14 md:w-[84px] md:h-[84px] rounded-full bg-[#e3eee6] ring-2 ring-accent/20 overflow-hidden">
                  <img src={VOICE_AVATARS[i]} alt="" className="w-full h-full object-cover select-none" />
                </div>
                <div className="relative flex-1 mt-1.5 bg-card rounded-2xl border border-border shadow-sm px-[18px] py-4 md:px-6 md:py-[22px]">
                  <span
                    aria-hidden="true"
                    className="absolute -left-2 top-[18px] md:top-[26px] w-[15px] h-[15px] rotate-45 bg-card border-l border-b border-border"
                  />
                  <p className="text-[15px] md:text-[17px] leading-[1.75] text-foreground font-medium">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 福利厚生 ─────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">福利厚生</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {BENEFITS.map(({ icon, label, desc }) => (
              <div key={label} className="bg-card rounded-2xl border border-border p-5 md:p-7 flex flex-row md:flex-col items-start gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                  {icon}
                </div>
                <div>
                  <p className="font-black text-lg md:text-xl text-foreground leading-snug mb-1 md:mb-2">{label}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 募集要項 ─────────────────────────────── */}
      <section id="specs" className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">募集要項</h2>
          <div className="rounded-2xl border border-border overflow-hidden">
            {FIELD_SPECS.map(({ label, value }, i) => (
              <div
                key={label}
                className={`grid grid-cols-[8rem_1fr] md:grid-cols-[12rem_1fr] ${
                  i !== FIELD_SPECS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="bg-accent px-5 py-5 flex items-start">
                  <span className="text-s font-black text-white tracking-wide whitespace-nowrap">{label}</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-base text-foreground font-medium leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">※ 詳細はお問い合わせ時にご確認いただけます</p>
        </div>
      </section>

      {/* ── 営業職へのリンク ─────────────────────── */}
      <div className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <Link
            to="/recruit/sales"
            className="inline-flex items-center gap-3 text-base font-black text-accent hover:text-green-800 transition-colors group"
          >
            営業職も募集中
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── 応募ボタン ───────────────────────────── */}
      <section className="bg-accent py-14 md:py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-snug mb-5 tracking-tight">
            まずは気軽に
            <br className="md:hidden" />
            ご連絡ください。
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
            「話を聞いてみたい」だけでもOKです。<br className="md:hidden" />選考への影響はありません。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/recruit/apply?job=field"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent font-black text-base hover:bg-yellow-50 transition-colors shadow-md"
            >
              応募する
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0728487936"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/60 text-white font-bold text-base hover:bg-white/10 transition-colors"
            >
              <Phone size={17} />
              072-848-7936
            </a>
          </div>
          <p className="mt-6 text-white/50 text-xs">受付時間：平日 8:00〜18:00（メールは24時間受付）</p>
        </div>
      </section>
    </>
  );
}
