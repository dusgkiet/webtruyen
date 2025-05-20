// // // Truyện mới cập nhật
// // const truyenList = [
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 60
// //     },
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: "tín hiệu tâm động",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 60
// //     },
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: " tiệm cà phê của miểu miểu",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 120
// //     },
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 120
// //     }, {
// //         image: "./img/link_anh_1.jpg",
// //         title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 120
// //     },
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 120
// //     },
// //     {
// //         image: "./img/link_anh_1.jpg",
// //         title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
// //         updatedAt: "10 phút",
// //         genres: ["Ngôn tình", "Đô thị"],
// //         totalChapters: 120,
// //         currentChapter: 120
// //     },
// // ];

// // const container = document.getElementById("truyen-container");

// // truyenList.forEach(truyen => {
// //     const html = `
// //     <div class="truyen-item">
// //       <img src="${truyen.image}" alt="${truyen.title}" class="thumb" />
// //       <div class="info">
// //         <h3>${truyen.title}</h3>
// //         <p>Thời gian cập nhật: ${truyen.updatedAt}</p>
// //         <p>${truyen.genres.join(', ')}</p>
// //       </div>
// //     </div>
// //   `;
// //     container.innerHTML += html;
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const imagePaths = [
//         {
//             image: "./img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 60
//         },
//         {
//             image: "./img/link_anh_1.jpg",
//             title: "tín hiệu tâm động",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 60
//         },
//         {
//             image: "./img/link_anh_1.jpg",
//             title: " tiệm cà phê của miểu miểu",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 120
//         },
//         {
//             image: "./img/link_anh_1.jpg",
//             title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 120
//         }, {
//             image: "./img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 120
//         },
//         {
//             image: "./img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 120
//         },
//         {
//             image: "./img/link_anh_1.jpg",
//             title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
//             updatedAt: "10 phút",
//             genres: ["Ngôn tình", "Đô thị"],
//             totalChapters: 120,
//             currentChapter: 120
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
        img: "./img/link_anh_1.jpg",
        title: "Tín Hiệu Tâm Động",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 60
    },
    {
        img: "./img/link_anh_1.jpg",
        title: " tiệm cà phê của miểu miểu",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
    {
        img: "./img/link_anh_1.jpg",
        title: "Dẫn chồng trước và anh ta lúc 5 tuổi tham gia kidshow",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    }, {
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
    {
        img: "./img/link_anh_1.jpg",
        title: "Ơn Nghĩa Sâu Nặng, Chàng Tự Mà Trả",
        updatedAt: new Date(),
        genres: ["Ngôn tình", "Đô thị"],
        totalChapters: 120,
        currentChapter: 120
    },
];
const container = document.getElementById('truyenMoi');

truyenData.forEach(truyen => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex gap-3 align-items-start';

    item.innerHTML = `
      <img src="${truyen.img}" class="rounded" alt="">
      <div class="flex-grow-1">
        <a href="#" class="mb-1 d-block title-truyen text-decoration-none text-dark fw-bold">${truyen.title}</a>
        <p class="mb-1 text-muted">Thời gian cập nhật: ${formatTimeAgo(truyen.updatedAt)}</p>
        <div>
          ${truyen.genres.map(tag => `<span class="custom-genre me-1">${tag}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(item);
});