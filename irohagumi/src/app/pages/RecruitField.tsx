import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Shield,
  GraduationCap,
  Award,
  Coins,
  BookUser,
  User,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DayTimeline, { type TimelineItem } from "../components/DayTimeline";
import heroImg from "../../imports/ph_recruit.jpg";

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

const FIELD_VOICES = [
  {
    id: "staff-a",
    name: "H",
    role: "社員",
    year: "8年目",
    catch: "大きな声で挨拶と返事ができれば、誰でも大歓迎！",
  },
  {
    id: "staff-b",
    name: "I",
    role: "社員",
    year: "6年目",
    catch: "アットホームな会社です！特に20代の方、一緒に働きましょう！",
  },
  {
    id: "staff-c",
    name: "K",
    role: "工事部部長",
    year: "3年目",
    catch: "面倒見のいい先輩たちが、しっかり技術を伝えます！",
  },
  {
    id: "staff-d",
    name: "O",
    role: "工事部主任",
    year: "10年目",
    catch: "仲間と話し合いながら進める、チームワークの良さが自慢です",
  },
  {
    id: "staff-e",
    name: "K",
    role: "工事部主任",
    year: "8年目",
    catch: "現場が休みの日には、みっちり技術を教えます！",
  },
  {
    id: "staff-f",
    name: "K",
    role: "協力会社",
    year: "",
    catch: "未経験でもやる気があれば大歓迎！メリハリのある職場で共に成長しましょう！",
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
  return (
    <>
      <PageHero
        img={heroImg}
        en="Field Worker / Manager"
        ja="現場作業員・管理職"
        objectPos="40% 45%"
      />

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {FIELD_VOICES.map((v) => (
              <Link
                key={v.id}
                to={`/recruit/field/${v.id}`}
                className="bg-card rounded-2xl p-7 shadow-sm border border-border flex flex-col gap-5 hover:shadow-md hover:border-accent/40 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 ring-2 ring-accent/20">
                    <User size={28} className="text-accent/50" />
                  </div>
                  <div>
                    <p className="font-black text-lg text-foreground tracking-tight">
                      {v.name}
                      <span className="text-muted-foreground font-medium text-base ml-1">さん</span>
                    </p>
                    <p className="text-xs text-accent font-bold mt-0.5">{v.role}</p>
                    {v.year && <p className="text-xs text-muted-foreground font-medium">{v.year}</p>}
                  </div>
                </div>
                <div className="h-px bg-border" />
                <blockquote className="text-lg md:text-xl leading-snug text-foreground font-bold tracking-tight relative flex-1 pl-5">
                  <span className="absolute -top-2 left-0 text-5xl text-accent/30 font-black leading-none select-none">"</span>
                  <span className="relative">{v.catch}</span>
                </blockquote>
                <span className="inline-flex items-center gap-2 text-sm font-black text-accent group-hover:text-green-800 transition-colors">
                  詳しく見る
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
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
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent font-black text-base hover:bg-yellow-50 transition-colors shadow-md"
            >
              お問い合わせフォームへ
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
