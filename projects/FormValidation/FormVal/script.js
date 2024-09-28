let formElm = document.querySelector('form')
let nameError = document.querySelector('#nameError')
formElm.addEventListener('submit',(event)=>{
    event.preventDefault()
    // console.log(event.target[0].value);
    let username = event.target[0].value
    if(username === '' || /\d/.test(username)){
        nameError.innerText = 'Please Enter Your Name'
    }
})