module.exports = function(deal) {
	var price = getPrice(deal);
	var quantity = getQty(deal);
	
	
	var total = price * quantity;
	
	
	return total.toFixed(2);
}


function getPrice(deal) {
	var dealSplit = deal.split('for');

	var removeRand = dealSplit[1].replace('R', "");
	
	var convertedPrice = Number(removeRand);
	
	return convertedPrice.toFixed(2);
}

function getQty(deal) {
	var dealSplit = deal.split('for');

	return Number(dealSplit[0]);
}