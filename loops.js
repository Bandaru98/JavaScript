//for loop
// for(i=0;i<5;i++){
//     if(i%2!=0){
//         console.log(`welcome ${i}`);       
//     }
// }

//if switch ternery----conditions

// for(i=1;i<11;i++){
//     if(i>6){     
//         break;
//     }else{
//         console.log(`welcome ${i}`);
//     }
// }

//nested loop------
// for(i=1;i<6;i++){
//     for(j=1;j<6;j++){
//   console.log(i);
  
//     }
//     console.log(' ');
    
// }

//while loop--------
// let i=0;
// while(i<5){
// console.log(`Hello`);
// i++;
// }

//do while loop----
// let i=0;
// do{
// console.log('Hello');
// i++
// }while(i<5)


//for/of loop----------used for arrays
//for/in loop----------used for arrays mostly used for objects
let array=['Jessy',1,'Plvd']
for(let i of array){
    console.log(array);
}
//for/in only for objects--
let obj={
    name:'Jeslyn',
    from:'Plvd',
    age:2
}
for(let i in obj){
    // console.log(obj);
    console.log(`${i} : ${obj[i]}`);
}

