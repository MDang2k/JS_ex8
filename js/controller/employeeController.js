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

function renderEmployeeList(empArr) {
    var contentHTML = "";
    for (var index = 0; index < empArr.length; index++) {
        var item = empArr[index];
        var pos = ""
        switch (item.position) {
            case 3:
                pos = "Sếp"
                break;
            case 2:
                pos = "Trưởng phòng"
                break;
            case 1:
                pos = "Nhân viên"
                break;
        }
        var contentTr = `<tr>
                          <td>${item.acc}</td>
                          <td>${item.name}</td>
                          <td>${item.email}</td>
                          <td>${item.day}</td>
                          <td>${pos}</td>
                          <td>${item.calSalary()}</td>   
                          <td>${item.ranking()}</td>   
                          <td>
                          <button onclick="deleteEmployee('${
                            item.acc
                          }')" class="btn btn-danger">Delete</button>
                          </td>
                       </tr>`;
        contentHTML += contentTr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}


function showEmployeeInfo(emp) {
    document.getElementById("tknv").value = emp.acc;
    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;
    document.getElementById("password").value = emp.pass;
    document.getElementById("datepicker").value = emp.day;
    document.getElementById("luongCB").value = emp.wage;
    document.getElementById("chucvu").value = emp.position;
    document.getElementById("gioLam").value = emp.hour;
}