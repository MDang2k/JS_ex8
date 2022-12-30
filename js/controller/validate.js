// true => hợp lệ

function kiemTraTrung(idSv, svArr) {
    var index = svArr.findIndex(function(item) {
        return idSv == item.ma;
    });
    if (index == -1) {
        // ko tìm thấy
        // xoá thông báo lỗi nếu có
        document.getElementById("spanMaSV").innerText = "";
        return true;
    } else {
        // show thông báo cho user
        document.getElementById("spanMaSV").innerText = "Mã sinh viên đã tồn tại";
        return false;
    }
}

function kiemTraDoDai(value, idErr, min, max) {
    var length = value.length
    if (length < min || length > max) {
        document.getElementById(idErr).innerText = ` Độ dài phải từ ${min} đến ${max} kí tự`
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function kiemTraSo(value, idErr) {
    var reg = /^\d+$/;
    var isNumber = reg.test(value)
    if (isNumber) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).innerText = `Trường này phải là số`
        return false
    }
}



function kiemTraEmail(value) {
    var reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isEmail = reg.test(value)
    if (isEmail) {
        document.getElementById("spanEmailSV").innerText = ""
        return true
    } else {
        document.getElementById("spanEmailSV").innerText = `Trường này phải là số`
        return false
    }
}