//Array operation.
//empty array
let fruits =[];
//add fruits name.
fruits.push("apple", "banana", "orange");
//remove 1st fruit name.
fruits.shift("apple");

// Add "grape" 
fruits.push("grape");

// Update the second fruit in the array to "pear".
fruits[1] = "pear";
//print
console.log("Fruits Array:", fruits);


//object operation
let person = {};

// properties
person.name = "John";
person.age = 30;
person.city = "New York";

// Remove the "age" 
delete person.age;

// Add a new property job(new object create)
person.job = "Engineer";

// Update the "city" (modify)
person.city = "San Francisco";

// Print 
console.log("Person Object:", person);



//object operation
let cars = [];

cars.push({ make: "Toyota", model: "Camry", year: 2018 });
cars.push({ make: "Toyota", model: "Camry", year: 2018 });
cars.push({ make: "Toyota", model: "Camry", year: 2018 });

// Remove 
cars.shift();

// Add a new car obj
cars.push({ make: "Honda", model: "Civic", year: 2020 });

// Update the "model" property of the second car object 
cars[1].model = "Accord";

// Print.
console.log("Cars Array:", cars);

