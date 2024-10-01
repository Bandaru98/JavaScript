
let array = []
let name = document.getElementById('name')
let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(event.target[0].value);
    console.log(name.value);
    array.push(name.value)
    Display()
})
function Display() {
    let content = document.getElementById('content')
    content.innerHTML = ''
    array.forEach((item, index) => {
        let createElement = document.createElement('div')
        createElement.innerHTML = `
        <div id='tablestyle'>
            <table>
                <tr>
                    <td><h4>${item}</h4></td>
                    <td><button onclick='Del(${index})'>Delete</button></td>
                </tr>
            </table>   
        </div>
        `
        content.appendChild(createElement)
    })
}
function Del(index) {
    console.log(index);
    array.splice(index, 1)
    Display()
}
