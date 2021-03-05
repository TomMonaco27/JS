var priceGoodsCatalog = {
	apple: 100,
	orange: 200,
	kiwi: 300
};

var userOrderBasket = [
	{
		name: 'apple',
		count: 1,
	},
	{
		name: 'orange',
		count: 1,
	},
	{
		name: 'kiwi',
		count: 1,
	}
];

function countPriceBasket(userOrderBasket){
	var statusBasket = document.getElementById("message_sb");
	var totalBasket = 0;	
	
	if (userOrderBasket.lenght === 0) {
		statusBasket.innerHTML = "Корзина пуста";
	
	} else {
		for(var i = 0; i < userOrderBasket.length;i++){
			totalBasket += priceGoodsCatalog[userOrderBasket[i].name]*userOrderBasket[i].count
		}	
		statusBasket.innerHTML = "В корзине: " + userOrderBasket.length + " товаров на  сумму: " + totalBasket;
	}	
}

Window.onload = countPriceBasket(userOrderBasket);