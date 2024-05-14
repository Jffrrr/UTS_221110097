let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
let product = [
{
    id: 1,
    name: 'Product Name 1',
    image:'../assets/img/1.jpg',
    price: 13000
},
{
    id: 2,
    name: 'Product Name 2',
    image:'../assets/img/2.jpg',
    price: 13000
},
{
    id: 3,
    name: 'Product Name 3',
    image:'../assets/img/3.jpg',
    price: 13000
},
{
    id: 4,
    name: 'Product Name 4',
    image:'../assets/img/4.jpg',
    price: 13000
},
{
    id: 5,
    name: 'Product Name 5',
    image:'../assets/img/5.jpg',
    price: 13000
},
{
    id: 6,
    name: 'Product Name 6',
    image:'../assets/img/6.jpg',
    price: 13000
}
];
let  = [];
function initApp(){
    product.forEach((value, key)=>{
        let newDiv  = document.createElement('div');
        newDiv.innerHTML = `
            <img src="../assets/img/${value.image}"/>
        `;
        list.appendchild(newDiv);
""   })
}
initApp();