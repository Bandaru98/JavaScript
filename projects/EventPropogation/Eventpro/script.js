let one=document.getElementById('one')
let two=document.getElementById('two')
let three=document.getElementById('three')
let four=document.getElementById('four')

//------Bubbling(dafault false )-----------


// one.addEventListener('click',()=>{
//     console.log(' Ist Section is clicked'); 
//     one.style.backgroundColor='red'
// })
// two.addEventListener('click',()=>{
//     console.log(' 2nd Section is clicked'); 
//     two.style.backgroundColor='yellow'

// })  
// three.addEventListener('click',()=>{
//     console.log(' 3rd Section is clicked'); 
//     three.style.backgroundColor='green'

// }) 
//  four.addEventListener('click',()=>{
//     console.log(' 4th Section is clicked'); 
//     four.style.backgroundColor='blue'

// })



// //--------capturing(true)------


// one.addEventListener('click',()=>{
//     console.log(' Ist Section is clicked'); 
//     one.style.backgroundColor='red'
// },true)
// two.addEventListener('click',()=>{
//     console.log(' 2nd Section is clicked'); 
//     two.style.backgroundColor='yellow'

// },true)  
// three.addEventListener('click',()=>{
//     console.log(' 3rd Section is clicked'); 
//     three.style.backgroundColor='green'

// },true) 
//  four.addEventListener('click',()=>{
//     console.log(' 4th Section is clicked'); 
//     four.style.backgroundColor='blue'

// },true)

//---------EventPropogation---- 
// it triggers handlers on that element and then propagates to its ancestors or descendants. By invoking `stopPropagation` ----

one.addEventListener('click',()=>{
    console.log(' Ist Section is clicked'); 
    one.style.backgroundColor='red'
})
two.addEventListener('click',()=>{
    console.log(' 2nd Section is clicked'); 
    two.style.backgroundColor='yellow'   

})  
three.addEventListener('click',(e)=>{
    console.log(' 3rd Section is clicked'); 
    three.style.backgroundColor='green'
    e.stopPropagation()

}) 
 four.addEventListener('click',()=>{
    console.log(' 4th Section is clicked'); 
    four.style.backgroundColor='blue'

})