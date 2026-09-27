import { Truck } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";
import truckImg from "../../imports/IMG_9515.jpeg";
import heroImg from "../../imports/DSCF3142_2K.jpg";

// OC200 は主役カードと重複するため除外
const VEHICLES = [
  { label: "10t ユニック車", spec: "4.9t 吊", qty: "1台" },
  { label: "8t ユニック車", spec: "2.9t 吊", qty: "1台" },
  { label: "6t ユニック車", spec: "2.9t 吊", qty: "1台" },
  { label: "3t ユニック車", spec: "2.6t 吊", qty: "1台" },
  { label: "3t ダブルキャブ車 パワーゲート", spec: "—", qty: "1台" },
];

const MACHINES: { name: string; rows: { spec: string; qty: string }[] }[] = [
  { name: "電動チルローラー", rows: [{ spec: "50t", qty: "1式" }, { spec: "25t", qty: "1式" }] },
  { name: "チルローラー", rows: [{ spec: "8t", qty: "1式" }, { spec: "5t", qty: "1式" }, { spec: "3t", qty: "1式" }] },
  { name: "電動ハンドリフト", rows: [{ spec: "5t", qty: "1台" }] },
  { name: "ハンドリフト", rows: [{ spec: "5t", qty: "1台" }, { spec: "3t", qty: "1台" }, { spec: "2t", qty: "2台" }] },
  { name: "カニクレーン（ハイブリッド）", rows: [{ spec: "2.9t 吊", qty: "1台" }] },
  { name: "カニクレーン（バッテリー式）", rows: [{ spec: "2.9t 吊", qty: "1台" }] },
  {
    name: "各種ジャッキ",
    rows: [{ spec: "25t", qty: "2台" }, { spec: "10t", qty: "2台" }, { spec: "5t", qty: "6台" }, { spec: "3t", qty: "6台" }],
  },
  { name: "フォークリフト", rows: [{ spec: "2.5t", qty: "2台" }, { spec: "1.0t", qty: "1台" }] },
  { name: "アルミ敷材", rows: [{ spec: "—", qty: "1式" }] },
  { name: "木材、導板", rows: [{ spec: "—", qty: "1式" }] },
];

export default function Equipment() {
  return (
    <>
      {/* ヒーロー：heroImg を使用してブーム文字との重なりを回避 */}
      <PageHero img={heroImg} en="" ja="設備機器" objectPos="35% 30%" />

      {/* ── リード：スカニア写真＋本文 ───────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">
            「いろは」の設備
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">
              <img
                src={truckImg}
                alt="自社保有のスカニア OC-200N"
                className="w-full h-full object-cover object-[60%_center]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black leading-snug mb-6 tracking-tight">
                自社保有の<br className="md:hidden" />スカニアOC-200Nほか、
                <br />
                現場を支える<br className="md:hidden" />圧倒的な機動力
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground font-medium">
                <p>
                  他社では保有の少ない大型トラッククレーン「スカニアOC-200N」を自社完備。
                  さらに10tから3tまでの各種ユニック車、屋内・地下作業に強い特殊揚重機材（カニクレーン・電動チルローラー等）を豊富に保有しています。
                </p>
                <p>
                  機材手配のタイムラグをなくし、元請け業者様のあらゆる現場ニーズにワンストップで即応いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 保有車両（カード） ───────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">
            保有車両
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VEHICLES.map((v) => (
              <div
                key={v.label}
                className="rounded-2xl border border-border bg-card p-6 md:p-7 flex flex-col gap-5"
              >
                {/* 車両名 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Truck size={22} strokeWidth={1.5} />
                  </div>
                  <p className="font-black text-foreground text-lg md:text-xl leading-snug">
                    {v.label}
                  </p>
                </div>
                <div className="h-px bg-border" />
                {/* 吊り能力（主役）＋台数（ラベル） */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">吊り能力</p>
                    <p
                      className={`text-2xl md:text-3xl font-black leading-none tabular-nums ${
                        v.spec === "—" ? "text-muted-foreground/60" : "text-accent"
                      }`}
                    >
                      {v.spec}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-bold text-foreground">
                    {v.qty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 機械設備 ─────────────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">
            機械設備
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full border-collapse">
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr className="bg-accent">
                  <th className="px-3 md:px-6 py-4 text-left font-bold text-white tracking-wide whitespace-nowrap">
                    機種
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-bold text-white tracking-wide whitespace-nowrap">
                    仕様・能力
                  </th>
                  <th className="px-3 md:px-6 py-4 text-center font-bold text-white tracking-wide whitespace-nowrap">
                    台数
                  </th>
                </tr>
              </thead>
              <tbody>
                {MACHINES.flatMap((item, itemIdx) =>
                  item.rows.map((row, rowIdx) => {
                    const isLastItem = itemIdx === MACHINES.length - 1;
                    const isLastRow = rowIdx === item.rows.length - 1;
                    const isVeryLast = isLastItem && isLastRow;
                    // 機種セルの下ボーダー：アイテム最終行、かつ表の最終行でなければ引く
                    const nameBorder = !isLastItem ? "border-b border-border" : "";
                    // 仕様・台数セルのボーダー
                    const cellBorder = isVeryLast
                      ? ""
                      : isLastRow
                      ? "border-b border-border"
                      : "border-b border-border/30";
                    return (
                      <tr
                        key={`${item.name}-${rowIdx}`}
                        className={itemIdx % 2 === 1 ? "bg-muted/40" : "bg-card"}
                      >
                        {rowIdx === 0 && (
                          <td
                            rowSpan={item.rows.length}
                            className={`px-3 md:px-6 py-4 text-base font-bold text-foreground align-top whitespace-nowrap border-r border-border ${nameBorder}`}
                          >
                            {item.name.includes("（") ? (
                              <>
                                {item.name.slice(0, item.name.indexOf("（"))}
                                <br className="md:hidden" />
                                {item.name.slice(item.name.indexOf("（"))}
                              </>
                            ) : (
                              item.name
                            )}
                          </td>
                        )}
                        <td className={`px-3 md:px-6 py-4 text-base text-foreground tabular-nums text-center ${cellBorder}`}>
                          {row.spec}
                        </td>
                        <td className={`px-3 md:px-6 py-4 text-base text-foreground tabular-nums text-center whitespace-nowrap ${cellBorder}`}>
                          {row.qty}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactBand
        copy={<>機材・工事のご相談は<br className="md:hidden" />お気軽にどうぞ</>}
      />
    </>
  );
}
