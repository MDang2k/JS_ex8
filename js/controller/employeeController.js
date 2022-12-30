function getInformation() {
    // lấy thông tin từ form
    const _account = document.getElementById("tknv").value;
    const _name = document.getElementById("name").value;
    const _email = document.getElementById("email").value;
    const _pass = document.getElementById("password").value;
    const _day = document.getElementById("datepicker").value;
    const _wage = document.getElementById("luongCB").value;
    const _position = document.getElementById("chucvu").value;
    const _hour = document.getElementById("gioLam").value;

    // tạo object sv
    var employee = new Employee(
        _account,
        _name,
        _pass,
        _email,
        _day,
        _wage,
        _position,
        _hour
    );
    return employee;
}

function renderDSSV(empArr) {
    // render dssv ra table
    var contentHTML = "";
    for (var index = 0; index < empArr.length; index++) {
        var item = empArr[index];
        var contentTr = `<tr>
                          <td>${item.ma}</td>
                          <td>${item.ten}</td>
                          <td>${item.email}</td>
                          <td>${item.tinhDTB()}</td>
                          <td>
                           <button onclick="xoaSinhVien('${
                             item.ma
                           }')" class="btn btn-danger">Xoá</button>
  
                           <button onclick="suaSinhVien('${
                             item.ma
                           }')" class="btn btn-warning">Sửa</button>
                          </td>
                       </tr>`;
        contentHTML += contentTr;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function timKiemViTri(id, arr) {
    var viTri = -1;

    for (var index = 0; index < arr.length; index++) {
        var sv = arr[index];
        if (sv.ma == id) {
            viTri = index;
            break;
        }
    }
    return viTri;
}

function showThongTinLenForm(emp) {
    document.getElementById("tknv").value = emp.;
    document.getElementById("name").value = emp.;
    document.getElementById("email").value = emp.;
    document.getElementById("password").value = emp.;
    document.getElementById("datepicker").value = emp.;
    document.getElementById("luongCB").value = emp.;
    document.getElementById("chucvu").value = emp.;
    document.getElementById("gioLam").value = emp.;
}