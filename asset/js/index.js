// document.addEventListener('DOMContentLoaded', () => {
//     const imagePaths = [
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 60
//         },
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "tín hiệu tâm động",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 60
//         },
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: " tiệm cà phê của miểu miểu",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 120
//         },
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 120
//         }, {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 120
//         },
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 120
//         },
//         {
//             image: "./asset/img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapterss: 120,
//             currentChapters: 120
//         },
//     ];

//     const imageContainer = document.getElementById('imageContainer');

//     imagePaths.forEach((path, index) => {
//         const img = document.createElement('img');
//         img.src = path;
//         img.alt = `${image}`;
//         imageContainer.appendChild(img);
//     });
// });


// Hàm xử lý thời gian cập nhật
function formatTimeAgo(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); // giây

  if (diff < 60) return `${diff} giây trước`;
  if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
  return `${Math.floor(diff / 86400)} ngày trước`;
}

// Hàm xử lí số lượt xem
function formatViews(n) {
  // triệu
  if (n >= 1000000) {
    const m = Math.floor(n / 1000000);
    const rem = Math.floor((n % 1000000) / 100000); // hàng trăm nghìn
    return rem ? `${m}tr${rem}` : `${m}tr`;
  }
  // nghìn
  if (n >= 1000) {
    const k = Math.floor(n / 1000);
    const rem = Math.floor((n % 1000) / 100); // hàng trăm
    return rem ? `${k}k${rem}` : `${k}k`;
  }
  // dưới 1000: để nguyên
  return n.toString();
}

// Hàm dữ liệu truyện
const truyenData = [
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 102320,
    totalChapters: 16,
    currentChapters: 1,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Tín Hiệu Tâm Động",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 11231200,
    totalChapters: 6,
    currentChapters: 5,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: " tiệm cà phê của miểu miểu",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 10320,
    totalChapters: 12,
    currentChapters: 10,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 111100,
    totalChapters: 100,
    currentChapters: 52,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 155500,
    totalChapters: 77,
    currentChapters: 14,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 155555500,
    totalChapters: 25,
    currentChapters: 0,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 8231200,
    totalChapters: 50,
    currentChapters: 20,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 8231200,
    totalChapters: 120,
    currentChapters: 0,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 8231200,
    totalChapters: 50,
    currentChapters: 0,
  },
  {
    img: "./asset/img/link_anh_1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 8231200,
    totalChapters: 50,
    currentChapters: 20,
  },
];

const specialStory = [
  {
    img: "./asset/img/specialStory1.jpg",
    title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
    type: "Truyện Hot",
    author: "Trần Thanh Chi",
    summary:
      "Nàng là thiên kim tiểu thư, chàng là thiếu gia bá đạo. Từ cuộc gặp định mệnh đến những sóng gió cùng nhau vượt qua, hai con tim đã tìm thấy nhau và thề ước trọn đời.",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 8231200,
    totalChapters: 50,
    currentChapters: 20,
  },
  {
    img: "./asset/img/specialStory2.jpg",
    title: "Mộng Hồi Trùng Sinh",
    type: "Đề xuất",
    author: "Ngô Thanh Nhã",
    summary:
      "Khi linh hồn xuyên không quay về quá khứ, nàng mang theo ký ức của kiếp trước để viết lại số mệnh. Từ những biến cố chấn động, đến tình duyên oan trái, mỗi bước đi đều là thách thức nhưng cũng là cơ hội để nàng khẳng định bản thân và tìm lại tình yêu chân thật.",
    updatedAt: new Date(),
    genres: ["Xuyên Không", "Huyền Huyễn"],
    views: 1543000,
    totalChapters: 80,
    currentChapters: 1,
  },
  {
    img: "./asset/img/specialStory3.jpg",
    title: "Tín Hiệu Tâm Động",
    type: "Đề xuất",
    author: "Lục Vũ",
    summary:
      "Khi trái tim rung động, mọi khoảng cách cũng dường như tan biến. Một câu chuyện ngọt ngào giữa ồn ào đô thị... Khi trái tim rung động, mọi khoảng cách cũng dường như tan biến. Một câu chuyện ngọt ngào giữa ồn ào đô thị…",
    updatedAt: new Date(),
    genres: ["Ngôn tình", "Đô thị"],
    views: 11231200,
    totalChapters: 120,
    currentChapters: 45,
  },
];

// START Section Header Slide (Special Story Recommend)
document.addEventListener("DOMContentLoaded", function () {
  const specialStory = [
    {
      img: "./asset/img/specialStory1.jpg",
      title: "Năm Tháng Mang Anh Đi",
      type: "Truyện Hot",
      author: "Người viết truyện thần sầu",
      summary:
        "Diệp Chi Hằng ra lệnh điều tôi đế chi nhánh khác, Ngày nào cũng dính lấy bên cạnh, đúng là hơi phiền thật ",
    },
    {
      img: "./asset/img/specialStory2.jpg",
      title: "Giữa Đông Hoa Vẫn Nở",
      type: "Đề xuất",
      author: "Ngô Thanh Nhã",
      summary:
        "Khi linh hồn xuyên không quay về quá khứ, nàng mang theo ký ức của kiếp trước để viết lại số mệnh...",
    },
    {
      img: "./asset/img/specialStory3.jpg",
      title: "Gặp Lại Anh Trong Mùa Hoa Nở",
      type: "Đề xuất",
      author: "Lục Vũ",
      summary: "Một câu chuyện ngọt ngào giữa ồn ào đô thị…",
    },
    {
      img: "./asset/img/specialStory1.jpg",
      title: "Năm Tháng Mang Anh Đi1",
      type: "Truyện Hot",
      author: "Người viết truyện thần sầu",
      summary:
        "Diệp Chi Hằng ra lệnh điều tôi đế chi nhánh khác, Ngày nào cũng dính lấy bên cạnh, đúng là hơi phiền thật ",
    },
    {
      img: "./asset/img/specialStory2.jpg",
      title: "Giữa Đông Hoa Vẫn Nở1",
      type: "Đề xuất",
      author: "Ngô Thanh Nhã",
      summary:
        "Khi linh hồn xuyên không quay về quá khứ, nàng mang theo ký ức của kiếp trước để viết lại số mệnh...",
    },
    {
      img: "./asset/img/specialStory3.jpg",
      title: "Gặp Lại Anh Trong Mùa Hoa Nở1",
      type: "Đề xuất",
      author: "Lục Vũ",
      summary: "Một câu chuyện ngọt ngào giữa ồn ào đô thị…",
    },
  ];

  const dpSlider = document.getElementById("dp-slider");
  const dpDots = document.getElementById("dp-dots");
  const dpNext = document.getElementById("dp-next");
  const dpPrev = document.getElementById("dp-prev");

  let currentIndex = 0;

  // 1. Render Slides
  dpSlider.innerHTML = "";
  specialStory.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "dp_item";
    slide.dataset.class = index + 1;
    slide.dataset.position = index === 0 ? "1" : "0";
    slide.innerHTML = `
      <div class="dp-img">
        <img class="img-fluid" src="${item.img}" alt="${item.title}" />
      </div>
    `;
    dpSlider.appendChild(slide);
  });

  // 2. Render Dots
  dpDots.innerHTML = "";
  specialStory.forEach((_, index) => {
    const dot = document.createElement("li");
    dot.dataset.class = index + 1;
    if (index === 0) dot.classList.add("active");
    dpDots.appendChild(dot);
  });

  // 3. Update UI - chỉ hiển thị đúng 3 ảnh
  function updateSlider(index) {
    const items = document.querySelectorAll(".dp_item");
    const total = items.length;

    items.forEach((el, i) => {
      el.dataset.position = "0";
    });

    items[index].dataset.position = "1";
    items[(index + 1) % total].dataset.position = "2";
    items[(index + 2) % total].dataset.position = "3";
  }

  // 4. Next / Prev handlers
  dpNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % specialStory.length;
    updateSlider(currentIndex);
    updateDescription(currentIndex);
  });

  dpPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + specialStory.length) % specialStory.length;
    updateSlider(currentIndex);
    updateDescription(currentIndex);
  });

  // 5. Dot click handler
  document.querySelectorAll("#dp-dots li").forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      currentIndex = idx;
      updateSlider(currentIndex);
      updateDescription(currentIndex);
    });
  });

  // 6. Mô tả bên phải (viết lại đúng format)
  const rightContent = document.querySelector(".text-slider");

  function updateDescription(index) {
    const story = specialStory[index];

    // Xoá nội dung cũ
    rightContent.innerHTML = "";

    const item = document.createElement("div");
    item.className = "special-story";
    item.innerHTML = `
      <h3>${story.title}</h3>
      <div class="author"><strong>Tác giả:</strong> ${story.author}</div>
      <p class="summary"><strong>Văn án:</strong><br>${story.summary}</p>
      <button class="read-now">Đọc Ngay</button>
    `;

    rightContent.appendChild(item);
  }

  // 7. Gọi lần đầu
  updateSlider(currentIndex);
  updateDescription(currentIndex);
});
// END Section Slide


// START Section 2 Bảng
const newStoryContainer = document.getElementById("truyenMoi");
const topStoryContainer = document.getElementById("bangXepHang");

truyenData.forEach((truyen) => {
  const item = document.createElement("li");
  item.className = "list-group-item d-flex gap-3 align-items-start";

  item.innerHTML = `
      <img src="${truyen.img}" class="rounded story-image" alt="">
      <div class="flex-grow-1">
        <a href="#" class="story-title">${truyen.title}</a>
        <p class="mb-1 text-muted">Thời gian cập nhật: ${formatTimeAgo(
    truyen.updatedAt
  )}</p>
        <div>
          ${truyen.genres
      .map((tag) => `<span class="custom-genre me-1">${tag}</span>`)
      .join("")}
        </div>
      </div>
    `;

  newStoryContainer.appendChild(item);
});

// 1. Sort theo views giảm dần
const sorted = truyenData.slice().sort((a, b) => b.views - a.views);

// 2. Render
sorted.forEach((truyen, idx) => {
  const rank = idx + 1;

  // Chọn icon hoặc số
  let rankHtml;
  if (rank <= 3) {
    rankHtml = `<img class="rank-icon rank-${rank}" src="./asset/img/rank${rank}.png">`;
  } else {
    rankHtml = `<span class="rank-number">${rank}</span>`;
  }

  // Tạo <li>
  const item = document.createElement("li");
  item.className = "list-group-item d-flex align-items-start gap-3";

  item.innerHTML = `
    <div class="rank flex-shrink-0">
      ${rankHtml}
    </div>
    <img src="${truyen.img}" class="rounded story-image" alt="">
    <div class="flex-grow-1">
      <a href="#" class="story-title">${truyen.title}</a>
      <div class="views-story d-flex align-items-center mt-1">
        <img class="views-icon me-1" src="./asset/img/views.svg" alt="views icon">
        <span class="views-count">${formatViews(truyen.views)} lượt xem</span>
      </div>
    </div>
  `;

  topStoryContainer.appendChild(item);
});

// END SECTION 2 Bảng

// START Đề xuất Truyện Hay
// 1. Render slides
const wrapper = document.getElementById("listStoryWrapper");
truyenData.forEach((truyen) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
      <div class="card">
        <img src="${truyen.img}" class="card-img-top" alt="${truyen.title}">
        <div class="card-body p-0 pt-3">
          <p class="card-title pb-1 m-0">${truyen.title}</p>
          <p class="card-text small text-muted mb-1">
            C.${truyen.currentChapters}/${truyen.totalChapters}
          </p>
        </div>
      </div>
    `;
  wrapper.appendChild(slide);
});

// 2. Khởi tạo Swiper
const swiper = new Swiper(".list-story .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 50, // khoảng cách giữa các slide
  loopedSlides: 6,
  freeMode: true, // cho phép kéo thả tự do
  loop: true,
  pagination: {
    el: ".list-story .swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    prevEl: ".list-story .swiper-button-prev",
    nextEl: ".list-story .swiper-button-next",
  },
  breakpoints: {
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    900: { slidesPerView: 5 },
    1200: { slidesPerView: 6 },
  },
});

const completedStoryWrapper = document.getElementById("completedStoryWrapper");

truyenData.forEach((truyen) => {
  const listStory = document.createElement("div");
  listStory.className = "col";

  listStory.innerHTML = `
      <div class="card">
        <img src="${truyen.img}" class="card-img-top" alt="${truyen.title}">
        <div class="card-body p-0 pt-3">
          <p class="card-title pb-1 m-0">${truyen.title}</p>
          <p class="card-text small text-muted mb-1">
            C.${truyen.currentChapters}/${truyen.totalChapters}
          </p>
        </div>
      </div>
    `;
  completedStoryWrapper.appendChild(listStory);
});