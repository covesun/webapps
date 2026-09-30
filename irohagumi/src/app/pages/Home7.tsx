import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  ChevronDown,
  Settings,
  Weight,
  Instagram,
} from "lucide-react";
import { motion } from "motion/react";
import ContactBand from "../components/ContactBand";
import heroImg from "../../imports/DSCF3142_2K.jpg";
import warehouseImg from "../../imports/Position_trucks_around_warehouse_2K_202608101551.jpg";
import scaniaHeroImg from "../../imports/hero_scania.jpg";
import plantBgImg from "../../imports/hero_bg_plant.png";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350_2K.jpeg";
import work4Img from "../../imports/DSCF3225.jpg";
import officeImg from "../../imports/IMG_6008.jpg";
import ig1Img from "../../imports/624845661_18122467930497151_6060076425127914825_n.jpg_2K_202608310427.jpeg";
import ig2Img from "../../imports/662384918_18399784525196815_3165667921936231691_n.jpg_2K_202608310604.jpeg";
import phCompanyImg from "../../imports/ph_company.jpg";
import phRecruitImg from "../../imports/ph_recruit.jpg";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const IG_POOL = [
  { src: work1Img, alt: "プラント設備工事" },
  { src: work2Img, alt: "大型配管据付" },
  { src: work3Img, alt: "重量物搬入" },
  { src: work4Img, alt: "溶接施工" },
  { src: heroImg, alt: "クレーン作業" },
  { src: warehouseImg, alt: "重機・トラック" },
  { src: truckImg, alt: "自社クレーン車" },
  { src: officeImg, alt: "事務所" },
  { src: ig1Img, alt: "現場写真" },
  { src: ig2Img, alt: "現場写真" },
  { src: phCompanyImg, alt: "会社" },
  { src: phRecruitImg, alt: "採用" },
];
const IG_COUNT = 5;

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

export default function Home7() {
  const navigate = useNavigate();
  const [igPhotos, setIgPhotos] = useState(() =>
    shuffle(IG_POOL).slice(0, IG_COUNT),
  );
  const [igVisible, setIgVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIgVisible(false);
      setTimeout(() => {
        setIgPhotos(shuffle(IG_POOL).slice(0, IG_COUNT));
        setIgVisible(true);
      }, 600);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero（白ベース・超シンプル：メッセージ→CTA→スカニア→SCROLL） ── */}
      <section className="relative h-svh min-h-[600px] overflow-hidden bg-white flex flex-col items-center pt-20">
        {/* メッセージ〜スカニアをひとまとまりにして縦中央（4K対策）／スマホは下寄せ */}
        <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-start md:justify-center pt-[3svh] md:pt-0 pb-16 md:pb-20">
          {/* メッセージ */}
          <div className="relative z-10 text-center max-md:text-start px-4 max-md:flex max-md:flex-row-reverse max-md:justify-center max-md:gap-5 max-md:h-[min(46svh,400px)] max-md:w-full max-md:px-11">
            <motion.h1
              className="font-black text-foreground leading-[1.15] tracking-[0.14em] pl-[0.14em] text-[clamp(1.75rem,min(7vw,8.5svh),6rem)] max-md:flex max-md:flex-row-reverse max-md:h-full max-md:gap-[0.2em] max-md:text-[min(17.5vw,7.4svh)] max-md:tracking-[0.04em] max-md:pl-0"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.8, 0.24, 1] }}
            >
              <span className="max-md:[writing-mode:vertical-rl] max-md:self-start">運ぶ、</span>
              <span className="max-md:[writing-mode:vertical-rl] max-md:self-start max-md:mt-[calc((min(46svh,400px)_-_3.12em)/2)]">吊るす、</span>
              <span className="max-md:[writing-mode:vertical-rl] max-md:self-end">据える</span>
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-7 max-md:mt-0 max-md:[writing-mode:vertical-rl] max-md:h-full max-md:[text-align-last:justify] max-md:whitespace-nowrap max-md:tracking-[0.04em] max-md:text-[min(4.9vw,2.6svh)] font-bold text-foreground tracking-[0.12em] text-[clamp(0.9rem,min(3.8vw,4.2svh),3.25rem)]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 0.8, 0.24, 1] }}
            >
              すべての始まりは
              <span className="inline-block font-black text-[#E89100] tracking-[0.08em] leading-none text-[clamp(1.4rem,min(6vw,6.8svh),5rem)] max-md:text-[1.3em]">
                『いろは』
              </span>
              から
            </motion.p>
          </div>

          {/* CTA（従来のボタンスタイル） */}
          <motion.div
            className="relative z-10 mt-8 md:mt-14 flex flex-wrap gap-3 justify-center px-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 0.8, 0.24, 1] }}
          >
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
          </motion.div>

          {/* スカニア＋背景の現場線画
              ・線画の地面ラインを、スカニアのタイヤ下端（画像高さの約89%＝下から11.03%）に合わせる */}
          <div className="relative mt-auto md:mt-[clamp(2rem,7svh,5rem)] w-[88vw] md:w-[min(1120px,66vw,84svh)]">
            {/* 背景線画 */}
            <div className="pointer-events-none absolute bottom-[11.03%] -left-[6vw] md:left-1/2 md:-translate-x-1/2 w-[230vw] md:w-[min(100vw,200svh)]">
              <motion.img
                src={plantBgImg}
                alt=""
                aria-hidden
                className="block w-full h-auto"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)",
                  maskImage:
                    "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.8, delay: 0.9 }}
              />
            </div>
            {/* 地面ライン（画面幅いっぱい・両端フェード） */}
            <div className="pointer-events-none absolute bottom-[11.03%] left-1/2 -translate-x-1/2 w-screen h-px">
              <motion.div
                aria-hidden
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #9aa39e 6%, #9aa39e 94%, transparent)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.8, delay: 0.9 }}
              />
            </div>
            {/* スカニア：左から走り込み */}
            <motion.img
              src={scaniaHeroImg}
              alt="株式会社いろは組 自社クレーン車"
              className="relative block w-full h-auto mix-blend-multiply"
              initial={{ opacity: 0, x: "-14vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 1.15 },
                x: { duration: 1.9, delay: 1.15, ease: [0.22, 0.8, 0.24, 1] },
              }}
            />
          </div>
        </div>

        {/* SCROLL */}
        <motion.div
          className="absolute inset-x-0 bottom-5 md:bottom-6 flex flex-col items-center gap-1 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase font-semibold">
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </motion.div>
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
            {/* <div className="absolute -bottom-5 -right-3 md:-right-8 bg-yellow-400 text-[#0c1f12] px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-xs font-black tracking-widest mb-1 opacity-60">
                SINCE
              </p>
              <p className="text-4xl font-black leading-none">
                2008
              </p>
            </div> */}
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-9">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">
                  いろは組について
              </h2>   
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-accent leading-snug mb-6 tracking-tight">
              自社機材×ワンストップ施工。<br />
              抜群の機動力が、あらゆる現場を動かす。
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium">
              <p>
                株式会社いろは組は2013年の創業以来、重量物や産業機器の据付工事をはじめとするプラント工事のプロフェッショナルとして、ひとつひとつの現場に真摯に向き合い、10年以上の確かな実績を重ねてまいりました。
              </p>
              <p>
                機器の連携、鉄骨架台の組立、足場架設、アンカー工事など、多岐にわたる工程を自社でカバーする「ワンストップサービス」を展開しています。
              </p>
              <p>
                これまでに培った社員の技術力と、強固なチームワークには絶対の自信があります。自社保有の機材と結束力を最大限に活かし、多様なニーズに対して安全・確実・スピーディーにお応えします。
              </p>
            </div>
            {/* <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8 mb-8">
              {[
                { num: "300+", label: "施工実績" },
                { num: "15年", label: "専門技術" },
                { num: "24h", label: "緊急対応" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-4xl font-black text-accent">
                    {num}
                  </p>
                  <p className="text-xs font-bold text-muted-foreground mt-1 tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div> */}
            <Link
              to="/company"
              className="mt-8 inline-flex items-center gap-2 text-base font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors"
            >
              会社概要を見る <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 事業内容ダイジェスト ─────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-9">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">
              私たちが得意とする
              <br />
              2つの領域
            </h2>
            <Link
              to="/business"
              className="inline-flex items-center gap-2 text-base font-bold text-foreground border-b-2 border-accent pb-0.5 hover:text-accent transition-colors self-start md:self-auto"
            >
              事業内容を詳しく見る <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {BUSINESSES.map(({ icon, label, img, desc }) => (
              <div
                key={label}
                className="group rounded-2xl border border-border overflow-hidden bg-card hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate("/business")}
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-200">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <p className="font-black text-xl md:text-2xl text-foreground leading-snug">
                      {label}
                    </p>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-medium">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 工事実績ダイジェスト ─────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-9">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">
              主な施工事例
            </h2>
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
                  <p className="text-white font-black text-base md:text-lg mb-1">
                    {work.label}
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed font-medium">
                    {work.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 採用ダイジェスト ─────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">
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
              {[
                "機械据付工",
                "仕上工",
                "鍛冶工",
                "土木作業員",
              ].map((r) => (
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
              <div
                key={label}
                className="bg-secondary rounded-2xl p-5 text-center"
              >
                <p className="text-3xl font-black text-accent leading-none mb-2">
                  {num}
                </p>
                <p className="text-muted-foreground text-xs font-bold">
                  {label}
                </p>
              </div>
            ))}
            <div className="col-span-3 aspect-[16/7] rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src={work4Img}
                alt="現場の様子"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram フィード ───────────────────────────── */}
      <section className="bg-background pt-14 md:pt-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-9">
          <div>
            <p className="text-xs font-bold tracking-[0.35em] text-accent uppercase mb-2 hidden">
              Instagram
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug">
              現場の様子を
              <br className="sm:hidden" />
              随時更新中
            </h2>
            <p className="text-base text-muted-foreground font-medium mt-2">
              @irohagumi_2013
            </p>
          </div>
          <a
            href="https://www.instagram.com/irohagumi_2013/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground text-foreground font-bold text-sm hover:bg-foreground hover:text-background transition-colors self-start sm:self-auto shrink-0"
          >
            <Instagram size={16} />
            Instagramをフォローする
          </a>
        </div>
        <div
          className="grid transition-opacity duration-700"
          style={{
            gridTemplateColumns: `repeat(${IG_COUNT}, 1fr)`,
            opacity: igVisible ? 1 : 0,
          }}
        >
          {igPhotos.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="relative overflow-hidden aspect-square group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <a
                href="https://www.instagram.com/irohagumi_2013/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300"
                aria-label="Instagramを見る"
              >
                <Instagram
                  size={30}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── お問い合わせ CTA ─────────────────────────────── */}
      <ContactBand copy="お気軽にお問い合わせください。" />
    </>
  );
}