import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowRight, CheckCircle, Phone, Paperclip, X } from "lucide-react";
import PageHero from "../components/PageHero";
import heroImg from "../../imports/recruit_hero.jpg";

// NOTE: モック段階では送信先なし（完了画面を出すだけ）。本番はWordPress側フォームで受信する。
// 履歴書の扱い（メール添付 or サーバー保存・保存期間）はクライアント確認事項。

const JOBS = [
  { key: "sales", label: "営業職" },
  { key: "field", label: "現場作業員・管理職" },
] as const;

const STATUSES = ["在職中", "離職中", "学生", "その他"];

const LICENSES = [
  "玉掛け",
  "クレーン（移動式・天井など）",
  "フォークリフト",
  "溶接",
  "普通自動車免許",
  "中型・大型自動車免許",
];

const MAX_FILES = 2;
const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.heic";

type Form = {
  job: string;
  name: string;
  kana: string;
  birth: string;
  phone: string;
  email: string;
  address: string;
  status: string;
  experience: string;
  licenses: string[];
  licenseOther: string;
  startDate: string;
  contactTime: string;
  message: string;
  agreed: boolean;
};

const emptyForm = (job: string): Form => ({
  job,
  name: "",
  kana: "",
  birth: "",
  phone: "",
  email: "",
  address: "",
  status: "",
  experience: "",
  licenses: [],
  licenseOther: "",
  startDate: "",
  contactTime: "",
  message: "",
  agreed: false,
});

const inputCls = (err?: string) =>
  `w-full rounded-xl border px-4 py-3 text-base font-medium bg-background placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-accent transition-shadow ${
    err ? "border-red-400" : "border-border"
  }`;

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-lg font-black text-foreground">
        {label}
        {required ? (
          <span className="text-red-500 ml-1">※</span>
        ) : (
          <span className="text-xs text-muted-foreground font-medium ml-1">（任意）</span>
        )}
      </p>
      {children}
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

export default function RecruitApply() {
  const [params] = useSearchParams();
  const initialJob = JOBS.find((j) => j.key === params.get("job"))?.label ?? "";

  const [form, setForm] = useState<Form>(emptyForm(initialJob));
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const clearError = (k: string) =>
    setErrors((er) => {
      const n = { ...er };
      delete n[k];
      return n;
    });

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    clearError(k);
  };

  const text = (k: keyof Form) => ({
    value: form[k] as string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      set(k, e.target.value as never),
  });

  const toggleLicense = (l: string) =>
    set("licenses", form.licenses.includes(l) ? form.licenses.filter((x) => x !== l) : [...form.licenses, l]);

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    e.target.value = "";
    const next = [...files, ...picked];
    if (next.length > MAX_FILES) {
      setErrors((er) => ({ ...er, files: `添付できるファイルは${MAX_FILES}つまでです` }));
      return;
    }
    if (picked.some((f) => f.size > MAX_SIZE)) {
      setErrors((er) => ({ ...er, files: "1ファイルあたり5MBまでです" }));
      return;
    }
    clearError("files");
    setFiles(next);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.job) e.job = "希望職種を選択してください";
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.kana.trim()) e.kana = "ふりがなを入力してください";
    if (!form.birth) e.birth = "生年月日を入力してください";
    if (!form.phone.trim()) e.phone = "電話番号を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.agreed) e.agreed = "個人情報の取り扱いに同意してください";
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero img={heroImg} en="" ja="採用応募フォーム" objectPos="50% 35%" />

      <section className="bg-background py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm flex flex-col items-center gap-5 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle size={32} className="text-accent" />
              </div>
              <p className="font-black text-xl text-foreground">ご応募ありがとうございます</p>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                内容を確認のうえ、担当者よりご連絡いたします。
              </p>
              <Link
                to="/recruit"
                className="mt-2 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-green-800 transition-colors"
              >
                採用情報に戻る <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-black leading-snug tracking-tight mb-6">
                応募する
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-medium mb-4">
                経験・学歴は問いません。下記フォームに必要事項をご入力のうえ、送信してください。
              </p>
              <p className="flex items-center gap-2 text-base font-bold text-foreground mb-10">
                <Phone size={16} className="text-accent" />
                お電話でのご応募も受け付けています：
                <a href="tel:0728487936" className="text-accent underline underline-offset-2">
                  072-848-7936
                </a>
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm flex flex-col gap-7"
              >
                <p className="text-xs text-muted-foreground font-medium">
                  <span className="text-red-500 font-black">※</span> は必須項目です
                </p>

                <Field label="希望職種" required error={errors.job}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {JOBS.map((j) => (
                      <label
                        key={j.key}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer font-bold transition-colors ${
                          form.job === j.label ? "border-accent bg-accent/5 text-accent" : "border-border"
                        }`}
                      >
                        <input
                          type="radio"
                          name="job"
                          checked={form.job === j.label}
                          onChange={() => set("job", j.label)}
                          className="w-4 h-4 accent-[#2e8b57]"
                        />
                        {j.label}
                      </label>
                    ))}
                  </div>
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="お名前" required error={errors.name}>
                    <input type="text" placeholder="例：山田 太郎" autoComplete="name" {...text("name")} className={inputCls(errors.name)} />
                  </Field>
                  <Field label="ふりがな" required error={errors.kana}>
                    <input type="text" placeholder="例：やまだ たろう" {...text("kana")} className={inputCls(errors.kana)} />
                  </Field>
                </div>

                <Field label="生年月日" required error={errors.birth}>
                  <input type="date" autoComplete="bday" {...text("birth")} className={`${inputCls(errors.birth)} sm:max-w-xs`} />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="電話番号" required error={errors.phone}>
                    <input type="tel" placeholder="例：090-0000-0000" autoComplete="tel" {...text("phone")} className={inputCls(errors.phone)} />
                  </Field>
                  <Field label="メールアドレス" required error={errors.email}>
                    <input type="email" placeholder="例：yamada@example.com" autoComplete="email" {...text("email")} className={inputCls(errors.email)} />
                  </Field>
                </div>

                <Field label="お住まい（都道府県・市区町村）">
                  <input type="text" placeholder="例：大阪府枚方市" {...text("address")} className={inputCls()} />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="現在の状況">
                    <select {...text("status")} className={inputCls()}>
                      <option value="">選択してください</option>
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="同業種の経験">
                    <div className="flex gap-3">
                      {["経験あり", "未経験"].map((x) => (
                        <label key={x} className="flex-1 flex items-center gap-2 rounded-xl border border-border px-4 py-3 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="experience"
                            checked={form.experience === x}
                            onChange={() => set("experience", x)}
                            className="w-4 h-4 accent-[#2e8b57]"
                          />
                          {x}
                        </label>
                      ))}
                    </div>
                  </Field>
                </div>

                <Field label="保有資格・免許">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {LICENSES.map((l) => (
                      <label key={l} className="flex items-center gap-2 text-base font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.licenses.includes(l)}
                          onChange={() => toggleLicense(l)}
                          className="w-4 h-4 accent-[#2e8b57]"
                        />
                        {l}
                      </label>
                    ))}
                  </div>
                  <input type="text" placeholder="その他の資格があればご記入ください" {...text("licenseOther")} className={`${inputCls()} mt-2`} />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="入社可能時期">
                    <input type="text" placeholder="例：即日、2027年1月頃" {...text("startDate")} className={inputCls()} />
                  </Field>
                  <Field label="連絡のつきやすい時間帯">
                    <input type="text" placeholder="例：平日18時以降" {...text("contactTime")} className={inputCls()} />
                  </Field>
                </div>

                <Field label="履歴書・職務経歴書" error={errors.files}>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    お持ちの方は添付してください（面接時のご持参でも構いません）。
                    <br />
                    PDF・Word・画像（JPG/PNG/HEIC）、1ファイル5MBまで・{MAX_FILES}ファイルまで
                  </p>
                  <input ref={fileInput} type="file" accept={ACCEPT} multiple onChange={onFiles} className="hidden" />
                  {files.length < MAX_FILES && (
                    <button
                      type="button"
                      onClick={() => fileInput.current?.click()}
                      className="mt-1 inline-flex items-center justify-center gap-2 self-start px-5 py-3 rounded-xl border-2 border-dashed border-border text-foreground font-bold text-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      <Paperclip size={16} />
                      ファイルを選択
                    </button>
                  )}
                  {files.length > 0 && (
                    <ul className="mt-1 flex flex-col gap-2">
                      {files.map((f, i) => (
                        <li key={f.name + i} className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium">
                          <Paperclip size={14} className="text-accent flex-shrink-0" />
                          <span className="flex-1 truncate">{f.name}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {(f.size / 1024 / 1024).toFixed(1)}MB
                          </span>
                          <button
                            type="button"
                            aria-label={`${f.name}を削除`}
                            onClick={() => setFiles(files.filter((_, j) => j !== i))}
                            className="w-6 h-6 rounded-full hover:bg-black/10 flex items-center justify-center flex-shrink-0"
                          >
                            <X size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </Field>

                <Field label="自己PR・ご質問など">
                  <textarea rows={5} placeholder="志望動機やご質問など、自由にご記入ください" {...text("message")} className={`${inputCls()} resize-none`} />
                </Field>

                <div className="flex flex-col gap-1.5">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.agreed}
                      onChange={(e) => set("agreed", e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[#2e8b57] flex-shrink-0"
                    />
                    <span className="text-xs text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">
                      個人情報の取り扱いについて同意します。ご入力いただいた情報および添付書類は、採用選考とご連絡のためにのみ使用し、第三者への提供はいたしません。
                    </span>
                  </label>
                  {errors.agreed && <p className="text-xs text-red-500 font-medium">{errors.agreed}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-black text-base hover:bg-green-800 transition-colors shadow-sm"
                >
                  応募する
                  <ArrowRight size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
