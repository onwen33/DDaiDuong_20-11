/**
 * ==============================================================================
 * HƯỚNG DẪN DÀNH CHO BẠN: CHỈNH SỬA TÂM THƯ VÀ NỘI DUNG TRI ÂN THẦY CÔ 20/11
 * ==============================================================================
 * Bạn có thể tự do thay đổi:
 * 1. teacherName: Tên của Thầy/Cô (ví dụ: "Cô Nguyễn Thị Mai", "Thầy Trần Văn An")
 * 2. subject: Tên môn học hiển thị trên trang bìa & thiệp
 * 3. openingLetter: Bức tâm thư trang đầu tiên
 *    - title: Tiêu đề tâm thư
 *    - date: Ngày tháng năm
 *    - body: Nội dung thư (Dùng dấu xuống dòng bình thường hoặc \n)
 *    - signature: Lời đề tặng / Chữ ký học trò
 * 4. closingLetter: Lời chúc khép lại cuốn sổ tay (Trang cuối)
 *    - title: Tiêu đề lời chúc
 *    - body: Lời chúc tri ân
 *    - signature: Tên tập thể lớp / Học trò
 * 5. sanTruongCaption: Tiêu đề & lời nhắn cho trang ảnh Sân trường kỷ niệm
 * 6. mediaItems: Danh sách ảnh & video của từng môn học (đã quét sẵn)
 *    - Bạn có thể sửa 'title' và 'caption' của từng bức ảnh/video cho phù hợp.
 * ==============================================================================
 */

export const TEACHERS_DATA = {
  // ----------------------------------------------------------------------------
  // 1. GIÁO VIÊN TOÁN HỌC
  // ----------------------------------------------------------------------------
  toan: {
    id: "toan",
    subject: "Toán Học",
    subjectCode: "MATH",
    teacherName: "Thầy / Cô Dạy Toán",
    quote: "Những con số khô khan bỗng hóa thành bài học làm người dưới nét phấn của thầy cô.",
    openingLetter: {
      title: "Gửi Thầy Cô Người Đưa Đò Môn Toán",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy/Cô kính mến,

Trong hành trình trưởng thành của chúng em, những phương trình, định lý và đồ thị từng là những thử thách tưởng chừng không vượt qua nổi. Nhưng nhờ sự kiên nhẫn, tận tụy và ngọn lửa đam mê của Thầy/Cô, từng con số vô tri đã trở nên sống động, dạy chúng em tư duy logic, sự kiên trì và bản lĩnh trước mọi bài toán khó của cuộc đời.

Nhân ngày Nhà giáo Việt Nam 20/11, chúng em xin gom góp những khoảnh khắc, thước phim kỷ niệm đẹp nhất dưới mái trường này để gửi trọn lòng tri ân sâu sắc nhất tới Thầy/Cô.`,
      signature: "Tập thể Học trò Kính tặng"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Môn Toán",
      body: `Dẫu mai này cuộc đời có muôn vàn ẩn số, chúng em vẫn mãi ghi nhớ bài học về sự chính trực và nỗ lực mà Thầy/Cô đã truyền dạy.

Kính chúc Thầy/Cô luôn dồi dào sức khỏe, tràn đầy niềm vui và giữ mãi ngọn lửa nhiệt huyết để tiếp tục nâng cánh ước mơ cho bao thế hệ học trò tương lai!`,
      signature: "Mãi nhớ ơn Thầy Cô kính yêu"
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
        caption: "Khoảnh khắc tiết học Toán đầy say mê và nụ cười rạng rỡ của Thầy/Cô trên bục giảng."
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
        caption: "Nụ cười ấm áp của Thầy/Cô khi học trò giải xong bài toán khó."
      },
      {
        file: "assets-20-11/toan/2023_3.mp4",
        type: "video",
        title: "Thước Phim Kỷ Niệm 2023 (Tập 3)",
        caption: "Những lời dặn dò ân cần trước kỳ thi lớn của Thầy/Cô dành cho cả lớp."
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
  // 2. GIÁO VIÊN NGỮ VĂN
  // ----------------------------------------------------------------------------
  van: {
    id: "van",
    subject: "Ngữ Văn",
    subjectCode: "LIT",
    teacherName: "Thầy / Cô Dạy Ngữ Văn",
    quote: "Từng trang sách mở ra là một chân trời nhân ái và tình yêu thương con người.",
    openingLetter: {
      title: "Gửi Người Thắp Lửa Tâm Hồn Văn Học",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy/Cô yêu quý,

Mỗi tiết Văn của Thầy/Cô không đơn thuần là phân tích tác phẩm hay ghi nhớ câu chữ, mà là những chuyến hành trình đưa chúng em vào cội nguồn cảm xúc, dạy chúng em biết rung động trước cái đẹp, biết đồng cảm trước nỗi đau và sống tử tế giữa cuộc đời.

Từng lời giảng trầm ấm bên khung cửa sổ lớp học đã nuôi dưỡng tâm hồn chúng em lớn lên từng ngày. Cuốn sổ tay ký họa này là món quà nhỏ chứa đựng biết bao tấm lòng kính yêu chúng em muốn dâng tặng Thầy/Cô.`,
      signature: "Những Đứa Con Nhỏ Của Lớp Văn"
    },
    closingLetter: {
      title: "Khúc Ca Tri Ân Môn Văn",
      body: `Cảm ơn Thầy/Cô đã dạy chúng em cách lắng nghe nhịp đập trái tim và viết nên câu chuyện đời mình bằng sự chân thành, nhân ái.

Kính chúc Thầy/Cô luôn bình an trong tâm hồn, dồi dào sức khỏe và luôn tìm thấy niềm hứng khởi vô tận trong từng trang sách, áng văn!`,
      signature: "Kính yêu và Biết ơn Thầy Cô"
    },
    sanTruongCaption: {
      title: "Sân Trường Nắng Vàng - Nơi Thơ Ca Đọng Lại",
      caption: "Tiếng lá bàng rơi nghiêng ngoài hành lang vẫn như còn vọng tiếng giảng bài ấm áp năm nào."
    },
    mediaItems: [
      {
        file: "assets-20-11/van/2021.jpg",
        type: "image",
        title: "Tiết Văn Mùa Thu 2021",
        caption: "Khoảnh khắc lắng đọng trong giờ đọc thơ và cảm nhận văn học."
      },
      {
        file: "assets-20-11/van/2021.mp4",
        type: "video",
        title: "Video Diễn Nguyện Văn Học 2021",
        caption: "Thước phim trích đoạn kịch văn học do Thầy/Cô hướng dẫn chúng em thể hiện."
      },
      {
        file: "assets-20-11/van/2021_2.jpg",
        type: "image",
        title: "Nụ Cười Trên Bục Giảng 2021",
        caption: "Ánh mắt ấm áp của Thầy/Cô khi cả lớp say sưa thảo luận bài học."
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
        caption: "Thước phim ghi lại những lời chúc chân thành, xúc động của Thầy/Cô trước ngày chia tay."
      },
      {
        file: "assets-20-11/van/2023end.jpg",
        type: "image",
        title: "Lưu Bút Cuối Khóa 2023",
        caption: "Nét chữ dặn dò và nụ cười mãn nguyện trong ngày bế giảng năm học."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. GIÁO VIÊN TIẾNG ANH
  // ----------------------------------------------------------------------------
  anh: {
    id: "anh",
    subject: "Tiếng Anh",
    subjectCode: "ENG",
    teacherName: "Thầy / Cô Dạy Tiếng Anh",
    quote: "A teacher affects eternity; he can never tell where his influence stops.",
    openingLetter: {
      title: "Dear Our Beloved English Teacher",
      date: "November 20, 2026",
      body: `Kính gửi Thầy/Cô kính mến,

Thầy/Cô không chỉ mang đến cho chúng em ngôn ngữ toàn cầu, mở toang cánh cửa bước ra thế giới rộng lớn, mà còn truyền cảm hứng về sự tự tin, lòng quả cảm để dám ước mơ và khẳng định bản thân.

Từ những buổi phát âm vụng về đầu tiên đến khi chúng em tự tin thuyết trình bằng tiếng Anh, Thầy/Cô luôn kiên nhẫn đồng hành và khích lệ. Chúng em xin gửi gắm trọn vẹn sự biết ơn qua từng bức ảnh kỷ niệm trong cuốn sổ tay này!`,
      signature: "With Endless Gratitude, Your Students"
    },
    closingLetter: {
      title: "Best Wishes For You",
      body: `Thank you for being more than just a teacher — you are our mentor, our inspiration, and a bright light guiding our dreams.

Kính chúc Thầy/Cô ngày 20/11 tràn ngập hoa, nụ cười, hạnh phúc và luôn tràn đầy năng lượng tích cực để tiếp tục chắp cánh cho những ước mơ bay xa!`,
      signature: "Always Remember & Love You"
    },
    sanTruongCaption: {
      title: "Memories Never Fade - Góc Sân Trường Dấu Yêu",
      caption: "Nơi chúng em cùng Thầy/Cô luyện từng câu nói tiếng Anh rộn rã dưới hàng cây rợp bóng."
    },
    mediaItems: [
      {
        file: "assets-20-11/anh/2020.jpg",
        type: "image",
        title: "Mùa Thu Đầu Tiên 2020",
        caption: "Những ngày đầu tiên bỡ ngỡ làm quen với những tiết học tiếng Anh năng động."
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
        caption: "Khoảnh khắc Thầy/Cô mỉm cười khích lệ khi chúng em hoàn thành bài nói xuất sắc."
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
        caption: "Nụ cười thân thiện, gần gũi như một người bạn lớn của Thầy/Cô bên học trò."
      },
      {
        file: "assets-20-11/anh/2023_3.jpg",
        type: "image",
        title: "Ngày Hội Tri Ân 2023",
        caption: "Những bó hoa tươi thắm và lời chúc chân thành dâng lên Thầy/Cô kính yêu."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 4. GIÁO VIÊN VẬT LÝ
  // ----------------------------------------------------------------------------
  li: {
    id: "li",
    subject: "Vật Lý",
    subjectCode: "PHYS",
    teacherName: "Thầy / Cô Dạy Vật Lý",
    quote: "Từ định luật vạn vật hấp dẫn đến lực nâng đỡ của tình thầy trò thiêng liêng.",
    openingLetter: {
      title: "Gửi Người Khơi Nguồn Quy Luật Tự Nhiên",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy/Cô kính mến,

Thế giới Vật lý với những mạch điện, lăng kính, chuyển động và sóng ánh sáng từng làm chúng em choáng ngợp, nhưng nhờ Thầy/Cô dẫn lối, chúng em nhận ra sự kỳ diệu của vũ trụ và quy luật vận hành của cuộc sống.

Thầy/Cô dạy chúng em rằng mỗi lực tác động đều có phản lực, và mọi nỗ lực bền bỉ hôm nay đều sẽ tạo nên gia tốc mạnh mẽ đưa chúng em tiến về tương lai. Nhân ngày 20/11, chúng em kính chúc Thầy/Cô vạn sự bình an!`,
      signature: "Tập thể Học sinh Môn Vật Lý"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Môn Vật Lý",
      body: `Dù thời gian có trôi theo định luật bảo toàn, tình cảm kính trọng và lòng biết ơn của chúng em dành cho Thầy/Cô sẽ luôn là một hằng số không bao giờ thay đổi.

Kính chúc Thầy/Cô luôn dồi dào sức khỏe, tràn đầy năng lượng tích cực và tiếp tục thắp sáng đam mê khoa học cho các thế hệ mai sau!`,
      signature: "Học trò Luôn Ghi Ơn Thầy Cô"
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
        caption: "Say mê bên những mô hình thí nghiệm và lời hướng dẫn tỉ mỉ của Thầy/Cô."
      },
      {
        file: "assets-20-11/li/2023_2.jpg",
        type: "image",
        title: "Khoảnh Khắc Say Mê Giảng Bài 2023",
        caption: "Ngọn lửa nhiệt huyết luôn bừng cháy trong từng lời giảng về các hiện tượng tự nhiên."
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
        caption: "Niềm vui vỡ òa của Thầy/Cô khi học trò gặt hái kết quả xuất sắc trong học tập."
      },
      {
        file: "assets-20-11/li/2026.jpg",
        type: "image",
        title: "Hành Trình Mới 2026",
        caption: "Dấu ấn trưởng thành và lời tri ân sâu sắc nhất gửi tới người thầy mẫu mực."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 5. GIÁO VIÊN HÓA HỌC
  // ----------------------------------------------------------------------------
  hoa: {
    id: "hoa",
    subject: "Hóa Học",
    subjectCode: "CHEM",
    teacherName: "Thầy / Cô Dạy Hóa Học",
    quote: "Phản ứng diệu kỳ nhất của đời người là tình yêu thương và tri thức thầy cô trao tặng.",
    openingLetter: {
      title: "Gửi Người Tạo Nên Phản Ứng Kỳ Diệu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Kính gửi Thầy/Cô kính mến,

Trong phòng thí nghiệm Hóa học, dưới bàn tay khéo léo của Thầy/Cô, những dung dịch đổi màu, những phản ứng tỏa nhiệt đã biến thành bài học kỳ thú về sự gắn kết, cân bằng và đổi mới.

Thầy/Cô đã trở thành chất xúc tác tuyệt vời nhất, khơi dậy niềm đam mê học hỏi và tinh thần sáng tạo trong mỗi chúng em. Nhân ngày 20/11 thiêng liêng, chúng em kính dâng Thầy/Cô cuốn sổ tay chứa chan kỷ niệm này!`,
      signature: "Học sinh Môn Hóa Kính Dâng"
    },
    closingLetter: {
      title: "Lời Chúc Tri Ân Môn Hóa Học",
      body: `Cầu chúc cho cuộc sống của Thầy/Cô luôn tràn ngập những phản ứng mang năng lượng tích cực, niềm vui luôn ở trạng thái bão hòa và tình cảm gia đình luôn bền chặt như liên kết cộng hóa trị!

Kính chúc Thầy/Cô ngày Nhà giáo Việt Nam ngập tràn hạnh phúc và luôn dồi dào sức khỏe!`,
      signature: "Mãi Kính Trọng Và Yêu Quý Thầy Cô"
    },
    sanTruongCaption: {
      title: "Sân Trường Trong Kỷ Niệm - Nơi Gắn Kết Tình Thầy Trò",
      caption: "Cây phượng vĩ già bên hành lang phòng thí nghiệm, nơi chứng kiến bao thế hệ học trò trưởng thành."
    },
    mediaItems: [
      {
        file: "assets-20-11/hoa/2022.jpg",
        type: "image",
        title: "Giờ Thí Nghiệm Năm 2022",
        caption: "Ánh mắt tập trung và nụ cười rạng rỡ của Thầy/Cô bên ống nghiệm nhiều màu sắc."
      },
      {
        file: "assets-20-11/hoa/2023.jpg",
        type: "image",
        title: "Khoảnh Khắc Đẹp Năm 2023",
        caption: "Bức ảnh kỷ niệm ấm áp trong buổi lễ sơ kết học kỳ cùng Thầy/Cô."
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
        caption: "Những câu chuyện thực tế hóm hỉnh của Thầy/Cô giúp môn Hóa trở nên gần gũi hơn bao giờ hết."
      },
      {
        file: "assets-20-11/hoa/2023_3.jpg",
        type: "image",
        title: "Tình Thầy Trò Thân Thương 2023",
        caption: "Khoảnh khắc chụp chung rộn rã tiếng cười cùng người cô/thầy đáng kính."
      },
      {
        file: "assets-20-11/hoa/2025.jpg",
        type: "image",
        title: "Hành Trình Tri Ân 2025",
        caption: "Những đóa hoa thơm ngát và tình cảm không phai mờ theo năm tháng."
      }
    ]
  }
};

export const COMMON_ASSETS = {
  sanTruongImg: "assets-20-11/santruong.jpg",
  music: "assets-20-11/music/timem.mp3"
};

