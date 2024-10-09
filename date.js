//date
let now = new Date()
console.log(now);//2024-09-11T10:41:59.083Z
console.log(now.toString());//Wed Sep 11 2024 16:12:28 GMT+0530 (India Standard Time)
console.log(now.getDate());//11
console.log(now.getDay());//3---0 is sunday to 6 is saturdy days
console.log(now.getFullYear());//2024
console.log(now.toDateString());//Wed Sep 11 2024


// [get] //
function formate() {
    let hours = now.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    return `${hours} ${ampm}`
}
console.log(formate());

console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());


// [set] //

let date = console.log(now.setFullYear(2022));
