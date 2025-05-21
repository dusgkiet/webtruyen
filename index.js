// Hàm xử lý thời gian cập nhật
function formatTimeAgo(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // giây

    if (diff < 60) return `${diff} giây trước`;
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    return `${Math.floor(diff / 86400)} ngày trước`;
}

// Dữ liệu truyện
const truyenData = [
    {
        img: "./img/link_anh_1.jpg",
        title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 60
    },
    {
        img: "./img/link_anh_2.jpg",
        title: "Tín Hiệu Tâm Động",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 60
    },
    {
        img: "./img/link_anh_3.jpg",
        title: " tiệm cà phê của miểu miểu",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
    {
        img: "./img/link_anh_4.jpg",
        title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    }, {
        img: "./img/link_anh_5.jpg",
        title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
];
const container1 = document.getElementById('truyenMoi');

truyenData.forEach(truyen => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex gap-3 align-items-start';

    item.innerHTML = `
      <img src="${truyen.img}" class="imageTruyenMoi" alt="">
      <div class="flex-grow-1">
        <a href="#" class="mb-1 d-block title-truyen text-decoration-none text-dark fw-bold">${truyen.title}</a>
        <p class="mb-1 text-muted">Thời gian cập nhật: ${formatTimeAgo(truyen.updatedAt)}</p>
        <div>
          ${truyen.genres.map(tag => `<span class="custom-genre me-1">${tag}</span>`).join('')}
        </div>
      </div>
    `;

    container1.appendChild(item);
});


// Số lượt view 
function formatViews(number) {
    if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1) + "m";
    } else if (number >= 1_000) {
        return (number / 1_000).toFixed(1) + "k";
    } else {
        return number.toString();
    }
}

const bangXepHang = [
    {
        img: "./img/link_anh_1.jpg",
        title: "Vân Nê",
        views: 4600000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Khởi Nguồn",
        views: 3250000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Tên Lưu Mạnh Ở Thôn Nọ",
        views: 2780000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Bà Xã, Làm Em Rất Sướng",
        views: 1980000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Trong Nhà Nuôi Một Tiểu Thiếp Ngốc",
        views: 1350000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Chuyên Tế Nhi Ở Phòng Khám Nam Khoa",
        views: 960000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Chuyên Tế Nhi Ở Phòng Khám Nam Khoa",
        views: 960000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Chuyên Tế Nhi Ở Phòng Khám Nam Khoa",
        views: 960000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Chuyên Tế Nhi Ở Phòng Khám Nam Khoa",
        views: 960000,
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Chuyên Tế Nhi Ở Phòng Khám Nam Khoa",
        views: 960000,
    },

];

const container2 = document.getElementById("bangXepHang");

bangXepHang.forEach((truyen, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex align-items-center gap-3 border-0";

    let rankHtml = "";
    if (index === 0) {
        rankHtml = `<img src="./img/icon/gold.jpg" width="50" height="31" alt="Top 1">`;
    } else if (index === 1) {
        rankHtml = `<img src="./img/icon/silver.jpg" width="50" height="31" alt="Top 2">`;
    } else if (index === 2) {
        rankHtml = `<img src="./img/icon/bronze.jpg" width="50" height="31" alt="Top 3">`;
    } else {
        rankHtml = `<div class="fw-bold text-center" style="width: 24px;">${index + 1}</div>`;
    }

    item.innerHTML = `
      <div class="ranking">${rankHtml}</div>
      <img src="${truyen.img}" class="rounded" width="50" height="66" alt="${truyen.title}">
      <div class="flex-grow-1">
        <a href="#" class="d-block text-dark fw-bold text-decoration-none">${truyen.title}</a>
        <small class="text-muted d-flex align-items-center gap-1 mt-1">
          <i class="bi bi-eye"></i> ${formatViews(truyen.views)} lượt xem
        </small>
      </div>
    `;

    container2.appendChild(item);
});
