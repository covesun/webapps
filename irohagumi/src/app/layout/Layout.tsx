import { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "ホーム", to: "/" },
  { label: "会社概要", to: "/company" },
  { label: "工事実績", to: "/works" },
  { label: "採用", to: "/recruit" },
  { label: "お問い合わせ", to: "/contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span
              className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              株式会社
            </span>
            <span
              className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              いろは組
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:opacity-70 ${
                    scrolled ? "text-foreground" : "text-white"
                  } ${isActive ? "opacity-100 underline underline-offset-4" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 rounded-full text-sm font-bold text-white bg-accent hover:bg-green-800 transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
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
