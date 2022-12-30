var EmpList = "EmployeeList";
var empList = [];

// lấy dữ liệu từ localStorage
//  object lấy từ localStorage sẽ bị mất các key chứ function ( method )
var listJson = localStorage.getItem(EmpList);
// convert json to array
if (listJson != null) {
    var empArr = JSON.parse(listJson);
    // convert array chứa object ko có key tinhDTB() thành array chứa object có key tinhDTB()
    empList = empArr.map(function(item) {
        return new SinhVien(
            item.ma,
            item.ten,
            item.email,
            item.matKhau,
            item.diemToan,
            item.diemLy,
            item.diemHoa
        );
    });
    renderEmployeeList(empList);
}
// thêm sinh viên
function addEmployee() {
    var sv = getInformation();

    // validate
    var isValid = true

    //kiểm tra mã sv
    isValid = kiemTraTrung(sv.ma, empList) && kiemTraDoDai(sv.ma, "spanMaSV", 4, 8) && kiemTraSo(sv.ma, "spanMaSV")

    //kiểm tra email
    isValid = isValid & kiemTraEmail(sv.email)

    if (isValid) {
        empList.push(sv);
        // lưu vào localStorage ( không bị mất dữ liệu khi load trang )

        // convert array dssv thành json
        var listJson = JSON.stringify(empList);
        // lưu data json vào localStorage
        localStorage.setItem(DSSV, listJson);
        // render dssv
        renderEmployeeList(empList);
    }
}
// xoá sinh viên
function xoaSinhVien(idSv) {
    // tìm vị trí

    var viTri = timKiemViTri(idSv, empList);

    if (viTri != -1) {
        dssv.splice(viTri, 1);
        // render lại layout sau khi xoá thành công
        renderEmployeeList(empList);
    }
}

// sửa sv

function changeInfo(idSv) {
    var viTri = timKiemViTri(idSv, empList);
    if (viTri == -1) {
        //  dừng chương trình nếu ko tìm thấy
        return;
    }
    var sv = empList[viTri];
    // show thông tin lên form
    showThongTinLenForm(sv);
}

function capNhatSinhVien() {
    // lấy thông tin sau khi user update
    var sv = layThongTinTuForm();
    console.log(`  🚀: capNhatSinhVien -> sv`, sv);
    // update dữ diệu mới thay thế dữ liệu cũ
    var viTri = timKiemViTri(sv.ma, empList);
    if (viTri != -1) {
        empList[viTri] = sv;
        renderEmployeeList(empList);
    }

    // render lại layout sau khi update
}