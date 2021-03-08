/*
Lesson 6 Task 1. Реализовать модуль корзины.
Создать блок товаров и блок корзины.
У каждого товара есть кнопка «Купить»,
при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа.
*/
var parent = document.querySelector('.goods');

orderUser = {};

var warehouse = [
  {
    id: 1234,
    image: 'img/1234.jpg',
    name: 'Стул элегантный',
    price: 500,
    count: 1
  },
  {
    id: 1235,
    image: 'img/1235.jpg',
    name: 'Стул элегантный',
    price: 600,
    count: 1
  },
];

function addToCart(id, price){
    orderUser[id] = 1 * price;
    console.log(orderUser);
    renderCart();
};

function renderCart(){
  var html = "";
  var total = 0;
  for (var key in orderUser){
    
    html += '<ul>';
    html += '<h3> Артикуль: ' + key + '</h3>';
    html += '<p> Цена: ' + orderUser[key] + '</p>';  
    html += '</ul>'; 
    total += parseInt(orderUser[key]);
  }
  html += '<ul>Сумма: '+ total +'</ul>'
  showCart =  document.getElementById('shoping-cart');
  showCart.innerHTML = html;
}

warehouse.forEach(good => {
  var html = `
    <div class="goods-item">
      <img src="${good.image}">
      <h3>${good.name}</h3>
      <p>Артикуль: ${good.id}</p>
      <p>Цена: ${good.price} рублей</p>
      <button data-id="${good.id}" class="buy-btn" onclick="addToCart(${good.id},${good.price})">Купить</button>
    </div>
  `;
  if (parent) {
    parent.insertAdjacentHTML('beforeend', html);
  }
});
