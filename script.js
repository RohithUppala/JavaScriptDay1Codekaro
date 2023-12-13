//Assignment 1: Array Operations

let fruits = [];

fruits.push('apple', 'banana', 'orange');

fruits.splice(0,1);

fruits.push("grape");

fruits.splice(1,1,'pear');

console.log(fruits);


//Assignment 2: Object Operations
let person = { };

person.name="John";
person.age=30;
person.city = "New York";

delete person.age;

person.job = "Engineer";

person.city= "San Francisco";

console.log(person);


//Assignment 3: Array of Objects Operations
let cars = [];

cars.push(
    {make:'Toyota', model:'Camry',year:2018},
    {make:'BMW', model:'BME X3',year:2022},
    {make:'BENZ', model:'Mercedes A-Class',year:2023})


cars.splice(0,1);

cars.push({make:'Honda', make:'Civic', year:2020});

cars[1].model='Accord';


console.log(cars);

