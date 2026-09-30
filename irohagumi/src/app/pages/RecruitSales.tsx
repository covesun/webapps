import { Link } from "react-router";
import {
  ArrowRight,
  Phone,
  Shield,
  GraduationCap,
  Award,
  Coins,
  BookUser,
  MessageSquareQuote,
} from "lucide-react";
import PageHero from "../components/PageHero";
import DayTimeline, { type TimelineItem } from "../components/DayTimeline";
import heroImg from "../../imports/IMG_6008.jpg";

/* ── データ ─────────────────────────────────────── */

const SALES_SCHEDULE: TimelineItem[] = [
  { type: "time", time: "9:00",  title: "出社・朝礼",       desc: "当日のスケジュールを確認し、チームで情報を共有します。", img: heroImg },
  { type: "time", time: "10:00", title: "打ち合わせ・見積作成", desc: "社内打ち合わせや、お客様へ提出する見積書の作成・確認を行います。", img: null },
  { type: "time", time: "11:00", title: "現場確認",          desc: "施工中の現場を訪問し、進捗状況や安全確認を行います。お客様への報告事項もまとめます。", img: heroImg },
  { type: "time", time: "12:00", title: "昼休憩",            desc: "1時間、しっかり休みます。社内や外食など自由に過ごせます。", img: heroImg },
  { type: "time", time: "13:00", title: "既存顧客訪問",      desc: "定期的な訪問を通じてお客様との関係を深め、新たなニーズや課題をヒアリングします。", img: null },
  { type: "time", time: "17:00", title: "帰社・翌日の準備",  desc: "訪問記録の整理や翌日のスケジュール調整を行います。", img: heroImg },
  { type: "time", time: "17:30", title: "日報作成",          desc: "1日の活動内容を日報にまとめ、チームに共有します。", img: null },
  { type: "time", time: "18:00", title: "終業",              desc: "メリハリのある働き方を大切にしています。お疲れさまでした。", img: heroImg },
];

const BENEFITS = [
  { icon: <Shield size={22} />,       label: "社会保険完備", desc: "健康保険・厚生年金・雇用保険・労災保険" },
  { icon: <GraduationCap size={22} />, label: "資格取得支援", desc: "業務に関連する資格の取得費用をサポート" },
  { icon: <Award size={22} />,        label: "資格・技能手当", desc: "保有資格・スキルに応じた各種手当を支給" },
  { icon: <Coins size={22} />,        label: "賞与年2回",   desc: "夏・冬の年2回支給（会社業績による）" },
  { icon: <BookUser size={22} />,     label: "退職金制度",  desc: "中小企業退職金共済（中退共）加入済み" },
];

const SALES_SPECS = [
  { label: "募集職種",value: "営業職" },
  { label: "応募資格", value: "学歴・経験不問。建設・機械業界の経験者・有資格者は優遇します。普通自動車免許必須。" },
  { label: "給与",    value: "経験・能力を考慮のうえ決定します。詳細は面接時にご説明します。" },
  { label: "昇給",    value: "あり（能力・実績による）" },
  { label: "賞与",    value: "年2回（会社業績による）" },
  { label: "諸手当",  value: "通勤手当、時間外手当、その他各種手当" },
  { label: "勤務地",  value: "本社および各営業先（近畿圏内が中心）" },
  { label: "勤務時間", value: "9:00〜18:00" },
  { label: "休日・休暇", value: "年間休日87日、日曜・祝日、会社カレンダーによる" },
  { label: "社会保険", value: "健康保険・厚生年金保険・雇用保険・労災保険" },
  { label: "選考方法", value: "面接（1回）" },
];

/* ── コンポーネント ──────────────────────────────── */

export default function RecruitSales() {
  return (
    <>
      <PageHero
        img={heroImg}
        en="Sales"
        ja="営業職"
        objectPos="center"
      />

      {/* ── 一日の流れ ───────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-2">営業職の一日</h2>
          <p className="text-base text-muted-foreground font-medium mb-9">※あくまで一例です</p>

          <DayTimeline items={SALES_SCHEDULE} />
        </div>
      </section>

      {/* ── 社員の声（プレースホルダ）───────────── */}
      <section id="voices" className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">社員の声</h2>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <MessageSquareQuote size={26} className="text-accent/60" />
            </div>
            <div className="flex-1">
              <p className="font-black text-lg text-foreground tracking-tight">代表より</p>
              <p className="text-xs font-bold text-accent tracking-wide">株式会社いろは組 代表</p>
              {/* キャッチ（主役） */}
              <p className="mt-6 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight border-l-4 border-accent pl-5">
                営業職は現在採用中です。
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/85 font-medium">
                お客様と現場をつなぎ、信頼関係を育む大切な役割です。建設・機械業界の経験がある方はもちろん、人と話すことが好きな方からのご応募をお待ちしています。詳しい業務内容や待遇については、面接の際に直接ご説明します。
              </p>
              <p className="mt-5 text-xs text-muted-foreground">
                ※ 社員インタビューは採用後に順次掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 福利厚生 ─────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">福利厚生</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {BENEFITS.map(({ icon, label, desc }) => (
              <div key={label} className="bg-card rounded-2xl border border-border p-5 md:p-7 flex flex-row md:flex-col items-start gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                  {icon}
                </div>
                <div>
                  <p className="font-black text-lg md:text-xl text-foreground leading-snug mb-1 md:mb-2">{label}</p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 募集要項 ─────────────────────────────── */}
      <section id="specs" className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">募集要項</h2>
          <div className="rounded-2xl border border-border overflow-hidden">
            {SALES_SPECS.map(({ label, value }, i) => (
              <div
                key={label}
                className={`grid grid-cols-[8rem_1fr] md:grid-cols-[12rem_1fr] ${
                  i !== SALES_SPECS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="bg-accent px-5 py-5 flex items-start">
                  <span className="text-s font-black text-white tracking-wide whitespace-nowrap">{label}</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-base text-foreground font-medium leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground text-center">※ 詳細はお問い合わせ時にご確認いただけます</p>
        </div>
      </section>

      {/* ── 現場作業員・管理職へのリンク ─────────── */}
      <div className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <Link
            to="/recruit/field"
            className="inline-flex items-center gap-3 text-base font-black text-accent hover:text-green-800 transition-colors group"
          >
            現場作業員・管理職も募集中
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── 応募ボタン ───────────────────────────── */}
      <section className="bg-accent py-14 md:py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-snug mb-5 tracking-tight">
            まずは気軽に
            <br />
            ご連絡ください。
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-medium">
            「話を聞いてみたい」だけでもOKです。選考への影響はありません。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent font-black text-base hover:bg-yellow-50 transition-colors shadow-md"
            >
              お問い合わせフォームへ
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0728487936"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/60 text-white font-bold text-base hover:bg-white/10 transition-colors"
            >
              <Phone size={17} />
              072-848-7936
            </a>
          </div>
          <p className="mt-6 text-white/50 text-xs">受付時間：平日 9:00〜18:00（メールは24時間受付）</p>
        </div>
      </section>
    </>
  );
}
