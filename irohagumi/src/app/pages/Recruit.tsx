import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Clock,
  Users,
  Shield,
  GraduationCap,
  Award,
  CheckCircle,
  Star,
  Truck,
  Plus,
  Minus,
} from "lucide-react";
// import heroImg from "../../imports/DSCF3142.jpg";
import heroImg from "../../imports/ph_recruit.jpg";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350.jpg";
import work4Img from "../../imports/DSCF3225.jpg";
import officeImg from "../../imports/IMG_6008.jpg";

const VOICES = [
  {
    id: 1,
    img: work4Img,
    name: "田中",
    year: "2019年入社",
    role: "重機オペレーター",
    comment:
      "前職は全く別の仕事でしたが、先輩が丁寧に教えてくれて、入社2年でクレーンの資格が取れました。「ありがとう」と言ってもらえる仕事がしたかった自分にぴったりです。",
  },
  {
    id: 2,
    img: work2Img,
    name: "松本",
    year: "2021年入社",
    role: "施工スタッフ",
    comment:
      "重いものを正確な位置に据えたとき、チームで達成した感がたまらないんです。難しい現場ほど燃えます。会社の雰囲気がフラットなのも気に入っています。",
  },
  {
    id: 3,
    img: heroImg,
    name: "村上",
    year: "2015年入社",
    role: "施工管理・リーダー",
    comment:
      "入社して10年近く経ちますが、飽きたことがない。毎回現場が違うし、使う機材も工夫も違う。若い職人を育てることが今の楽しみになっています。",
  },
];

const JOB_SPECS = [
  { label: "募集職種", value: "土木作業員・機械据付工・仕上工・鍛冶工" },
  { label: "応募資格", value: "学歴・経験不問。未経験者歓迎。経験者・有資格者は優遇します。" },
  { label: "給与", value: "経験・能力・保有資格を考慮のうえ決定します。詳細は面接時にご説明します。" },
  { label: "昇給", value: "あり（能力・実績による）" },
  { label: "賞与", value: "年2回（会社業績による）" },
  { label: "諸手当", value: "通勤手当、資格手当、時間外手当、その他各種手当" },
  { label: "勤務地", value: "各現場（現場により異なる）" },
  { label: "勤務時間", value: "8:00〜17:00" },
  { label: "休日・休暇", value: "年間休日87日、日曜・祝日、会社カレンダーによる" },
  { label: "社会保険", value: "健康保険・厚生年金保険・雇用保険・労災保険" },
  { label: "教育制度", value: "OJT研修、資格取得支援制度、先輩社員による技術指導" },
  { label: "求める人物像", value: "明るく前向きに仕事へ取り組める方、チームワークを大切にできる方" },
  { label: "選考方法", value: "面接（1回）" },
  { label: "応募方法", value: "お電話または応募フォームよりご応募ください" },
];

const JOB_PHOTOS = [
  { img: work1Img, caption: "大型架構・精密据付工事" },
  { img: work2Img, caption: "大口径配管の吊込み・据付" },
  { img: work3Img, caption: "重量タンクの搬入・揚重" },
  { img: work4Img, caption: "溶接・グラインダー仕上げ" },
];

const SCHEDULE = [
  { time: "7:30", activity: "集合・朝礼・安全確認", desc: "その日の作業内容と安全ポイントを全員で確認。ヘルメット・安全帯を点検します。", img: work4Img },
  { time: "8:00", activity: "現場へ移動・準備", desc: "道具・資材を積み込み、各現場へ移動。準備が整ったら即作業開始です。", img: truckImg },
  { time: "9:00", activity: "午前の施工作業", desc: "クレーン操作・据付・溶接など、チームで手分けして進めます。", img: work1Img },
  { time: "12:00", activity: "昼食・休憩", desc: "弁当持参や近隣の食堂を利用。1時間、しっかり英気を養います。", img: null },
  { time: "13:00", activity: "午後の施工作業", desc: "午前の続き、または仕上げ・位置確認工程へ。チームで仕上げます。", img: work3Img },
  { time: "15:00", activity: "小休憩・進捗確認", desc: "作業の進み具合を確認し、残工程の段取りを調整します。", img: null },
  { time: "16:30", activity: "片付け・清掃・日報", desc: "道具の片付けと現場清掃。日報を記入して1日を締めくくります。", img: null },
  { time: "17:00", activity: "終業・帰社", desc: "残業は少なく、メリハリのある働き方が基本です。お疲れさまでした！", img: null },
];

const BENEFITS = [
  { icon: <Shield size={20} />, label: "社会保険完備", desc: "健康保険・厚生年金・雇用保険・労災保険" },
  { icon: <GraduationCap size={20} />, label: "資格取得支援", desc: "玉掛・クレーン・フォークリフト等の費用をサポート" },
  { icon: <CheckCircle size={20} />, label: "作業服支給", desc: "入社時に作業服一式を会社が支給" },
  { icon: <Truck size={20} />, label: "通勤手当", desc: "実費分の通勤手当を全額支給" },
  { icon: <Clock size={20} />, label: "時間外手当", desc: "残業分は全額支給（法定基準以上）" },
  { icon: <Award size={20} />, label: "賞与年2回", desc: "夏・冬の年2回支給（会社業績による）" },
  { icon: <Users size={20} />, label: "先輩社員サポート", desc: "専任の先輩社員がマンツーマンで技術を指導" },
  { icon: <Star size={20} />, label: "資格・技能手当", desc: "保有資格・スキルに応じた各種手当を支給" },
];

const FAQS = [
  { q: "未経験でも応募できますか？", a: "はい、もちろんです。学歴・経験は一切不問です。入社後はOJT研修と先輩社員による丁寧な指導があります。実際に未経験からスタートして活躍している社員が多数在籍しています。" },
  { q: "どんな資格が取得できますか？", a: "玉掛技能者・クレーン運転士・フォークリフト運転技能者・移動式クレーン運転士など、現場で直接活かせる資格の取得を会社が費用面でもサポートします。" },
  { q: "勤務地はどこになりますか？", a: "基本的には近畿圏内（大阪・兵庫・京都・滋賀など）の各現場です。遠方の出張案件もありますが、事前に調整しますのでご安心ください。" },
  { q: "選考の流れを教えてください。", a: "お電話またはフォームでのご連絡 → 面接（1回、約1時間）→ 採用決定のシンプルな流れです。面接日程はお気軽にご相談ください。" },
  { q: "女性や高齢の方でも働けますか？", a: "年齢・性別を問わず歓迎しています。現場の作業内容や体力に合わせた配置を検討しますので、まずはお気軽にご相談ください。" },
  { q: "残業はどのくらいありますか？", a: "現場の進捗次第ですが、基本的には17:00終業を目指しています。残業が発生した場合は時間外手当を全額支給します。" },
];

export default function Recruit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero & 採用メッセージ ───────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-zinc-100">
        <img
          src={heroImg}
          alt="現場で働くスタッフ"
          className="absolute inset-0 w-full h-full object-cover object-[40%_45%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14 md:pb-20">
          <h1 className="text-4xl md:text-6xl font-black text-foreground/95 tracking-tight leading-tight mb-3 text-halo">
            未経験から、
            <br />
            一人前の技術者へ。
          </h1>
          <p className="text-base md:text-lg font-bold text-muted-foreground">
            意欲のある仲間を、いろは組は全力でサポートします。
          </p>
        </div>
      </section>

      {/* ── 採用メッセージ本文 ────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-accent mb-4 uppercase hidden">Message</p>
              <h2 className="text-4xl md:text-5xl font-black leading-snug tracking-tight mb-6">
                明るくて、
                <br />
                やる気のある方募集！
                <br />
                <span className="text-accent text-xl">（未経験の方、丁寧に指導します）</span>
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium">
                <p>
                  いろは組では、人材育成に力を入れています。必要な資格を取り、社業発展に協力していただき、共に成果とやりがいを分かち合いたいと思います。年齢を問わず採用の門戸を開き、技術指導をいたします。
                </p>
                <p>
                  先輩社員が一つひとつ丁寧にサポートし、資格取得や技術習得をバックアップします。分からないことを気軽に相談できる仲間がいるから、未経験でも安心して成長できます。地域の未来を支える仕事に、私たちと一緒に挑戦してみませんか。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {JOB_PHOTOS.map(({ img, caption }) => (
                <div key={caption} className="group relative overflow-hidden rounded-xl bg-zinc-200">
                  <div className="aspect-square overflow-hidden">
                    <img src={img} alt={caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-bold leading-snug">{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 社員の声 ──────────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">先輩社員の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {VOICES.map((v) => (
              <div key={v.id} className="bg-card rounded-2xl p-7 shadow-sm border border-border flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-200 flex-shrink-0 ring-2 ring-accent/20">
                    <img src={v.img} alt={`${v.name}さん`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-lg text-foreground tracking-tight">
                      {v.name}
                      <span className="text-muted-foreground font-medium text-base ml-1">さん</span>
                    </p>
                    <p className="text-xs text-accent font-bold mt-0.5">{v.role}</p>
                    <p className="text-xs text-muted-foreground font-medium">{v.year}</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <blockquote className="text-base leading-relaxed text-muted-foreground font-medium relative">
                  <span className="absolute -top-1 -left-1 text-4xl text-accent/20 font-black leading-none select-none">"</span>
                  <span className="relative">{v.comment}</span>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 「いろは」の１日 ──────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.25em] text-accent mb-4 uppercase hidden">A Day in Irohagumi</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">「いろは」の１日</h2>
          <div className="relative">
            <div className="absolute left-[7.375rem] md:left-[10.375rem] top-3 bottom-3 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-5">
              {SCHEDULE.map((item) => (
                <div key={item.time} className="flex gap-4 sm:gap-8 items-start">
                  <div className="flex-shrink-0 w-20 md:w-32 text-right pr-4 pt-4">
                    <span className="text-lg font-black text-foreground tabular-nums">{item.time}</span>
                  </div>
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0 pt-6">
                    <div className="w-3 h-3 rounded-full border-2 border-accent bg-white z-10" />
                  </div>
                  <div className="flex-1 flex gap-4 items-start">
                    <div className="flex-1 bg-secondary rounded-xl px-5 py-4">
                      <p className="font-black text-lg text-foreground mb-1">{item.activity}</p>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </div>
                    {item.img && (
                      <div className="w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden bg-zinc-200 flex-shrink-0">
                        <img src={item.img} alt={item.activity} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 福利厚生・制度 ────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">福利厚生・制度</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {BENEFITS.map(({ icon, label, desc }) => (
              <div key={label} className="bg-card rounded-2xl border border-border p-5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">{icon}</div>
                <div>
                  <p className="font-black text-lg text-foreground mb-1">{label}</p>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 採用情報（募集要項） ──────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-7 md:mb-10">募集要項</h2>
          <div className="rounded-2xl border border-border overflow-hidden">
            {JOB_SPECS.map(({ label, value }, i) => (
              <div
                key={label}
                className={`grid grid-cols-[8rem_1fr] md:grid-cols-[12rem_1fr] ${
                  i !== JOB_SPECS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="bg-accent px-5 py-5 flex items-start">
                  <span className="text-s font-black text-white tracking-wide whitespace-nowrap">{label}</span>
                </div>
                <div className="px-6 py-5">
                  {value.split("\n").map((line, j) => (
                    <p key={j} className={`text-base text-foreground font-medium leading-relaxed ${j > 0 ? "mt-1.5 text-muted-foreground text-xs" : ""}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">※ 詳細はお問い合わせ時にご確認いただけます</p>
        </div>
      </section>

      {/* ── よくある質問 ──────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-7 md:mb-10">よくある質問</h2>
          <div className="max-w-3xl flex flex-col gap-3">
            {FAQS.map(({ q, a }, idx) => (
              <div key={idx} className="rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-secondary transition-colors"
                >
                  <span className="font-black text-lg text-foreground leading-snug flex items-start gap-3">
                    <span className="text-accent font-black text-xs flex-shrink-0 mt-0.5 bg-accent/10 rounded-full w-5 h-5 flex items-center justify-center">Q</span>
                    {q}
                  </span>
                  {openFaq === idx ? (
                    <Minus size={15} className="text-accent flex-shrink-0" />
                  ) : (
                    <Plus size={15} className="text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 bg-secondary">
                    <div className="flex items-start gap-3">
                      <span className="text-white font-black text-xs flex-shrink-0 bg-accent rounded-full w-5 h-5 flex items-center justify-center mt-0.5">A</span>
                      <p className="text-base text-muted-foreground font-medium leading-relaxed">{a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── エントリー ────────────────────────────────── */}
      <section className="bg-accent py-14 md:py-20 px-6 relative overflow-hidden">
        <img src={officeImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-white/70 mb-5 uppercase">Entry</p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-snug mb-5 tracking-tight">
            まずは気軽に
            <br />
            ご連絡ください。
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
            「話を聞いてみたい」だけでもOKです。選考への影響はありません。お気軽にどうぞ。
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
