function generatePlan() {
    const budget = Number(document.getElementById("budget").value);

    if (!budget || budget <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }

    // A. TỶ LỆ TỪNG NHÓM (mỗi nhóm khác nhau)
    const groupPercent = {
        giaDinh: 0.22,
        quaBieu: 0.18,
        liXi: 0.20,
        trangPhuc: 0.15,
        anUong: 0.12,
        hocTap: 0.08,
        duPhong: 0.05
    };

    // B. TỶ LỆ BÊN TRONG TỪNG NHÓM (mỗi khoản khác nhau)
    const detailPercent = {
        giaDinh: [0.20, 0.18, 0.15, 0.22, 0.15, 0.10],

        // 🎁 Quà biếu (đã chỉnh theo yêu cầu)
        quaBieu: [0.30, 0.25, 0.20, 0.15, 0.10],

        liXi: [0.22, 0.20, 0.38, 0.12, 0.08],
        trangPhuc: [0.35, 0.28, 0.20, 0.12, 0.05],
        anUong: [0.25, 0.30, 0.15, 0.10, 0.10, 0.10],
        hocTap: [0.45, 0.30, 0.20, 0.10],
        duPhong: [0.50, 0.50]
    };

    // C. Danh sách hiển thị
    const groups = [
        {
            key: "giaDinh",
            title: "🏡 Chi tiêu gia đình & chuẩn bị Tết",
            items: [
                "Bánh kẹo Tết", "Hoa – cây cảnh", "Mâm ngũ quả",
                "Trang trí nhà", "Dọn dẹp – vệ sinh", "Đồ dùng bếp"
            ]
        },
        {
            key: "quaBieu",
            title: "🎁 Quà biếu & thăm hỏi",
            items: [
                "Biếu bố mẹ", "Biếu ông bà", "Biếu họ hàng",
                "Biếu thầy cô", "Quà phát sinh"
            ]
        },
        {
            key: "liXi",
            title: "🧧 Lì xì Tết",
            items: ["Trẻ em", "Anh chị em", "Bố mẹ", "Bạn bè", "Phát sinh"]
        },
        {
            key: "trangPhuc",
            title: "👗 Trang phục & cá nhân",
            items: ["Quần áo", "Giày dép", "Làm tóc", "Skin-care", "Phụ kiện"]
        },
        {
            key: "anUong",
            title: "🍜 Ăn uống – đi chơi",
            items: ["Cafe – trà sữa", "Đi ăn", "Xem phim", "Hội hoa", "Xăng xe", "Lưu niệm"]
        },
        {
            key: "hocTap",
            title: "📚 Học tập đầu năm",
            items: ["Dụng cụ học tập", "Sách", "Ốp điện thoại", "In ảnh"]
        },
        {
            key: "duPhong",
            title: "🛡 Quỹ dự phòng",
            items: ["Phát sinh", "Khẩn cấp"]
        }
    ];

    let html = "";

    groups.forEach(group => {
        const totalGroup = Math.round(budget * groupPercent[group.key] / 1000) * 1000;

        html += `
            <div class="card">
                <h3>${group.title} — <span class="money">${totalGroup.toLocaleString()}đ</span></h3>
                <ul>
        `;

        group.items.forEach((item, index) => {
            const itemMoney = Math.round(totalGroup * detailPercent[group.key][index] / 1000) * 1000;

            html += `<li>${item} — <b>${itemMoney.toLocaleString()}đ</b></li>`;
        });

        html += `</ul></div>`;
    });

    document.getElementById("planContainer").innerHTML = html;
}
