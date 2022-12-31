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

    empList.push(employee);

    var listJson = JSON.stringify(empList);

    localStorage.setItem(EmpList, listJson);

    renderEmployeeList(empList);
}