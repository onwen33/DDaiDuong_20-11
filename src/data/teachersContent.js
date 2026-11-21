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
    quote: "Hoa có ngày nở lại, người không hai lần thiếu niên.",
    openingLetter: {
      title: "Gửi Thầy Nghiệp Kính Mến",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Đôi ba lời muốn gửi gắm đến Thầy nhân ngày kỉ niệm 20 tháng 11, có những người sẽ đi qua mùa hạ, tin rằng ánh nắng mùa hạ sẽ chẳng bao giờ tắt, tiếng ve sẽ vang vọng mãi không ngừng, hàng cây vẫn xanh lối và người cùng ta trong mùa hạ ấy sẽ mãi ở bên, nhưng rồi mùa hạ nào cũng phải khép lại, cuộc gặp gỡ nào cũng sẽ phải có hồi kết và thanh xuân, kỉ niệm ngày ấy của chúng ta gói gém trong mùa hạ ấy sẽ đi cùng với cơn gió mùa thu đem ta tới hành trình tiếp theo.`,
      signature: "Cùng nhìn xem lại những kỉ niệm của chúng ta..."
    },
    closingLetter: {
      title: "Lời Kết Tri Ân Thầy Nghiệp",
      body: `Hoa có ngày nở lại, người không hai lần thiếu niên, sân trường vẫn là sân trường ngày ấy, nhưng chúng ta đã khác rồi! tuổi trẻ trôi qua chóng vánh thế đấy, khí phách của thiếu niên ngày đấy là thứ không thể tái sinh, nhưng chúng ta của hiện tại sẽ trân trọng những gì đang có và từng khoảnh khắc của cuộc gặp gỡ tiếp theo. Áo của thầy em vẫn giữ, hoa của em vẫn ở trong tủ này, hi vọng tết này vẫn còn được nhìn thấy nó, cũng là minh chứng cho đoạn tình cảm giữa  thầy trò chúng ta`,
      signature: "Mãi nhớ về thầy"
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
    quote: "Hoa có ngày nở lại, người không hai lần thiếu niên.",
    openingLetter: {
      title: "Gửi Cô Mến Kính Yêu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Đôi ba lời muốn gửi gắm đến Cô nhân ngày kỉ niệm 20 tháng 11, có những người sẽ đi qua mùa hạ, tin rằng ánh nắng mùa hạ sẽ chẳng bao giờ tắt, tiếng ve sẽ vang vọng mãi không ngừng, hàng cây vẫn xanh lối và người cùng ta trong mùa hạ ấy sẽ mãi ở bên, nhưng rồi mùa hạ nào cũng phải khép lại, cuộc gặp gỡ nào cũng sẽ phải có hồi kết và thanh xuân, kỉ niệm ngày ấy của chúng ta gói gém trong mùa hạ ấy sẽ đi cùng với cơn gió mùa thu đem ta tới hành trình tiếp theo.`,
      signature: "Cùng nhìn xem lại những kỉ niệm của chúng ta..."
    },
    closingLetter: {
      title: "Lời Kết Tri Ân Cô Mến",
      body: `Hoa có ngày nở lại, người không hai lần thiếu niên, tuổi trẻ trôi qua chóng vánh thế đấy, khí phách của thiếu niên ngày đấy là thứ không thể tái sinh, nhưng chúng ta của hiện tại sẽ trân trọng những gì đang có và từng khoảnh khắc của cuộc gặp gỡ tiếp theo. Để cân bằng giữa việc gia đình và chủ nhiệm của một lớp, khi đến thăm gia đình em thấy được nhiều vất vả cũng như niềm vui của cô khi được gặp lại học trò cũ, hi vọng chúng ta sẽ cứ mãi như thế. Hẹn gặp lại cô ở tết 2027!`,
      signature: "Kính mến cô"
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
    quote: "Hoa có ngày nở lại, người không hai lần thiếu niên.",
    openingLetter: {
      title: "Gửi Cô Nga Kính Yêu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Đôi ba lời muốn gửi gắm đến Cô nhân ngày kỉ niệm 20 tháng 11, có những người sẽ đi qua mùa hạ, tin rằng ánh nắng mùa hạ sẽ chẳng bao giờ tắt, tiếng ve sẽ vang vọng mãi không ngừng, hàng cây vẫn xanh lối và người cùng ta trong mùa hạ ấy sẽ mãi ở bên, nhưng rồi mùa hạ nào cũng phải khép lại, cuộc gặp gỡ nào cũng sẽ phải có hồi kết và thanh xuân, kỉ niệm ngày ấy của chúng ta gói gém trong mùa hạ ấy sẽ đi cùng với cơn gió mùa thu đem ta tới hành trình tiếp theo.`,
      signature: "Tập thể Học trò Kính tặng Cô Nga"
    },
    closingLetter: {
      title: "Lời Kết Tri Ân Cô Nga",
      body: `Hoa có ngày nở lại, người không hai lần thiếu niên, tuổi trẻ trôi qua chóng vánh thế đấy, khí phách của thiếu niên ngày đấy là thứ không thể tái sinh, nhưng chúng ta của hiện tại sẽ trân trọng những gì đang có và từng khoảnh khắc của cuộc gặp gỡ tiếp theo. Năm 2026 là một năm tiếc nuối khi chỉ được gặp cô trong vỏn vẹn vài phút ngắn ngủi, nhưng em vẫn thấy cô vẫn như ngày nào, vẫn vui tươi và tràn đầy năng lượng, hi vọng năm nay sẽ có nhiều thời gian gặp gỡ cô hơn. Hẹn gặp vào tết 2027 nhé cô!!`,
      signature: "Gửi cô Nga thân mến "
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
    quote: "Hoa có ngày nở lại, người không hai lần thiếu niên.",
    openingLetter: {
      title: "Gửi Cô Hoan Kính Yêu",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Đôi ba lời muốn gửi gắm đến Cô nhân ngày kỉ niệm 20 tháng 11, có những người sẽ đi qua mùa hạ, tin rằng ánh nắng mùa hạ sẽ chẳng bao giờ tắt, tiếng ve sẽ vang vọng mãi không ngừng, hàng cây vẫn xanh lối và người cùng ta trong mùa hạ ấy sẽ mãi ở bên, nhưng rồi mùa hạ nào cũng phải khép lại, cuộc gặp gỡ nào cũng sẽ phải có hồi kết và thanh xuân, kỉ niệm ngày ấy của chúng ta gói gém trong mùa hạ ấy sẽ đi cùng với cơn gió mùa thu đem ta tới hành trình tiếp theo.`,
      signature: "Tập thể Học trò Kính tặng Cô Hoan"
    },
    closingLetter: {
      title: "Lời Kết Tri Ân Cô Hoan",
      body: `Hoa có ngày nở lại, người không hai lần thiếu niên, tuổi trẻ trôi qua chóng vánh thế đấy, khí phách của thiếu niên ngày đấy là thứ không thể tái sinh, nhưng chúng ta của hiện tại sẽ trân trọng những gì đang có và từng khoảnh khắc của cuộc gặp gỡ tiếp theo. Cảm ơn cô rất nhiều về những câu chữ và tiết học ngày ấy, cũng cảm ơn cô khi đã khiến em cười nhiều đến vậy, bụi phấn bay đi nhưng cũng có lúc dừng lại, Hẹn gặp cô ở 2027 này nhé :))`,
      signature: "Gửi cô giáo dạy vật lí `khó tính`"
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
    quote: "Hoa có ngày nở lại, người không hai lần thiếu niên.",
    openingLetter: {
      title: "Gửi Thầy Sơn Kính Mến",
      date: "Ngày 20 tháng 11 năm 2026",
      body: `Đôi ba lời muốn gửi gắm đến Thầy nhân ngày kỉ niệm 20 tháng 11, có những người sẽ đi qua mùa hạ, tin rằng ánh nắng mùa hạ sẽ chẳng bao giờ tắt, tiếng ve sẽ vang vọng mãi không ngừng, hàng cây vẫn xanh lối và người cùng ta trong mùa hạ ấy sẽ mãi ở bên, nhưng rồi mùa hạ nào cũng phải khép lại, cuộc gặp gỡ nào cũng sẽ phải có hồi kết và thanh xuân, kỉ niệm ngày ấy của chúng ta gói gém trong mùa hạ ấy sẽ đi cùng với cơn gió mùa thu đem ta tới hành trình tiếp theo.`,
      signature: "Tập thể Học trò Kính tặng Thầy Sơn"
    },
    closingLetter: {
      title: "Lời Kết Tri Ân Thầy Sơn",
      body: `Hoa có ngày nở lại, người không hai lần thiếu niên, tuổi trẻ trôi qua chóng vánh thế đấy, khí phách của thiếu niên ngày đấy là thứ không thể tái sinh, nhưng chúng ta của hiện tại sẽ trân trọng những gì đang có và từng khoảnh khắc của cuộc gặp gỡ tiếp theo. Từ những tiết học khó khăn ngày nào, thầy đồng hành cùng em như một người bạn, luôn sẵn sàng giúp đỡ, nhìn chúng em ra về với nụ cười, luôn bảo rằng cố lên, ráng giải xong đề này, dù không còn công tác ở trường, nhưng trong em thầy vẫn mãi là người thầy giáo năm ấy, Hẹn gặp thầy ở tết này nhé!! `,
      signature: "Chương este khó thật đấy thầy "
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
