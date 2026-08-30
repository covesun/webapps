import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import officeImg from "../../imports/IMG_6008.jpg";

export default function ContactBand({
  copy = "お気軽にお問い合わせください。",
}: {
  copy?: string;
}) {
  return (
    <section className="bg-accent py-14 md:py-20 px-6 relative overflow-hidden">
      <img
        src={officeImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-yellow-400 mb-4 uppercase">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{copy}</h2>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          見積もり・現地調査は無料です。まずはご連絡ください。
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent font-black text-base hover:bg-yellow-50 transition-colors shadow-md"
        >
          お問い合わせフォームへ
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
