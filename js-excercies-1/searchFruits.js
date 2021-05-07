var fruits = [
	{ id: 1, name: "Banana", color: "Yellow" },
	{ id: 2, name: "Apple", color: "Red" },
];

function searchByName(fruitsArray, fruitName) {
	fruitsArray.forEach(function (fruit) {
		if (fruitName.toLowerCase() === fruit.name.toLowerCase()) {
			console.log(fruit);
		}
	});
}

function searchByKey(fruitsArray, key, value) {
	fruitsArray.forEach(function (fruit) {
		if (fruit[key].toLowerCase() === value.toLowerCase()) {
			console.log(fruit);
		}
	});
}

searchByName(fruits, "apple");
searchByKey(fruits, "name", "apple");
