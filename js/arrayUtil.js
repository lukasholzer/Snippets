lib.namespace('lib.array');

/**
 *
 * randomizes position of array elements
 * @author roxy
 */
lib.array.shuffle = function shuffle() {
	var newArray = [],
		originalArray = this.slice();
	for(var i = 0, length = this.length; i < length; i++) {
		var element = originalArray.splice( Math.floor(Math.random()*originalArray.length), 1)[0];
		newArray[i] = element;
	}
	return newArray;
};