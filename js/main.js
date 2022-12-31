var EmpList = "EmployeeList";
var empList = [];


var listJson = localStorage.getItem(EmpList);
if (listJson != null) {
    var empArr = JSON.parse(listJson);

    empList = empArr.map(function(item) {
        return new Employee(
            item.acc,
            item.name,
            item.pass,
            item.email,
            item.day,
            item.wage,
            item.position,
            item.hour
        );
    });
    renderEmployeeList(empList);
}

function addEmployee() {
    var employee = getInformation();

    var isValid = true

    isValid = checkIdentical(employee.acc, empList, "tbTKNV") && checkLength(employee.acc, "tbTKNV", 4, 6) && checkNumber(employee.acc, "tbTKNV")

    isValid = isValid & checkEmail(employee.email, "tbEmail")

    isValid = isValid & checkPass(employee.pass, "tbMatKhau")

    isValid = isValid & checkWage(employee.wage * 1, "tbLuongCB")


    if (isValid) {
        empList.push(employee);

        var listJson = JSON.stringify(empList);

        localStorage.setItem(EmpList, listJson);

        renderEmployeeList(empList);
    }

}

function deleteEmployee(id) {
    var pos = findPos(id, empList);
    if (pos != -1) {
        empList.splice(pos, 1);
        renderEmployeeList(empList);
    }
}

function updateEmployee(idSv) {
    var emp = getInformation();
    var pos = findPos(emp.acc, empList);
    if (pos != -1) {
        empList[pos] = emp;
        renderEmployeeList(empList);
    }
}