console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("Деструктуризация объектов");

const user = {
    name: "Алиса",
    age: 25,
    city: "Москва",
};

// получение имени пользователя из объекта user
const userName = user.name;
// получение возраста пользователя из объекта user
const userAge = user.age;
console.log(userName, userAge);

// деструктуризация объекта user для получения свойств name, age, city
const { name, age, city } = user;
console.log(name, age, city);

// переименование переменных при деструктуризации
const { name: fullName, age: years } = user;
console.log(fullName, years);

// деструктуризация с установлением значения по умолчанию для country
const { name: personName, country = "Россия" } = user;
console.log(personName, country);

console.log("Дестрруктуризация в параметрах"); 

// функция для вывода информации о пользователе
function printUserOld(user) {
  console.log(`имя: ${user.name}`);
  console.log(`возраст: ${user.age}`);
  console.log(`город: ${user.city}`);
}

// новый способ: деструктуризация прямо в параметрах функции
function printUser({ name, age, city }) {
  console.log(`имя: ${name}`);
  console.log(`возраст: ${age}`);
  console.log(`город: ${city}`);
}

printUserOld(user);
console.log();
printUser(user);

const product = {
  name: "ноутбук",
  price: 65000,
  category: "электроника",
  inStock: true
};

const { name, price, category, inStock } = product;
console.log(name, price, category, inStock);

function printProduct({ name, price, category, inStock }) {
  console.log(`название: ${name}`);
  console.log(`цена: ${price} руб.`);
  console.log(`категория: ${category}`);
  console.log(`в наличии: ${inStock ? "да" : "нет"}`);
}

printProduct(product);