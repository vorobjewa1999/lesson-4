const startCarCount = 1000;
const minCarCount = 10;
let day = 0;
let currentCarCount = startCarCount;

while (currentCarCount > minCarCount) {
    currentCarCount = Math.round (currentCarCount / 2);
    day++;
}

console.log('Через ${day}.....');