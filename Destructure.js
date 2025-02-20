let object={
    name:'Jeslyn',
    city:'plvd',
    age:'2years',
    play:{
        game:'running'
    }
}
// console.log(object.age);//structure

//destructure
let {name,city,age}=object
console.log(age);
let {game}=object.play
console.log(game);

//spread
let odd=[1,3,5,7,9]
let even=[2,4,6,8]
let number=[...odd,...even]
console.log(number);

//rest
let array=[1,2,3,4,5]
function f1(...ary){
console.log(ary);
}
f1(array)


