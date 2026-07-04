import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import truckImg from "../../imports/IMG_9515.jpeg";

const POSITIONS = ["機械据付工", "仕上工", "鍛冶工"];

const DETAILS = [
  { label: "募集職種", value: "機械据付工／仕上工／鍛冶工" },
  { label: "応募資格", value: "経験不問・年齢不問（未経験の方も丁寧に指導します）" },
  { label: "給与", value: "経験者優遇（詳細は面談時に決定）" },
  { label: "諸手当", value: "交通費など" },
  { label: "賞与", value: "年2回（業績により変動）" },
  { label: "勤務地", value: "各現場（大阪府枚方市本社ほか）" },
  { label: "勤務時間", value: "8:00〜17:00" },
  { label: "休日", value: "年間87日（祝祭日含む）" },
  { label: "福利厚生", value: "社会保険、雇用保険、厚生年金" },
  { label: "選考プロセス", value: "面接による採用" },
];

export default function Recruit() {
  return (
    <>
      <PageHero
        eyebrow="Recruit"
        title="採用情報"
        lead="明るくてやる気のある方募集！未経験の方も丁寧に指導します。人材育成に力を入れ、資格取得支援と技術指導を行っています。"
        image={truckImg}
        imageAlt="株式会社いろは組 自社クレーン車"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-3 flex-wrap mb-12">
            {POSITIONS.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold"
              >
                {role}
              </span>
            ))}
          </div>

          <dl className="divide-y divide-border border-t border-b border-border">
            {DETAILS.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-6 py-5">
                <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase sm:col-span-1">
                  {label}
                </dt>
                <dd className="text-sm sm:text-base font-medium text-foreground sm:col-span-3">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 rounded-2xl bg-secondary p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-black text-lg mb-1">まずはお気軽にご応募・お問い合わせください。</p>
              <p className="text-sm text-muted-foreground">経験・年齢不問。一緒に働く仲間を歓迎します。</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-base hover:bg-green-800 transition-colors whitespace-nowrap"
            >
              応募・お問い合わせ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
