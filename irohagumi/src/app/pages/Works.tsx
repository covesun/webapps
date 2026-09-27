import { useEffect, useRef, useState, type TouchEvent } from "react";
import { Link } from "react-router";
import { ArrowRight, X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";

import work1Img from "../../imports/suetuke.jpg";

// 工事実績写真（出典: docs/いろは組_作業実績_vol.2.xlsx）
import kitahorie01 from "../../imports/works/kitahorie_01.jpg";
import kitahorie02 from "../../imports/works/kitahorie_02.jpg";
import kitahorie03 from "../../imports/works/kitahorie_03.jpg";
import hyogoCrane01 from "../../imports/works/hyogo_crane_01.jpg";
import hyogoCrane02 from "../../imports/works/hyogo_crane_02.jpg";
import hyogoCrane03 from "../../imports/works/hyogo_crane_03.jpg";
import hyogoHopper01 from "../../imports/works/hyogo_hopper_01.jpg";
import hyogoHopper02 from "../../imports/works/hyogo_hopper_02.jpg";
import hyogoHopper03 from "../../imports/works/hyogo_hopper_03.jpg";
import lintecBoiler01 from "../../imports/works/lintec_boiler_01.jpg";
import ijttDust01 from "../../imports/works/ijtt_dust_01.jpg";
import ijttDust02 from "../../imports/works/ijtt_dust_02.jpg";
import ijttDust03 from "../../imports/works/ijtt_dust_03.jpg";

type Category = "すべて" | "プラント工事" | "重量物据付" | "クレーン作業";

const CATEGORIES: Category[] = ["すべて", "プラント工事", "重量物据付", "クレーン作業"];

// NOTE: 案件名は現在実名表記。公開前に伏せ字化の要否をクライアント確認（docs/工事実績_クライアント確認事項.md）
const WORKS_DATA: {
  id: number;
  imgs: string[];
  category: Category;
  title: string;
  date: string;
  location: string;
  description: string;
}[] = [
  {
    id: 1,
    imgs: [kitahorie01, kitahorie02, kitahorie03],
    category: "重量物据付",
    title: "ファミール北堀江　増圧改修工事",
    date: "2026年08月",
    location: "大阪府",
    description:
      "地下4mの機械室から既設給水ポンプを撤去・搬出し、墨出し・アンカー打設を経て新規給水ポンプを搬入・据付。あわせて地下受水槽（FRPパネル）の解体・搬出まで対応しました。",
  },
  {
    id: 2,
    imgs: [hyogoCrane01, hyogoCrane02, hyogoCrane03],
    category: "クレーン作業",
    title: "兵庫県 下水処理場　天井クレーン更新工事",
    date: "2026年04月",
    location: "兵庫県",
    description:
      "下水処理場の天井クレーン更新工事。既設天井クレーン2基を撤去・搬出し、新規天井クレーンを地組みのうえ据付。試運転助勢まで対応しました。",
  },
  {
    id: 3,
    imgs: [hyogoHopper01, hyogoHopper02, hyogoHopper03],
    category: "プラント工事",
    title: "兵庫県 下水処理場　ケーキ貯留ホッパー設置工事",
    date: "2026年02月",
    location: "兵庫県",
    description:
      "既設の汚泥貯留ホッパーを解体・搬出後、新規ホッパーの架台を組立。ホッパー本体は現地で製缶・溶接・組立を行い、試運転助勢まで対応しました。",
  },
  {
    id: 4,
    imgs: [lintecBoiler01],
    category: "重量物据付",
    title: "リンテック三島工場土居加工工場　廃熱ボイラー設置工事",
    date: "2025年05月",
    location: "愛媛県",
    description:
      "墨打ち・アンカー打設から、新規廃熱ボイラーの搬入・据付・芯出しまでを担当。架設足場を組んでのダクト敷設、計装配管の敷設、試運転助勢まで一式で対応しました。",
  },
  {
    id: 5,
    imgs: [ijttDust01, ijttDust02, ijttDust03],
    category: "プラント工事",
    title: "IJTT北上新鋳造工場　集塵設備工事",
    date: "2025年05月",
    location: "岩手県",
    description:
      "集塵機・ファン2基の設置とダクト敷設工事。墨打ち・ソールプレート取付・溶接から、架台組立、集塵機本体の組立・据付、機器組立用の架設足場組立、集塵ダクトの敷設までを担当しました。",
  },
  {
    id: 6,
    imgs: [], // 写真なし（クライアント確認中）
    category: "重量物据付",
    title: "静岡県Aクリーンセンター　盤搬入据付工事",
    date: "2019年11月",
    location: "静岡県",
    description:
      "盤搬入路と架設構台を設置し、高圧盤・トランス・制御盤など計30面を搬入・据付しました。",
  },
];

type WorkItem = (typeof WORKS_DATA)[number];

const TAG_COLOR: Record<Category, string> = {
  すべて: "",
  プラント工事: "bg-green-50 text-green-700",
  重量物据付: "bg-yellow-50 text-yellow-700",
  クレーン作業: "bg-sky-50 text-sky-700",
};

function PhotoCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);
  const showArrows = images.length > 1;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      goTo(deltaX < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
  };

  if (images.length === 0) {
    return (
      <div className="relative aspect-[3/2] rounded-t-2xl overflow-hidden bg-zinc-200 flex items-center justify-center">
        <span className="text-sm font-bold text-muted-foreground tracking-wider">写真準備中</span>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[3/2] rounded-t-2xl overflow-hidden bg-zinc-200 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={i === 0 ? alt : `${alt}（${i + 1}）`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {showArrows && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="前の写真"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm shadow-md text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="次の写真"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm shadow-md text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`写真 ${i + 1}`}
                className={`rounded-full shadow-sm transition-all duration-300 ${
                  i === index ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/70 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function WorkModal({ work, onClose }: { work: WorkItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="閉じる"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm shadow-md flex items-center justify-center transition-colors"
        >
          <X size={18} className="text-white" />
        </button>

        <PhotoCarousel images={work.imgs} alt={work.title} />

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${TAG_COLOR[work.category]}`}>
              {work.category}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-foreground leading-snug mb-6">{work.title}</h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-secondary rounded-xl px-5 py-4">
              <p className="text-xs font-black text-muted-foreground tracking-wider mb-1">竣工年月</p>
              <p className="text-base font-bold text-foreground">{work.date}</p>
            </div>
            <div className="bg-secondary rounded-xl px-5 py-4">
              <p className="text-xs font-black text-muted-foreground tracking-wider mb-1">施工場所</p>
              <p className="text-base font-bold text-foreground flex items-center gap-1.5">
                <MapPin size={13} className="text-accent flex-shrink-0" />
                {work.location}
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs font-black text-muted-foreground tracking-wider mb-3">工事内容</p>
            <p className="text-base text-foreground leading-relaxed font-medium">{work.description}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors"
            >
              同様の工事を相談する
              <ArrowRight size={15} />
            </Link>
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-border text-foreground font-bold text-sm hover:bg-secondary transition-colors"
            >
              一覧に戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  const [activeCategory, setActiveCategory] = useState<Category>("すべて");
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const ITEMS_PER_PAGE = 9;

  const filtered =
    activeCategory === "すべて" ? WORKS_DATA : WORKS_DATA.filter((w) => w.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPageNum - 1) * ITEMS_PER_PAGE, currentPageNum * ITEMS_PER_PAGE);

  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentPageNum(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPageNum]);

  return (
    <>
      {selectedWork && (
        <WorkModal key={selectedWork.id} work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}

      <PageHero img={work1Img} en="Works" ja="工事実績" />

      <section className="bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto">
          <span className="text-xs font-bold text-muted-foreground tracking-wider mr-1 flex-shrink-0">絞り込み</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat ? "bg-accent text-white shadow-sm" : "bg-secondary text-foreground hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto flex-shrink-0 text-xs text-muted-foreground font-medium whitespace-nowrap">
            {filtered.length}件
          </span>
        </div>
      </section>

      <section className="bg-background py-8 md:py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {paginated.map((work) => (
              <article
                key={work.id}
                onClick={() => setSelectedWork(work)}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-zinc-200 relative">
                  {work.imgs.length > 0 ? (
                    <img
                      src={work.imgs[0]}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm font-bold text-muted-foreground tracking-wider">写真準備中</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-foreground text-xs font-black px-4 py-2 rounded-full tracking-wider">
                      詳細を見る
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${TAG_COLOR[work.category]}`}>
                      {work.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{work.location}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug mb-2 line-clamp-2">{work.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{work.date}</p>
                </div>
              </article>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                disabled={currentPageNum === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setCurrentPageNum(p)}
                  className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
                    p === currentPageNum ? "bg-accent text-white" : "border border-border hover:bg-secondary"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                disabled={currentPageNum === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      <ContactBand copy="工事のご依頼・ご相談はお気軽に" />
    </>
  );
}
