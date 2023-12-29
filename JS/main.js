//! 1. Quản lý tuyển sinh
document.getElementById('btnKetQuaDiem').onclick = function () {
    // Input
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);

    // Progress
    if ( diem1 > 0 && diem2 > 0 && diem3 > 0 ){
        var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
        document.getElementById('ketQuaDiem').innerHTML = tongDiem >= diemChuan ? "Thí sinh đã đậu với tổng điểm: " + tongDiem : "Thí sinh đã rớt với tổng điểm: " + tongDiem
    } else
    document.getElementById('ketQuaDiem').innerHTML = 'Bạn đã rớt do có điểm bằng 0'
}

//! 2. Tính tiền điện 
document.getElementById('tinhTienDien').onclick = function () {
    // Input
    var nhapKw = document.getElementById("nhapKw").value;
    var tongTienDien = 0;
    var kw_1 = 500;
    var kw_2 = 650;
    var kw_3 = 850;
    var kw_4 = 1100;
    var kw_5 = 1300;

    // Progress
    0 < nhapKw && nhapKw <= 50 ? tongTienDien = nhapKw * kw_1 : 
    nhapKw > 50 && nhapKw <= 100 ? tongTienDien = 50 * kw_1 + (nhapKw - 50) * kw_2 : 
    nhapKw > 100 && nhapKw <= 200 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + (nhapKw - 100) * kw_3 : 
    nhapKw > 200 && nhapKw <= 350 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (nhapKw - 200) * kw_4 : 
    nhapKw > 350 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (nhapKw - 350) * kw_5 : 
    alert("Số kw không hợp lệ! Vui lòng nhập lại")

    // Output
    document.getElementById("ketQuaTienDien").innerHTML = "Tiền điện của bạn là:  " + tongTienDien.toLocaleString() + " VNĐ"
}

//! 3. Tính thuế thu nhập cá nhân:

document.getElementById('tinhTienThue').onclick = function () {
    // Input
    var hoVaTen = document.getElementById("hoVaTen").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value -4e6 - 16e5 * document.getElementById("soNguoi").value;
    tongThue = 0;

    // Progress
    thuNhapNam > 0 && thuNhapNam <= 6e7 ? tongThue = .05 * thuNhapNam : 
    thuNhapNam > 6e7 && thuNhapNam <= 12e7 ? tongThue = .1 * thuNhapNam : 
    thuNhapNam > 12e7 && thuNhapNam <= 21e7 ? tongThue = .15 * thuNhapNam : 
    thuNhapNam > 21e7 && thuNhapNam <= 384e6 ? tongThue = .2 * thuNhapNam : 
    thuNhapNam > 384e6 && thuNhapNam <= 624e6 ? tongThue = .25 * thuNhapNam : 
    thuNhapNam > 624e6 && thuNhapNam <= 96e7 ? tongThue = .3 * thuNhapNam : 
    thuNhapNam > 96e7 ? tongThue = .35 * thuNhapNam : 
    alert("Số tiền thu nhập không hợp lệ");

    // Output
    document.getElementById("ketQuaTienThue").innerHTML = "Họ và tên: " + hoVaTen + ";   Tiền thuế thu nhập cá nhân:  " + tongThue.toLocaleString() + " VNĐ"
}

//! 4. Tính tiền cáp

// Ẩn hiện số kết nối:
function hideInput() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    document.getElementById('soKetNoi').style.display = 'doanhNghiep' == loaiKhachHang ? 'block' : 'none'
}

document.getElementById('tinhTienCap').onclick = function () {
    // Input
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value;
    var soKetNoi = document.getElementById("soKetNoi").value;

    // Progress
    ketQuaTienCap = 0;
    loaiKhachHang == "nhaDan" ? ketQuaTienCap = (4.5 + 20.5 + 7.5 * soKenh ) :
    loaiKhachHang == "doanhNghiep" && soKetNoi <= 10 ? ketQuaTienCap = (15 + 75 + 50 * soKenh) :
    loaiKhachHang == "doanhNghiep" && soKetNoi > 10 ? ketQuaTienCap = (15 + 75 + 50 *soKenh + (soKetNoi - 10) *5) :
    alert("Hãy chọn loại khách hàng");

    // Output
    document.getElementById("ketQuaTienCap").innerHTML = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: " + new Intl.NumberFormat("en-US",{ style: "currency", currency: "USD" }).format(ketQuaTienCap)
}