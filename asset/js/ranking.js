// ========== BẢNG XẾP HẠNG THEO TUẦN / THÁNG / NĂM ==========

const weeklyRanking = [
    { title: "Yêu Em Từ Cái Nhìn Đầu Tiên", views: 12500, img: "./asset/img/week1.jpg" },
    { title: "Bên Nhau Trọn Đời", views: 9800, img: "./asset/img/week2.jpg" },
    { title: "Hoa Rơi Gặp Lại Chàng", views: 8700, img: "./asset/img/week3.jpg" }
];

const monthlyRanking = [
    { title: "Em Là Niềm Kiêu Hãnh Của Anh", views: 45200, img: "./asset/img/month1.jpg" },
    { title: "Trạm Kế Tiếp Là Hạnh Phúc", views: 39800, img: "./asset/img/month2.jpg" },
    { title: "Nụ Hôn Định Mệnh", views: 37800, img: "./asset/img/month3.jpg" }
];

const yearlyRanking = [
    { title: "Chọc Tức Vợ Yêu", views: 132400, img: "./asset/img/year1.jpg" },
    { title: "Vợ Ơi Cả Thế Giới Chờ Em Ly Hôn", views: 129800, img: "./asset/img/year2.jpg" },
    { title: "Hào Môn Kinh Mộng", views: 122000, img: "./asset/img/year3.jpg" }
];

function renderRankingList(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex align-items-start gap-3";
        li.innerHTML = `
        <div class="rank flex-shrink-0">
          ${index < 3
                ? `<img class="rank-icon" src="./asset/img/rank${index + 1}.png">`
                : `<span class="rank-number">${index + 1}</span>`}
        </div>
        <img src="${item.img}" class="rounded story-image" alt="${item.title}">
        <div class="flex-grow-1">
          <a href="#" class="story-title">${item.title}</a>
          <div class="views-story d-flex align-items-center mt-1">
            <img class="views-icon me-1" src="./asset/img/views.svg" alt="views icon">
            <span class="views-count">${formatViews(item.views)} lượt xem</span>
          </div>
        </div>
      `;
        container.appendChild(li);
    });
}

// Khi DOM đã sẵn sàng thì render
document.addEventListener("DOMContentLoaded", () => {
    renderRankingList(weeklyRanking, "bangXepHang-week-list");
    renderRankingList(monthlyRanking, "bangXepHang-month-list");
    renderRankingList(yearlyRanking, "bangXepHang-year-list");
});
