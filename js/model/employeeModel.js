function Employee(
    _account,
    _name,
    _pass,
    _email,
    _day,
    _wage,
    _position,
    _hour
) {
    this.acc = _account;
    this.name = _name;
    this.pass = _pass;
    this.email = _email;
    this.day = _day * 1;
    this.wage = _wage * 1;
    this.position = _position * 1;
    this.hour = _hour * 1;
    this.calSalary = function() {
        return (this.wage * this.hour * this.position)
    }
}