const data = {
    coverImage: "./asset/img/3-2.jpg",
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
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
        "Chương 8: Hối Tiếc Cuối Cùng",
        "Chương 7: Một Đời Quá Dài",
        "Chương 6: Ngày Em Đi Mất",
        "Chương 5: Anh Yêu Em",
        "Chương 4: Anh Yêu Em",
        "Chương 3: Anh Yêu Em",
        "Chương 2: Anh Yêu Em",
        "Chương 1: Anh Yêu Em",
    ],
};

// ==== Gán dữ liệu ====
document.getElementById("coverImage").src = data.coverImage;
document.getElementById("storyTitle").textContent = data.title;
document.getElementById("viewCount").textContent = `${data.views} lượt xem`;
document.getElementById("updateTime").textContent = data.updateTime;
document.getElementById("author").textContent = data.author;
document.getElementById("status").textContent = data.status;
document.getElementById("translator").textContent = data.translator;
document.getElementById("tag1").textContent = data.tags[0];
document.getElementById("tag2").textContent = data.tags[1];
document.getElementById("tag3").textContent = data.tags[2];
document.getElementById("description").textContent = data.description;

// ==== Sao trung bình cố định ====
function renderStars(container, avg) {
    container.innerHTML = "";
    const fullStars = Math.floor(avg);
    const hasHalf = avg - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        if (i < fullStars) {
            star.className = "bi bi-star-fill";
        } else if (i === fullStars && hasHalf) {
            star.className = "bi bi-star-half";
        } else {
            star.className = "bi bi-star";
        }
        container.appendChild(star);
    }
}
const avgScore = 4.5;
renderStars(document.getElementById("ratingStars"), avgScore);
document.getElementById("ratingAvgSmall").textContent = avgScore;

// ==== Hiển thị chương và phân trang ====
const chapters = data.chapters;
const chapterListEl = document.getElementById("chapterList");
const paginationEl = document.createElement("div");
paginationEl.className = "d-flex justify-content-center mt-3";
chapterListEl.after(paginationEl);

const CHAPTERS_PER_PAGE = 10;
let currentPage = 1;

function renderChaptersPage(page) {
    chapterListEl.innerHTML = "";
    const start = (page - 1) * CHAPTERS_PER_PAGE;
    const end = start + CHAPTERS_PER_PAGE;
    const pageChapters = chapters.slice(start, end);

    pageChapters.forEach((chap) => {
        const div = document.createElement("div");
        div.className = "col mb-2";
        div.textContent = chap;
        chapterListEl.appendChild(div);
    });
}

function renderPagination() {
    const totalPages = Math.ceil(chapters.length / CHAPTERS_PER_PAGE);
    paginationEl.innerHTML = "";

    // ← Trước
    if (currentPage > 1) {
        const prevBtn = createNavBtn("← Trước", () => {
            currentPage--;
            renderChaptersPage(currentPage);
            renderPagination();
        });
        paginationEl.appendChild(prevBtn);
    }

    // Hiển thị tối đa 5 trang gần currentPage
    const range = getPageRange(currentPage, totalPages, 5);
    range.forEach((pageNum) => {
        const btn = document.createElement("button");
        btn.className = `btn btn-sm mx-1 ${pageNum === currentPage ? "btn-primary" : "btn-outline-secondary"}`;
        btn.textContent = pageNum;
        btn.addEventListener("click", () => {
            currentPage = pageNum;
            renderChaptersPage(currentPage);
            renderPagination();
        });
        paginationEl.appendChild(btn);
    });

    // → Sau
    if (currentPage < totalPages) {
        const nextBtn = createNavBtn("Sau →", () => {
            currentPage++;
            renderChaptersPage(currentPage);
            renderPagination();
        });
        paginationEl.appendChild(nextBtn);
    }

    function createNavBtn(label, onClick) {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-outline-secondary mx-1";
        btn.textContent = label;
        btn.addEventListener("click", onClick);
        return btn;
    }

    function getPageRange(current, total, max = 5) {
        const half = Math.floor(max / 2);
        let start = Math.max(1, current - half);
        let end = Math.min(total, current + half);

        if (end - start + 1 < max) {
            if (start === 1) {
                end = Math.min(total, start + max - 1);
            } else if (end === total) {
                start = Math.max(1, total - max + 1);
            }
        }

        const range = [];
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    }
}

renderChaptersPage(currentPage);
renderPagination();

// ==== Hiển thị review ====
// const reviews = [
//     { name: "Nguyễn Văn A", comment: "Truyện rất cảm động, cốt truyện chắc tay!" },
//     { name: "Lê Thị B", comment: "Tình tiết học đường thú vị, hơi ngắn chút." },
// ];

// function renderReviews(reviews) {
//     const reviewList = document.getElementById("reviewList");
//     reviewList.innerHTML = "<h5>Danh sách nhận xét</h5>";
//     reviews.forEach((r) => {
//         const card = document.createElement("div");
//         card.className = "border rounded p-3 mb-3 bg-white text-dark";
//         card.innerHTML = `
//             <div class="fw-bold mb-1">${r.name}</div>
//             <p class="mb-0">${r.comment}</p>
//         `;
//         reviewList.appendChild(card);
//     });
// }
// renderReviews(reviews);

// ==== Form đánh giá ====
const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const comment = document.getElementById("comment").value.trim();

    if (!username) {
        document.getElementById("loginAlert").style.display = "flex";
        return;
    }

    if (comment) {
        reviews.unshift({ name: username, comment });
        renderReviews(reviews);
        e.target.reset();
    }
});
document.getElementById("closeAlertBtn").addEventListener("click", () => {
    document.getElementById("loginAlert").style.display = "none";
});

