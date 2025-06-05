const data = {
    coverImage: "./asset/img/3-2.jpg", // URL ảnh
    title: "Hồi Sinh Từ Vực Thẳm",
    rating: 0,
    views: 481,
    updateTime: "15:11, 04/06/2025",
    author: "Đang Cập Nhật",
    status: "Hoàn thành",
    translator: "Trăng Sáng Bên Thềm",
    tags: ["Hiện đại", "Học Đường", "Nữ cường"],
    description: `Bông hoa trên cao như Lục Cảnh đã chiếu chuộng tôi suốt nửa năm, thế mà lại cố tình tìm người phế bỏ tay phải của tôi trước kỳ thi đại học. Tin tức lan ra khiến cả trường xôn xao...`,
    chapters: [
        "Chương 8",
        "Chương 7",
        "Chương 6",
        "Chương 5",
        "Chương 4",
        "Chương 3",
        "Chương 2",
        "Chương 1",
    ],
};

// Gán dữ liệu
document.getElementById("coverImage").src = data.coverImage;
document.getElementById("storyTitle").textContent = data.title;
document.getElementById(
    "viewCount"
).textContent = `${data.views} lượt xem`;
document.getElementById("updateTime").textContent = data.updateTime;
document.getElementById("author").textContent = data.author;
document.getElementById("status").textContent = data.status;
document.getElementById("translator").textContent = data.translator;
document.getElementById("tag1").textContent = data.tags[0];
document.getElementById("tag2").textContent = data.tags[1];
document.getElementById("tag3").textContent = data.tags[2];
document.getElementById("description").textContent = data.description;

// Tạo danh sách chương
const chapterWrapper = document.getElementById("chapterList");
data.chapters.forEach((chap) => {
    const div = document.createElement("div");
    div.className = "mb-2";
    div.textContent = chap;
    chapterWrapper.appendChild(div);
});

// Tạo sao đánh giá (nếu muốn dynamic)
const rating = document.getElementById("ratingStars");
for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.className = "bi bi-star"; // Bootstrap icon
    rating.appendChild(star);
}

// Render đánh giá
const reviews = [
    {
        name: "Nguyễn Văn A",
        rating: 5,
        comment: "Truyện rất cảm động, cốt truyện chắc tay!",
    },
    {
        name: "Lê Thị B",
        rating: 4,
        comment: "Tình tiết học đường thú vị, hơi ngắn chút.",
    },
];

function renderStars(container, avg) {
    container.innerHTML = "";
    const fullStars = Math.floor(avg);
    const hasHalfStar = avg - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");

        if (i < fullStars) {
            star.className = "bi bi-star-fill";
        } else if (i === fullStars && hasHalfStar) {
            star.className = "bi bi-star-half";
        } else {
            star.className = "bi bi-star";
        }

        container.appendChild(star);
    }
}



function renderReviews(reviews) {
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = ""; // Clear cũ để tránh trùng

    const reviewCount = document.getElementById("reviewCount");
    const ratingValue = document.getElementById("ratingValue");
    const ratingStars = document.getElementById("ratingStarsSummary");

    const total = reviews.length;
    const avg = total
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1)
        : 0;

    // Gán tổng điểm và số sao
    reviewCount.textContent = `${total} đánh giá`;
    ratingValue.textContent = avg;
    document.getElementById("ratingAvgSmall").textContent = avg;

    // Vẽ sao tổng quát
    renderStars(ratingStars, avg);
    renderStars(document.getElementById("ratingStars"), avg);

    // Render từng bình luận
    reviews.forEach((r) => {
        const card = document.createElement("div");
        card.className = "border rounded p-3 mb-3 bg-white text-dark";

        card.innerHTML = `
        <div class="fw-bold mb-1">${r.name}</div>
        <div class="text-warning mb-2">
          ${[...Array(5)].map((_, i) =>
            i < r.rating
                ? '<i class="bi bi-star-fill"></i>'
                : '<i class="bi bi-star"></i>'
        ).join("")}
        </div>
        <p class="mb-0">${r.comment}</p>
      `;

        reviewList.appendChild(card);
    });
}


renderReviews(reviews);

// Gửi đánh giá mới
document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const rating = parseInt(document.getElementById("selectedRating").value);
    const comment = document.getElementById("comment").value.trim();

    if (name && email && rating && comment) {
        reviews.unshift({ name, rating, comment });
        renderReviews(reviews); // cập nhật giao diện
        e.target.reset();
        updateSelectedVisual(); // reset sao
    }
});


// Đánh giá sao tương tác
const stars = document.querySelectorAll("#interactiveRating span");
const ratingContainer = document.getElementById("interactiveRating");
const selectedRatingInput = document.getElementById("selectedRating");

stars.forEach((star, i) => {
    star.addEventListener("mouseenter", () => {
        stars.forEach((s, j) => {
            s.classList.toggle("hovered", j <= i);
        });
    });

    star.addEventListener("mouseleave", () => {
        stars.forEach((s) => s.classList.remove("hovered"));
    });

    star.addEventListener("click", () => {
        selectedRatingInput.value = star.dataset.value;
        updateSelectedVisual();
    });
});

function updateSelectedVisual() {
    const selectedValue = parseInt(selectedRatingInput.value);
    stars.forEach((s, i) => {
        s.classList.toggle("selected", i < selectedValue);
    });
}
