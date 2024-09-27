let plibrary = [
    { Pname: 'Watch', Pprice: 10000, Pquantity: '1' },
    { Pname: 'tv', Pprice: 50000, Pquantity: '1' },
    { Pname: 'earphones', Pprice: 8000, Pquantity: '1' }
]
function displayp() {
    const itemlist = document.getElementById('item-list')
    itemlist.innerHTML = ''
    plibrary.forEach((p, index) => {
        let list = document.createElement('tr')
        list.innerHTML = `
        <td>${p.Pname}</td> 
         <td>${p.Pprice}</td> 
          <td>${p.Pquantity}</td>
        <td>
        <button class='btn btn-first' onclick='editp(${index})'>Edit</button>
        <button class='btn btn-last' onclick='removep(${index})'>Remove</button>
        </td>`
        itemlist.appendChild(list)
    })
}
function addP() {
    const Pname = prompt('Enter product name:')
    const Pprice = prompt('Enter product price:')
    const Pquantity = prompt('Enter product quantity:')
    if (Pname && Pprice && Pquantity) {
        const newp = { Pname: Pname, Pprice: Pprice, Pquantity: Pquantity }
        plibrary.push(newp)
        displayp()
    } else {
        alert('Enter valid information here')
    }
}
function editp(index) {
    const Pname = prompt('Enter product name:', plibrary[index].Pname)
    const Pprice = prompt('Enter product price:', plibrary[index].Pprice)
    const Pquantity = prompt('Enter product quantity:', plibrary[index].Pquantity)
    if (Pname !== null && Pprice !== null && Pquantity !== null) {
        plibrary[index] = { Pname: Pname, Pprice: Pprice, Pquantity: Pquantity }
        displayp()
    } else {
        alert('Enter valid information here')
    }
}
function removep(index) {
    const removepro = confirm('Are you sure you want to delete this product?')
    if (removepro) {
        plibrary.splice(index, 1)
        displayp()
    }
}
displayp()