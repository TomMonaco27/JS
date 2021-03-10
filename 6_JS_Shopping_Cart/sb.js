/*
Lesson 6 Task 1. Реализовать модуль корзины.
Создать блок товаров и блок корзины.
У каждого товара есть кнопка «Купить»,
при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа.
*/
var parent = document.querySelector('.goods');
//хранение временного заказа пользователя
var cart = new Object(); 
var html;

//склад
var warehouse = [
  {
    id: 123,
    image: 'img/123.jpg',
    name: 'Ноубук Lenovo',
    price: 500,
    amount: 100
  },
  {
    id: 124,
    image: 'img/124.jpg',
    name: 'Ноубук Asus',
    price: 600,
    amount: 100
  },
  {
    id: 125,
    image: 'img/125.jpg',
    name: 'Ноубук Apple',
    price: 700,
    amount: 100
  },
  {
    id: 126,
    image: 'img/126.jpg',
    name: 'Ноубук Asus1',
    price: 800,
    amount: 100
  },
];

function handlerClear() {
  document.getElementById('cart').innerHTML="";
  cart = {};
}

function findById(id){
  var namePrice = {};
  warehouse.forEach(good => {
    if (good['id'] == id) {
      namePrice = {
      "id": id,
      "name": good['name'],
      //"amount": good["amount"],
      "price": good['price']
      };
    }
  });
  return namePrice;   
}

function addToCart(id){

  if (!(cart.hasOwnProperty(id))) {
    cart[id] = {};
    cart[id]['id']= findById(id)['id'];
    cart[id]['name']= findById(id)['name'];
    cart[id]['price']= findById(id)['price'];
    cart[id]['count'] = 1;
    console.log(cart);

  } else {
      cart[id]['count']++;
      console.log(cart);
  }
  renderCart();
};

function renderCart(){
  
  var html = "";
  document.getElementById('cart');
  var total = 0;
  //шапка вывода содержимого корзины
  html += '<div class="shopping-cart" id="shopping-cart">';
  html += '<div class="shoping-cart-close" onclick="handlerClear()"></div>';
  html += '<table id="sb">';
  html += '<tr>';
  html += '<th>Артикул    </th>';
  html += '<th>Имя   </th>';
  html += '<th>Кол-во</th>';
  html += '<th>Цена</th>';
  html += '</tr>';

  for (var key in cart){
    html += '<tr> '
    html += '<td> ' + cart[key]['id'] + '</td>';
    html += '<td> ' + cart[key]['name'] + '</td>';
    html += '<td> ' + cart[key]['count'] + '</td>'; 
    html += '<td> ' + cart[key]['count']*cart[key]['price'] + '</td>';
    total += parseInt(cart[key]['count']*cart[key]['price']);
    showCart =  document.getElementById('cart');
    showCart.innerHTML = html;
  }

  html += '<div class="total">Итого:'+ total +'</div>';
  html += '</table>'; 
  html += '</div>'; 
  showCart.innerHTML = html;
}
//вывод склада на экран
warehouse.forEach(good => {
  var html = `
    <div class="goods-item">
      <img src="${good.image}">
      <h3>${good.name}</h3>
      <p>Артикул: ${good.id}</p>
      <p>Цена: ${good.price} рублей</p>
      <button data-id="${good.id}" class="buy-btn" onclick="addToCart(${good.id})">Купить</button>
    </div>
  `;
  if (parent) {
    parent.insertAdjacentHTML('beforeend', html);
  } 
});
