
function arrayToList(arr) {
	var list = null;
	for (var i = arr.length - 1; i >= 0; i--) {
		list = {
			value: arr[i],
			rest: list
		}
	}
	return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
	var arr = [];
	while (list != null) {
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}
console.log(listToArray(arrayToList([10, 20, 30])));
		
function prepend(element, list) {
	var newList = {
		value: element,
		rest: list
	}
	return newList;
}
console.log(prepend(10, prepend(20, null)));

function nth(list, number) {
	var i = 0;
	while (list != null && number > 0) {
		list = list.rest;
		number --;
		i++;
	}
	if (list != null)	return i;
	else				return undefined;
	
}
console.log(nth(arrayToList([10, 20, 30]), 2));


		
		
	

