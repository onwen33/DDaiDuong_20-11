export default function handler(req, res) {
  // Cho phép gọi API từ trình duyệt
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { teacher, action } = req.query;

  // Lấy địa chỉ IP thực tế từ header của Vercel
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : req.headers["x-real-ip"] || req.socket?.remoteAddress || "Không xác định";

  // Vercel tự động cung cấp thông tin vị trí địa lý theo IP
  let city = req.headers["x-vercel-ip-city"];
  try {
    if (city) city = decodeURIComponent(city);
  } catch (e) {}
  city = city || "Không rõ tỉnh/thành";

  const region = req.headers["x-vercel-ip-country-region"] || "";
  const country = req.headers["x-vercel-ip-country"] || "VN";

  // Nhận diện thiết bị (iPhone, Android, Máy tính)
  const userAgent = req.headers["user-agent"] || "";
  let device = "Máy tính";
  if (/iphone/i.test(userAgent)) device = "iPhone";
  else if (/ipad/i.test(userAgent)) device = "iPad";
  else if (/android/i.test(userAgent)) device = "Điện thoại Android";
  else if (/mobile/i.test(userAgent)) device = "Thiết bị di động";

  // Bản đồ tên giáo viên
  const teacherMap = {
    toan: "Thầy Nghiệp (Toán)",
    van: "Cô Mến (Văn)",
    anh: "Cô Nga (Anh)",
    li: "Cô Hoan (Lí)",
    hoa: "Thầy Sơn (Hóa)"
  };
  const teacherName = teacherMap[teacher] || teacher || "Chưa rõ";

  const now = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  const actionLabel = action === "open_book" ? "👉 ĐÃ BẤM MỞ SỔ TAY" : "🌐 TRUY CẬP TRANG CHỦ";

  console.log(`\n======================================================`);
  console.log(`🔔 [THEO DÕI TRUY CẬP 20/11] - ${actionLabel}`);
  console.log(`- Giáo viên  : ${teacherName}`);
  console.log(`- Địa điểm   : ${city}${region ? ", " + region : ""}, ${country}`);
  console.log(`- Địa chỉ IP : ${ip}`);
  console.log(`- Thiết bị   : ${device}`);
  console.log(`- Thời gian  : ${now}`);
  console.log(`======================================================\n`);

  return res.status(200).json({
    success: true,
    teacher: teacherName,
    city: city,
    ip: ip,
    time: now
  });
}
