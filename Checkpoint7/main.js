///  cau 1 ////


let carts = []
const cartTableBody = document.getElementById('cart-table-body')
const dataForm = document.querySelector('#data-form')

function initLocalStorage() {
    if(!localStorage.getItem('carts')) {
        localStorage.setItem('carts', JSON.stringify([]))
        carts =[]
    } else {
        carts = JSON.parse(localStorage.getItem('carts'))
    }
}

initLocalStorage()

const cartTable = document.getElementById('cart-table')

function setDataTable(data) {
    let html = ''

    for (let i = 0; i < data.length; i++){
        let htmlItem = `
                    <tr>
                        <td scope="row">${i+1}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].address}</td>
                    </tr>
                    `
        html += htmlItem
    }
        cartTableBody.innerHTML = html
}

function addItem() {
    let nameItem = dataForm.name.value
    let ageItem = dataForm.age.value
    let addressItem = dataForm.address.value
    console.log(`Name: ${nameItem} Age: ${ageItem} Address: ${addressItem}`)
    
    carts.push({
        name: nameItem,
        age: Number(ageItem),
        address: addressItem
    })
    setDataTable(carts)

    localStorage.setItem('carts', JSON.stringify(carts))
}



// cau 2 ////
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

console.log(smartPhones.map(smartPhone => smartPhone.price));



//////    cau 3////

function foo(x,y,z) {
	console.log( x, y, z );
}
 //========//
const foo = (x,y,z) => x * y * z

// -------------------------------------------------- //
function foo () {
	alert(`Hello`)
}
//=======//
var hello = () => {
    console.log(`Chào`);
};
    hello();
    

    // -------------------------------------------------- //
    function foo (a,b){
        let m = a+b*100
        return m
    }

    //========//
    const foo= (a,b) =>  a + b * 100
///   cau 4 //////////////////////////////////

let findEvenNumbers = () => {
    const arr = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
    for (num of arr){	
        if (num % 2 === 0) {
            document.writeln(num + "<br/>");
        }
    }
}

findEvenNumbers();





