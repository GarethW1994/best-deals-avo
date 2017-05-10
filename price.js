module.exports = function(deal) {
	var dealSplit = deal.split('for');

	var removeRand = dealSplit[1].replace('R', "");
	
	var convertedPrice = Number(removeRand);
	
	return convertedPrice.toFixed(2);
}