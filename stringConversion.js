const msg = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";


function Convert (message) {
	var array = message.split(' ');
	
	var quantityArray = [];
	
	//var covertedNum = parseInt(message);

	for (var i = 0; i < array.length; i++) {
		covertedNum = parseInt(array[i]);
		
		if (typeof(covertedNum) !== NaN) {
			quantityArray.push(covertedNum);
		}
}
	
	for (var x = 0; x < quantityArray.length; x++) {
		if (quantityArray[x].contains(NaN)) {
			quantityArray[x].splice();
		}
	}
	
	console.log(quantityArray);
};


Convert(msg);