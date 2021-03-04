/* Lesson 5 Task 5
Сделать так, чтобы товары в каталоге выводились при помощи JS: Создать массив товаров (сущность Product);
 При загрузке страницы на базе данного массива генерировать вывод из него.
 HTML-код должен содержать только div id=”catalog” без вложенного кода.
 Весь вид каталога генерируется JS.
*/

var priceGoodsCatalog = {
	apple: 100,
	orange: 200,
	kiwi: 300
};

var priceGoodsCatalog2 = {};

function showProducts(priceGoodsCatalog) {
	var statusGoods = document.getElementById("catalog");
	var html = '';
	
	if (Object.keys(priceGoodsCatalog).length == 0) {  
    	html = "Корзина пуста";
		statusGoods.innerHTML = html;
	} else {
      for (var key in priceGoodsCatalog) {
        html += '<div class = "products">' + key + ': ' + priceGoodsCatalog[key] +'</div>';
      }
		 statusGoods.innerHTML = html;
   }
   
}

Window.onload = showProducts(priceGoodsCatalog);
