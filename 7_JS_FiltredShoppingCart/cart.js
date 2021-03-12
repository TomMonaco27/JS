/*
Lesson 7 Task 2. Реализовать модуль корзины.
Создать блок товаров и блок корзины.
У каждого товара есть кнопка «Купить»,
при нажатии на которую происходит добавление имени и цены товара в блок корзины. 
Корзина должна уметь считать общую сумму заказа.
* В реализованном ранее функционале работы с корзиной и каталогом товаров,
 добавить возможность фильтрации товаров по какому либо признаку,
 например по подстроке из названия или типу (потребуется добавить такое поле в каталоге).
*/
var parentGood = document.querySelector('.goods');
//хранение временного заказа пользователя
var cart = new Object(); 
var filterPriceHigh = 600;
var filterPriceOn = 1;

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

function findGoodById(id){
  var objGood = {};
  warehouse.forEach(good => {
    if (good['id'] == id) {
      objGood = {
      "id": id,
      "name": good['name'],
      //"amount": good["amount"],
      "price": good['price']
      };
    }
  });
  return objGood;   
}

function addToCart(id){
  if (!(cart.hasOwnProperty(id))) {
    cart[id] = {};
    cart[id]['id']= findGoodById(id)['id'];
    cart[id]['name']= findGoodById(id)['name'];
    cart[id]['price']= findGoodById(id)['price'];
    cart[id]['count'] = 1;
  
  } else {
      cart[id]['count']++;
  
  }
  renderCart();
};

function clearCart() {
  document.getElementById('cart').innerHTML="";
  cart = {};
}

function clearInfoGoodsNone(){
   document.getElementById('info').innerHTML="";
}

function renderCart(){
  
  var html = "";
  showCart =  document.getElementById('cart');
  var total = 0;
  //шапка вывода содержимого корзины
  html += '<div class="shopping-cart" id="shopping-cart">';
  html += '<div class="shoping-cart-close" onclick="clearCart()"></div>';
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
    html += '<td> ' + parseInt(cart[key]['count']*cart[key]['price']) + '</td>';
    total += parseInt(cart[key]['count']*cart[key]['price']);
   // showCart.innerHTML = html;
  }

  html += '<tr class="total"><td colspan="3">Итого:</td>';
  html += '<td>' + total + '</td>'
  html += '</tr>'; 
  html += '</table>'; 
  html += '</div>'; 
  showCart.innerHTML = html;
}

//вывод склада на экран
function renderWarehouse(filterByPriceOn){
  if (filterByPriceOn === 1 ) {
    var inputPriceBefore = document.getElementsByTagName("input")[0];
    var filterPriceHigh = inputPriceBefore.value;
    if (filterPriceHigh && !isNaN(filterPriceHigh)){
      parentGood.innerHTML = "";
      var filteredWarehouse = warehouse.filter(good => good['price'] <= filterPriceHigh);
    }
  } else {
    parentGood.innerHTML = "";
    filteredWarehouse = warehouse;
  }

  if (Array.isArray(filteredWarehouse) && filteredWarehouse.length) {
    filteredWarehouse.forEach(good => {
      var html = `
        <div class="goods-item">
          <img src="${good.image}">
          <h3>${good.name}</h3>
          <p>Артикул: ${good.id}</p>
          <p>Цена: ${good.price} рублей</p>
          <button data-id="${good.id}" class="buy-btn" onclick="addToCart(${good.id})">Купить</button>
        </div>
      `;
      if (parentGood) {
        parentGood.insertAdjacentHTML('beforeend', html);
      } 
    });
  } else {
      html ='';
      html = `
      <div class="goods-item-none" id="goods-item-none">
        </br>
        <h3>Извините, товаров заданным условиям не найденно. Измените настройки фильтрации.</h3>
        <div class="goods-item-none-close" onclick="clearInfoGoodsNone()"></div>
      </div>
      `;
      document.getElementById("info").innerHTML = html;
  }
}

renderWarehouse();