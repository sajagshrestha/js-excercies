function transform(array, tranformFunction) {
	var newArray = [];
	array.forEach(function (element) {
		newArray.push(tranformFunction(element));
	});
	return newArray;
}
var numbers = [1, 2, 3, 4];
var output = transform(numbers, function (num) {
	return num * 2;
});
console.log(output);
