import PageHero from "../components/PageHero";

import work1Img from "../../imports/suetuke.jpg";
import work2Img from "../../imports/IMG_9329.jpeg";
import work3Img from "../../imports/IMG_0350.jpg";
import work4Img from "../../imports/DSCF3225.jpg";

const FEATURED = [
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

const PROJECTS = [
  { name: "上下水道局", detail: "機器据付・架台工事", area: "愛知県", date: "2025年8月" },
  { name: "浄水場", detail: "機械設備改良工事", area: "大阪府", date: "2024年3月" },
  { name: "P社", detail: "負極材プラント設備工事", area: "和歌山県", date: "2023年3月" },
  { name: "浄水場", detail: "電磁流量計他更新工事", area: "奈良県", date: "2022年11月" },
  { name: "下水処理場・抽水所", detail: "ポンプ設備撤去・据付工事", area: "大阪府", date: "2021年10月" },
  { name: "水環境センター", detail: "新設工事", area: "京都市", date: "2020年1月" },
  { name: "O社", detail: "架構・歩廊据付工事", area: "大阪府", date: "2019年12月" },
  { name: "Aクリーンセンター", detail: "盤搬入据付工事", area: "静岡県", date: "2019年11月" },
  { name: "S社", detail: "タンク・ステージ機器据付工事", area: "大阪府", date: "2019年5月" },
  { name: "下水処理場・抽水所", detail: "設備機器据付工事", area: "大阪市", date: "2019年4月" },
];

export default function Works() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title="工事実績"
        lead="公共施設プラントから民間工場まで、重量物機器据付・配管・足場架設・アンカー工事など幅広い施工実績があります。"
        image={work3Img}
        imageAlt="重量物搬入・揚重工事"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-20">
            {FEATURED.map((work, i) => (
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

          <p className="text-xs font-bold tracking-[0.25em] text-accent mb-3 uppercase">
            Project History
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-snug mb-8">
            主要実績一覧（2019年以降）
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-5 py-4 font-black whitespace-nowrap">工事名</th>
                  <th className="px-5 py-4 font-black whitespace-nowrap">工事内容</th>
                  <th className="px-5 py-4 font-black whitespace-nowrap">場所</th>
                  <th className="px-5 py-4 font-black whitespace-nowrap">竣工時期</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {PROJECTS.map((p, i) => (
                  <tr key={i} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-5 py-4 font-bold whitespace-nowrap">{p.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{p.detail}</td>
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{p.area}</td>
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{p.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            上記以外にも、ボイラー据付、真空炉の据付・撤去・移設、焼却炉機器、ダクト工事、
            コンベアー更新、タンク解体、集塵機据付など、2018年以前より多数の工事実績があります。
          </p>
        </div>
      </section>
    </>
  );
}
