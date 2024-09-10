// call() , apply() and bind() 

let obj1 = {
    fname: "Keer",
    lname: "Bandaru",
    age: 32,
    fullname: function () {
        console.log(this.fname + " " + this.lname);
    }
}
let obj2 = {
    fname: "Madhu",
    lname: "Bandaru",
    age: 29
}
// function borrowing

obj1.fullname.call(obj2);

function fulldetails() {
    // console.log("Name"+":"+this.fname+" "+this.lname+" "+"Age"+":"+this.age);
    console.log(`Name : ${this.fname} ${this.lname} Age : ${this.age}`);
}

fulldetails.call(obj1);


function userdetails(city, state) {
    console.log(`Hello My self ${this.fname} ${this.lname} and im staying in ${city} (${state})`);
}

userdetails.call(obj1, "Kadapa", "AndhraPradesh"); // call()

userdetails.apply(obj2, ["Bangalore", "Karnatka"]); //apply()

let userfun = userdetails.bind(obj1, "Madhavi", "AndhraPradesh");// bind()
userfun();
