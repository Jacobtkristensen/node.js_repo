// loop methods
//forEach, map, filter, sort, find, reduce

const dogs = [ 
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8},
    { name: "Hachiko", famelevel: 18},
    { name: "Balto", famelevel: 5},
];

//add a famelevel of +3 for all dogs
const increasedDogFame = dogs.map((dog) =>{
    dog.famelevel += 3;
    return dog;
});

console.log(increasedDogFame);
// task add the key male and value true except for lassie

const genderedDogs = increasedDogFame.map((dog) =>{
    dog.isMale  = dog.name === "Lassie" ? false : true;
    return dog;
});

// console.log(genderedDogs);

const genderedDogsv2 = increasedDogFame.map((dog) => ({
    isMale: dog.name === "Lassie" ? false : true,
    name: dog.name,
    famelevel: dog.famelevel
}));

// console.log(genderedDogsv2);

const genderedDogsv3 = increasedDogFame.map((dog) => ({
    ...dog,
    isMale: dog.name === "Lassie" ? false : true
    
}));

console.log(genderedDogsv3);
//number example
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

// console.log(numbers);
// console.log(doubledNumbers);

const numberObjects = [
    { number: 1},
    { number: 2},
    { number: 3},
    { number: 4},
    { number: 5},
]
const doubleNumberObjects = numberObjects.map ((number) => {
    number.number *= 2;
    return number;
});

// console.log(numberObjects);
// console.log(doubleNumberObjects);
