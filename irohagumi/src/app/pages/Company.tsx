import PageHero from "../components/PageHero";
import officeImg from "../../imports/IMG_6008.jpg";

const COMPANY_INFO = [
  { label: "会社名", value: "株式会社いろは組" },
  { label: "代表者", value: "阿部 眞一郎" },
  { label: "設立", value: "平成25年3月15日（2013年3月15日）" },
  { label: "資本金", value: "1,000万円" },
  { label: "所在地（本社）", value: "〒573-1163 大阪府枚方市甲斐田新町26-7" },
  { label: "電話", value: "072-848-7936" },
  { label: "FAX", value: "072-865-3077" },
  { label: "建設業許可", value: "大阪府知事許可（般-31）第141239号" },
  { label: "事業内容", value: "機械設置工事、据付工事、機器運搬作業、仮設足場工事、アンカー工事" },
];

const YARDS = [
  { name: "青山機材ヤード", address: "〒576-0066 大阪府交野市青山2-3-1" },
  { name: "尊延寺機材ヤード", address: "〒573-0112 大阪府枚方市大字尊延寺810-1" },
];

const STRENGTHS = [
  {
    title: "技術と総合力、そして機動力",
    desc: "重量物機器・産業工作物機器の据付工事をはじめ、機器の運搬作業、鉄骨架台等の組立まで、プラント工事をワンストップで対応。自社保有機材による迅速な対応と、多様なニーズへの柔軟な対応力が強みです。",
  },
  {
    title: "幅広い知識、技術を探求し実践する",
    desc: "安心・安全の原点を忘れることなく、つねに新しい知識や技術を探求し続けています。前例や固定概念にとらわれない視点で課題を解決し、お客様が安心して現場を見守れる水準の安全基準を追求しています。",
  },
];

export default function Company() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="会社概要"
        lead="株式会社いろは組は、大阪・枚方を拠点にプラント設備・重量物据付工事を専門とする施工会社です。"
        image={officeImg}
        imageAlt="いろは組 社屋・車庫"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <dl className="divide-y divide-border border-t border-b border-border">
            {COMPANY_INFO.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-6 py-5">
                <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase sm:col-span-1">
                  {label}
                </dt>
                <dd className="text-sm sm:text-base font-medium text-foreground sm:col-span-3">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14">
            <p className="text-xs font-bold tracking-[0.25em] text-accent mb-4 uppercase">Yards</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {YARDS.map((yard) => (
                <div key={yard.name} className="rounded-2xl bg-secondary p-6">
                  <p className="font-black text-base mb-1">{yard.name}</p>
                  <p className="text-sm text-muted-foreground">{yard.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.25em] text-accent mb-3 uppercase">
            Our Strengths
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-snug mb-12">
            いろは組の特長
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {STRENGTHS.map((s, i) => (
              <div key={s.title} className="bg-background rounded-2xl p-8 border border-border">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-sm font-black mb-5">
                  {i + 1}
                </div>
                <p className="font-black text-lg mb-3">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
