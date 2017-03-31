function reverseArray (arr1) {
	var arr2 = [];
	for (var i = arr1.length - 1; i >= 0; i--) 
		arr2.push(arr1[i]);
	return arr2;
}
console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arr1) {
	for (var i = 0; i < arr1.length/2; i++) {
		var temp = arr1[i];
		arr1[i] = arr1[arr1.length - i-1];
		arr1[arr1.length - i-1] = temp;
	}
	return arr1;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
