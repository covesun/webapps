import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import logoImg from "../../imports/logo.png";

const NAV_ITEMS = [
  { label: "ホーム", to: "/" },
  { label: "会社概要", to: "/company" },
  { label: "事業内容", to: "/business" },
  { label: "工事実績", to: "/works" },
  { label: "採用", to: "/recruit" },
  { label: "お問い合わせ", to: "/contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Noto Sans JP', 'Inter', sans-serif" }}
    >
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/98 shadow-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="flex flex-col items-start"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent leading-none mb-1">
              機器設置工事のプロ集団
            </span>
            <img src={logoImg} alt="株式会社いろは組" className="h-9 w-auto" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.to === "/contact" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="ml-2 px-6 py-2.5 rounded-full text-base font-bold text-white bg-accent hover:bg-green-800 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-base font-bold text-foreground transition-colors duration-200 hover:text-accent ${
                      isActive ? "border-b-2 border-accent pb-0.5 text-accent" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-base font-bold text-left transition-colors ${
                    item.to === "/contact"
                      ? "text-accent"
                      : isActive
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#081409] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-white/40 text-xs">株式会社</span>
            <span className="text-white font-black text-lg">いろは組</span>
          </Link>
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} 株式会社いろは組. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["プライバシーポリシー", "サイトマップ"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
