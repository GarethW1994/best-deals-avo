const msg = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";


var dealList = require('../stringConversion');
var Qty = require('../quantity');
var Price = require('../price');
var totalPrice = require('../totalPrice');

var assert = require('assert');

//console.log(priceObj(msg));
var amountDeals = dealList(msg);


describe('split the string', function(){
	it("should return amount of deals", function(){
		assert.equal(4, amountDeals.length);
	});
	
	it("should return quantity of 1", function() {		
		var thisQty = Qty(amountDeals[0]);
		
		assert.equal(1, thisQty);
	});
	
	it("should return quantity of 3", function() {
		var thisQty = Qty(amountDeals[2]);
		
		assert.equal(3, thisQty);
	});
	
	it("should return price of R10", function() {
		var thisPrice = Price(amountDeals[2]);
		
		assert.equal(10, thisPrice);
	});
	
	it("should return price of R14.50", function() {	
		var thisPrice = Price(amountDeals[3]);
				
		assert.equal(14.50, thisPrice);
	});
	
	it("should return price of R7.00", function() {	
		var thisPrice = Price(amountDeals[1]);
				
		assert.equal(7.00, thisPrice);
	});
	
	it ("should return total Price of deal 1 for R3", function() {
		var totalDealOne = totalPrice(amountDeals[0]);
		
		assert.equal(3.00, totalDealOne);
	});
});