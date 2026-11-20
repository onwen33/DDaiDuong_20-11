/**
 * SỔ TAY KÝ HỌA TRI ÂN THẦY CÔ 20/11 - MAIN CONTROLLER
 * Kế thừa 100% hiệu ứng lật trang cong 3D 18 dải, kính lúp & đổ bóng 3 lớp
 */
import { TEACHERS_DATA, COMMON_ASSETS } from "./data/teachersContent.js";
import { BookCanvasRenderer } from "./canvasRenderer.js";
import { renderQRPage } from "./qrPage.js";

// Lấy tham số URL
const Q = new URLSearchParams(location.search);

// Nếu người dùng vào trang QR (?page=qr)
if (Q.get("page") === "qr") {
  const app = document.getElementById("app");
  renderQRPage(app);
} else {
  // Chạy ứng dụng cuốn sách lật trang 3D
  initBookApp();
}

async function initBookApp() {
  // Xác định giáo viên hiện tại
  let teacherId = Q.get("teacher");
  if (!teacherId || !TEACHERS_DATA[teacherId]) {
    teacherId = "toan"; // Mặc định mở môn Toán nếu không có tham số
  }
  const teacher = TEACHERS_DATA[teacherId];

  // Render khung giao diện chính
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="wash" aria-hidden="true"></div>

    <!-- Màn hình chào chạm để mở sách & bật nhạc -->
    <div class="welcome-overlay" id="welcomeOverlay">
      <div class="welcome-card">
        <span class="welcome-badge">TRI ÂN THẦY CÔ 20/11</span>
        <h1 class="welcome-title">${teacher.teacherName}</h1>
        <p class="welcome-desc">Kính tặng Thầy / Cô cuốn sổ tay ký họa 3D lưu giữ những khoảnh khắc và thước phim kỷ niệm thiêng liêng.</p>
        <button class="welcome-btn" id="btnEnterBook">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          Chạm Để Mở Sổ Tay & Nghe Nhạc
        </button>
      </div>
    </div>

    <!-- Top Navigation Header -->
    <header class="top">
      <div class="top-bar-inner">
        <a class="logo-group" href="./">
          <span class="badge-2011">20</span>
          <span>TRI ÂN THẦY CÔ</span>
        </a>

        <!-- Menu chọn nhanh thầy cô -->
        <div class="teacher-selector-wrap">
          <button class="teacher-select-btn" id="teacherSelectBtn">
            <span>${teacher.teacherName} (${teacher.subject})</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="teacher-dropdown" id="teacherDropdown">
            ${Object.values(TEACHERS_DATA)
              .map(
                (t) => `
              <div class="teacher-dropdown-item ${t.id === teacherId ? "active" : ""}" data-id="${t.id}">
                <span>${t.teacherName}</span>
                <small>(${t.subject})</small>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Các nút tiện ích: Nhạc, Theme, QR -->
        <div class="top-actions">
          <button class="action-btn" id="btnAudioToggle" aria-label="Bật/Tắt nhạc nền" title="Bật / Tắt nhạc">
            <div class="music-wave" id="musicWave">
              <span></span><span></span><span></span>
            </div>
          </button>

          <button class="action-btn" id="btnThemeToggle" aria-label="Đổi giao diện Sáng/Tối" title="Đổi giao diện">
            <svg id="themeIcon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </button>

          <a href="?page=qr" class="qr-nav-link" title="Xem & In 5 mã QR">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Mã QR</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Khu vực Cuốn Sách 3D -->
    <main class="page home">
      <section id="sketchbook" class="hero">
        <img class="botany l" src="/meng-to-sketchbook/botany-left.png" alt="" aria-hidden="true">
        <img class="botany r" src="/meng-to-sketchbook/botany-right.png" alt="" aria-hidden="true">

        <p class="hero-kicker" id="heroKicker">SỔ TAY KÝ HỌA · ${teacher.teacherName.toUpperCase()} · MÔN ${teacher.subject.toUpperCase()}</p>

        <div class="sb-wrap" id="sbWrap">
          <svg width="0" height="0" style="position:absolute" aria-hidden="true">
            <filter id="sb-mblur-1"><feGaussianBlur stdDeviation="5 0"/></filter>
            <filter id="sb-mblur-2"><feGaussianBlur stdDeviation="14 0"/></filter>
          </svg>
          
          <div class="sb-stage" id="sbStage">
            <button class="sb-arrow left" id="sbLeft" aria-label="Trang trước">
              <svg viewBox="0 0 14 44" width="16" height="48" fill="none" aria-hidden="true"><polyline points="11,3 3,22 11,41" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>

            <div class="sb-3d" id="sb3d">
              <div class="sb-tilt" id="sbTilt">
                <div class="sb-cast ambient" aria-hidden="true"></div>
                <div class="sb-cast contact" aria-hidden="true"></div>
                <div class="sb-cast hair" aria-hidden="true"></div>
                <div class="sb-book" id="sbBook">
                  <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--ink-soft);font-size:18px;">
                    Đang tạo các trang ký họa 3D...
                  </div>
                </div>
              </div>

              <!-- Kính lúp -->
              <div class="zoomwrap" id="zoomWrap" aria-hidden="true"><div class="zoominner" id="zoomInner"></div></div>
              <div class="loupe" id="loupe"><span class="grip"></span><span class="ring"><span class="lens" id="loupeLens"><span class="mag" id="loupeMag"></span></span></span></div>
            </div>

            <button class="sb-arrow right" id="sbRight" aria-label="Trang sau">
              <svg viewBox="0 0 14 44" width="16" height="48" fill="none" aria-hidden="true"><polyline points="3,3 11,22 3,41" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <div class="sb-captions" id="sbCaptions"></div>

          <!-- Nút phát video nếu trang hiện tại có video -->
          <div id="videoActionSlot" style="min-height:36px;display:flex;align-items:center;"></div>

          <!-- Thanh điều khiển Zoom & Kính lúp -->
          <div class="sb-tools" role="group" aria-label="view controls">
            <button class="tool" id="zOut" aria-label="Thu nhỏ"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8"/></svg></button>
            <span class="zoom-read" id="zRead">100%</span>
            <button class="tool" id="zIn" aria-label="Phóng to"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="M12.8 12.8 17.4 17.4M6.2 8.6h4.8M8.6 6.2v4.8"/></svg></button>
            <span class="tool-sep" aria-hidden="true"></span>
            <button class="tool" id="loupeBtn" aria-label="Kính lúp" aria-pressed="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.8" cy="8.8" r="5.8"/><path d="M13 13l4.4 4.4"/><path d="M6.4 7.2a3.2 3.2 0 0 1 2.4-1.4" opacity=".55"/></svg></button>
          </div>

          <p class="sb-hint" id="sbHint">Vuốt hoặc bấm phím mũi tên để lật trang · Rê kính lúp để xem chi tiết</p>
        </div>

        <button class="hero-down" id="heroDown" aria-label="Cuộn xuống xem nội dung">
          <svg viewBox="0 0 44 22" width="34" height="17" fill="none" aria-hidden="true">
            <polyline points="3,3 22,11 41,3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="3,11 22,19 41,11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </section>

      <div class="rule" aria-hidden="true"></div>

      <!-- Khu vực giới thiệu chi tiết trang đang mở (cho mobile và desktop) -->
      <section id="about" class="about">
        <div class="bio-wrapper">
          <p class="section-label" id="aboutLabel">Trang 01 · Tâm Thư Tri Ân</p>
          <div class="bio" id="aboutBio"></div>
        </div>
        <img class="bloom" src="/meng-to-sketchbook/bloom.png" alt="Hoa Tri Ân">
      </section>

      <div class="rule short" aria-hidden="true"></div>

      <!-- Mục lục danh sách các trang (Plates) -->
      <section id="plates" class="plates">
        <p class="section-label">Mục Lục Cuốn Sổ Tay (${teacher.subject})</p>
        <ol class="plate-list" id="plateList"></ol>
      </section>

      <div class="rule short" aria-hidden="true"></div>
      <p class="foot">TRI ÂN THẦY CÔ 20/11 · SỔ TAY KỶ NIỆM HỌC TRÒ · NĂM HỌC 2026</p>
    </main>

    <!-- Modal Xem Video Kỷ Niệm Full-View -->
    <div class="video-modal" id="videoModal">
      <div class="video-modal-content">
        <button class="video-modal-close" id="btnCloseVideo" aria-label="Đóng video">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <video id="modalVideoPlayer" controls playsinline></video>
      </div>
    </div>
  `;

  // Thiết lập Theme (Dark/Light)
  const savedTheme = localStorage.getItem("theme-2011") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const btnThemeToggle = document.getElementById("btnThemeToggle");
  btnThemeToggle.onclick = () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme-2011", next);
    updateThemeIcon(next);
  };

  function updateThemeIcon(t) {
    const icon = document.getElementById("themeIcon");
    if (t === "dark") {
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
    } else {
      icon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    }
  }

  // Dropdown chuyển giáo viên
  const teacherSelectBtn = document.getElementById("teacherSelectBtn");
  const teacherDropdown = document.getElementById("teacherDropdown");
  teacherSelectBtn.onclick = (e) => {
    e.stopPropagation();
    teacherDropdown.classList.toggle("show");
  };
  document.addEventListener("click", () => teacherDropdown.classList.remove("show"));
  teacherDropdown.querySelectorAll(".teacher-dropdown-item").forEach((item) => {
    item.onclick = () => {
      const id = item.dataset.id;
      if (id !== teacherId) {
        location.search = `?teacher=${id}`;
      }
    };
  });

  // Quản lý Nhạc Nền (Audio)
  const bgAudio = new Audio(COMMON_ASSETS.music);
  bgAudio.loop = true;
  let isMusicPlaying = false;

  const btnAudioToggle = document.getElementById("btnAudioToggle");
  btnAudioToggle.onclick = () => {
    if (isMusicPlaying) {
      bgAudio.pause();
      isMusicPlaying = false;
      btnAudioToggle.classList.remove("playing");
    } else {
      bgAudio.play().then(() => {
        isMusicPlaying = true;
        btnAudioToggle.classList.add("playing");
      }).catch(console.warn);
    }
  };

  // Màn hình mở thiệp chạm đầu tiên (vừa mở thiệp vừa kích hoạt âm thanh)
  const welcomeOverlay = document.getElementById("welcomeOverlay");
  const btnEnterBook = document.getElementById("btnEnterBook");
  btnEnterBook.onclick = () => {
    welcomeOverlay.classList.add("hidden");
    bgAudio.play().then(() => {
      isMusicPlaying = true;
      btnAudioToggle.classList.add("playing");
    }).catch(console.warn);
  };

  // Quản lý Video Modal
  const videoModal = document.getElementById("videoModal");
  const modalVideoPlayer = document.getElementById("modalVideoPlayer");
  const btnCloseVideo = document.getElementById("btnCloseVideo");

  function openVideoModal(videoSrc) {
    if (isMusicPlaying) {
      bgAudio.pause(); // Tự động pause nhạc khi xem video
    }
    modalVideoPlayer.src = videoSrc;
    videoModal.classList.add("open");
    modalVideoPlayer.play().catch(console.warn);
  }

  function closeVideoModal() {
    modalVideoPlayer.pause();
    modalVideoPlayer.src = "";
    videoModal.classList.remove("open");
    if (isMusicPlaying) {
      bgAudio.play().catch(console.warn); // Tự động phát lại nhạc khi đóng video
    }
  }

  btnCloseVideo.onclick = closeVideoModal;
  videoModal.onclick = (e) => {
    if (e.target === videoModal) closeVideoModal();
  };

  // =========================================================================
  // XÂY DỰNG DANH SÁCH TRANG & RENDER CANVAS
  // =========================================================================
  const rawPagesData = [];

  // 1. Trang mở đầu (Tâm thư mở đầu)
  rawPagesData.push({
    type: "text",
    isClosing: false,
    title: teacher.openingLetter.title,
    date: teacher.openingLetter.date,
    body: teacher.openingLetter.body,
    signature: teacher.openingLetter.signature,
    quote: teacher.quote,
    teacherName: teacher.teacherName,
    subject: teacher.subject,
    desc: `<strong>${teacher.openingLetter.title}</strong><br><br>${teacher.openingLetter.body.replace(/\n/g, "<br>")}`
  });

  // 2. Các trang giữa (Ảnh & Video của giáo viên)
  const totalMedia = teacher.mediaItems.length + 1; // +1 cho sân trường
  teacher.mediaItems.forEach((m, idx) => {
    rawPagesData.push({
      type: m.type,
      file: m.file,
      title: m.title,
      caption: m.caption,
      teacherName: teacher.teacherName,
      subject: teacher.subject,
      pageNum: idx + 1,
      totalPages: totalMedia,
      desc: `<strong>${m.title}</strong><br>${m.caption}${m.type === "video" ? "<br><br><em>(Trang này có Video kỷ niệm. Bạn có thể bấm nút ▶ Xem Video ở trên để thưởng thức).</em>" : ""}`
    });
  });

  // 3. Trang áp chót (Ảnh Sân trường chung)
  rawPagesData.push({
    type: "image",
    file: COMMON_ASSETS.sanTruongImg,
    title: teacher.sanTruongCaption.title,
    caption: teacher.sanTruongCaption.caption,
    teacherName: teacher.teacherName,
    subject: teacher.subject,
    pageNum: totalMedia,
    totalPages: totalMedia,
    desc: `<strong>${teacher.sanTruongCaption.title}</strong><br>${teacher.sanTruongCaption.caption}`
  });

  // 4. Trang kết (Tâm thư kết)
  rawPagesData.push({
    type: "text",
    isClosing: true,
    title: teacher.closingLetter.title,
    date: "20/11/2026",
    body: teacher.closingLetter.body,
    signature: teacher.closingLetter.signature,
    quote: teacher.quote,
    teacherName: teacher.teacherName,
    subject: teacher.subject,
    desc: `<strong>${teacher.closingLetter.title}</strong><br><br>${teacher.closingLetter.body.replace(/\n/g, "<br>")}`
  });

  // KHỞI TẠO BỘ CANVAS RENDERER
  const renderer = new BookCanvasRenderer("/blank-book.png");
  await renderer.init();

  const PAGES = [];
  for (let i = 0; i < rawPagesData.length; i++) {
    const pageItem = rawPagesData[i];
    let pageBlobUrl = "";
    if (pageItem.type === "text") {
      pageBlobUrl = await renderer.renderTextPage(pageItem);
    } else {
      pageBlobUrl = await renderer.renderMediaPage(pageItem);
    }
    PAGES.push({
      ...pageItem,
      url: pageBlobUrl
    });
  }

  // =========================================================================
  // ENGINE HIỆU ỨNG LẬT SÁCH 3D 18 STRIP CONG (KẾ THỪA 100% TỪ BẢN GỐC)
  // =========================================================================
  const M = PAGES.length;
  const LAND = 0;
  const N = 18;
  const SPAN = 0.449;
  const BETA = 0.60;
  let idx = 0, turn = null;
  let strips = [];

  const wrap = document.getElementById("sbWrap");
  const stage = document.getElementById("sbStage");
  const sb3d = document.getElementById("sb3d");
  const book = document.getElementById("sbBook");
  const capBox = document.getElementById("sbCaptions");
  const videoSlot = document.getElementById("videoActionSlot");
  const hint = document.getElementById("sbHint");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(t, c) {
    const e = document.createElement(t);
    if (c) e.className = c;
    return e;
  }
  function imgEl(i, side) {
    const im = new Image();
    im.className = "sb-half-img " + side;
    im.draggable = false;
    im.alt = "";
    im.src = PAGES[i].url;
    return im;
  }
  function halfEl(pos, i) {
    const d = el("div", "sb-half " + pos);
    d.appendChild(imgEl(i, pos));
    d.appendChild(el("div", "gutter-shade " + pos));
    return d;
  }

  function buildCurl(dir, from, to) {
    strips = [];
    const c = el("div", "curl " + dir);
    c.style.setProperty("--n", N);
    c.style.setProperty("--span", SPAN);
    let host = c;
    for (let i = 0; i < N; i++) {
      const s = el("div", "strip");
      s.style.setProperty("--i", i);
      const gut = "calc(var(--bw) * 0.5)";
      const sw = "calc(var(--bw) * " + SPAN + " / " + N + ")";
      const A = "calc(-1 * (" + gut + " + " + i + " * " + sw + "))";
      const B = "calc(" + (i + 1) + " * " + sw + " - " + gut + ")";
      const f = el("div", "face front"), b = el("div", "face back");
      const dress = (e, url, px) => {
        e.style.backgroundImage = "url(" + url + ")";
        e.style.backgroundPositionX = px;
      };
      dress(f, PAGES[from].url, dir === "next" ? A : B);
      dress(b, PAGES[to].url, dir === "next" ? B : A);
      f.appendChild(el("div", "sh")); f.appendChild(el("div", "gl"));
      b.appendChild(el("div", "sh")); b.appendChild(el("div", "gl"));
      s.appendChild(f); s.appendChild(b);
      if (i === N - 1) s.classList.add("edge");
      host.appendChild(s); host = s;
      strips.push(s);
    }
    return c;
  }

  function applyTurn(t) {
    const th = Math.PI * t;
    const beta = BETA * Math.sin(Math.PI * t);
    const D = 180 / Math.PI;
    const tt = th + beta, td = 2 * beta / N;
    sb3d.style.setProperty("--tt", (tt * D).toFixed(2) + "deg");
    sb3d.style.setProperty("--td", (td * D).toFixed(3) + "deg");
    sb3d.style.setProperty("--shade", Math.sin(Math.PI * t).toFixed(3));
    fadeCaption(t);
    for (let i = 0; i < strips.length; i++) {
      const l1 = Math.abs(Math.cos(tt - i * td));
      const l2 = Math.abs(Math.cos(tt - (i + 1) * td));
      const st = strips[i].style;
      st.setProperty("--lit", l1.toFixed(3));
      st.setProperty("--a1", ((1 - l1) * 0.62).toFixed(3));
      st.setProperty("--a2", ((1 - l2) * 0.62).toFixed(3));
    }
  }

  function paint() {
    book.textContent = "";
    if (!turn) {
      const f = el("div", "sb-full");
      const im = new Image();
      im.src = PAGES[idx].url;
      im.alt = PAGES[idx].title;
      im.draggable = false;
      f.appendChild(im);
      book.appendChild(f);
      sb3d.style.setProperty("--shade", "0");
    } else {
      const next = turn.dir === "next";
      book.appendChild(halfEl("left", next ? turn.from : turn.to));
      book.appendChild(halfEl("right", next ? turn.to : turn.from));
      book.appendChild(buildCurl(turn.dir, turn.from, turn.to));
      applyTurn(turn.t);
    }
    const a = el("button", "sb-zone sb-prev"), b = el("button", "sb-zone sb-next");
    a.setAttribute("aria-label", "Trang trước");
    b.setAttribute("aria-label", "Trang sau");
    book.appendChild(a);
    book.appendChild(b);
    layout();
    caption();
    marks();
    updateVideoActionBtn();
    if (typeof syncZoomLayer === "function") syncZoomLayer();
    if (typeof placeLoupe === "function") placeLoupe();
  }

  let capOut = null, capIn = null;
  function caption() {
    capBox.textContent = "";
    capOut = capIn = null;
    if (turn) {
      capOut = el("p", "sb-caption live"); capOut.textContent = PAGES[turn.from].title; capBox.appendChild(capOut);
      capIn = el("p", "sb-caption live"); capIn.textContent = PAGES[turn.to].title; capBox.appendChild(capIn);
      fadeCaption(turn.t);
    } else {
      const p = el("p", "sb-caption"); p.textContent = PAGES[idx].title; capBox.appendChild(p);
    }
  }

  function fadeCaption(t) {
    if (!capOut || !capIn) return;
    const out = 1 - Math.max(0, Math.min(1, (t - 0.10) / 0.28));
    const inn = Math.max(0, Math.min(1, (t - 0.56) / 0.30));
    capOut.style.opacity = out.toFixed(3);
    capIn.style.opacity = inn.toFixed(3);
  }

  function updateVideoActionBtn() {
    videoSlot.innerHTML = "";
    const curPage = PAGES[idx];
    if (curPage && curPage.type === "video") {
      const btn = document.createElement("button");
      btn.className = "sb-video-action-btn";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        <span>Xem Video Kỷ Niệm (${curPage.title})</span>
      `;
      btn.onclick = () => openVideoModal(curPage.file);
      videoSlot.appendChild(btn);
    }
  }

  function layout() {
    sb3d.style.setProperty("--bw", book.clientWidth + "px");
  }
  addEventListener("resize", layout);

  // =========================================================================
  // SPRING LOOP & TILT
  // =========================================================================
  let spring = null;
  function animateTo(target, onDone, stiff, damp) {
    spring = { kind: "spring", v: 0, target: target, done: onDone, k: stiff || 150, c: damp || 22 };
    kick();
  }
  function tweenTo(target, dur, onDone) {
    spring = { kind: "tween", from: turn ? turn.t : 0, target: target, dur: dur, e: 0, done: onDone };
    kick();
  }

  let raf = null, last = 0;
  function tick(now) {
    raf = null;
    const dt = Math.min(0.032, (now - last) / 1000 || 0.016);
    last = now;
    if (spring && turn) {
      const s = spring;
      if (s.kind === "tween") {
        s.e += dt;
        const k = Math.min(1, s.e / s.dur);
        turn.t = s.from + (s.target - s.from) * k;
        applyTurn(turn.t);
        if (k >= 1) { spring = null; const d = s.done; d && d(); }
      } else {
        const x = turn.t - s.target;
        s.v += (-s.k * x - s.c * s.v) * dt;
        turn.t += s.v * dt;
        if (Math.abs(turn.t - s.target) < 0.002 && Math.abs(s.v) < 0.02) {
          turn.t = s.target; spring = null;
          applyTurn(turn.t);
          const d = s.done; d && d();
        } else applyTurn(turn.t);
      }
    }
    viewSpring();
    const lmoved = loupeEase();
    if ((spring || viewActive || lmoved) && raf === null) raf = requestAnimationFrame(tick);
  }
  function kick() {
    if (raf === null) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }

  const TILT_X = 4.5, TILT_Y = 7;
  const ZOOM_MIN = 0.9, ZOOM_MAX = 1.5;
  const view = { rx: 0, ry: 0, z: 1, trx: 0, try_: 0, tz: 1 };
  let viewActive = false;
  let lastZ = 1;

  function applyView() {
    sb3d.style.setProperty("--rx", view.rx.toFixed(2) + "deg");
    sb3d.style.setProperty("--ry", view.ry.toFixed(2) + "deg");
    sb3d.style.setProperty("--zoom", view.z.toFixed(3));
    if (view.z !== lastZ) { lastZ = view.z; if (typeof placeLoupe === "function") placeLoupe(); }
  }

  function viewSpring() {
    const e = 0.14;
    let moved = false;
    for (const [k, t] of [["rx", "trx"], ["ry", "try_"], ["z", "tz"]]) {
      const d = view[t] - view[k];
      if (Math.abs(d) > 0.0006) { view[k] += d * e; moved = true; }
      else view[k] = view[t];
    }
    if (moved) applyView();
    viewActive = moved;
    return moved;
  }

  function setView(rx, ry, z) {
    view.trx = Math.max(-TILT_X, Math.min(TILT_X, rx));
    view.try_ = Math.max(-TILT_Y, Math.min(TILT_Y, ry));
    view.tz = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
    viewActive = true; kick();
    syncZoom();
  }

  function tiltTo(cx, cy) {
    if (drag) return;
    const r = book.getBoundingClientRect();
    if (!r.width) return;
    const nx = Math.max(-1, Math.min(1, (cx - (r.left + r.width / 2)) / (r.width * 0.62)));
    const ny = Math.max(-1, Math.min(1, (cy - (r.top + r.height / 2)) / (r.height * 0.9)));
    setView(-ny * TILT_X, nx * TILT_Y, view.tz);
  }

  addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    tiltTo(e.clientX, e.clientY);
  }, { passive: true });
  addEventListener("pointerout", (e) => { if (!e.relatedTarget) setView(0, 0, view.tz); });
  addEventListener("blur", () => setView(0, 0, view.tz));
  stage.addEventListener("dblclick", () => setView(view.trx, view.try_, 1));

  // =========================================================================
  // GESTURE & TOUCH / SWIPE CONTROLS
  // =========================================================================
  let drag = null;
  function bookRect() { return book.getBoundingClientRect(); }
  function hideHint() { hint.classList.add("gone"); }

  stage.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const onBook = e.target.closest(".sb-zone");
    stage.setPointerCapture(e.pointerId);
    hideHint();
    if (!onBook || introOn) return;
    const r = bookRect();
    const dir = (e.clientX - r.left) / r.width > 0.5 ? "next" : "prev";
    startTurn(dir, 0);
    drag = { dir: dir, x0: e.clientX, w: r.width, moved: 0, vel: 0, tPrev: performance.now() };
  });

  stage.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x0;
    drag.moved = Math.max(drag.moved, Math.abs(dx));
    const raw = (drag.dir === "next" ? -dx : dx) / (drag.w * 0.62);
    const t = Math.max(0, Math.min(1, raw));
    const now = performance.now();
    drag.vel = (t - (turn ? turn.t : 0)) / Math.max(0.001, (now - drag.tPrev) / 1000);
    drag.tPrev = now;
    if (turn) { turn.t = t; applyTurn(t); }
  });

  function endDrag() {
    if (!drag) return;
    const d = drag; drag = null;
    if (!turn) return;
    if (d.moved < 6) { commit(); return; }
    const go = turn.t > 0.42 || d.vel > 1.1;
    if (go) commit(); else cancel();
  }
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  function startTurn(dir, t) {
    spring = null;
    if (turn) { idx = turn.to; turn = null; }
    if (typeof shoveLoupe === "function") shoveLoupe(dir);
    const from = idx;
    turn = { dir: dir, from: from, to: dir === "next" ? (from + 1) % M : (from - 1 + M) % M, t: t || 0 };
    paint();
  }
  function commit() {
    if (!turn) return;
    if (REDUCED) { idx = turn.to; turn = null; paint(); return; }
    animateTo(1, () => { idx = turn.to; turn = null; paint(); }, 170, 26);
    kick();
  }
  function cancel() {
    if (!turn) return;
    animateTo(0, () => { turn = null; paint(); }, 150, 24);
    kick();
  }
  function step(dir) {
    if (introOn) endIntro();
    if (turn) { idx = turn.to; turn = null; }
    startTurn(dir, 0); commit();
  }
  function goTo(i) {
    if (introOn) endIntro();
    if (i === idx) return;
    if (turn) { idx = turn.to; turn = null; }
    const fwd = (i - idx + M) % M, back = (idx - i + M) % M;
    if (Math.min(fwd, back) === 1) { step(fwd === 1 ? "next" : "prev"); return; }
    idx = i; paint();
  }

  document.getElementById("sbLeft").onclick = () => step("prev");
  document.getElementById("sbRight").onclick = () => step("next");
  addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault(); hideHint();
    step(e.key === "ArrowRight" ? "next" : "prev");
  });
  document.getElementById("heroDown").onclick = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // =========================================================================
  // KÍNH LÚP & ĐIỀU KHIỂN ZOOM
  // =========================================================================
  const loupe = document.getElementById("loupe");
  const zRead = document.getElementById("zRead");
  const loupeBtn = document.getElementById("loupeBtn");
  const zInBtn = document.getElementById("zIn"), zOutBtn = document.getElementById("zOut");
  const zoomWrap = document.getElementById("zoomWrap");
  const zoomInner = document.getElementById("zoomInner");
  const MAG = 2.3;
  let loupeOn = true, lx = null, ly = null, lgrab = null, lTarget = null;

  function loupeSize() { return Math.round(Math.max(165, Math.min(262, book.clientWidth * 0.235))); }
  function bookBox() { return { x: 0, y: 0, w: book.clientWidth, h: book.clientHeight }; }
  function restLoupe() {
    const b = bookBox();
    lx = b.x + b.w * 0.88; ly = b.y + b.h * 0.855;
    placeLoupe();
  }
  function syncZoomLayer() {
    zoomInner.textContent = "";
    for (const c of book.children) {
      if (c.classList.contains("sb-zone")) continue;
      zoomInner.appendChild(c.cloneNode(true));
    }
  }
  function placeLoupe() {
    if (lx === null) return;
    const B = bookBox(), bw = B.w, bh = B.h;
    if (!bw) return;
    const R = loupeSize() / 2, bez = R * 2 * 0.058;
    loupe.style.setProperty("--lr", R * 2 + "px");
    loupe.style.transform = "translate3d(" + (lx - R).toFixed(1) + "px," + (ly - R).toFixed(1) + "px,0)";
    if (loupeOn) loupe.classList.add("on");

    const z = view.z, cx = bw / 2, cy = bh / 2;
    const x0 = cx + (bw * 0.051 - cx) * z, x1 = cx + (bw * 0.949 - cx) * z;
    const y0 = cy + (bh * 0.218 - cy) * z, y1 = cy + (bh * 0.782 - cy) * z;

    const nx = Math.max(x0, Math.min(lx, x1));
    const ny = Math.max(y0, Math.min(ly, y1));
    const inside = (lx > x0 && lx < x1 && ly > y0 && ly < y1)
      ? Math.min(lx - x0, x1 - lx, ly - y0, y1 - ly)
      : -Math.hypot(lx - nx, ly - ny);
    const k = Math.max(0, Math.min(1, (inside + R * 0.30) / (R * 0.55)));

    zoomWrap.style.opacity = (loupeOn ? k : 0).toFixed(3);
    if (k <= 0.002) return;
    const r = (R - bez).toFixed(1);
    const mask = "radial-gradient(circle " + r + "px at " + lx.toFixed(1) + "px " + ly.toFixed(1) + "px,"
      + "#000 calc(100% - 1px),transparent 100%)";
    zoomWrap.style.webkitMaskImage = mask;
    zoomWrap.style.maskImage = mask;

    const px = cx + (lx - cx) / z, py = cy + (ly - cy) / z, s = MAG * z;
    zoomInner.style.transform = "translate(" + (lx - px * s).toFixed(1) + "px," + (ly - py * s).toFixed(1) + "px) scale(" + s.toFixed(4) + ")";
  }

  function shoveLoupe(dir) {
    if (!loupeOn || lx === null || lgrab) return;
    const b = bookBox();
    const nx = (b.w / 2 + (lx - b.x - b.w / 2) / view.z) / b.w, ny = (b.h / 2 + (ly - b.y - b.h / 2) / view.z) / b.h;
    if (nx < 0.02 || nx > 0.98 || ny < 0.17 || ny > 0.83) return;
    lTarget = { x: b.x + b.w * (dir === "next" ? 0.12 : 0.88), y: b.y + b.h * 0.855 };
    kick();
  }

  function loupeEase() {
    if (!lTarget) return false;
    if (lgrab) { lTarget = null; return false; }
    const dx = lTarget.x - lx, dy = lTarget.y - ly;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) { lx = lTarget.x; ly = lTarget.y; lTarget = null; placeLoupe(); return false; }
    lx += dx * 0.17; ly += dy * 0.17; placeLoupe();
    return true;
  }

  loupe.addEventListener("pointerdown", (e) => {
    if (!loupeOn || e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    lTarget = null;
    lgrab = { cx: e.clientX, cy: e.clientY, lx0: lx, ly0: ly };
    loupe.classList.add("held");
    loupe.setPointerCapture(e.pointerId);
    hideHint();
  });
  loupe.addEventListener("pointermove", (e) => {
    if (!lgrab) return;
    const b = bookBox(), R = loupeSize() / 2;
    lx = Math.max(b.x - R * 0.7, Math.min(b.x + b.w + R * 0.7, lgrab.lx0 + (e.clientX - lgrab.cx)));
    ly = Math.max(b.y - R * 0.7, Math.min(b.y + b.h + R * 1.0, lgrab.ly0 + (e.clientY - lgrab.cy)));
    placeLoupe();
  });
  function dropLoupe() { lgrab = null; loupe.classList.remove("held"); }
  loupe.addEventListener("pointerup", dropLoupe);
  loupe.addEventListener("pointercancel", dropLoupe);

  loupeBtn.onclick = () => {
    loupeOn = !loupeOn;
    loupeBtn.setAttribute("aria-pressed", String(loupeOn));
    loupe.classList.toggle("on", loupeOn);
    if (loupeOn && lx === null) restLoupe();
  };
  addEventListener("resize", () => { lx = null; restLoupe(); });

  function syncZoom() {
    zRead.textContent = Math.round(view.tz * 100) + "%";
    zOutBtn.disabled = view.tz <= ZOOM_MIN + 0.001;
    zInBtn.disabled = view.tz >= ZOOM_MAX - 0.001;
  }
  zInBtn.onclick = () => { setView(view.trx, view.try_, view.tz * 1.16); hideHint(); };
  zOutBtn.onclick = () => { setView(view.trx, view.try_, view.tz / 1.16); hideHint(); };

  // =========================================================================
  // MỤC LỤC TRANG & THÔNG TIN CHI TIẾT
  // =========================================================================
  const plateList = document.getElementById("plateList");
  const aboutLabel = document.getElementById("aboutLabel");
  const aboutBio = document.getElementById("aboutBio");
  let riffle = null, riffleAt = 0, introOn = false;

  PAGES.forEach((p, i) => {
    const li = el("li");
    const b = el("button", "plate");
    b.innerHTML = '<span class="n">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<span class="t"></span><span class="p"></span>';
    b.querySelector(".t").textContent = p.title;
    b.querySelector(".p").textContent = p.type === "video" ? "Video" : (p.type === "text" ? "Tâm Thư" : "Hình Ảnh");
    b.onclick = () => {
      goTo(i);
      document.getElementById("sketchbook").scrollIntoView({ behavior: "smooth", block: "center" });
    };
    li.appendChild(b);
    plateList.appendChild(li);
  });

  function marks() {
    const cur = introOn ? LAND : (turn ? turn.to : idx);
    plateList.querySelectorAll(".plate").forEach((b, i) => b.setAttribute("aria-current", i === cur ? "true" : "false"));
    const p = PAGES[cur];
    if (p && aboutLabel && aboutBio) {
      aboutLabel.textContent = `Trang ${String(cur + 1).padStart(2, "0")} · ${p.title}`;
      aboutBio.innerHTML = p.desc;
    }
  }

  function endIntro() {
    introOn = false; wrap.classList.remove("intro", "b2");
  }
  function riffleStep() {
    const s = riffle[riffleAt];
    wrap.classList.toggle("b2", s.bell > 0.55);
    startTurn("next", 0);
    tweenTo(1, s.dur, () => {
      idx = turn.to; turn = null;
      riffleAt++;
      if (introOn && riffleAt < riffle.length) { paint(); riffleStep(); }
      else { endIntro(); paint(); }
    });
  }
  function startIntro() {
    const coarse = matchMedia("(max-width: 640px), (pointer: coarse)").matches;
    if (coarse || REDUCED || Q.has("nointro")) { idx = LAND; paint(); return; }
    const steps = Math.min(M, 4); // Riffle nhẹ 3-4 trang đầu để chào mừng
    riffle = [];
    for (let r = 0; r < steps; r++) {
      const bell = Math.sin(Math.PI * (r / (steps - 1)));
      riffle.push({ bell: bell, dur: 0.28 - 0.16 * bell });
    }
    riffleAt = 0; introOn = true; wrap.classList.add("intro");
    riffleStep();
  }

  // Khởi động cuốn sách
  paint();
  applyView();
  syncZoom();
  restLoupe();
  setTimeout(startIntro, 350);
}

