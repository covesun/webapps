/* ── 一日の流れ タイムライン（現場・営業 共通） ─────────────
 *
 * 行の種類
 *   - 時刻＋カード   : { type: "time", time, title, desc, img? }
 *   - 時刻＋見出し   : { type: "time", time, title }          ← desc なし＝背景なしの見出し
 *   - 時刻の間のカード : { type: "between", title, desc, img? } ← 丸・時刻なし
 *
 * title 内の "\n" はスマホ表示のときだけ改行になる（例: "午前中の\n作業の続き"）
 * ──────────────────────────────────────────────── */

import { Fragment } from "react";

/* タイトル内の "\n" はスマホのときだけ改行（PCでは1行表示） */
function MobileBreak({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br className="md:hidden" />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

export type TimelineItem =
  | { type: "time"; time: string; title: string; desc?: string; img?: string | null }
  | { type: "between"; title: string; desc: string; img?: string | null };

function Card({
  time,
  title,
  desc,
  img,
}: {
  time?: string;
  title: string;
  desc: string;
  img?: string | null;
}) {
  return (
    <div className="flex-1 min-w-0 bg-secondary rounded-xl overflow-hidden flex flex-col md:flex-row">
      <div className="flex-1 px-5 py-4 md:px-7 md:py-6">
        {/* 写真（スマホ：右上に寄せて、時刻・タイトルの横に配置） */}
        {img && (
          <div className="md:hidden float-right relative -mt-4 -mr-5 ml-3 mb-2 w-32 aspect-[14/9] rounded-bl-xl overflow-hidden bg-zinc-200">
            <img src={img} alt={title.replace(/\n/g, "")} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}
        {/* 時刻（スマホはカード内に表示） */}
        {time && <p className="md:hidden text-sm font-black text-accent tabular-nums mb-1">{time}</p>}
        <p className="font-black text-lg md:text-2xl text-foreground leading-snug mb-2"><MobileBreak text={title} /></p>
        <p className="clear-right md:clear-none text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
          {desc}
        </p>
      </div>
      {/* 写真（PC：カード右側） */}
      {img && (
        <div className="hidden md:block relative w-56 min-h-[9rem] flex-shrink-0 overflow-hidden bg-zinc-200">
          <img src={img} alt={title.replace(/\n/g, "")} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}

const Dot = ({ className }: { className: string }) => (
  <div className={`flex flex-col items-center flex-shrink-0 ${className}`}>
    <div className="w-3 h-3 rounded-full border-2 border-accent bg-white z-10" />
  </div>
);

export default function DayTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-[0.375rem] md:left-[9.375rem] top-3 bottom-3 w-px bg-border" />
      <div className="flex flex-col gap-5 md:gap-6">
        {items.map((item, i) => {
          /* 時刻の間のカード */
          if (item.type === "between") {
            return (
              <div key={i} className="flex gap-3 md:gap-8 items-start">
                <div className="hidden md:block flex-shrink-0 w-28" />
                <div className="w-3 flex-shrink-0" />
                <Card title={item.title} desc={item.desc} img={item.img} />
              </div>
            );
          }

          /* 時刻＋見出し（背景なし） */
          if (!item.desc) {
            return (
              <div key={i} className="flex gap-3 md:gap-8 items-start">
                <div className="hidden md:block flex-shrink-0 w-28 text-right pr-4 pt-1">
                  <span className="text-xl font-black text-foreground tabular-nums">{item.time}</span>
                </div>
                <Dot className="pt-2 md:pt-3" />
                <div className="flex-1 px-5 md:px-7 py-1">
                  <p className="md:hidden text-sm font-black text-accent tabular-nums">{item.time}</p>
                  <p className="font-black text-lg md:text-xl text-foreground leading-snug"><MobileBreak text={item.title} /></p>
                </div>
              </div>
            );
          }

          /* 時刻＋カード */
          return (
            <div key={i} className="flex gap-3 md:gap-8 items-start">
              <div className="hidden md:block flex-shrink-0 w-28 text-right pr-4 pt-6">
                <span className="text-xl font-black text-foreground tabular-nums">{item.time}</span>
              </div>
              <Dot className="pt-5 md:pt-8" />
              <Card time={item.time} title={item.title} desc={item.desc} img={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
