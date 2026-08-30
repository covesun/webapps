import { Settings, Weight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";
import work1Img from "../../imports/suetuke.jpg";
import work3Img from "../../imports/IMG_0350.jpg";

const DETAIL_ITEMS = [
  {
    en: "Plant Engineering",
    ja: "プラント工事",
    icon: <Settings size={32} strokeWidth={1.5} />,
    img: work1Img,
    desc: "化学・食品・製薬プラントの設備据付から架台組立・配管工事まで、精密さが求められる工事を専門に手がけます。稼働中の既設設備への干渉を避けながら、高精度な位置決めと溶接品質を実現します。",
    points: [
      "大型架構・鉄骨フレームの組立",
      "大口径配管の据付・フランジ合わせ",
      "既設プラント改修・増設工事",
      "精密位置決め（±1mm以内の実績あり）",
    ],
  },
  {
    en: "Heavy Load Installation",
    ja: "重量物据付",
    icon: <Weight size={32} strokeWidth={1.5} />,
    img: work3Img,
    desc: "数トン〜数十トン規模の大型機器・タンクの搬入・吊込み・精密据付。スライドレールや専用治具を駆使し、狭小経路や難条件下でも確実に仕上げます。",
    points: [
      "大型タンク・反応槽の搬入・据付",
      "重量プレス機・生産設備の移設",
      "アンカーボルト施工・レベリング調整",
      "狭小経路・横引き工法への対応",
    ],
  },
];

export default function Business() {
  return (
    <>
      <PageHero img={work1Img} en="" ja="事業内容" objectPos="center 30%" />

      {/* Overview */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6">
            4つの専門領域で
            <br />
            現場を支えます。
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-medium">
            プラント設備・重量物据付のプロフェッショナルとして、搬入から精密据付まで一貫してお引き受けします。
            <br />
            自社クレーンと熟練職人の組み合わせが私たちの強みです。
          </p>
        </div>
      </section>

      {/* Detail sections */}
      {DETAIL_ITEMS.map((item, idx) => (
        <section key={item.ja} className="py-14 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 shadow-sm">
                <img src={item.img} alt={item.ja} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.25em] text-accent uppercase">{item.en}</p>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{item.ja}</h2>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-lg font-medium text-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ContactBand copy="工事のご依頼・ご相談はお気軽に" />
    </>
  );
}
