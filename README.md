# SỔ TAY KÝ HỌA TRI ÂN THẦY CÔ 20/11 (100% FRONTEND)

Dự án website lật trang cong 3D nghệ thuật tri ân Thầy Cô nhân ngày Nhà giáo Việt Nam 20/11.

---

## 🌟 TÍNH NĂNG NỔI BẬT

1. **Hiệu ứng lật trang cong 3D 18 dải (.strip)**:
   - Kế thừa 100% hiệu ứng chuyển trang vật lý cong tự nhiên, đổ bóng 3 lớp (`ambient`, `contact`, `hair`) và kính lúp soi chi tiết (`loupe`).
2. **5 Cuốn sách độc lập cho 5 Giáo viên**:
   - Toán Học: `/?teacher=toan`
   - Ngữ Văn: `/?teacher=van`
   - Tiếng Anh: `/?teacher=anh`
   - Vật Lý: `/?teacher=li`
   - Hóa Học: `/?teacher=hoa`
3. **Cấu trúc trang sách chuẩn chỉnh**:
   - Trang 1: Tâm thư mở đầu nghệ thuật
   - Trang giữa: Toàn bộ ảnh & video kỷ niệm của từng môn
   - Trang áp chót: Ảnh mái trường xưa (`santruong.jpg`)
   - Trang cuối: Lời chúc kết khép lại cuốn sổ tay
4. **Trang Tạo & In 5 Mã QR (`?page=qr`)**:
   - Cho phép nhập domain sau khi deploy (Vercel / Netlify) để mã QR cập nhật tức thì.
   - Nút tải ảnh PNG từng mã QR chất lượng cao.
   - Nút in 5 thiệp QR (`window.print()`) được căn lề chuẩn khổ in bưu thiếp.
5. **Nhạc nền & Video Kỷ Niệm**:
   - Nhạc nền `timem.mp3` với nút bật/tắt sóng âm thanh.
   - Trình phát Video Modal full-view mượt mà, tự động tạm dừng nhạc khi phát video và tiếp tục phát nhạc khi đóng.
6. **Chế độ Sáng / Tối (Light / Dark Mode)**:
   - Mặc định Light Mode giấy kem ấm áp, hỗ trợ chuyển sang Dark Mode sang trọng.

---

## 🚀 HƯỚNG DẪN CHẠY LOCAL & DEPLOY

### 1. Chạy trên máy tính
```bash
# Cài đặt thư viện (nếu chưa cài)
npm install

# Khởi động máy chủ phát triển
npm run dev
# Mở trình duyệt tại: http://localhost:3000
```

### 2. Build dự án để Deploy
```bash
npm run build
```
Thư mục `dist/` được tạo ra chứa 100% mã nguồn tĩnh (HTML, CSS, JS, Assets, Video, Audio).

### 3. Deploy lên Vercel / Netlify (Miễn phí 100%)
- **Cách 1 (Kéo thả Netlify)**: Vào [app.netlify.com/drop](https://app.netlify.com/drop) và kéo thả toàn bộ thư mục `dist` vào.
- **Cách 2 (Vercel CLI)**: Chạy `npx vercel` và chọn thư mục `dist`.
- **Cách 3 (GitHub)**: Đẩy code lên GitHub rồi kết nối với Vercel/Netlify. Build command: `npm run build`, Output directory: `dist`.

---

## ✍️ HƯỚNG DẪN TỰ SỬA TÂM THƯ & NỘI DUNG

Bạn chỉ cần mở đúng **1 file duy nhất**:
👉 **`src/data/teachersContent.js`**

Trong file này có chú thích tiếng Việt cực kỳ rõ ràng để bạn có thể:
- Đổi tên Thầy/Cô (`teacherName`)
- Sửa nội dung tâm thư mở đầu (`openingLetter`) và lời chúc kết (`closingLetter`)
- Sửa tiêu đề và lời nhắn cho từng bức ảnh / video (`mediaItems`)
- Sửa lời nhắn cho bức ảnh sân trường (`sanTruongCaption`)

Sau khi sửa xong, chỉ cần chạy `npm run build` là website sẽ tự động cập nhật!

