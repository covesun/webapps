import { Link } from "react-router";
import { ArrowRight, HardHat, Briefcase } from "lucide-react";
import heroImg from "../../imports/ph_recruit.jpg";
import fieldImg from "../../imports/suetuke.jpg";
import salesImg from "../../imports/IMG_6008.jpg";

export default function Recruit() {
  return (
    <>
      {/* ── Hero（採用メッセージ） ─────────────────────── */}
      <section className="relative h-[80vh] min-h-[480px] flex items-end overflow-hidden bg-zinc-100">
        <img
          src={heroImg}
          alt="いろは組の現場スタッフ"
          className="absolute inset-0 w-full h-full object-cover object-[40%_50%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-60 md:h-[26rem] bg-gradient-to-t from-white/97 via-white/60 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10 md:pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-foreground/95 tracking-tight leading-tight text-halo">
            技術と信頼を、
            <br />
            共につくる仲間を<br className="md:hidden" />求めています。
          </h1>
          {/* 説明文（PCはヒーロー内に表示） */}
          <p className="hidden md:block max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-foreground/80 font-bold text-halo">
            いろは組では、現場を支える作業員・管理職から、お客様との橋渡しをする営業職まで、幅広い職種で採用を行っています。経験・学歴は問いません。一歩踏み出す意欲があれば、私たちが全力でサポートします。
          </p>
        </div>
      </section>

      {/* 説明文（スマホはヒーローの下に表示） */}
      <section className="md:hidden bg-background pt-8 pb-14">
        <div className="px-6">
          <p className="text-base leading-relaxed text-muted-foreground font-medium">
            いろは組では、現場を支える作業員・管理職から、お客様との橋渡しをする営業職まで、幅広い職種で採用を行っています。経験・学歴は問いません。一歩踏み出す意欲があれば、私たちが全力でサポートします。
          </p>
        </div>
      </section>

      {/* ── 職種選択カード ────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-6 md:mb-9">
            募集職種を<br className="md:hidden" />選んでください
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <JobCard
              to="/recruit/field"
              img={fieldImg}
              label="現場作業員・管理職"
              catch_="安全と品質を支える現場のプロフェッショナル"
              desc="お客様に安心していただけるレベルの技術力・安全を届けます。"
              btnText="現場作業員・管理職はこちら"
              icon={<HardHat size={18} />}
            />
            <JobCard
              to="/recruit/sales"
              img={salesImg}
              label="営業職"
              catch_="現場を支え、信頼をつなぐ"
              desc="お客様との関係を大切にしながら、チームとともに最適な提案を届けます。"
              btnText="営業職はこちら"
              icon={<Briefcase size={18} />}
            />
          </div>
        </div>
      </section>

      {/* ── サポート訴求 ────────────────────────────── */}
      <section className="bg-background py-14 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { num: "01", title: "未経験歓迎", body: "学歴・経験不問。入社後はOJT研修と先輩社員のマンツーマン指導があります。" },
              { num: "02", title: "資格取得支援", body: "クレーン・玉掛・フォークリフトなど、現場で役立つ資格の取得費用をサポートします。" },
              { num: "03", title: "安定した待遇", body: "社会保険完備・賞与年2回・退職金制度（中退共）で、長く安心して働けます。" },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex flex-col items-center gap-3 px-4">
                <span className="text-5xl font-black text-accent/15 leading-none">{num}</span>
                <h3 className="text-xl font-black text-foreground">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed font-medium">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function JobCard({
  to,
  img,
  label,
  catch_,
  desc,
  btnText,
  icon,
}: {
  to: string;
  img: string;
  label: string;
  catch_: string;
  desc: string;
  btnText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Photo */}
      <div className="relative h-52 bg-zinc-200 overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-700 animate-pulse" />
          Recruiting Now
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 gap-4">
        <div className="flex items-center gap-2 text-accent">
          {icon}
          <span className="text-xs font-black tracking-[0.15em] uppercase">{label}</span>
        </div>
        <h3 className="text-xl font-black text-foreground leading-snug">{catch_}</h3>
        <p className="text-base text-muted-foreground leading-relaxed font-medium flex-1">{desc}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-black text-base hover:bg-green-800 transition-colors group mt-1"
        >
          {btnText}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
