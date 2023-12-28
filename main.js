//! 1. Quản lý tuyển sinh
document.getElementById('btnKetQuaDiem').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);

    if ( diem1 > 0 && diem2 > 0 && diem3 > 0 ){
        var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
        document.getElementById('ketQuaDiem').innerHTML = tongDiem >= diemChuan ? "Thí sinh đã đậu với tổng điểm: " + tongDiem : "Thí sinh đã rớt với tổng điểm: " + tongDiem
    } else
    document.getElementById('ketQuaDiem').innerHTML = 'Bạn đã rớt do có điểm bằng 0'
}

//! 2. Tính tiền điện 
document.getElementById('tinhTienDien').onclick = function () {
    var nhapKw = document.getElementById("nhapKw").value;
    var tongTienDien = 0;
    var kw_1 = 500;
    var kw_2 = 650;
    var kw_3 = 850;
    var kw_4 = 1100;
    var kw_5 = 1300;
    0 < nhapKw && nhapKw <= 50 ? tongTienDien = nhapKw * kw_1 : nhapKw > 50 && nhapKw <= 100 ? tongTienDien = 50 * kw_1 + (nhapKw - 50) * kw_2 : nhapKw > 100 && nhapKw <= 200 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + (nhapKw - 100) * kw_3 : nhapKw > 200 && nhapKw <= 350 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (nhapKw - 200) * kw_4 : nhapKw > 350 ? tongTienDien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (nhapKw - 350) * kw_5 : alert("Số kw không hợp lệ! Vui lòng nhập lại")
    document.getElementById("ketQuaTienDien").innerHTML = "Tiền điện của bạn là:  " + tongTienDien.toLocaleString() + " VNĐ"
}

//! 3. Tính thuế thu nhập cá nhân:

document.getElementById('tinhTienThue').onclick = function () {
    
}