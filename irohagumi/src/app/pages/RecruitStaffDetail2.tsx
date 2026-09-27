import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

/* ── 社員データ ──────────────────────────────────── */

type StaffData = {
  id: string;
  name: string;
  role: string;
  year: string;
  catch: string;
  qa: { q: string; a: string }[];
};

const STAFF: StaffData[] = [
  {
    id: "staff-a",
    name: "H",
    role: "社員",
    year: "8年目",
    catch: "大きな声で挨拶と返事ができれば、誰でも大歓迎！",
    qa: [
      { q: "職場の雰囲気は？", a: "仕事中は真剣ですが、終わると社長も含めて全員で冗談を言い合って笑い合える、オンオフがはっきりした職場です。" },
      { q: "やりがいは？", a: "最初はわからない事ばかりでしたが、出来る事が増えて仕事を任された時に、確かな成長を感じられました。" },
      { q: "中途採用者へ向けたメッセージ", a: "最初は右も左もわからないのは当たり前です！そこは気にせず、まずは「大きい声であいさつ＆返事」ができる人なら誰でも大歓迎です！" },
    ],
  },
  {
    id: "staff-b",
    name: "I",
    role: "社員",
    year: "6年目",
    catch: "アットホームな会社です！特に20代の方、一緒に働きましょう！",
    qa: [
      { q: "職場の雰囲気は？", a: "従業員一同、本当に仲が良いです。経験問わず、一緒に楽しんで仕事ができる方をお待ちしています。" },
      { q: "やりがいは？", a: "練習を重ねた溶接技術を、実際の現場で活かして形にできた時に大きな達成感がありました。" },
      { q: "中途採用者へ向けたメッセージ", a: "未経験者、経験者問わず、楽しんで仕事できる方と働きたいです。特に20代が現在1名なので、是非一緒に働きましょう！" },
    ],
  },
  {
    id: "staff-c",
    name: "K",
    role: "工事部部長",
    year: "3年目",
    catch: "面倒見のいい先輩たちが、しっかり技術を伝えます！",
    qa: [
      { q: "職場の雰囲気は？", a: "みんな面倒見がいいです。現場での動きを見てアドバイスをくれたり、最後は笑いになるようなコミュニケーションがあります。" },
      { q: "やりがいは？", a: "最初は高所が怖かったですが、慣れて動けるようになりました。今でも安全確認を第一に仕事に取り組みました。" },
      { q: "中途採用者へ向けたメッセージ", a: "向上心があり、人の面倒が見れて、職人を目指す強い心を持った人を待っています！" },
    ],
  },
  {
    id: "staff-d",
    name: "O",
    role: "工事部主任",
    year: "10年目",
    catch: "仲間と話し合いながら進める、チームワークの良さが自慢です",
    qa: [
      { q: "職場の雰囲気は？", a: "みんなで色々と話し合いながら仕事が進められる、風通しの良い環境だと思います。" },
      { q: "やりがいは？", a: "条件が厳しくて「うまくいくかな？」と心配だった現場でも、無事に施工を終えられた時に達成感を感じました。" },
      { q: "中途採用者へ向けたメッセージ", a: "新しく入ってきた仲間と一緒に、色々と話し合いながら協力して作業を進めていきたいです。" },
    ],
  },
  {
    id: "staff-e",
    name: "K",
    role: "工事部主任",
    year: "8年目",
    catch: "現場が休みの日には、みっちり技術を教えます！",
    qa: [
      { q: "職場の雰囲気は？", a: "仕事中は厳しく指導することもありますが、休憩中になれば上下関係なくフランクに会話ができる職場です。" },
      { q: "やりがいは？", a: "初めて自分に現場を任された時、責任とともに大きなやりがいを感じました。" },
      { q: "中途採用者へ向けたメッセージ", a: "現場仕事なので作業中は教えられる時間が限られますが、現場が休みの日はみっちり教えられます。安心してください！" },
    ],
  },
  {
    id: "staff-f",
    name: "K",
    role: "協力会社",
    year: "",
    catch: "未経験でもやる気があれば大歓迎！メリハリのある職場で共に成長しましょう！",
    qa: [
      { q: "職場の雰囲気は？", a: "仕事中でも楽しくでき、危険な作業前には、指揮者が気を引き締めて作業に取り掛かり、メリハリの有る雰囲気です。" },
      { q: "やりがいは？", a: "重量物や高所作業など様々な経験を通して成長できました。特に昨夏の愛知の現場での組み立て溶接は、やり切った達成感があり、良い経験になりました。" },
      { q: "中途採用者へ向けたメッセージ", a: "未経験でも向上心、やる気のある方と仕事を一緒にしていたいです。" },
    ],
  },
];

/* ── コンポーネント ──────────────────────────────── */

export default function RecruitStaffDetail2() {
  const { staffId } = useParams<{ staffId: string }>();
  const staff = STAFF.find((s) => s.id === staffId);

  if (!staff) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">ページが見つかりませんでした。</p>
          <Link to="/recruit/field" className="text-accent font-bold hover:underline">
            現場作業員・管理職のページへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const other = STAFF.filter((s) => s.id !== staffId);

  return (
    <div className="pt-20">
      {/* ── プロフィールヘッダー ───────────────── */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0 w-36 h-36 rounded-full bg-accent/15 flex items-center justify-center ring-4 ring-accent/10">
              <User size={56} className="text-accent/50" />
            </div>
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <p className="text-xs font-bold text-muted-foreground mb-1">{staff.year}</p>
              <p className="text-sm font-bold text-accent mb-2">{staff.role}</p>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5">
                {staff.name}
                <span className="text-muted-foreground font-medium text-xl ml-2">さん</span>
              </h1>
              <blockquote className="text-lg md:text-xl font-bold text-foreground leading-snug border-l-4 border-accent pl-5 text-left">
                "{staff.catch}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Q&A ──────────────────────────────────── */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            {staff.qa.map(({ q, a }, i) => (
              <div key={i} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <span className="text-[4rem] font-black text-accent/12 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="pt-1">
                  <h2 className="text-sm font-black text-accent mb-3 tracking-wide">{q}</h2>
                  <p className="text-base leading-relaxed text-foreground font-medium">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 下部「一覧に戻る」ボタン ────────────── */}
      <div className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <Link
            to="/recruit/field#voices"
            className="inline-flex items-center gap-2 text-sm font-black text-accent hover:text-green-800 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            社員の声 一覧に戻る
          </Link>
        </div>
      </div>

      {/* ── 他の社員の声 ─────────────────────── */}
      {other.length > 0 && (
        <section className="bg-background py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-snug mb-6 md:mb-9">他の社員の声</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {other.map((v) => (
                <div key={v.id} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                  <div className="h-32 bg-accent/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <User size={32} className="text-accent/50" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-bold text-accent tracking-wide mb-1">{v.role}</p>
                      <p className="text-lg font-black text-foreground">
                        {v.name}
                        <span className="text-muted-foreground font-medium text-sm ml-1">さん</span>
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed border-l-2 border-accent/30 pl-3">
                      {v.catch}
                    </p>
                    <Link
                      to={`/recruit/field/${v.id}`}
                      className="inline-flex items-center gap-2 text-sm font-black text-accent hover:text-green-800 transition-colors group"
                    >
                      詳しく見る
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 募集要項へのリンク ───────────────── */}
      <div className="bg-background border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-base text-muted-foreground font-medium mb-6">
            入社や待遇について、詳しくはこちらをご覧ください。
          </p>
          <Link
            to="/recruit/field#specs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent text-accent font-black text-base hover:bg-accent hover:text-white transition-colors group"
          >
            募集要項を見る
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
