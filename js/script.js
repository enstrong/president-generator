// более подробно https://www.youtube.com/watch?v=4QHFhIjF2L0


// ПЕРЕМЕННЫЕ

let message; // допустимые символы в названии переменной a-z, A-Z, 0-9, $, __
let myMessage = "Сообщение";

// ТИПЫ ДАННЫХ В ПЕРЕМЕННЫХ

let myNumber = 10.983478932; // тип number
let myString = "привет человечешка"; // тип String(строка)
let myBoolean = true; // or false
let myNull = null; // тип null являеться ничем, тоесть равно ничему(пустоте)
let myUndefined = undefined; // тип undefined являеться впринципе ничем, тоесть просто 0. переменным которые не используют вообще присваивают это значение.
// типы null и undefined не имеют других значении кроме null и undefined
// let myObject = {
//    name: "nursultan",
//    age: 80,
// };  тип обьект, составной тип который внутри себя может содержать различные свойства, среди которых могут быть и все выше перечисленные.


// ЧИСЛА

let number = 40 + 10;
console.log(100 + number);
console.log(100 - number);
console.log(100 * number);
console.log(100 / number);
// меняем значение переменной
number = number + 10; // длинная запись
number += 10; // короткая запись
number++; // если увеличивать на 1
number--; // если уменьшать на 1
console.log(number);
console.log(Math.floor(10.5555)); // округление чисел до прошлой цифры
console.log(Math.round(10.5555)); // округление чисел до ближайшей(обычное округление)
console.log(Math.ceil(10.5555)); // округление чисел до следующей цифры

let newNumber = 2.437;
console.log(newNumber.toFixed(1));


// СТРОКИ

console.log("100" + number);
console.log(myString + " как дела");
console.log(myString.toUpperCase());


// МАССИВЫ

let names = ["Вася", "Саня", "Саша", "Петя", "Женя"];
console.log(names[3]);

names.push("Маша");
console.log(names[5]); 


// УСЛОВИЯ

if ("Вася" != "Петя" && number > 80) {
	console.log("true");
} else {
	console.log("false");
}


// ЦИКЛЫ

for (let i = 0; i < 10; i++) {
	if (i == 6) {
		break;
	}

	console.log(i);
}

for (let j = 0; j < names.length; j++) {
	console.log(names[j]);
}

let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}


// ФУНКЦИИ

function sum(x, y) {
	return x + y;
}

console.log(sum(10, 59));


// ОБЬЕКТЫ

let myObject = {
   name: "Nursultan",
   surname: "Nazarbaev",
   age: 80,
   getFullName: function() {
   	return this.name + " " + this.surname;
   }		
};

console.log(myObject.name);
console.log(myObject.getFullName());