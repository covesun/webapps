import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import workImg from "../../imports/DSCF3225.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 送信先エンドポイントに接続する
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        lead="現場の難しさや予算感など、お気軽にご相談ください。見積もり・現地調査は無料です。"
        image={workImg}
        imageAlt="溶接・仕上げ施工"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-4">
            <a
              href="tel:0728487936"
              className="flex items-center gap-4 p-5 rounded-xl bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider mb-0.5">お電話</p>
                <p className="text-foreground font-black text-lg tracking-wider">072-848-7936</p>
                <p className="text-muted-foreground text-xs mt-0.5">平日 9:00〜17:00 / FAX 072-865-3077</p>
              </div>
            </a>

            <a
              href="mailto:info@irohagumi.co.jp"
              className="flex items-center gap-4 p-5 rounded-xl bg-secondary hover:bg-secondary/70 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider mb-0.5">メール</p>
                <p className="text-foreground font-bold text-sm">下記フォームよりお問い合わせください</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-secondary">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider mb-0.5">所在地（本社）</p>
                <p className="text-foreground font-bold text-sm">〒573-1163 大阪府枚方市甲斐田新町26-7</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl bg-secondary p-10 text-center">
                <p className="font-black text-xl mb-2">お問い合わせありがとうございます。</p>
                <p className="text-sm text-muted-foreground">担当者より折り返しご連絡いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-wider text-muted-foreground mb-2">
                    会社名・お名前 <span className="text-destructive">※必須</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-wider text-muted-foreground mb-2">
                    メールアドレス <span className="text-destructive">※必須</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold tracking-wider text-muted-foreground mb-2">
                    お電話番号（任意）
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-wider text-muted-foreground mb-2">
                    お問合せ内容 <span className="text-destructive">※必須</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-green-800 transition-colors self-start"
                >
                  送信する
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
