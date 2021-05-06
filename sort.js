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
	array.forEach(function () {
		for (var i = 0; i < array.length - 1; i++) {
			var temp = 0;
			if (array[i][key] > array[i + 1][key]) {
				temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
			}
		}
	});
	return array;
}

var sorted = sortBy(arr, "name");
console.log(sorted);
