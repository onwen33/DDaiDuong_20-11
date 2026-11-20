/**
 * CANVAS RENDERER CHO CUỐN SỔ TAY 20/11 (1760 × 1240)
 * Tự động vẽ từng trang sách nghệ thuật lên nền blank-book.png
 */

export class BookCanvasRenderer {
  constructor(blankBookUrl = "blank-book.png") {
    this.blankBookUrl = blankBookUrl;
    this.blankImg = null;
    this.isReady = false;
    this.width = 1760;
    this.height = 1240;
    this.cache = new Map();
  }

  async init() {
    if (this.isReady) return;
    this.blankImg = await this.loadImage(this.blankBookUrl);
    // Đảm bảo font chữ đã được tải
    if (document.fonts) {
      await document.fonts.ready;
    }
    this.isReady = true;
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  }

  // Lấy video frame đầu tiên làm thumbnail
  async getVideoFrame(videoUrl) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.src = videoUrl;

      const timeout = setTimeout(() => {
        resolve(null); // Quá thời gian thì trả về null để dùng fallback poster
      }, 4000);

      video.onloadeddata = () => {
        video.currentTime = 0.5; // Nhảy nhẹ qua 0.5s để tránh frame đen đầu video
      };

      video.onseeked = () => {
        clearTimeout(timeout);
        const cvs = document.createElement("canvas");
        cvs.width = video.videoWidth || 640;
        cvs.height = video.videoHeight || 360;
        const ctx = cvs.getContext("2d");
        ctx.drawImage(video, 0, 0, cvs.width, cvs.height);
        resolve(cvs);
      };

      video.onerror = () => {
        clearTimeout(timeout);
        resolve(null);
      };
    });
  }

  // Hàm chia dòng văn bản tự động (Word Wrap)
  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const paragraphs = text.split("\n");
    let curY = y;

    for (const paragraph of paragraphs) {
      if (paragraph.trim() === "") {
        curY += lineHeight * 0.8;
        continue;
      }

      const words = paragraph.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line.trim(), x, curY);
          line = words[n] + " ";
          curY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line.trim(), x, curY);
      curY += lineHeight;
    }
    return curY;
  }

  // Vẽ hoa văn viền góc kiểu sổ tay cổ điển
  drawVintageCorners(ctx, x, y, w, h, color = "rgba(107, 79, 53, 0.45)") {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    const size = 32;
    const pad = 12;

    // 4 góc
    const corners = [
      { cx: x + pad, cy: y + pad, dx: 1, dy: 1 },
      { cx: x + w - pad, cy: y + pad, dx: -1, dy: 1 },
      { cx: x + pad, cy: y + h - pad, dx: 1, dy: -1 },
      { cx: x + w - pad, cy: y + h - pad, dx: -1, dy: -1 }
    ];

    corners.forEach(({ cx, cy, dx, dy }) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy + dy * size);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx + dx * size, cy);
      ctx.stroke();

      // Họa tiết chấm tròn nhỏ góc
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx + dx * 6, cy + dy * 6, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  // Vẽ miếng băng dính Washi Tape giả lập dán ảnh
  drawWashiTape(ctx, x, y, width = 110, height = 28, angle = -0.05) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.fillStyle = "rgba(224, 214, 192, 0.72)";
    ctx.shadowColor = "rgba(40, 30, 20, 0.15)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Mép răng cưa hai đầu băng dính
    ctx.fillStyle = "rgba(245, 240, 230, 0.9)";
    ctx.fillRect(-width / 2, -height / 2, 3, height);
    ctx.fillRect(width / 2 - 3, -height / 2, 3, height);

    ctx.restore();
  }

  /**
   * Render Trang Dạng Text (Tâm Thư Mở Đầu & Tâm Thư Kết)
   */
  async renderTextPage(pageData) {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    // 1. Vẽ nền sách trống
    ctx.drawImage(this.blankImg, 0, 0, this.width, this.height);

    const { title, date, body, signature, quote, subject, teacherName, isClosing } = pageData;

    // ==========================================
    // TRANG TRÁI (x: 140 -> 820, y: 310 -> 930)
    // ==========================================
    const leftX = 170;
    const leftY = 320;
    const leftW = 630;
    const leftH = 610;

    // Khung viền thanh lịch trang trái
    this.drawVintageCorners(ctx, leftX, leftY, leftW, leftH, "rgba(120, 85, 50, 0.35)");

    // Dòng chữ trên cùng
    ctx.fillStyle = "rgba(90, 65, 40, 0.65)";
    ctx.font = "italic 18px 'Newsreader', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(
      isClosing ? "— LỜI KẾT TRI ÂN —" : "— KỶ NIỆM 20/11 —",
      leftX + leftW / 2,
      leftY + 65
    );

    // Huy hiệu tròn nghệ thuật ở trang trái
    const badgeX = leftX + leftW / 2;
    const badgeY = leftY + 145;
    ctx.save();
    ctx.strokeStyle = "rgba(154, 106, 62, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(badgeX, badgeY, 44, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(badgeX, badgeY, 39, 0, Math.PI * 2);
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#9a6a3e";
    ctx.font = "26px 'Instrument Serif', Georgia, serif";
    ctx.textBaseline = "middle";
    ctx.fillText("20/11", badgeX, badgeY - 2);
    ctx.restore();

    // Tiêu đề giáo viên & môn học
    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 34px 'Instrument Serif', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(teacherName || "Thầy / Cô Kính Yêu", leftX + leftW / 2, leftY + 235);

    ctx.fillStyle = "#9a6a3e";
    ctx.font = "italic 20px 'Newsreader', Georgia, serif";
    ctx.fillText(`Môn ${subject || ""}`, leftX + leftW / 2, leftY + 272);

    // Đường gạch ngang phân cách
    ctx.strokeStyle = "rgba(154, 106, 62, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX + 140, leftY + 300);
    ctx.lineTo(leftX + leftW - 140, leftY + 300);
    ctx.stroke();

    // Trích dẫn ý nghĩa (Quote)
    if (quote) {
      ctx.fillStyle = "rgba(65, 55, 45, 0.85)";
      ctx.font = "italic 22px 'Newsreader', Georgia, serif";
      ctx.textAlign = "center";
      this.wrapText(
        ctx,
        `"${quote}"`,
        leftX + leftW / 2,
        leftY + 355,
        leftW - 120,
        34
      );
    }

    // Ngày tháng
    if (date) {
      ctx.fillStyle = "rgba(90, 75, 60, 0.6)";
      ctx.font = "17px 'Newsreader', Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText(date, leftX + leftW / 2, leftY + leftH - 45);
    }

    // ==========================================
    // TRANG PHẢI (x: 940 -> 1600, y: 310 -> 930)
    // ==========================================
    const rightX = 945;
    const rightY = 320;
    const rightW = 635;
    const rightH = 610;

    this.drawVintageCorners(ctx, rightX, rightY, rightW, rightH, "rgba(120, 85, 50, 0.35)");

    // Tiêu đề bức tâm thư
    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 33px 'Instrument Serif', Georgia, serif";
    ctx.textAlign = "left";
    ctx.fillText(title || "Tâm Thư Tri Ân", rightX + 45, rightY + 68);

    // Đường viền mảnh dưới tiêu đề
    ctx.strokeStyle = "rgba(154, 106, 62, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rightX + 45, rightY + 86);
    ctx.lineTo(rightX + 260, rightY + 86);
    ctx.stroke();

    // Nội dung tâm thư
    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 20px 'Newsreader', Georgia, serif";
    ctx.textAlign = "left";

    const endY = this.wrapText(
      ctx,
      body || "",
      rightX + 45,
      rightY + 130,
      rightW - 90,
      32
    );

    // Chữ ký bên dưới
    if (signature) {
      ctx.fillStyle = "#7a5631";
      ctx.font = "italic 21px 'Newsreader', Georgia, serif";
      ctx.textAlign = "right";
      ctx.fillText(signature, rightX + rightW - 50, Math.max(endY + 40, rightY + rightH - 50));
    }

    return this.canvasToBlobUrl(canvas);
  }

  /**
   * Render Trang Dạng Ảnh & Video (Scrapbook Layout Mở Đôi Sang Trọng)
   */
  async renderMediaPage(pageData) {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    // 1. Vẽ nền sách trống
    ctx.drawImage(this.blankImg, 0, 0, this.width, this.height);

    const { title, caption, file, type, subject, teacherName, pageNum, totalPages } = pageData;

    // Load ảnh hoặc lấy frame video
    let mediaSource = null;
    if (type === "video") {
      mediaSource = await this.getVideoFrame(file);
    } else {
      try {
        mediaSource = await this.loadImage(file);
      } catch (e) {
        console.warn(`Could not load image: ${file}`, e);
      }
    }

    // ==========================================
    // TRANG TRÁI: THÔNG TIN & LỜI BÌNH NGHỆ THUẬT
    // ==========================================
    const leftX = 170;
    const leftY = 320;
    const leftW = 630;
    const leftH = 610;

    this.drawVintageCorners(ctx, leftX, leftY, leftW, leftH, "rgba(120, 85, 50, 0.35)");

    // Huy hiệu số trang
    if (pageNum && totalPages) {
      ctx.fillStyle = "rgba(154, 106, 62, 0.75)";
      ctx.font = "15px 'Newsreader', Georgia, serif";
      ctx.textAlign = "left";
      ctx.fillText(`KỶ NIỆM · ${String(pageNum).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`, leftX + 45, leftY + 55);
    }

    // Tiêu đề ảnh/video
    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 34px 'Instrument Serif', Georgia, serif";
    ctx.textAlign = "left";
    ctx.fillText(title || "Khoảnh Khắc Đáng Nhớ", leftX + 45, leftY + 115);

    // Tên thầy cô & môn
    ctx.fillStyle = "#9a6a3e";
    ctx.font = "italic 20px 'Newsreader', Georgia, serif";
    ctx.fillText(`${teacherName} · Môn ${subject}`, leftX + 45, leftY + 155);

    // Đường gạch ngang
    ctx.strokeStyle = "rgba(154, 106, 62, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX + 45, leftY + 180);
    ctx.lineTo(leftX + leftW - 45, leftY + 180);
    ctx.stroke();

    // Lời nhắn / Caption chi tiết
    ctx.fillStyle = "rgba(43, 39, 33, 0.88)";
    ctx.font = "normal 21px 'Newsreader', Georgia, serif";
    this.wrapText(
      ctx,
      caption || "Những khoảnh khắc không thể nào quên dưới mái trường mến yêu.",
      leftX + 45,
      leftY + 230,
      leftW - 90,
      35
    );

    // Nếu là Video: vẽ biểu tượng hướng dẫn bấm xem video
    if (type === "video") {
      const vidBadgeY = leftY + leftH - 95;
      ctx.fillStyle = "rgba(154, 106, 62, 0.12)";
      ctx.beginPath();
      ctx.roundRect(leftX + 45, vidBadgeY, leftW - 90, 56, 10);
      ctx.fill();

      ctx.strokeStyle = "rgba(154, 106, 62, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "#7a4e25";
      ctx.font = "normal 18px 'Newsreader', Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("▶ Trang này có Video kỷ niệm — Bấm nút để phát", leftX + leftW / 2, vidBadgeY + 34);
    }

    // ==========================================
    // TRANG PHẢI: KHUNG ẢNH POLAROID / SCRAPBOOK
    // ==========================================
    const rightX = 945;
    const rightY = 320;
    const rightW = 635;
    const rightH = 610;

    // Kích thước khung ảnh Polaroid
    const photoBoxW = 540;
    const photoBoxH = 500;
    const photoBoxX = rightX + (rightW - photoBoxW) / 2;
    const photoBoxY = rightY + (rightH - photoBoxH) / 2 + 10;

    // Đổ bóng cho bức ảnh
    ctx.save();
    ctx.shadowColor = "rgba(45, 32, 18, 0.22)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 8;

    // Khung giấy ảnh trắng kem nhẹ
    ctx.fillStyle = "#fdfbf7";
    ctx.beginPath();
    ctx.roundRect(photoBoxX, photoBoxY, photoBoxW, photoBoxH, 6);
    ctx.fill();
    ctx.restore();

    // Viền mảnh tinh tế quanh khung ảnh
    ctx.strokeStyle = "rgba(180, 160, 135, 0.4)";
    ctx.lineWidth = 1;
    ctx.strokeRect(photoBoxX, photoBoxY, photoBoxW, photoBoxH);

    // Vùng ảnh thực tế bên trong
    const innerPad = 16;
    const imgAreaX = photoBoxX + innerPad;
    const imgAreaY = photoBoxY + innerPad;
    const imgAreaW = photoBoxW - innerPad * 2;
    const imgAreaH = photoBoxH - 72; // Để lại lề dưới kiểu polaroid

    if (mediaSource) {
      // Căn chỉnh ảnh theo tỷ lệ contain / cover đẹp mắt
      const srcW = mediaSource.width;
      const srcH = mediaSource.height;
      const scale = Math.max(imgAreaW / srcW, imgAreaH / srcH);
      const drawW = srcW * scale;
      const drawH = srcH * scale;
      const cropX = (drawW - imgAreaW) / 2;
      const cropY = (drawH - imgAreaH) / 2;

      ctx.save();
      ctx.beginPath();
      ctx.rect(imgAreaX, imgAreaY, imgAreaW, imgAreaH);
      ctx.clip();
      ctx.drawImage(mediaSource, imgAreaX - cropX, imgAreaY - cropY, drawW, drawH);
      ctx.restore();
    } else {
      // Fallback nếu ảnh/video chưa tải được
      ctx.fillStyle = "#ede6d8";
      ctx.fillRect(imgAreaX, imgAreaY, imgAreaW, imgAreaH);
      ctx.fillStyle = "#8a7560";
      ctx.font = "italic 22px 'Newsreader', Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText(type === "video" ? "Thước Phim Kỷ Niệm 20/11" : "Khoảnh Khắc Kỷ Niệm", imgAreaX + imgAreaW / 2, imgAreaY + imgAreaH / 2);
    }

    // Nếu là Video: vẽ nút Play nghệ thuật giữa ảnh
    if (type === "video") {
      const playX = imgAreaX + imgAreaW / 2;
      const playY = imgAreaY + imgAreaH / 2;

      ctx.save();
      // Vòng tròn mờ
      ctx.fillStyle = "rgba(35, 25, 15, 0.62)";
      ctx.beginPath();
      ctx.arc(playX, playY, 46, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 245, 220, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Tam giác Play
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath();
      ctx.moveTo(playX - 12, playY - 18);
      ctx.lineTo(playX + 20, playY);
      ctx.lineTo(playX - 12, playY + 18);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Chú thích nhỏ dưới ảnh phong cách chữ viết tay
    ctx.fillStyle = "#634e38";
    ctx.font = "italic 19px 'Newsreader', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(title || "20/11 Kỷ Niệm", photoBoxX + photoBoxW / 2, photoBoxY + photoBoxH - 24);

    // Miếng băng dính washi tape dán ở góc trên
    this.drawWashiTape(ctx, photoBoxX + photoBoxW / 2, photoBoxY, 115, 24, 0.02);

    return this.canvasToBlobUrl(canvas);
  }

  canvasToBlobUrl(canvas) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        resolve(url);
      }, "image/png");
    });
  }
}

