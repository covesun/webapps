export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-[#0c1f12] overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f12]/80 via-[#0c1f12]/50 to-[#0c1f12]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f12]/55 via-transparent to-transparent" />
        </>
      )}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.3em] text-yellow-400 mb-4 uppercase">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-snug mb-4">
          {title}
        </h1>
        {lead && <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">{lead}</p>}
      </div>
    </section>
  );
}
