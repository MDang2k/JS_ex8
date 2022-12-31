// true => hợp lệ

function checkIdentical(id, empArr, err) {
    var index = empArr.findIndex(function(item) {
        return id == item.acc;
    });
    if (index == -1) {
        document.getElementById(err).innerText = "";
        return true;
    } else {
        document.getElementById(err).style.display = "block"
        document.getElementById(err).innerText = "Account already existed";
        return false;
    }
}

function checkLength(value, idErr, min, max) {
    var length = value.length
    if (length < min || length > max) {
        document.getElementById(idErr).style.display = "block"
        document.getElementById(idErr).innerText = `Length must be from ${min} to ${max} characters`
        return false
    } else {
        document.getElementById(idErr).innerText = ""
        return true
    }
}

function checkWage(value, idErr) {
    if (value <= 20000000 && value >= 1000000) {
        document.getElementById(idErr).innerText = ``
        return true
    } else {
        document.getElementById(idErr).style.display = "block"
        document.getElementById(idErr).innerText = `Wage must be from 1000000 to 20000000`
        return false
    }
}

function checkHour(value, idErr) {
    if (value <= 200 && value >= 80) {
        document.getElementById(idErr).innerText = ``
        return true
    } else {
        document.getElementById(idErr).style.display = "block"
        document.getElementById(idErr).innerText = `Wage must be from 1000000 to 20000000`
        return false
    }
}

function checkNumber(value, idErr) {
    var reg = /^\d+$/;
    var isNumber = reg.test(value)
    if (isNumber) {
        document.getElementById(idErr).innerText = ``
        return true
    } else {
        document.getElementById(idErr).innerText = `This field must be numberical`
        return false
    }
}

function checkEmail(value, idErr) {
    var reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isEmail = reg.test(value)
    if (isEmail) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).style.display = "block"
        document.getElementById(idErr).innerText = `Wrong email format!`
        return false
    }
}

function checkPass(value, idErr) {
    var reg =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var isEmail = reg.test(value)
    if (isEmail) {
        document.getElementById(idErr).innerText = ""
        return true
    } else {
        document.getElementById(idErr).style.display = "block"
        document.getElementById(idErr).innerText = `Password must be from 6 - 10 characters, have at least 1 uppercase character and at least 1 special character`
        return false
    }
}

function findPos(id, arr) {
    var pos = -1;

    for (var index = 0; index < arr.length; index++) {
        var emp = arr[index];
        if (emp.acc == id) {
            pos = index;
            break;
        }
    }
    return pos;
}