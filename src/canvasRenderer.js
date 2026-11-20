/**
 * CANVAS RENDERER CHO CUỐN SỔ TAY 20/11 (1760 × 1240)
 * Tự động vẽ từng trang sách nghệ thuật lên nền blank-book.png
 * Tối ưu: Ảnh & Video hiển thị TO RỘNG, KHÔNG ghi chú chữ rườm rà
 */

export class BookCanvasRenderer {
  constructor(blankBookUrl = "/blank-book.png") {
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

  // Lấy video frame đầu tiên làm poster thumbnail
  async getVideoFrame(videoUrl) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.src = videoUrl;

      const timeout = setTimeout(() => {
        resolve(null);
      }, 4000);

      video.onloadeddata = () => {
        video.currentTime = 0.5;
      };

      video.onseeked = () => {
        clearTimeout(timeout);
        const cvs = document.createElement("canvas");
        cvs.width = video.videoWidth || 720;
        cvs.height = video.videoHeight || 1280;
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

  // Hàm chia dòng văn bản tự động (Word Wrap) cho trang Text đầu & cuối
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

  drawVintageCorners(ctx, x, y, w, h, color = "rgba(107, 79, 53, 0.45)") {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    const size = 32;
    const pad = 12;

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

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx + dx * 6, cy + dy * 6, 2, 0, Math.PI * 2);
      ctx.fill();
    });

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

    // TRANG TRÁI
    const leftX = 170;
    const leftY = 320;
    const leftW = 630;
    const leftH = 610;

    this.drawVintageCorners(ctx, leftX, leftY, leftW, leftH, "rgba(120, 85, 50, 0.35)");

    ctx.fillStyle = "rgba(90, 65, 40, 0.65)";
    ctx.font = "italic 18px 'Newsreader', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(
      isClosing ? "— LỜI KẾT TRI ÂN —" : "— KỶ NIỆM 20/11 —",
      leftX + leftW / 2,
      leftY + 65
    );

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

    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 34px 'Instrument Serif', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(teacherName || "Thầy / Cô Kính Yêu", leftX + leftW / 2, leftY + 235);

    ctx.fillStyle = "#9a6a3e";
    ctx.font = "italic 20px 'Newsreader', Georgia, serif";
    ctx.fillText(`Môn ${subject || ""}`, leftX + leftW / 2, leftY + 272);

    ctx.strokeStyle = "rgba(154, 106, 62, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX + 140, leftY + 300);
    ctx.lineTo(leftX + leftW - 140, leftY + 300);
    ctx.stroke();

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

    if (date) {
      ctx.fillStyle = "rgba(90, 75, 60, 0.6)";
      ctx.font = "17px 'Newsreader', Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText(date, leftX + leftW / 2, leftY + leftH - 45);
    }

    // TRANG PHẢI
    const rightX = 945;
    const rightY = 320;
    const rightW = 635;
    const rightH = 610;

    this.drawVintageCorners(ctx, rightX, rightY, rightW, rightH, "rgba(120, 85, 50, 0.35)");

    ctx.fillStyle = "#2b2721";
    ctx.font = "normal 33px 'Instrument Serif', Georgia, serif";
    ctx.textAlign = "left";
    ctx.fillText(title || "Tâm Thư Tri Ân", rightX + 45, rightY + 68);

    ctx.strokeStyle = "rgba(154, 106, 62, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rightX + 45, rightY + 86);
    ctx.lineTo(rightX + 260, rightY + 86);
    ctx.stroke();

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

    if (signature) {
      ctx.fillStyle = "#7a5631";
      ctx.font = "italic 21px 'Newsreader', Georgia, serif";
      ctx.textAlign = "right";
      ctx.fillText(signature, rightX + rightW - 50, Math.max(endY + 40, rightY + rightH - 50));
    }

    return this.canvasToBlobUrl(canvas);
  }

  /**
   * Render Trang Dạng Ảnh & Video: HIỂN THỊ TO RỘNG, KHÔNG CÓ CHỮ CHÚ THÍCH RƯỜM RÀ
   */
  async renderMediaPage(pageData) {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    // 1. Vẽ nền sách trống
    ctx.drawImage(this.blankImg, 0, 0, this.width, this.height);

    const { file, type } = pageData;

    // Load media source (ảnh hoặc frame đầu của video)
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

    // =========================================================================
    // TÍNH TOÁN KÍCH THƯỚC TO RỘNG TỐI ĐA CHO ẢNH & VIDEO
    // Vùng trang sách mở: x từ ~140 đến ~1620, y từ ~305 đến ~935 (cao ~630px)
    // =========================================================================
    const pageTop = 310;
    const pageH = 620;

    let targetX, targetY, targetW, targetH;

    if (mediaSource) {
      const srcW = mediaSource.width;
      const srcH = mediaSource.height;
      const isLandscape = srcW >= srcH;

      if (isLandscape) {
        // Ảnh / Video ngang: Trải to rộng ở giữa toàn bộ cuốn sách mở đôi (Panorama)
        targetH = Math.min(pageH - 20, 600);
        targetW = Math.min(1420, targetH * (srcW / srcH));
        if (targetW > 1420) {
          targetW = 1420;
          targetH = targetW * (srcH / srcW);
        }
        targetX = (this.width - targetW) / 2;
        targetY = pageTop + (pageH - targetH) / 2;
      } else {
        // Ảnh / Video dọc (Portrait): Chiếm chiều cao tối đa, căn giữa trang mở đôi
        targetH = Math.min(pageH - 10, 610);
        targetW = Math.min(760, targetH * (srcW / srcH));
        targetX = (this.width - targetW) / 2;
        targetY = pageTop + (pageH - targetH) / 2;
      }

      // Đổ bóng chân thực cho khung hình
      ctx.save();
      ctx.shadowColor = "rgba(40, 28, 14, 0.35)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;

      // Khung viền màu giấy ảnh sang trọng
      const borderPad = 10;
      ctx.fillStyle = "#faf7f0";
      ctx.beginPath();
      ctx.roundRect(
        targetX - borderPad,
        targetY - borderPad,
        targetW + borderPad * 2,
        targetH + borderPad * 2,
        8
      );
      ctx.fill();
      ctx.restore();

      // Viền mảnh tinh tế quanh khung
      ctx.strokeStyle = "rgba(160, 135, 105, 0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        targetX - borderPad,
        targetY - borderPad,
        targetW + borderPad * 2,
        targetH + borderPad * 2
      );

      // Vẽ hình ảnh / frame video vào
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(targetX, targetY, targetW, targetH, 4);
      ctx.clip();
      ctx.drawImage(mediaSource, targetX, targetY, targetW, targetH);
      ctx.restore();

      // NẾU LÀ VIDEO: Vẽ Nút Play LỚN ĐẸP MẮT Ở CHÍNH GIỮA
      if (type === "video") {
        const playCenterX = targetX + targetW / 2;
        const playCenterY = targetY + targetH / 2;
        const playR = 48; // Bán kính lớn 48px (đường kính 96px) cực kỳ nổi bật

        ctx.save();
        // Vòng tròn đổ bóng
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 4;

        // Vòng tròn mờ sang trọng
        ctx.fillStyle = "rgba(25, 18, 12, 0.72)";
        ctx.beginPath();
        ctx.arc(playCenterX, playCenterY, playR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Viền vàng kim / trắng kem
        ctx.save();
        ctx.strokeStyle = "rgba(255, 248, 230, 0.95)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(playCenterX, playCenterY, playR, 0, Math.PI * 2);
        ctx.stroke();

        // Tam giác nút Play
        ctx.fillStyle = "#fffaf0";
        ctx.beginPath();
        const triSize = 20;
        ctx.moveTo(playCenterX - triSize * 0.7, playCenterY - triSize);
        ctx.lineTo(playCenterX + triSize * 1.3, playCenterY);
        ctx.lineTo(playCenterX - triSize * 0.7, playCenterY + triSize);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

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
