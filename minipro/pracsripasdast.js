
let attempts = 0;
let isLoggedIn = false;

while (attempts < 3) {
    let user = prompt("Nhập tài khoản:");
    let pass = prompt("Nhập mật khẩu:");

    if (user === "admin" && pass === "12345") {
        alert("Đăng nhập thành công!");
        isLoggedIn = true;
        break;
    } else {
        attempts++;
        if (user !== "admin") {
            alert(`Sai tài khoản! (Lần ${attempts}/3)`);
        } else {
            alert(`Sai mật khẩu! (Lần ${attempts}/3)`);
        }
    }
}

if (!isLoggedIn) {
    alert("Tài khoản đã bị khóa!");
    console.log("Tài khoản đã bị khóa!");
} else {
    let choice;
    do {
        choice = parseInt(prompt(
            "--- HỆ THỐNG QUẢN LÝ THƯ VIỆN ---\n" +
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho\n" +
            "3. Dự toán phí bảo trì\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Chọn chức năng (1-5):"
        ));

        switch (choice) {
            case 1:

                let totalCount = 0, evenCount = 0, oddCount = 0;
                let bookCode;
                while (true) {
                    bookCode = parseInt(prompt("Nhập mã số sách (Nhập 0 để dừng):"));
                    if (bookCode === 0 || isNaN(bookCode)) break;
                    
                    totalCount++;
                    if (bookCode % 2 === 0) evenCount++;
                    else oddCount++;
                }
                alert(`Kết quả:\n- Tổng: ${totalCount}\n- Chẵn (Khoa học): ${evenCount}\n- Lẻ (Nghệ thuật): ${oddCount}`);
                break;

            case 2:
                let rows = parseInt(prompt("Nhập số hàng:"));
                let cols = parseInt(prompt("Nhập số cột:"));
                let map = "";
                for (let i = 1; i <= rows; i++) {
                    for (let j = 1; j <= cols; j++) {
                        map += `[${i}-${j}]${i === j ? "(Kệ ưu tiên)" : ""}  `;
                    }
                    map += "\n";
                }
                console.log("SƠ ĐỒ KHO:\n" + map);
                alert("Sơ đồ đã in ra Console (F12)!");
                break;

            case 3:

                let quantity = parseInt(prompt("Nhập số lượng sách:"));
                let fee = parseFloat(prompt("Nhập phí bảo trì hiện tại/cuốn:"));
                let years = parseInt(prompt("Nhập số năm dự toán:"));
                let report = "DỰ TOÁN CHI PHÍ:\n";
                for (let y = 1; y <= years; y++) {
                    report += `Năm ${y}: ${(quantity * fee).toLocaleString()}đ\n`;
                    fee *= 1.1; 
                }
                alert(report);
                break;

            case 4:
                let n = parseInt(prompt("Nhập giới hạn N:"));
                let luckyList = "";
                let luckyCount = 0;
                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        luckyList += i + " ";
                        luckyCount++;
                    }
                }
                alert(`Mã may mắn: ${luckyList}\nTổng cộng: ${luckyCount}`);
                break;

            case 5:
                alert("Hệ thống đang đăng xuất...");
                break;

            default:
                alert("Vui lòng chọn từ 1 đến 5!");
        }
    } while (choice !== 5);
}