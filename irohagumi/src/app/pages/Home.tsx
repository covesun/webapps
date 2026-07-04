import { Link } from "react-router";
import { ArrowRight, ChevronDown, ShieldCheck, Wrench, Truck, HardHat } from "lucide-react";

import heroImg from "../../imports/DSCF3142.jpg";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350.jpg";
import work4Img from "../../imports/DSCF3225.jpg";
import officeImg from "../../imports/IMG_6008.jpg";

const WORKS = [
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

const SERVICES = [
  {
    icon: Wrench,
    title: "機械設備工事",
    desc: "上下水処理施設やごみ焼却炉などの公共プラント、民間工場における重量物の搬出・移設・据付工事を実施。",
  },
  {
    icon: HardHat,
    title: "据付工事",
    desc: "重量物機器・産業工作物機器の据付を、経験豊かなスタッフが精度の高い作業で対応。",
  },
  {
    icon: Truck,
    title: "機器運搬作業",
    desc: "繊細なハンドリングが必要な機械・設備の運搬を、複数車両で小規模から大規模案件まで対応。",
  },
  {
    icon: ShieldCheck,
    title: "仮設足場・アンカー工事",
    desc: "安全な作業環境構築のための足場組立・解体、設備固定のアンカー工事を自社で一貫実施。",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#0a1a10]">
        <img
          src={heroImg}
          alt="クレーン・重量物据付現場"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a10]/75 via-[#0a1a10]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/40 via-transparent to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.3em] text-yellow-300 mb-6 uppercase">
              Plant &amp; Heavy Load Installation
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight text-white">
              重さを動かし、
              <br />
              <span className="text-yellow-400">現場を前へ。</span>
            </h1>
            <p className="text-base md:text-lg text-white/75 font-medium max-w-lg leading-relaxed mb-10">
              プラント・重量物据付工事のプロフェッショナルとして、
              大阪から全国の現場へ。
              安全・確実・スピーディに、難しい仕事こそ任せてください。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-green-800 transition-colors duration-200"
              >
                お問い合わせ
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-bold text-base hover:bg-white/10 transition-colors duration-200"
              >
                施工実績を見る
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs tracking-widest">SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── COMPANY INTRO ───────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
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
              <p className="text-3xl font-black leading-none">2013</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-accent mb-4 uppercase">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-snug mb-6 tracking-tight">
              「難しい」と言われる
              <br />
              仕事を、得意にしてきた。
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground font-medium">
              <p>
                株式会社いろは組は、大阪・枚方を拠点にプラント設備・重量物の据付工事を専門とする施工会社です。
                2013年の創業以来、公共の上下水処理施設やごみ焼却炉、民間工場のプラントで、
                大型機器の精密据付から高所揚重まで手がけてきました。
              </p>
              <p>
                前例や固定概念にとらわれず、つねに新しい知識・技術を探求し続ける——
                熟練の職人技術と自社保有の重機・治具を組み合わせ、安全・確実・スピーディに施工します。
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/company"
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors"
              >
                会社概要を見る
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.25em] text-accent mb-3 uppercase">Service</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-snug">
              業務内容
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background rounded-2xl p-7 border border-border">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-accent" />
                </div>
                <p className="font-black text-base mb-2">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKS ───────────────────────────────────────────────── */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-accent mb-3 uppercase">Works</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-snug">
                主な施工内容・実績
              </h2>
            </div>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors self-start md:self-auto"
            >
              実績一覧を見る
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {WORKS.map((work, i) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-2xl bg-zinc-300 cursor-pointer"
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

      {/* ── RECRUIT + CONTACT TEASER ─────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-[#0c1f12] overflow-hidden">
        <img
          src={officeImg}
          alt="いろは組 社屋・車庫"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-[#0c1f12]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-yellow-400 mb-4 uppercase">Recruit</p>
              <h2 className="text-3xl font-black text-white leading-snug mb-4">
                一緒に「難しい現場」を
                <br />
                やり切る仲間を探しています。
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                未経験歓迎。技術と仲間と誇りを一緒に育てましょう。
                大阪を拠点に、各地の現場で活躍できる職人を募集しています。
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 flex-wrap">
                {["機械据付工", "仕上工", "鍛冶工"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-full border border-yellow-400/40 text-yellow-300 text-xs font-bold"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <Link
                to="/recruit"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors self-start"
              >
                採用情報を見る
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-yellow-400 mb-4 uppercase">Contact</p>
              <h2 className="text-3xl font-black text-white leading-snug mb-4">
                まず相談だけでも
                <br />
                かまいません。
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                現場の難しさや予算感など、お気軽にご相談ください。
                見積もり・現地調査は無料です。
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-green-800 transition-colors self-start"
            >
              お問い合わせフォームへ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
