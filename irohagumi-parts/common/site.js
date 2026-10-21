/*
 * common/site.js
 * 全ページ共通の挙動（元 Layout.tsx の useState/useEffect を素のJSに変換）に加えて、
 * 各パーツ専用のJSもここに統合しています（2026-09-08）。
 * 理由: ポケカン2の「パーツ」エディタに<script>タグを含めて貼ると、保存時にHTMLが
 * 意図せず書き換えられ、閉じタグが壊れる不具合が実際に発生した（</script>の後の
 * ">"が消え、以降の要素がscriptの中に飲み込まれてDOMから消失＋パーツの並び替え・
 * 削除が効かなくなる不具合の原因になった）。これを避けるため、パーツ側のHTMLからは
 * <script>を撤去し、対応するJSは全てここに集約する方針にしています。
 * 各初期化処理は該当する要素がDOMに無ければ何もせず抜けるようになっているため、
 * ページによってどのパーツがある/ないに関わらず安全に動作します。
 * header-nav.html / footer.html / 各home/*.html パーツの後、bodyの末尾で読み込んでください。
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

  /* ── Hero スライドショー (home/01-hero-slideshow) ────────── */
  (function () {
    var hero = document.getElementById("ig-hero");
    if (!hero) return;
    var slides = hero.querySelectorAll(".ig-hero-slide");
    var dots = hero.querySelectorAll(".ig-hero-dot");
    var current = 0;

    function show(i) {
      current = i;
      slides.forEach(function (img, idx) {
        img.style.opacity = idx === i ? "1" : "0";
      });
      dots.forEach(function (dot, idx) {
        if (idx === i) {
          dot.classList.remove("w-2", "bg-white/50", "hover:bg-white/80");
          dot.classList.add("w-8", "bg-accent");
        } else {
          dot.classList.remove("w-8", "bg-accent");
          dot.classList.add("w-2", "bg-white/50", "hover:bg-white/80");
        }
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(parseInt(dot.getAttribute("data-index"), 10));
      });
    });

    setInterval(function () {
      show((current + 1) % slides.length);
    }, 5000);
  })();

  /* ── Instagramフィード (home/06-instagram-feed) ──────────── */
  (function () {
    var POOL = [
      { src: "images/suetuke.jpg", alt: "プラント設備工事" },
      { src: "images/IMG_9329.jpeg", alt: "大型配管据付" },
      { src: "images/IMG_0350_2K.jpeg", alt: "重量物搬入" },
      { src: "images/DSCF3225.jpg", alt: "溶接施工" },
      { src: "images/DSCF3142_2K.jpg", alt: "クレーン作業" },
      { src: "images/Position_trucks_around_warehouse_2K_202608101551.jpg", alt: "重機・トラック" },
      { src: "images/IMG_9515.jpeg", alt: "自社クレーン車" },
      { src: "images/IMG_6008.jpg", alt: "事務所" },
      { src: "images/624845661_18122467930497151_6060076425127914825_n.jpg_2K_202608310427.jpeg", alt: "現場写真" },
      { src: "images/662384918_18399784525196815_3165667921936231691_n.jpg_2K_202608310604.jpeg", alt: "現場写真" },
      { src: "images/ph_company.jpg", alt: "会社" },
      { src: "images/ph_recruit.jpg", alt: "採用" }
    ];
    var COUNT = 5;
    var IG_URL = "https://www.instagram.com/irohagumi_2013/";
    var grid = document.getElementById("ig-insta-grid");
    if (!grid) return;

    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
      }
      return a;
    }

    function render(photos) {
      grid.innerHTML = "";
      photos.forEach(function (photo) {
        var cell = document.createElement("div");
        cell.className = "relative overflow-hidden aspect-square group";
        cell.innerHTML =
          '<img src="' + photo.src + '" alt="' + photo.alt + '" class="w-full h-full object-cover" />' +
          '<a href="' + IG_URL + '" target="_blank" rel="noopener noreferrer" class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300" aria-label="Instagramを見る">' +
          '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' +
          '</a>';
        grid.appendChild(cell);
      });
    }

    render(shuffle(POOL).slice(0, COUNT));

    setInterval(function () {
      grid.style.opacity = "0";
      setTimeout(function () {
        render(shuffle(POOL).slice(0, COUNT));
        grid.style.opacity = "1";
      }, 600);
    }, 4500);
  })();
})();
