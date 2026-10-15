function display(callback) {
    console.log("Hello world");
    callback();
}

function message() {
    console.log("Hello world");
}

display(message);





const students = ["Priya","Arun","Divya","Rahul","Sneha"];

console.log("First student:",students[0]);
console.log("Last student:",students[students.length - 1]);
students.push("Karthik");
console.log("After push:",students);
students.pop();
console.log("After pop:",students);
const selectedStudents = students.slice(1, 4);
console.log("After slice:",selectedStudents);
students.splice(2, 1);
console.log("After splice:",students);
console.log("Is Priya present?",students.includes("Priya"));


// 1. Filter products with price greater than 1000
const filteredProducts = products.filter(product => product.price > 1000);
console.log(filteredProducts);

// 2. Get only the product names
const productNames = products.map(product => product.name);
console.log(productNames);

// 3. Calculate the total price of those products
const totalPrice = filteredProducts.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);



const products = [



{ name: "Laptop", price: 50000},



{ name: "Mouse", price: 500},



{ name: "Keyboard", price: 1500 },



{ name: "Monitor", price: 12000 },


{ name: "Headphones", price: 2000 }


];

