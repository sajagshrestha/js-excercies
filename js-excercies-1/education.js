var person = {
	name: "Sajag Shrestha",
	address: "Ktm",
	email: "sajagshrestha@gmail.com",
	interests: ["music", "games", "anime"],
	education: [
		{
			name: "National United School",
			enrolledDate: "2010",
		},
		{
			name: "KIST",
			enrolledDate: "2017",
		},
	],
};

var education = person.education;

education.forEach(function (value) {
	console.log(`Name: ${value.name}, Date: ${value.enrolledDate}`);
});
