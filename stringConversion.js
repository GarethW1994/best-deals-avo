
var fruitObj = { price: {}};

module.exports = function (message) {
	var array = message.split(' ');
	
	//var quantityArray = [];

	//var covertedNum = "";

	for (var i = 0; i < array.length; i++) {
		if (array[i].startsWith('R')) {
			price = array[i];
			if (fruitObj.price[price] === undefined) {
				fruitObj.price[price] = 0;
			}
			
			fruitObj.price[price] =+ 1;
		};
		
	}
		return fruitObj;
	
	//console.log(quantityArray);
}