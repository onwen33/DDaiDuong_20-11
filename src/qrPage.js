/**
 * TRANG TẠO & IN 5 MÃ QR TRI ÂN THẦY CÔ 20/11 (?page=qr)
 * Sử dụng thư viện qrcode chạy 100% phía client
 */
import QRCode from "qrcode";
import { TEACHERS_DATA } from "./data/teachersContent.js";

export function renderQRPage(container) {
  const defaultOrigin = window.location.origin + window.location.pathname.replace(/\/+$/, "");
  
  container.innerHTML = `
    <div class="qr-wrapper">
      <header class="qr-header no-print">
        <div class="qr-header-top">
          <a href="./" class="qr-back-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Về Trang Chủ Sách 20/11
          </a>
          <div class="qr-actions">
            <button class="qr-btn primary" id="btnPrintAll">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
              In Tất Cả 5 Thiệp QR
            </button>
          </div>
        </div>

        <h1 class="qr-main-title">Mã QR Thiệp Tri Ân Thầy Cô 20/11</h1>
        <p class="qr-sub-desc">Quét mã QR để mở trực tiếp cuốn sổ tay ký họa 3D lật trang của từng Thầy / Cô.</p>

        <div class="qr-domain-box">
          <label for="domainInput"><strong>Địa chỉ Web sau khi Deploy (Vercel / Netlify):</strong></label>
          <div class="qr-input-row">
            <input type="text" id="domainInput" value="${defaultOrigin}" placeholder="https://ten-du-an.vercel.app" />
            <button class="qr-btn" id="btnUpdateDomain">Cập Nhật Mã QR</button>
          </div>
          <small class="qr-help-text">💡 Mã QR sẽ tự động tạo lại ngay khi bạn dán link trang web đã deploy vào đây.</small>
        </div>
      </header>

      <div class="qr-grid" id="qrGrid"></div>
    </div>
  `;

  const domainInput = document.getElementById("domainInput");
  const qrGrid = document.getElementById("qrGrid");
  const btnPrintAll = document.getElementById("btnPrintAll");
  const btnUpdateDomain = document.getElementById("btnUpdateDomain");

  async function generateQRCards() {
    let baseUrl = domainInput.value.trim().replace(/\/+$/, "");
    if (!baseUrl) baseUrl = window.location.origin;

    qrGrid.innerHTML = "";

    const teachers = Object.values(TEACHERS_DATA);

    for (const t of teachers) {
      const targetUrl = `${baseUrl}/?teacher=${t.id}`;

      // Tạo Data URL cho ảnh QR
      const qrDataUrl = await QRCode.toDataURL(targetUrl, {
        width: 320,
        margin: 1.5,
        color: {
          dark: "#2b2721",
          light: "#faf6ee"
        },
        errorCorrectionLevel: "H"
      });

      const card = document.createElement("div");
      card.className = "qr-card";
      card.innerHTML = `
        <div class="qr-card-inner">
          <div class="qr-card-badge">20/11 · TRI ÂN THẦY CÔ</div>
          <div class="qr-badge-sub">SỔ TAY KÝ HỌA KỶ NIỆM</div>
          
          <h2 class="qr-teacher-name">${t.teacherName}</h2>
          <div class="qr-subject-tag">Môn: ${t.subject}</div>

          <div class="qr-img-box">
            <img src="${qrDataUrl}" alt="Mã QR ${t.teacherName}" class="qr-code-img" />
          </div>

          <div class="qr-url-text">${targetUrl}</div>
          <p class="qr-scan-guide">Dùng Camera điện thoại hoặc Zalo để quét mở cuốn sách</p>

          <div class="qr-card-btns no-print">
            <a href="${qrDataUrl}" download="QR_20-11_${t.id.toUpperCase()}.png" class="qr-card-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Tải Ảnh QR
            </a>
            <a href="${targetUrl}" target="_blank" class="qr-card-btn primary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Xem Thử Sách
            </a>
          </div>
        </div>
      `;
      qrGrid.appendChild(card);
    }
  }

  generateQRCards();

  btnUpdateDomain.onclick = generateQRCards;
  domainInput.oninput = () => {
    clearTimeout(domainInput._timer);
    domainInput._timer = setTimeout(generateQRCards, 400);
  };

  btnPrintAll.onclick = () => {
    window.print();
  };
}

