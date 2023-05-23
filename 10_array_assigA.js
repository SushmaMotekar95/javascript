console.log(`----------------------- Array elements -----------------------\n`);
const arrayFruits=['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`- Given array element is :=> [${arrayFruits}]\n`);

console.log(`1) First and Last element in Array`);
firstArrayElement=arrayFruits[0];
console.log(`- First array element :=> ${firstArrayElement}`);
var len=arrayFruits.length;
lastArrayElement=arrayFruits[len-1];
console.log(`- Last array element :=> ${lastArrayElement}`);

console.log(`\n2) Add element -> "pappaya" before the element 'Banana' `)
arrayFruits.unshift("Pappaya");
console.log(`- Add element in array :=> ${arrayFruits}`);

console.log(`\n3) Remove element -> "Mango" from array  `)
arrayFruits.splice(4,1);
console.log(`- Remove element in array :=> ${arrayFruits}`);

console.log(`\n4) Add element -> "Pineapple" at the last position`)
arrayFruits.push("Pineapple");
console.log(`- Add element in array :=> ${arrayFruits}`);

console.log(`\n5) Insert an element -> "Dragon Fruit" before 'Water Melon' `)
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`- Insert element in array :=> ${arrayFruits}`);

console.log(`\n6) Replace an element -> "Orange" with 'Kiwi' `)
arrayFruits[2]="Kiwi";
console.log(`- Replace element in array :=> ${arrayFruits}`);

console.log(`\n7) Log the elements -> strating form index 1 to 4 `)
var display=arrayFruits.slice(1,5);
console.log(`- Display (1 to 4) element in array :=> ${display}`);

console.log(`\n8) Log the element -> Last 3 element `)
var length1=arrayFruits.length;
var a1=arrayFruits[length1-1];
var a2=arrayFruits[length1-2];
var a3=arrayFruits[length1-3];

console.log(`- Display last 3 element in array :=> ${a3},${a2},${a1}`);



