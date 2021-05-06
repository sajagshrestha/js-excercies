var arr = [
	{
		id: 2,
		name: "John",
	},
	{
		id: 1,
		name: "Mary",
	},
	{
		id: 3,
		name: "Andrew",
	},
];

function sortBy(array, key) {
	var a = array;
	array.forEach(function () {
		for (var i = 0; i < a.length - 1; i++) {
			var temp = 0;
			if (a[i][key] > a[i + 1][key]) {
				temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
			}
		}
	});
	return a;
}

var sorted = sortBy(arr, "name");
console.log(sorted);
