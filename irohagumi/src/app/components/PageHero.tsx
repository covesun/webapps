export default function PageHero({
  img,
  en,
  ja,
  objectPos = "center",
}: {
  img: string;
  en: string;
  ja: string;
  objectPos?: string;
}) {
  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-zinc-100">
      <img
        src={img}
        alt={ja}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: objectPos }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/95 via-white/50 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 md:pb-14">
        {en && (
          <p className="text-xs font-bold tracking-[0.35em] text-accent mb-2 uppercase">
            {en}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
          {ja}
        </h1>
      </div>
    </section>
  );
}
