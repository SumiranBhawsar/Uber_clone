let obj1 = { name: "John", details: { age: 25 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.details.age = 30;

console.log(obj1.details.age);