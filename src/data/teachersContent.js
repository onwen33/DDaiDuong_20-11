/**
 * ==============================================================================
 * DANH SÁCH THẦY CÔ & TÂM THƯ TRI ÂN 20/11
 * ==============================================================================
 * 1. Toán: Thầy Nghiệp
 * 2. Văn: Cô Mến
 * 3. Anh: Cô Nga
 * 4. Lí: Cô Hoan
 * 5. Hóa: Thầy Sơn
 * ==============================================================================
 */

export const TEACHERS_DATA = {
  // ----------------------------------------------------------------------------
  // 1. GIÁO VIÊN TOÁN HỌC - THẦY NGHIỆP
  // ----------------------------------------------------------------------------
  toan: {
    id: "toan",
    subject: "Toán Học",
    subjectCode: "MATH",
    teacherName: "Thầy Nghiệp",
    quote: "Những con số khô khan bỗng hóa thành bài học làm người dưới nét phấn của Thầy Nghiệp.",
    openingLetter: {
      title: "Gửi Thầy Nghiệp Người Thầy Môn Toán Kính Yêu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy Nghiệp kính mến,

Trong hành trình trưởng thành của chúng em, những phương trình, định lý và đồ thị từng là những thử thách tưởng chừng không thể vượt qua. Nhưng nhờ sự kiên nhẫn, tận tụy và phong thái giảng bài cuốn hút của Thầy, từng con số vô tri đã trở nên sống động, rèn luyện cho chúng em tư duy logic, sự kiên trì và bản lĩnh trước mọi bài toán khó của cuộc đời.

Nhân ngày Nhà giáo Việt Nam 20/11, chúng em xin gom góp những khoảnh khắc, thước phim kỷ niệm đẹp nhất dưới mái trường này để gửi trọn lòng tri ân sâu sắc nhất tới Thầy!`,
      signature: "Tập thể Học trò Kính tặng Thầy Nghiệp"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Thầy Nghiệp",
      body: `Dẫu mai này đường đời có muôn vàn ẩn số, chúng em vẫn mãi ghi nhớ bài học về sự chính trực và nỗ lực bền bỉ mà Thầy đã truyền dạy.

Kính chúc Thầy Nghiệp luôn dồi dào sức khỏe, tràn đầy niềm vui và giữ mãi ngọn lửa nhiệt huyết để tiếp tục nâng cánh ước mơ cho bao thế hệ học trò tương lai!`,
      signature: "Mãi nhớ ơn Thầy Nghiệp kính yêu"
    },
    sanTruongCaption: {
      title: "Mái Trường Xưa - Nơi Gửi Gắm Tuổi Trẻ",
      caption: "Dưới bóng mát sân trường, nơi in dấu từng bước chân thầy cô sớm hôm và tiếng cười giòn tan của thuở học trò vô tư."
    },
    mediaItems: [
      {
        file: "assets-20-11/toan/2021.jpg",
        type: "image",
        title: "Kỷ Niệm Năm 2021",
        caption: "Khoảnh khắc tiết học Toán đầy say mê và nụ cười rạng rỡ của Thầy Nghiệp trên bục giảng."
      },
      {
        file: "assets-20-11/toan/2023.jpg",
        type: "image",
        title: "Khoảnh Khắc Năm 2023",
        caption: "Bức ảnh kỷ niệm gắn liền với mùa thi và những ngày ôn luyện miệt mài."
      },
      {
        file: "assets-20-11/toan/2023.mp4",
        type: "video",
        title: "Thước Phim Kỷ Niệm 2023 (Tập 1)",
        caption: "Đoạn video ghi lại những phút giây hào hứng trong giờ thảo luận nhóm môn Toán."
      },
      {
        file: "assets-20-11/toan/2023_2.mp4",
        type: "video",
        title: "Thước Phim Kỷ Niệm 2023 (Tập 2)",
        caption: "Nụ cười ấm áp của Thầy Nghiệp khi học trò giải xong bài toán khó."
      },
      {
        file: "assets-20-11/toan/2023_3.mp4",
        type: "video",
        title: "Thước Phim Kỷ Niệm 2023 (Tập 3)",
        caption: "Những lời dặn dò ân cần trước kỳ thi lớn của Thầy Nghiệp dành cho cả lớp."
      },
      {
        file: "assets-20-11/toan/2023_4.mp4",
        type: "video",
        title: "Thước Phim Kỷ Niệm 2023 (Tập 4)",
        caption: "Khoảnh khắc vui vẻ sau giờ tan trường cùng người thầy tận tụy."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. GIÁO VIÊN NGỮ VĂN - CÔ MẾN
  // ----------------------------------------------------------------------------
  van: {
    id: "van",
    subject: "Ngữ Văn",
    subjectCode: "LIT",
    teacherName: "Cô Mến",
    quote: "Từng trang sách mở ra là một chân trời nhân ái và tình yêu thương con người từ lời giảng của Cô Mến.",
    openingLetter: {
      title: "Gửi Cô Mến Người Thắp Lửa Tâm Hồn Văn Học",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Cô Mến yêu quý,

Mỗi tiết Văn của Cô không đơn thuần là phân tích tác phẩm hay ghi nhớ câu chữ, mà là những chuyến hành trình đưa chúng em vào cội nguồn cảm xúc, dạy chúng em biết rung động trước cái đẹp, biết đồng cảm trước nỗi đau và sống tử tế giữa cuộc đời.

Từng lời giảng trầm ấm, dịu dàng bên khung cửa sổ lớp học của Cô Mến đã nuôi dưỡng tâm hồn chúng em lớn lên từng ngày. Cuốn sổ tay ký họa này là món quà nhỏ chứa đựng biết bao tấm lòng kính yêu chúng em muốn dâng tặng Cô!`,
      signature: "Những Đứa Con Nhỏ Của Lớp Văn Gửi Cô Mến"
    },
    closingLetter: {
      title: "Khúc Ca Tri Ân Cô Mến",
      body: `Cảm ơn Cô Mến đã dạy chúng em cách lắng nghe nhịp đập trái tim và viết nên câu chuyện đời mình bằng sự chân thành, nhân ái.

Kính chúc Cô Mến luôn bình an trong tâm hồn, dồi dào sức khỏe, luôn trẻ trung và tìm thấy niềm hứng khởi vô tận trong từng trang sách, áng văn!`,
      signature: "Kính yêu và Biết ơn Cô Mến"
    },
    sanTruongCaption: {
      title: "Sân Trường Nắng Vàng - Nơi Thơ Ca Đọng Lại",
      caption: "Tiếng lá bàng rơi nghiêng ngoài hành lang vẫn như còn vọng tiếng giảng bài ấm áp năm nào của Cô Mến."
    },
    mediaItems: [
      {
        file: "assets-20-11/van/2021.jpg",
        type: "image",
        title: "Tiết Văn Mùa Thu 2021",
        caption: "Khoảnh khắc lắng đọng trong giờ đọc thơ và cảm nhận văn học cùng Cô Mến."
      },
      {
        file: "assets-20-11/van/2021.mp4",
        type: "video",
        title: "Video Diễn Nguyện Văn Học 2021",
        caption: "Thước phim trích đoạn kịch văn học do Cô Mến hướng dẫn chúng em thể hiện."
      },
      {
        file: "assets-20-11/van/2021_2.jpg",
        type: "image",
        title: "Nụ Cười Trên Bục Giảng 2021",
        caption: "Ánh mắt ấm áp của Cô Mến khi cả lớp say sưa thảo luận bài học."
      },
      {
        file: "assets-20-11/van/2023.jpg",
        type: "image",
        title: "Kỷ Niệm Đẹp 2023",
        caption: "Bức ảnh kỷ niệm thân thương trước thềm ngày hội tri ân nhà giáo."
      },
      {
        file: "assets-20-11/van/2023.mp4",
        type: "video",
        title: "Video Lời Chúc Mùa Thi 2023",
        caption: "Thước phim ghi lại những lời chúc chân thành, xúc động của Cô Mến trước ngày chia tay."
      },
      {
        file: "assets-20-11/van/2023end.jpg",
        type: "image",
        title: "Lưu Bút Cuối Khóa 2023",
        caption: "Nét chữ dặn dò và nụ cười mãn nguyện của Cô Mến trong ngày bế giảng năm học."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. GIÁO VIÊN TIẾNG ANH - CÔ NGA
  // ----------------------------------------------------------------------------
  anh: {
    id: "anh",
    subject: "Tiếng Anh",
    subjectCode: "ENG",
    teacherName: "Cô Nga",
    quote: "A great teacher inspires hope, ignites the imagination, and instills a love of learning.",
    openingLetter: {
      title: "Dear Teacher Nga, With Endless Love",
      date: "November 20, 2026",
      body: `Kính gửi Cô Nga kính mến,

Cô Nga không chỉ mang đến cho chúng em ngôn ngữ toàn cầu, mở toang cánh cửa bước ra thế giới rộng lớn, mà còn truyền cảm hứng về sự tự tin, lòng quả cảm để dám ước mơ và khẳng định bản thân mình.

Từ những buổi phát âm vụng về đầu tiên đến khi chúng em tự tin thuyết trình bằng tiếng Anh, Cô Nga luôn kiên nhẫn đồng hành, mỉm cười khích lệ. Chúng em xin gửi gắm trọn vẹn sự biết ơn qua từng bức ảnh kỷ niệm trong cuốn sổ tay này!`,
      signature: "With Endless Gratitude, Your Students"
    },
    closingLetter: {
      title: "Best Wishes For Teacher Nga",
      body: `Thank you for being more than just a teacher — you are our mentor, our inspiration, and a bright light guiding our dreams.

Kính chúc Cô Nga ngày 20/11 tràn ngập hoa, nụ cười, hạnh phúc và luôn tràn đầy năng lượng tích cực để tiếp tục chắp cánh cho những ước mơ bay xa!`,
      signature: "Always Remember & Love Teacher Nga"
    },
    sanTruongCaption: {
      title: "Memories Never Fade - Góc Sân Trường Dấu Yêu",
      caption: "Nơi chúng em cùng Cô Nga luyện từng câu nói tiếng Anh rộn rã dưới hàng cây rợp bóng mát."
    },
    mediaItems: [
      {
        file: "assets-20-11/anh/2020.jpg",
        type: "image",
        title: "Mùa Thu Đầu Tiên 2020",
        caption: "Những ngày đầu tiên bỡ ngỡ làm quen với những tiết học tiếng Anh năng động của Cô Nga."
      },
      {
        file: "assets-20-11/anh/2020_2.jpg",
        type: "image",
        title: "Hoạt Động Nhóm 2020",
        caption: "Không khí sôi nổi, ngập tràn tiếng cười trong giờ học ngoại ngữ."
      },
      {
        file: "assets-20-11/anh/2022.jpg",
        type: "image",
        title: "Thuyết Trình Tiếng Anh 2022",
        caption: "Khoảnh khắc Cô Nga mỉm cười khích lệ khi chúng em hoàn thành bài nói xuất sắc."
      },
      {
        file: "assets-20-11/anh/2023.jpg",
        type: "image",
        title: "Kỷ Niệm Năm 2023",
        caption: "Bức ảnh tập thể rực rỡ sắc màu ghi dấu một năm học thành công."
      },
      {
        file: "assets-20-11/anh/2023_2.jpg",
        type: "image",
        title: "Khoảnh Khắc Đáng Yêu 2023",
        caption: "Nụ cười thân thiện, gần gũi như một người bạn lớn của Cô Nga bên học trò."
      },
      {
        file: "assets-20-11/anh/2023_3.jpg",
        type: "image",
        title: "Ngày Hội Tri Ân 2023",
        caption: "Những bó hoa tươi thắm và lời chúc chân thành dâng lên Cô Nga kính yêu."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 4. GIÁO VIÊN VẬT LÝ - CÔ HOAN
  // ----------------------------------------------------------------------------
  li: {
    id: "li",
    subject: "Vật Lý",
    subjectCode: "PHYS",
    teacherName: "Cô Hoan",
    quote: "Từ định luật vạn vật hấp dẫn đến lực nâng đỡ ấm áp của tình cảm Cô Hoan dành cho học trò.",
    openingLetter: {
      title: "Gửi Cô Hoan Người Khơi Nguồn Đam Mê Vật Lý",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Cô Hoan kính mến,

Thế giới Vật lý với những mạch điện, lăng kính, chuyển động và sóng ánh sáng từng làm chúng em choáng ngợp, nhưng nhờ Cô Hoan tận tình chỉ bảo, chúng em nhận ra sự kỳ diệu của vũ trụ và quy luật vận hành của cuộc sống.

Cô dạy chúng em rằng mỗi lực tác động đều có phản lực, và mọi nỗ lực bền bỉ hôm nay đều sẽ tạo nên gia tốc mạnh mẽ đưa chúng em tiến về tương lai. Nhân ngày 20/11, chúng em kính chúc Cô Hoan vạn sự bình an!`,
      signature: "Tập thể Học sinh Môn Vật Lý Gửi Cô Hoan"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Cô Hoan",
      body: `Dù thời gian có trôi theo định luật bảo toàn, tình cảm kính trọng và lòng biết ơn của chúng em dành cho Cô Hoan sẽ luôn là một hằng số không bao giờ thay đổi.

Kính chúc Cô Hoan luôn dồi dào sức khỏe, ngập tràn niềm vui và tiếp tục thắp sáng đam mê khoa học cho các thế hệ mai sau!`,
      signature: "Học trò Luôn Ghi Ơn Cô Hoan"
    },
    sanTruongCaption: {
      title: "Khoảng Trời Kỷ Niệm - Nơi Ánh Nắng Giao Thoa",
      caption: "Từng vệt nắng rọi qua kẽ lá sân trường như thí nghiệm quang học tuyệt đẹp của tự nhiên."
    },
    mediaItems: [
      {
        file: "assets-20-11/li/2023.jpg",
        type: "image",
        title: "Giờ Thực Hành Vật Lý 2023",
        caption: "Say mê bên những mô hình thí nghiệm và lời hướng dẫn tỉ mỉ của Cô Hoan."
      },
      {
        file: "assets-20-11/li/2023_2.jpg",
        type: "image",
        title: "Khoảnh Khắc Say Mê Giảng Bài 2023",
        caption: "Ngọn lửa nhiệt huyết luôn bừng cháy trong từng lời giảng của Cô Hoan."
      },
      {
        file: "assets-20-11/li/2024.jpg",
        type: "image",
        title: "Kỷ Niệm Năm Học 2024",
        caption: "Bức ảnh kỷ niệm gắn liền với những ngày ôn thi đội tuyển học sinh giỏi."
      },
      {
        file: "assets-20-11/li/2024_2.jpg",
        type: "image",
        title: "Nụ Cười Chiến Thắng 2024",
        caption: "Niềm vui vỡ òa của Cô Hoan khi học trò gặt hái kết quả xuất sắc trong học tập."
      },
      {
        file: "assets-20-11/li/2026.jpg",
        type: "image",
        title: "Hành Trình Mới 2026",
        caption: "Dấu ấn trưởng thành và lời tri ân sâu sắc nhất gửi tới Cô Hoan mẫu mực."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 5. GIÁO VIÊN HÓA HỌC - THẦY SƠN
  // ----------------------------------------------------------------------------
  hoa: {
    id: "hoa",
    subject: "Hóa Học",
    subjectCode: "CHEM",
    teacherName: "Thầy Sơn",
    quote: "Phản ứng diệu kỳ nhất của đời người là tình yêu thương và tri thức Thầy Sơn đã trao tặng.",
    openingLetter: {
      title: "Gửi Thầy Sơn Người Tạo Nên Phản Ứng Kỳ Diệu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy Sơn kính mến,

Trong phòng thí nghiệm Hóa học, dưới bàn tay khéo léo của Thầy Sơn, những dung dịch đổi màu, những phản ứng tỏa nhiệt đã biến thành bài học kỳ thú về sự gắn kết, cân bằng và đổi mới.

Thầy Sơn đã trở thành chất xúc tác tuyệt vời nhất, khơi dậy niềm đam mê khám phá và tinh thần sáng tạo trong mỗi chúng em. Nhân ngày 20/11 thiêng liêng, chúng em kính dâng Thầy Sơn cuốn sổ tay chứa chan kỷ niệm này!`,
      signature: "Học sinh Môn Hóa Kính Dâng Thầy Sơn"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Thầy Sơn",
      body: `Cầu chúc cho cuộc sống của Thầy Sơn luôn tràn ngập những phản ứng mang năng lượng tích cực, niềm vui luôn ở trạng thái bão hòa và tình cảm gia đình luôn bền chặt như liên kết cộng hóa trị!

Kính chúc Thầy Sơn ngày Nhà giáo Việt Nam ngập tràn hạnh phúc và luôn dồi dào sức khỏe!`,
      signature: "Mãi Kính Trọng Và Yêu Quý Thầy Sơn"
    },
    sanTruongCaption: {
      title: "Sân Trường Trong Kỷ Niệm - Nơi Gắn Kết Tình Thầy Trò",
      caption: "Cây phượng vĩ già bên hành lang phòng thí nghiệm, nơi chứng kiến bao thế hệ học trò trưởng thành bên Thầy Sơn."
    },
    mediaItems: [
      {
        file: "assets-20-11/hoa/2022.jpg",
        type: "image",
        title: "Giờ Thí Nghiệm Năm 2022",
        caption: "Ánh mắt tập trung và nụ cười rạng rỡ của Thầy Sơn bên ống nghiệm nhiều màu sắc."
      },
      {
        file: "assets-20-11/hoa/2023.jpg",
        type: "image",
        title: "Khoảnh Khắc Đẹp Năm 2023",
        caption: "Bức ảnh kỷ niệm ấm áp trong buổi lễ sơ kết học kỳ cùng Thầy Sơn."
      },
      {
        file: "assets-20-11/hoa/2023.mp4",
        type: "video",
        title: "Video Thí Nghiệm Đổi Màu 2023",
        caption: "Thước phim ghi lại phản ứng hóa học kỳ thú khiến cả lớp phải vỗ tay trầm trồ."
      },
      {
        file: "assets-20-11/hoa/2023_2.jpg",
        type: "image",
        title: "Tiết Học Vui Vẻ 2023",
        caption: "Những câu chuyện thực tế hóm hỉnh của Thầy Sơn giúp môn Hóa trở nên gần gũi hơn bao giờ hết."
      },
      {
        file: "assets-20-11/hoa/2023_3.jpg",
        type: "image",
        title: "Tình Thầy Trò Thân Thương 2023",
        caption: "Khoảnh khắc chụp chung rộn rã tiếng cười cùng Thầy Sơn đáng kính."
      },
      {
        file: "assets-20-11/hoa/2025.jpg",
        type: "image",
        title: "Hành Trình Tri Ân 2025",
        caption: "Những đóa hoa thơm ngát và tình cảm không phai mờ theo năm tháng gửi Thầy Sơn."
      }
    ]
  }
};

export const COMMON_ASSETS = {
  sanTruongImg: "assets-20-11/santruong.jpg",
  music: "assets-20-11/music/timem.mp3"
};
