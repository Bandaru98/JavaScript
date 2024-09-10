// Constructor //
function Construct(name, city,) {
    this.name = name;
    this.city = city;
}
let user = new Construct("Madhu", "Kadapa");
console.log(user);


// Prototype //
function mobile(model_no, Price) {
    // Instant Member
    this.model = model_no;
    this.price = Price;
};
let samsung = new mobile("Galaxy", 15000);
let nokia = new mobile(3310, 10000)

// Prototype Member
// samsung.color="white";
// nokia.color="white";
// classname.prototype.key="value";

mobile.prototype.color = "white";

console.log(samsung);
console.log(nokia);


// Class //

class student {
    constructor(name, percentage) {
        this.studentname = name;
        this.studentpercentage = percentage;
    }
    details() {
        console.log(`Student name is ${this.studentname} and percentage is ${this.studentpercentage}`);
    }
    static stu() {
        console.log("Student details");
    }
}
let rollNo1 = new student("Madhu", 90);
rollNo1.details();
// student.stu();

