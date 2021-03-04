/*Lesson 5 Task 4
*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
 Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 Пустая корзина должна выводить строку «Корзина пуста»; Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

var priceGoodsCatalog = {
	apple: 100,
	orange: 200,
	kiwi: 300
};

var userOrderBasket = [
	{
		name: 'apple',
		count: 1
	},
	{
		name: 'orange',
		count: 1
	},
	{
		name: 'kiwi',
		count: 1
	}
]

function countPriceBasket(userOrderBasket){
	var statusBasket = document.getElementById("message_sb");
	var totalBasket = 0;	
	
	if (userOrderBasket.lenght === 0) {
		return statusBasket.innerHTML = "Корзина пуста";
	
	} else {
		
		for(var i = 0; i < userOrderBasket.length;i++){
			totalBasket += priceGoodsCatalog[userOrderBasket[i].name]*userOrderBasket[i].count
			
		}	
		
	return statusBasket.innerHTML = "В корзине: " + userOrderBasket.length + " товаров на  сумму: " + totalBasket;
	
	}
	
}

Window.onload = countPriceBasket(userOrderBasket);
