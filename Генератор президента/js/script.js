let presidents = [
	{ name: 'Касым-Жомарт', surname: 'Токаев', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg', age: 67, country: 'Казахстана'},
	{ name: 'Владимир', surname: 'Путин', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png', age: 68, country: 'России'},
	{ name: 'Джо', surname: 'Байден', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg', age: 78, country: 'США'},
	{ name: 'Эмманюэль', surname: 'Макрон', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg', age: 43, country: 'Франции'},
	{ name: 'Франк-Вальтер', surname: 'Штайнмайер', image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg', age: 65, country: 'Германии'},
];

function getRandomElement(arr) {
	let randIndex = Math.floor(Math.random() * arr.length);
	return arr[randIndex];
}

let name = document.querySelector('.president-name');
let surname = document.querySelector('.president-surname');
let age = document.querySelector('.president-age-area');
let country = document.querySelector('.president-of-country');
let image = document.querySelector('.country-img')
let button = document.querySelector('.button');

button.addEventListener('click', function () {
	let randomElement = getRandomElement(presidents);
	smoothly(name, 'textContent', randomElement.name);
	smoothly(surname, 'textContent', randomElement.surname);
	smoothly(age, 'textContent', randomElement.age);
	smoothly(country, 'textContent', randomElement.country);
	smoothly(image, 'src', randomElement.image);
});