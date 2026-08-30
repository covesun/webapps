import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import officeImg from "../../imports/IMG_6008.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "会社名・お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.message.trim()) e.message = "お問い合わせ内容を入力してください";
    if (!form.agreed) e.agreed = "個人情報の取り扱いに同意してください";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const field = (id: "name" | "email" | "phone" | "message") => ({
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [id]: e.target.value }));
      setErrors((er) => {
        const n = { ...er };
        delete n[id];
        return n;
      });
    },
  });

  return (
    <>
      <PageHero img={officeImg} en="" ja="お問い合わせ" objectPos="center 40%" />

      {/* Contact strip */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs font-bold opacity-70 tracking-wider mb-0.5">お電話でのお問い合わせ</p>
              <p className="font-black text-xl leading-tight">072-848-7936</p>
              <p className="text-xs opacity-60 mt-0.5">FAX：072-865-3077</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-xs font-bold opacity-70 tracking-wider mb-0.5">受付時間</p>
              <p className="font-black text-base">平日 9:00〜17:00</p>
              <p className="text-xs opacity-60 mt-0.5">土日祝・年末年始を除く</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs font-bold opacity-70 tracking-wider mb-0.5">メールでのお問い合わせ</p>
              <p className="font-black text-base">info@irohagumi.co.jp</p>
              <p className="text-xs opacity-60 mt-0.5">24時間受付</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Left: intro */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-snug tracking-tight mb-6">
                お問い合わせ・
                <br />
                お見積もり依頼
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium mb-6">
                工事のご相談・お見積もりは無料です。現地調査も承ります。お気軽にお問い合わせください。
              </p>
              <ul className="space-y-3">
                {[
                  "見積もり・現地調査は無料",
                  "お問い合わせ翌営業日以内にご返答",
                  "近畿一円・全国各地に対応",
                  "難しい現場・急ぎの案件もご相談ください",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-lg font-medium text-foreground">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground mb-4 uppercase">所在地</p>
                <div className="space-y-2 text-lg font-medium text-foreground">
                  <p className="font-black">株式会社いろは組（本社）</p>
                  <p className="text-muted-foreground">〒573-1163 大阪府枚方市甲斐田新町26-7</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle size={32} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-foreground mb-2">送信が完了しました</p>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed">
                      お問い合わせありがとうございます。
                      <br />
                      翌営業日以内にご返答いたします。
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "", agreed: false });
                    }}
                    className="mt-2 text-base font-bold text-accent underline underline-offset-2 hover:text-green-800 transition-colors"
                  >
                    新しいお問い合わせをする
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <p className="text-xs text-muted-foreground font-medium">
                    <span className="text-red-500 font-black">※</span> は必須項目です
                  </p>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-lg font-black text-foreground">
                      会社名・お名前 <span className="text-red-500 ml-0.5">※</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      placeholder="例：株式会社〇〇　山田 太郎"
                      {...field("name")}
                      className={`w-full rounded-xl border px-4 py-3 text-base font-medium bg-background placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow ${
                        errors.name ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-lg font-black text-foreground">
                      メールアドレス <span className="text-red-500 ml-0.5">※</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      placeholder="例：info@example.co.jp"
                      {...field("email")}
                      className={`w-full rounded-xl border px-4 py-3 text-base font-medium bg-background placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow ${
                        errors.email ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-lg font-black text-foreground">
                      お電話番号 <span className="text-xs text-muted-foreground font-medium ml-1">（任意）</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      placeholder="例：06-0000-0000"
                      {...field("phone")}
                      className="w-full rounded-xl border border-border px-4 py-3 text-base font-medium bg-background placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-lg font-black text-foreground">
                      お問い合わせ内容 <span className="text-red-500 ml-0.5">※</span>
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      placeholder="工事内容・現場の状況・ご希望などをお聞かせください"
                      {...field("message")}
                      className={`w-full rounded-xl border px-4 py-3 text-base font-medium bg-background placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none ${
                        errors.message ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.agreed}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, agreed: e.target.checked }));
                          setErrors((er) => {
                            const n = { ...er };
                            delete n.agreed;
                            return n;
                          });
                        }}
                        className="mt-0.5 w-4 h-4 accent-[#2e8b57] flex-shrink-0"
                      />
                      <span className="text-xs text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">
                        個人情報の取り扱いについて同意します。入力いただいた情報は、お問い合わせへの回答のみに使用し、第三者への提供はいたしません。
                      </span>
                    </label>
                    {errors.agreed && <p className="text-xs text-red-500 font-medium">{errors.agreed}</p>}
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-black text-base hover:bg-green-800 transition-colors shadow-sm"
                  >
                    送信する
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
