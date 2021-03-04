/* JS_Lesson_3_Task_2_3. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let goods = {
  apple: 100,
  orange: 200,
  kiwi: 300
};


let shoppingBasket = ["apple", "apple", "orange", "kiwi"];

function countBasketPrice() {
  let total = 0;
  if (!shoppingBasket.length) {
    alert("Корзина пуста");
    return 0
  }
  for (let i = 0; i < shoppingBasket.length; i++) {
     total += goods[shoppingBasket[i]];                     
  }
  return total
}

console.log(countBasketPrice());



// Вариант 2.  Товары имеют название и цену, Корзина покупок содержит название товара и кол-во. В дальнейшем можно предусмотреть хранение скидок, период их действия. 
// И хорошо бы предусмотреть чтобы обрабатывать исключения попадания "мусора" в корзину.

let goods = {
  apple: 100,
  orange: 100,
  kiwi: 100
};


let shoppingBasket = {
  apple: 1,
  orange: 1,
  kiwi: 2
};


function countBasketPrice() {
  let total = 0;
	if (Object.keys(shoppingBasket).length == 0) {  // корректна ли проверка на пустоту?
    	console.log('Корзина пуста');
      return 0
	}
  
  for (var key in shoppingBasket) {
  	total += shoppingBasket[key]*goods[key];
	}
  
  return total
}

console.log(countBasketPrice());