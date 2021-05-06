var input = {
	1: {
		id: 1,
		name: "John",
		// children: [2, 3],
		children: [
			{ id: 2, name: "Sally" },
			{ id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
		],
	},
	5: {
		id: 5,
		name: "Mike",
		// children: [1, 2],
		children: [{ id: 6, name: "Peter" }],
	},
};

var output = {};

function normalize(input) {
	//break condition for recursion
	if (isInputObjectNormalized(input)) {
		return input;
	} else {
		for (key in input) {
			var parent = input[key];
			var children = parent.children;
			//if parent has children
			if (!!children) {
				//if not already normalized normalize the children
				if (!isChildrenArrayNormalized(children)) {
					children.forEach((child) => {
						input[child.id] = child;
					});
					//transform the  original children array of objects into array of ids.
					parent.children = transfromChildrenArray(children);
				}
			}
		}
		return normalize(input); //recurse
	}
}

function isInputObjectNormalized(input) {
	var flag = true;
	for (key in input) {
		var parent = input[key];
		if (!!parent.children) {
			if (!isChildrenArrayNormalized(parent.children)) {
				flag = false;
			}
		}
	}
	return flag;
}

function isChildrenArrayNormalized(childrenArray) {
	var flag = true;
	childrenArray.forEach((child) => {
		if (!!child.id) {
			flag = false;
		}
	});
	return flag;
}

function transfromChildrenArray(childrenArrayWithObjects) {
	return childrenArrayWithObjects.map((child) => child.id);
}

console.log(normalize(input));
