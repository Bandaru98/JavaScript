// class

class details {
    constructor(fullname, address, no) {
        this.fullname = fullname,
            this.address = address,
            this.no = no
    }
    username() {
        return (`${this.fullname}`)
    }
    addressdet() {
        return (`${this.address.toUpperCase()}`)
    }
    phoneno() {
        return (`${this.no}`)
    }
}
const details1 = new details('Madhu', 'kadapa-Andhrapradesh', 123456789)
console.log(details1.username());
console.log(details1.addressdet());
console.log(details1.phoneno());


// without class

const data = function (fullname, address, no) {
    this.fullname = fullname,
        this.address = address,
        this.no = no
}
data.prototype.addressdet = function () {
    return `${this.address.toLowerCase()}`
    // return`${this.address}`

}
data.prototype.username = function () {
    return `${this.fullname} Bandaru`
}
const details2 = new data('Keerna', 'Vallur-Kadapa-AP', 123)
console.log(details2.username());
console.log(details2.addressdet());


// Construction Function 

const Userdata = function (name, id, isLoggedIn) {
    this.name = name; // function variable and parameters must be same
    this.id = id;
    this.isLoggedIn = isLoggedIn;
    return this
}

let user1 = new Userdata("Madhu", 1, true); // 'new' keyword call a construction function
let user2 = new Userdata("keer", 2, false);
console.log(user1);
console.log(user2);