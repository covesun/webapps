/*
 * common/site.js
 * 全ページ共通の挙動（元 Layout.tsx の useState/useEffect を素のJSに変換）
 * header-nav.html / footer.html の後に読み込んでください（bodyの末尾推奨）
 */
(function () {
  "use strict";

  /* ── ヘッダー：スクロールで背景を濃くする ─────────────── */
  var header = document.getElementById("ig-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) {
        header.classList.remove("bg-white/90", "backdrop-blur-sm");
        header.classList.add("bg-white/98", "shadow-sm");
      } else {
        header.classList.remove("bg-white/98", "shadow-sm");
        header.classList.add("bg-white/90", "backdrop-blur-sm");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── ハンバーガーメニュー開閉 ─────────────────────────── */
  var menuBtn = document.getElementById("ig-menu-btn");
  var mobileMenu = document.getElementById("ig-mobile-menu");
  var iconMenu = document.getElementById("ig-icon-menu");
  var iconClose = document.getElementById("ig-icon-close");

  if (menuBtn && mobileMenu) {
    var menuOpen = false;
    menuBtn.addEventListener("click", function () {
      menuOpen = !menuOpen;
      mobileMenu.style.display = menuOpen ? "flex" : "none";
      menuBtn.setAttribute("aria-expanded", String(menuOpen));
      if (iconMenu) iconMenu.style.display = menuOpen ? "none" : "";
      if (iconClose) iconClose.style.display = menuOpen ? "" : "none";
    });

    // メニュー内のリンクをクリックしたら閉じる
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menuOpen = false;
        mobileMenu.style.display = "none";
        menuBtn.setAttribute("aria-expanded", "false");
        if (iconMenu) iconMenu.style.display = "";
        if (iconClose) iconClose.style.display = "none";
      });
    });
  }

  /* ── フッター年号の自動更新 ───────────────────────────── */
  var footerYear = document.getElementById("ig-footer-year");
  if (footerYear) {
    footerYear.textContent = "© " + new Date().getFullYear();
  }
})();
