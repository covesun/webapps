import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowRight, Phone, ChevronDown, Settings, Weight, Truck, Package } from "lucide-react";
import ContactBand from "../components/ContactBand";
import heroImg from "../../imports/DSCF3142_2K.jpg";
import warehouseImg from "../../imports/Position_trucks_around_warehouse_2K_202608101551.jpg";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350_2K.jpeg";
import work4Img from "../../imports/DSCF3225.jpg";
import officeImg from "../../imports/IMG_6008.jpg";

const BUSINESSES = [
  {
    icon: <Settings size={28} strokeWidth={1.5} />,
    label: "プラント工事",
    img: work1Img,
    desc: "化学・食品・製薬プラントの設備据付から架台組立・配管工事まで、精密さが求められる工事を専門に手がけます。",
  },
  {
    icon: <Weight size={28} strokeWidth={1.5} />,
    label: "重量物据付",
    img: work3Img,
    desc: "数トン〜数十トン規模の大型機器・タンクの搬入・吊込み・精密据付。難しい条件下でも確実に仕上げます。",
  },
  {
    icon: <Truck size={28} strokeWidth={1.5} />,
    label: "クレーン作業",
    img: heroImg,
    desc: "ラフタークレーン・カーゴクレーンを自社保有。高所揚重・狭小現場への対応力が強みです。",
  },
  {
    icon: <Package size={28} strokeWidth={1.5} />,
    label: "機材レンタル",
    img: truckImg,
    desc: "保有する重機・クレーン車のレンタルにも対応。※詳細はお問い合わせください。",
  },
];

const HOME_WORKS = [
  {
    id: "w1",
    img: work1Img,
    alt: "プラント設備・鉄骨据付工事",
    label: "プラント設備据付",
    desc: "大型架構・鉄骨フレームの精密据付工事",
  },
  {
    id: "w2",
    img: work2Img,
    alt: "大型配管据付工事",
    label: "大型配管据付",
    desc: "工場・プラント内の大口径配管の設置・位置決め",
  },
  {
    id: "w3",
    img: work3Img,
    alt: "重量物搬入・揚重工事",
    label: "重量物搬入・揚重",
    desc: "大型タンク・機器の精密吊込み・搬入据付",
  },
  {
    id: "w4",
    img: work4Img,
    alt: "溶接・仕上げ工事",
    label: "溶接・仕上げ施工",
    desc: "現場溶接・グラインダー仕上げによる高品質施工",
  },
];

const PAGE_LINKS = [
  { to: "/company", label: "会社概要", en: "About", img: officeImg, desc: "代表メッセージ・会社情報・アクセス" },
  { to: "/business", label: "事業内容", en: "Business", img: work1Img, desc: "プラント工事・重量物据付・クレーン・機材レンタル" },
  { to: "/works", label: "工事実績", en: "Works", img: work3Img, desc: "近畿・全国 300件以上の施工事例" },
  { to: "/recruit", label: "採用情報", en: "Recruit", img: heroImg, desc: "未経験歓迎・キャリアステップ・福利厚生" },
  { to: "/contact", label: "お問い合わせ", en: "Contact", img: warehouseImg, desc: "見積もり・ご相談・エントリーはこちら" },
];

const HERO_SLIDES = [
  { img: warehouseImg, pos: "object-[25%_30%]" },
  { img: heroImg, pos: "object-[35%_30%]" },
  { img: work1Img, pos: "object-[30%_center]" },
  { img: truckImg, pos: "object-[0%_5%]" },
  { img: work3Img, pos: "object-[30%_center]" },
];

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero（スライドショー） ──────────────────────── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-zinc-900">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.img}
            src={slide.img}
            alt="株式会社いろは組"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide.pos} ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400 z-10" />
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="font-black tracking-tight leading-snug mb-10 text-halo">
                <span className="text-2xl md:text-3xl block mb-3 text-foreground/70 font-bold tracking-[0.2em]">
                  運ぶ、吊るす、据える
                </span>
                <span className="text-[2.75rem] md:text-6xl block leading-tight text-foreground/90">
                  すべての始まりは
                  <br />
                  <span className="text-accent">『いろは』</span>から
                </span>
              </h1>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors duration-200 shadow-md"
                >
                  お問い合わせ
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/works"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border-2 border-accent text-accent font-bold text-sm hover:bg-accent hover:text-white transition-colors duration-200 shadow-md"
                >
                  施工実績を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`スライド ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 h-2 bg-accent" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1 text-white/75">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── 会社概要ダイジェスト ─────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200">
              <img
                src={truckImg}
                alt="株式会社いろは組 自社クレーン車"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-8 bg-yellow-400 text-[#0c1f12] px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-xs font-black tracking-widest mb-1 opacity-60">SINCE</p>
              <p className="text-4xl font-black leading-none">2008</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-snug mb-6 tracking-tight">
              「難しい」と言われる
              <br />
              仕事を、得意にしてきた。
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium">
              <p>
                株式会社いろは組は、大阪を拠点にプラント設備・重量物の据付工事を専門とする施工会社です。2008年の創業以来、化学・食品・製薬・電力など幅広い産業のプラントで、大型機器の精密据付から高所揚重まで手がけてきました。
              </p>
              <p>
                "重くて・高くて・狭い"——そんな三拍子揃った現場こそ、私たちの出番です。熟練の職人技術と最新の重機を組み合わせ、安全・確実・スピーディに施工します。
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8 mb-8">
              {[
                { num: "300+", label: "施工実績" },
                { num: "15年", label: "専門技術" },
                { num: "24h", label: "緊急対応" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-4xl font-black text-accent">{num}</p>
                  <p className="text-xs font-bold text-muted-foreground mt-1 tracking-wider">{label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/company"
              className="inline-flex items-center gap-2 text-base font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors"
            >
              会社概要を見る <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 事業内容ダイジェスト ─────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">
              私たちが得意とする
              <br />4つの領域
            </h2>
            <Link
              to="/business"
              className="inline-flex items-center gap-2 text-base font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors self-start md:self-auto"
            >
              事業内容を詳しく見る <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {BUSINESSES.map(({ icon, label, img, desc }) => (
              <div
                key={label}
                className="group rounded-2xl border border-border overflow-hidden bg-card hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate("/business")}
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-200">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <p className="font-black text-lg text-foreground mb-1">{label}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground font-medium line-clamp-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 工事実績ダイジェスト ─────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">主な施工事例</h2>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-base font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors self-start md:self-auto"
            >
              実績一覧を見る <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {HOME_WORKS.map((work, i) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-2xl bg-zinc-300 cursor-pointer"
                onClick={() => navigate("/works")}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={work.img}
                    alt={work.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-[#0c1f12] text-xs font-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-black text-base mb-1">{work.label}</p>
                  <p className="text-white/70 text-xs leading-relaxed font-medium">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 採用ダイジェスト ─────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        {/* <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-15"
        /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6">
              未経験から、
              <br />
              一人前の技術者へ。
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium mb-3">
              <p>
                年齢・経験不問。先輩社員が丁寧にサポートし、資格取得・技術習得をバックアップします。大阪を拠点に、全国で活躍できる職人を募集しています。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {["機械据付工", "仕上工", "鍛冶工", "土木作業員"].map((r) => (
                <span
                  key={r}
                  className="px-3 py-1.5 rounded-full border border-accent/40 text-accent text-xs font-bold"
                >
                  {r}
                </span>
              ))}
            </div>
            <Link
              to="/recruit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors"
            >
              採用情報を見る <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "87日", label: "年間休日" },
              { num: "年2回", label: "賞与" },
              { num: "OJT", label: "研修制度" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-secondary rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-accent leading-none mb-2">{num}</p>
                <p className="text-muted-foreground text-xs font-bold">{label}</p>
              </div>
            ))}
            <div className="col-span-3 aspect-[16/7] rounded-2xl overflow-hidden bg-zinc-800">
              <img src={work4Img} alt="現場の様子" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* ── サイトメニュー（全ページへのナビ） ──────────── */}
      {/* <section className="bg-secondary py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10">各ページへのご案内</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PAGE_LINKS.map(({ to, label, en, img, desc }) => (
              <Link
                key={to}
                to={to}
                className="group text-left rounded-2xl overflow-hidden border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-200 relative">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                    {en}
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-black text-lg text-foreground mb-1 flex items-center justify-between">
                    {label}
                    <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── お問い合わせ CTA ─────────────────────────────── */}
      <ContactBand copy="お気軽にお問い合わせください。" />
      {/* <section className="bg-[#0c1f12] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-yellow-400 mb-4 uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">まず相談だけでもかまいません。</h2>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            見積もり・現地調査は無料です。お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-green-800 transition-colors"
            >
              お問い合わせフォームへ <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0728487936"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors"
            >
              <Phone size={16} /> 072-848-7936
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
