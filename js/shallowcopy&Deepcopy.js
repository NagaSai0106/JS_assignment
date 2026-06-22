let obj1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

let obj2 = { ...obj1 };

obj2.address.city = "Hyderabad";

console.log("Shallow Copy");
console.log("Original Object:");
console.log(obj1);

console.log("Copied Object:");
console.log(obj2);

let person1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

let person2 = JSON.parse(JSON.stringify(person1));

person2.address.city = "Hyderabad";

console.log("Deep Copy");
console.log("Original Object:");
console.log(person1);

console.log("Copied Object:");
console.log(person2);