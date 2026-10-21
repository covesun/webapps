export default function PageHero({
  img,
  en,
  ja,
  objectPos = "center",
  lineArt,
  darkArt,
  titleClass,
}: {
  img?: string;
  en?: string;
  ja: string;
  objectPos?: string;
  /** 線画版：薄グレー地に透過線画を右寄せで重ねる。指定時は img は不要 */
  lineArt?: string;
  /** 濃緑版：トップヒーローと同じ背景色に白文字タイトル＋白の線画（透過）を右寄せ */
  darkArt?: string;
  /** 写真版のタイトル文字色などを上書きするクラス */
  titleClass?: string;
}) {
  if (darkArt) {
    return (
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#163321]">
        {/* 線画：ヒーローの右2/3を高さいっぱいに敷き、左端はフェードで背景に溶かす */}
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3 pointer-events-none" aria-hidden="true">
          <img
            src={darkArt}
            alt=""
            className="w-full h-full object-cover object-[center_30%] select-none opacity-70 md:opacity-90 [mask-image:linear-gradient(to_right,transparent,black_40%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_40%)]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 md:pb-14">
          <h1 className="relative text-4xl md:text-6xl leading-none font-black text-white tracking-tight">
            {ja}
          </h1>
        </div>
      </section>
    );
  }

  if (lineArt) {
    return (
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-white">
        {/* 地面の線：ヒーローと記事の切り替わり（全幅） */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#B9C1BC]" aria-hidden="true" />
        {/* 線画：本文と同じコンテナの右端に揃える */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="relative h-full max-w-7xl mx-auto md:px-6">
            <img
              src={lineArt}
              alt=""
              className="absolute bottom-0 right-0 md:right-6 h-full w-auto max-w-none select-none"
            />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 md:pb-14">
          <h1 className="relative text-4xl md:text-6xl leading-none font-black text-[#14351B] tracking-tight">
            {ja}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-zinc-100">
      <img
        src={img}
        alt={ja}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: objectPos }}
      />
      {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/95 via-white/50 to-transparent" /> */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 md:pb-14">
        {en && (
          <p className="text-xs font-bold tracking-[0.35em] text-accent mb-2 uppercase hidden">
            {en}
          </p>
        )}
        <h1 className={`text-4xl md:text-6xl font-black tracking-tight text-halo ${titleClass ?? "text-foreground/90"}`}>
          {ja}
        </h1>
      </div>
    </section>
  );
}
