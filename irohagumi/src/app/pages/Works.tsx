import { useEffect, useRef, useState, type TouchEvent } from "react";
import { Link } from "react-router";
import { ArrowRight, X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";

import heroImg from "../../imports/DSCF3142.jpg";
import truckImg from "../../imports/IMG_9515.jpeg";
import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350.jpg";
import work4Img from "../../imports/DSCF3225.jpg";

type Category = "すべて" | "プラント工事" | "重量物据付" | "クレーン作業";

const CATEGORIES: Category[] = ["すべて", "プラント工事", "重量物据付", "クレーン作業"];

const WORKS_DATA = [
  {
    id: 1,
    imgs: [work1Img, work2Img],
    category: "プラント工事" as Category,
    title: "△△化学工場　大型架構・鉄骨据付工事",
    date: "2024年11月",
    location: "大阪府",
    description:
      "化学工場の改修工事に伴い、重量約40tの大型鉄骨架構を新設。高所作業車・クレーンを組み合わせた複合工法で、稼働中の既設設備に干渉することなく施工を完了しました。精密な位置決めと溶接品質が求められる難工事でした。",
  },
  {
    id: 2,
    imgs: [work2Img, work3Img],
    category: "重量物据付" as Category,
    title: "○○食品プラント　大口径配管据付工事",
    date: "2024年09月",
    location: "兵庫県",
    description:
      "食品プラントの増設工事にて、直径1,800mmの大口径配管を据付。天井クレーンと専用治具を使用し、精密なフランジ合わせを実施。衛生管理区域内での作業のため、徹底した養生管理のもとで作業を遂行しました。",
  },
  {
    id: 3,
    imgs: [work3Img, work1Img, work4Img],
    category: "重量物据付" as Category,
    title: "□□製薬工場　大型タンク搬入・精密据付",
    date: "2024年06月",
    location: "京都府",
    description:
      "製薬工場への大型ステンレスタンク（重量約18t）の搬入・据付工事。屋内への搬入経路が狭小なため、スライドレールを活用した横引き工法を採用。基礎ボルトへの精密位置合わせも±1mm以内で完了しました。",
  },
  {
    id: 4,
    imgs: [work4Img],
    category: "プラント工事" as Category,
    title: "◇◇設備　鉄骨切断・溶接仕上げ工事",
    date: "2024年03月",
    location: "大阪府",
    description:
      "既設プラントの設備更新に伴う鉄骨改修工事。グラインダー・ガス切断による既設架台の解体後、新規支持架構の溶接・組立を実施しました。自社職人による一貫施工で、工期内での完工を実現しています。",
  },
  {
    id: 5,
    imgs: [heroImg, work4Img],
    category: "クレーン作業" as Category,
    title: "△△重工　大型ボックス揚重・据付工事",
    date: "2023年12月",
    location: "愛知県",
    description:
      "重量約35tの大型ボックス構造物をラフタークレーンで揚重・据付。屋外での高所作業となるため、気象条件を考慮した綿密な施工計画のもと安全に完工。遠方現場への出張対応も迅速に行いました。",
  },
  {
    id: 6,
    imgs: [truckImg, heroImg],
    category: "クレーン作業" as Category,
    title: "○○港湾施設　ラフタークレーン揚重",
    date: "2023年10月",
    location: "大阪府",
    description:
      "港湾施設内での重量物揚重作業。自社保有の20tラフタークレーンを使用し、桟橋上での精密なつり荷操作を実施しました。作業ヤードが狭小かつ不整地のため、アウトリガー設置計画を入念に検討して安全に施工。",
  },
  {
    id: 7,
    imgs: [work1Img, work3Img],
    category: "プラント工事" as Category,
    title: "□□電力　プラント架台・支持架構組立",
    date: "2023年08月",
    location: "滋賀県",
    description:
      "電力会社の設備更新工事にて、大型架台・支持架構を現地組立。鉄骨部材の搬入から溶接・ボルト締結まで一貫して担当。厳しい品質管理基準のもと、第三者検査にも対応しながら施工を完了しました。",
  },
  {
    id: 8,
    imgs: [work3Img, work2Img],
    category: "重量物据付" as Category,
    title: "◇◇産業　重量プレス機移設・据付工事",
    date: "2023年05月",
    location: "大阪府",
    description:
      "工場内の生産ライン再編に伴い、重量約22tの油圧プレス機を移設・再据付。アンカーボルト施工・レベリング調整まで含む一式工事を対応しました。ラインの停止時間を最小限に抑えた段取りで短工期を実現しています。",
  },
  {
    id: 9,
    imgs: [work2Img, work4Img],
    category: "プラント工事" as Category,
    title: "△△石油化学　配管・反応槽据付工事",
    date: "2023年02月",
    location: "三重県",
    description:
      "石油化学プラントの新設工事にて、反応槽（重量約30t）の据付および周辺配管の施工を担当。遠方現場への宿泊対応で長期工事にも柔軟に対応。施工管理から職人作業まで自社一貫体制で品質を確保しました。",
  },
  {
    id: 10,
    imgs: [work2Img, work4Img],
    category: "プラント工事" as Category,
    title: "△△石油化学　配管・反応槽据付工事",
    date: "2023年02月",
    location: "三重県",
    description:
      "石油化学プラントの新設工事にて、反応槽（重量約30t）の据付および周辺配管の施工を担当。遠方現場への宿泊対応で長期工事にも柔軟に対応。施工管理から職人作業まで自社一貫体制で品質を確保しました。",
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

      <section className="bg-white border-b border-border sticky top-16 z-40">
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
                  <img
                    src={work.imgs[0]}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                  <h3 className="text-base font-bold text-foreground leading-snug mb-2 line-clamp-2">{work.title}</h3>
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
