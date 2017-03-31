function deepEqual(v1, v2) {
	if (v1 === v2) return true;
	// you also need to do the comparision of the property
	// either not object or null then false
	if (v1 == null || typeof v1 != "object"||
		v2 == null || typeof v2 != "object")	
		return false;
		
	// number of properties
	var propsInV1 = 0, propsInV2 = 0;
	//count number of properties
	
	for (var prop in v1) propsInV1++;
	
	for (var prop in v2) {
		propsInV2 ++;
		console.log("typeof property: " + prop);
		console.log("v1[prop]: " + v1[prop]+" ; v2[prop]: " + v2[prop]);
		
		// see whether that property in v2 is also in v1
		// note that you compare the typeof properties
		// before you compare the properties itself.
		if (!(prop in v1) || !deepEqual(v1[prop], v2[prop]))
			return false;
	}
	return propsInV1 == propsInV2; // also compare the number of properties in both
	
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

