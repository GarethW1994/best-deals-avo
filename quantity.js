module.exports = function(deal) {
	var dealSplit = deal.split('for');
	
	
	return Number(dealSplit[0]);
}