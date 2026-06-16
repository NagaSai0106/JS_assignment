let obj1 = {
    name: "John"
};

let obj2 = { ...obj1 };

console.log(obj2);


let person1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

let person2 = JSON.parse(JSON.stringify(person1));

console.log(person2);