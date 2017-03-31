
function range(start, end, step) {
	if (step == null)	step = 1;
	
	var arr = [];
	if (step < 0) 
		for (var i = start; i >= end; i += step) 
			arr.push(i);
			
	else 
		for (var i = start; i <= end; i+= step ) 
			arr.push(i);
		
	return arr;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1))

function sum(arr) {
	var result = 0;
	for ( var i of arr)	result += i;
	return result;
}
console.log(sum(range(1, 10)));



