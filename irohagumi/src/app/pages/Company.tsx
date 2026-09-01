import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import ContactBand from "../components/ContactBand";
import officeImg from "../../imports/ph_company.jpg";
import truckImg from "../../imports/IMG_9515.jpeg";
import greetingImg from "../../imports/Creating_company_website_greetin__202608101712-1.jpeg";
import signatureImg from "../../imports/__________2026-08-10_14.59.28-1.png";

const COMPANY_INFO = [
  { label: "会社名", value: "株式会社いろは組" },
  { label: "設立", value: "2008年4月" },
  { label: "代表取締役", value: "阿部 眞一郎" },
  { label: "所在地", value: "〒573-1163　大阪府枚方市甲斐田新町26-7" },
  { label: "電話番号", value: "TEL：072-848-7936 / FAX：072-865-3077" },
  { label: "事業内容", value: "プラント設備工事 / 重量物据付工事 / クレーン作業 / 機材レンタル" },
  { label: "建設業許可", value: "大阪府知事許可（般-6）第141239号" },
  { label: "資本金", value: "1,000万円" },
  { label: "従業員数", value: "12名（2024年4月現在）" },
];

const YARDS = [
  {
    name: "青山機材ヤード",
    zip: "〒576-0066",
    addr: "大阪府交野市青山2-3-1",
    img: officeImg,
    mapQ: "〒576-0066+大阪府交野市青山2-3-1",
  },
  {
    name: "尊延寺機材ヤード",
    zip: "〒573-0112",
    addr: "大阪府枚方市大字尊延寺810-1",
    img: truckImg,
    mapQ: "〒573-0112+大阪府枚方市大字尊延寺810-1",
  },
];

export default function Company() {
  return (
    <>
      <PageHero img={officeImg} en="About" ja="会社概要" objectPos="center 72%" />

      {/* ── 代表メッセージ ───────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black leading-snug tracking-tight mb-8">ごあいさつ</h2>

          <div className="w-full rounded-2xl overflow-hidden mb-10 shadow-sm">
            <img src={greetingImg} alt="技術を未来へ" className="w-full h-auto object-cover" />
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-foreground font-medium">
            <p>
              株式会社いろは組は、これまで培ってきた確かな技術と、ものづくりの基本を何よりも大切にしています。
            </p>
            <p>
              各種プラント工事という社会の根幹を支える現場において、一つひとつのご依頼に誠実に向き合い、丁寧かつ迅速な施工を行います。現場において妥協のない安全基準を設け、最高水準の品質を追求することは私たちの最大の使命です。
            </p>
            <p>
              同時に、私たちが手がける事業は、地域の未来に直結しています。だからこそ、常に環境への配慮を忘れず、持続可能な社会に貢献できる仕事を心がけています。
            </p>
            <p>
              これらの質の高い仕事を生み出し、社会の期待に応え続ける原動力は、現場で活躍する社員一人ひとりの力に他なりません。働くすべての人が自分の仕事に深い誇りを持ち、心身ともに安心して長く活躍できるような「働きやすさ」を追求した環境づくりに、全社を挙げて取り組んでいます。
            </p>
            <p>
              目まぐるしく社会が変化する時代であっても、私たちは決してその変化を恐れません。時代に即した柔軟な働き方を積極的に取り入れ、磨き抜かれた技術を未来へと繋ぎながら、私たちはさらなる高みを目指して進んでまいります。
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col items-end">
            <div className="flex flex-col items-start w-fit gap-2">
              <p className="text-sm text-muted-foreground font-medium">株式会社いろは組　代表取締役</p>
              <img
                src={signatureImg}
                alt="代表取締役 阿部 眞一郎"
                className="h-16 md:h-30 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 会社情報 ─────────────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-7 md:mb-10">会社情報</h2>
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            {COMPANY_INFO.map(({ label, value }, i) => (
              <div
                key={label}
                className={`grid grid-cols-[6rem_1fr] md:grid-cols-[10rem_1fr] ${
                  i !== COMPANY_INFO.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="bg-accent px-5 py-5 flex items-center">
                  <span className="text-s font-black text-white tracking-wide">{label}</span>
                </div>
                <div className="bg-card px-6 py-5 flex items-center">
                  <p className="text-base text-foreground font-medium leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── アクセス ─────────────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-7 md:mb-10">アクセス</h2>

          {/* 本社 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-black tracking-wider">
                本社
              </span>
              <p className="text-lg font-black text-foreground">株式会社いろは組</p>
            </div>

            <div className="grid md:grid-cols-[1fr_340px] gap-6 items-start">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-border bg-zinc-200 min-h-[320px] md:min-h-[380px]">
                <iframe
                  title="いろは組 本社所在地"
                  src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%9E%9A%E6%96%B9%E5%B8%82%E7%94%B2%E6%96%90%E7%94%B0%E6%96%B0%E7%94%BA26-7&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[320px] md:min-h-[380px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-card rounded-2xl border border-border p-7 flex flex-col gap-5 shadow-sm">
                <div className="flex gap-3 items-start">
                  <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-black text-muted-foreground tracking-wider mb-1">所在地</p>
                    <p className="text-lg font-medium text-foreground">〒573-1163</p>
                    <p className="text-lg font-medium text-foreground">大阪府枚方市甲斐田新町26-7</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Phone size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-black text-muted-foreground tracking-wider mb-1">電話・FAX</p>
                    <p className="text-lg font-medium text-foreground">TEL：072-848-7936</p>
                    <p className="text-lg font-medium text-foreground">FAX：072-865-3077</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs font-black text-muted-foreground tracking-wider mb-1">メール</p>
                    <p className="text-lg font-medium text-foreground">info@iroha-gumi.co.jp</p>
                  </div>
                </div>
                <div className="h-px bg-border" />
                <a
                  href="https://maps.google.com/?q=〒573-1163+大阪府枚方市甲斐田新町26-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors"
                >
                  Google マップで開く
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* 機材ヤード 2拠点 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-yellow-400 text-[#0c1f12] text-xs font-black tracking-wider">
                機材ヤード
              </span>
              <p className="text-lg font-black text-foreground">2拠点</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {YARDS.map((yard) => (
                <div key={yard.name} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                  <div className="aspect-[16/7] overflow-hidden bg-zinc-200">
                    <img src={yard.img} alt={yard.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <p className="font-black text-lg text-foreground">{yard.name}</p>
                    <div className="flex gap-3 items-start">
                      <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-medium text-foreground">{yard.zip}</p>
                        <p className="text-lg font-medium text-foreground">{yard.addr}</p>
                      </div>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${yard.mapQ}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                    >
                      Google マップで開く
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBand copy="お気軽にお問い合わせください。" />
    </>
  );
}
