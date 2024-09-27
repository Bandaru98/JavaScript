let itemArray = [];

function dispaly() {
    let count_items = document.getElementById('count_items')
    let selected_item = document.getElementById('selected_item')
    let price = document.getElementById('price')

    selected_item.innerHTML = ''
    itemArray.forEach((item, index) => {
        let div = document.createElement('div')
        div.setAttribute('id', 'box')
        div.innerHTML = `
        <img src ='${item.imgUrl}' alt = 'img1'>
           <h4> ${item.itemName}</h4>
             <h4>₹ ${item.itemPrice}</h4>
             <i class="bi bi-trash3" onclick='deleteToCart(${index})'></i>
        `
        selected_item.appendChild(div)
    })
    count_items.innerText = itemArray.length
    price.innerText = itemArray.reduce((accumulator, current) => (
        accumulator + current.itemPrice), 0)

}

function addTocart(imgUrl, itemName, itemPrice) {
    let data = { imgUrl, itemName, itemPrice }
    itemArray.push(data)
    console.log(itemArray);
    dispaly()

}
function deleteToCart(index) {
    itemArray.splice(index, 1)
    dispaly()
}
