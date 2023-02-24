var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var Tom = new User("Tom");
var header = this.document.getElementById("header");
header.innerHTML = "Hello, " + Tom.name;
