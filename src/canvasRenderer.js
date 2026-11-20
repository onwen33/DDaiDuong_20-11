/**
 * CANVAS RENDERER CHO CUỐN SỔ TAY 20/11 (1760 × 1240)
 * Siêu nhẹ, siêu tốc, an toàn tuyệt đối trên Mobile (iOS / Android)
 */

export class BookCanvasRenderer {
  constructor(blankBookUrl = "/blank-book.png") {
    this.blankBookUrl = blankBookUrl;
    this.blankImg = null;
    this.isReady = false;
    this.width = 1760;
    this.height = 1240;
  }

  async init() {
    if (this.isReady) return;
    try {
      this.blankImg = await this.loadImage(this.blankBookUrl);
    } catch (e) {
      console.warn("Không load được blank-book.png, dùng nền fallback:", e);
    }

    // Đảm bảo không bị treo bởi font chữ trên mobile
    if (document.fonts) {
      await Promise.race([
        document.fonts.ready,
        new Promise((r) => setTimeout(r, 600))
      ]).catch(() => {});
    }
    this.isReady = true;
  }

  // Tải ảnh an toàn không bao giờ throw lỗi làm đứng trang
  loadImage(url) {
    return new Promise((resolve) => {
      if (!url) return resolve(null);
      const cleanUrl = url.startsWith("/") || url.startsWith("http") ? url : `/${url}`;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => {
        console.warn(`Ảnh không tải được: ${cleanUrl}, chuyển sang fallback.`);
        resolve(null);
      };
      img.src = cleanUrl;
    });
  }

  // Vẽ nền sách mở đôi (dùng ảnh blank-book.png hoặc vẽ fallback nền giấy kem nếu ảnh lỗi)
  drawBookBackground(ctx) {
    if (this.blankImg) {
      ctx.drawImage(this.blankImg, 0, 0, this.width, this.height);
    } else {
      // Fallback nền giấy kem vintage
      ctx.fillStyle = "#ece6d8";
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = "#fcf9f2";
      ctx.beginPath();
      ctx.roundRect(100, 280, 1560, 680, 16);
      ctx.fill();
      // Gáy sách giữa
      const grad = ctx.createLinearGradient(840, 0, 920, 0);
      grad.addColorStop(0, "rgba(252, 249, 242, 0)");
      grad.addColorStop(0.5, "rgba(70, 50, 30, 0.45)");
      grad.addColorStop(1, "rgba(252, 249, 242, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(840, 280, 80, 680);
    }
  }

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

    this.drawBookBackground(ctx);

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
   * Render Trang Dạng Ảnh & Video (Siêu Tốc, KHÔNG load video ngầm gây treo mobile)
   */
  async renderMediaPage(pageData) {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    this.drawBookBackground(ctx);

    const { file, type, posterImg } = pageData;

    // Với ảnh thông thường: load ảnh
    // Với video: load poster image (hoặc ảnh có sẵn) cực nhanh trong 10ms, KHÔNG load video ngầm
    let mediaSource = null;
    if (type === "video") {
      if (posterImg) {
        mediaSource = await this.loadImage(posterImg);
      }
    } else {
      mediaSource = await this.loadImage(file);
    }

    const pageTop = 310;
    const pageH = 620;
    let targetX, targetY, targetW, targetH;

    if (mediaSource) {
      const srcW = mediaSource.width;
      const srcH = mediaSource.height;
      const isLandscape = srcW >= srcH;

      if (isLandscape) {
        targetH = Math.min(pageH - 20, 600);
        targetW = Math.min(1420, targetH * (srcW / srcH));
        if (targetW > 1420) {
          targetW = 1420;
          targetH = targetW * (srcH / srcW);
        }
        targetX = (this.width - targetW) / 2;
        targetY = pageTop + (pageH - targetH) / 2;
      } else {
        targetH = Math.min(pageH - 10, 610);
        targetW = Math.min(760, targetH * (srcW / srcH));
        targetX = (this.width - targetW) / 2;
        targetY = pageTop + (pageH - targetH) / 2;
      }

      ctx.save();
      ctx.shadowColor = "rgba(40, 28, 14, 0.35)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;

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

      ctx.strokeStyle = "rgba(160, 135, 105, 0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        targetX - borderPad,
        targetY - borderPad,
        targetW + borderPad * 2,
        targetH + borderPad * 2
      );

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(targetX, targetY, targetW, targetH, 4);
      ctx.clip();
      ctx.drawImage(mediaSource, targetX, targetY, targetW, targetH);
      ctx.restore();
    } else {
      // Nếu là Video không có sẵn poster: Vẽ khung poster điện ảnh vintage tuyệt đẹp
      targetW = 860;
      targetH = 580;
      targetX = (this.width - targetW) / 2;
      targetY = pageTop + (pageH - targetH) / 2;

      ctx.save();
      ctx.shadowColor = "rgba(40, 28, 14, 0.35)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;

      // Khung poster đen nâu cổ điển
      ctx.fillStyle = "#221c17";
      ctx.beginPath();
      ctx.roundRect(targetX, targetY, targetW, targetH, 12);
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "rgba(212, 175, 115, 0.5)";
      ctx.lineWidth = 2;
      ctx.strokeRect(targetX + 12, targetY + 12, targetW - 24, targetH - 24);

      // Chữ tiêu đề trên poster
      ctx.fillStyle = "rgba(245, 235, 220, 0.85)";
      ctx.font = "italic 26px 'Instrument Serif', Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("— THƯỚC PHIM KỶ NIỆM 20/11 —", this.width / 2, targetY + 90);
    }

    // NẾU LÀ VIDEO: Vẽ Nút Play NỔI BẬT Ở GIỮA
    if (type === "video") {
      const playCenterX = this.width / 2;
      const playCenterY = pageTop + pageH / 2;
      const playR = 48;

      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 4;

      ctx.fillStyle = "rgba(20, 14, 10, 0.75)";
      ctx.beginPath();
      ctx.arc(playCenterX, playCenterY, playR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(255, 248, 230, 0.95)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(playCenterX, playCenterY, playR, 0, Math.PI * 2);
      ctx.stroke();

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

    return this.canvasToBlobUrl(canvas);
  }

  canvasToBlobUrl(canvas) {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          return resolve("");
        }
        const url = URL.createObjectURL(blob);
        resolve(url);
      }, "image/png");
    });
  }
}
