import { useState, useEffect, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  ChevronDown,
  Instagram,
} from "lucide-react";
import { motion } from "motion/react";
import ContactBand from "../components/ContactBand";
import heroImg from "../../imports/DSCF3142_2K.jpg";
import warehouseImg from "../../imports/Position_trucks_around_warehouse_2K_202608101551.jpg";
import markImg from "../../imports/iroha_mark_outline.png";
import plantLineImg from "../../imports/hero_plant_line.webp";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import bizPlantImg from "../../imports/biz_plant.jpg";
import bizEquipImg from "../../imports/biz_equip.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350_2K.jpeg";
import work4Img from "../../imports/DSCF3225.jpg";
import officeImg from "../../imports/IMG_6008.jpg";
import ig1Img from "../../imports/624845661_18122467930497151_6060076425127914825_n.jpg_2K_202608310427.jpeg";
import ig2Img from "../../imports/662384918_18399784525196815_3165667921936231691_n.jpg_2K_202608310604.jpeg";
import phCompanyImg from "../../imports/ph_company.jpg";
import phRecruitImg from "../../imports/ph_recruit.jpg";
import recruitSalesImg from "../../imports/recruit_sales.jpg";
import recruitFieldImg from "../../imports/recruit_worker.jpg";

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
    label: "プラント事業",
    img: bizPlantImg,
    desc: "化学・食品・製薬プラントの設備据付から架台組立・配管工事まで、精密さが求められる工事を専門に手がけます。",
  },
  {
    label: "機器据付事業",
    img: bizEquipImg,
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
  // ヒーロー高さの基準（1%）。モバイルのバー出入りで innerHeight が変わっても揺れないよう、
  // 幅が変わったとき（回転など）だけ更新する。PC は高さ変更にも追従。
  const [hh, setHh] = useState<string>("1svh");
  useEffect(() => {
    let w = window.innerWidth;
    const set = () => setHh(`${window.innerHeight / 100}px`);
    set();
    const onResize = () => {
      if (window.innerWidth !== w || window.innerWidth >= 768) {
        w = window.innerWidth;
        set();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
      {/* ── Hero（モニュメント：深緑ベース＋巨大ロゴ） ──
          ・ロゴは PC では右寄せで枠外にはみ出し、スマホでは上部に配置して文字と重ならないよう高さで縮小
          ・高さの基準 --hh は読み込み時に固定（iPhone のバー出入りで揺れないように） */}
      <section
        className="relative h-[calc(100*var(--hh))] min-h-[600px] overflow-hidden bg-[#163321]"
        style={
          {
            "--hh": hh,
            // スマホ：ロゴ直径と、ロゴ＋テキストをひとまとまりにして縦中央へ寄せる余白
            "--d": "min(84vw, max(180px, calc(100 * var(--hh) - 390px)))",
            // PC：コピー＋ロゴを1グループとして左右均等のマージン --m に
            // PC：ロゴ直径（ヘッダーと同じ幅の内側に収める）
            "--pd": "min(660px, 46vw)",
            "--ex": "max(0px, calc((100 * var(--hh) - 136px - var(--d) - 254px) / 2))",
          } as CSSProperties
        }
      >
        {/* 背景の線画（PC：下端に全幅／スマホ：下端に高さ170px・左寄せで薄く） */}
        <img
          src={plantLineImg}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute left-0 bottom-0 max-w-none w-auto h-[170px] opacity-35 md:inset-x-0 md:w-full md:h-auto md:opacity-50"
        />

        {/* ロゴマーク */}
        <motion.img
          src={markImg}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute max-w-none h-auto
            w-[var(--d)] right-[-20vw] top-[calc(5rem_+_12px_+_var(--ex))]
            md:w-[var(--pd)] md:right-[max(24px,calc((100vw_-_1280px)/2_+_24px))] md:top-[calc(50*var(--hh)_+_2.5rem_-_var(--pd)/2)]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.92, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 0.8, 0.24, 1] }}
        />

        {/* テキスト */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start md:justify-center px-6 pb-0 pt-[calc(5rem_+_12px_+_var(--ex)_+_var(--d)_+_28px)] md:pt-20 md:px-0">
          <div className="md:w-full md:max-w-7xl md:mx-auto md:px-6">
          <motion.p
            className="text-white/90 font-bold tracking-[0.35em] text-sm md:text-[max(1rem,calc(var(--pd)*0.036))]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 0.8, 0.24, 1] }}
          >
            運ぶ、吊るす、据える
          </motion.p>
          <motion.h1
            className="mt-4 md:mt-8 font-black text-white leading-[1.25] tracking-tight text-[clamp(2.1rem,9.2vw,3.25rem)] md:text-[max(2.5rem,calc(var(--pd)*0.105))]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 0.8, 0.24, 1] }}
          >
            すべての始まりは
            <br />
            <span className="text-[#E89100]">『いろは』</span>から
          </motion.h1>
          <motion.div
            className="mt-8 md:mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 0.8, 0.24, 1] }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#14351B] font-bold text-sm hover:bg-white/85 transition-colors duration-200"
            >
              お問い合わせ
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/45 text-white font-bold text-sm hover:bg-white hover:text-[#14351B] transition-colors duration-200"
            >
              施工実績を見る
            </Link>
          </motion.div>
          </div>
        </div>

        {/* SCROLL */}
        <motion.div
          className="absolute z-10 inset-x-0 bottom-2 md:bottom-6 flex flex-col items-center gap-1 text-white/70 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase font-semibold">Scroll</span>
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
            {BUSINESSES.map(({ label, img, desc }) => (
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
                  <p className="font-black text-xl md:text-2xl text-foreground leading-snug mb-3">
                    {label}
                  </p>
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">
              技術と信頼を、
              <br />
              共につくる仲間を。
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium mb-3">
              <p>
                現場を支える作業員・管理職から、お客様との橋渡しをする営業職まで、幅広い職種で採用を行っています。経験・学歴は問いません。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {["未経験歓迎", "資格取得支援", "賞与年2回"].map((r) => (
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
          <div className="flex flex-col gap-4">
            {[
              {
                to: "/recruit/sales",
                img: recruitSalesImg,
                label: "営業職",
                catch_: "現場を支え、信頼をつなぐ営業職",
              },
              {
                to: "/recruit/field",
                img: recruitFieldImg,
                label: "現場作業員・管理職",
                catch_: "安全と品質を支える現場のプロフェッショナル",
              },
            ].map(({ to, img, label, catch_ }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center gap-4 md:gap-5 bg-card border border-border rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-200">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-black text-accent tracking-wider mb-1.5">{label}</p>
                  <p className="text-base md:text-lg font-black text-foreground leading-snug">{catch_}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="flex-shrink-0 mr-1 md:mr-2 text-accent group-hover:translate-x-1 transition-transform"
                />
              </Link>
            ))}
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