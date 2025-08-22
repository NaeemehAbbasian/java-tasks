//practice1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

//practice2
function flattenArrayWithForEach(arr) {
  let flattened = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattened.push(...flattenArrayWithForEach(element));
    } else {
      flattened.push(element);
    }
  });
  return flattened;
}
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = flattenArrayWithForEach(nestedArray);

console.log(flattenedArray);

//practice3
function sortNumbers(array) {
  return array.sort((a, b) => a - b);
}
const Numbers = [500, 300, 700, 100, 600, 200];
const sortedNumbers = sortNumbers(Numbers);

console.log(sortedNumbers);

//practice4
const nestedObject = {
  row: 1,

  user: {
    name: "ali",

    lastname: "hoseini",

    details: {
      age: 30,

      city: "tehran",
    },
  },
};
function countPropertiesRecursive(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countPropertiesRecursive(obj[key]);
    }
    count++;
  }
  return count;
}

const totalProperties = countPropertiesRecursive(nestedObject);

console.log(totalProperties);

//practice5

// const stringArray = ["apple", "banana", "cherry"];
// const transformedArray = transformArray(stringArray);

// console.log(transformedArray);

//practice6
function countFrequencies(array) {
  const frequencies = {};
  for (const element of array) {
    if (frequencies[element]) {
      frequencies[element]++;
    } else {
      frequencies[element] = 1;
    }
  }
  return frequencies;
}
const element = ["a", "b", "a", "d", "c", "d", "a", "c", "b", "b", "a"];
const result = countFrequencies(element);
console.log(result);

//practice 7
const oldNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const newArray = oldNumbers.map((number) => {
  if (number <= 12) {
    return `${number} AM`;
  } else {
    const newNumber = number - 12;
    return `${newNumber} PM`;
  }
});
console.log(newArray);

//practice 8
const num = 15;
const min = 10;
const max = 20;
function isWithinRange(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
}
console.log(isWithinRange(num, min, max));

//practice 9
const weight = 80;
const height = 1.9;

function catagorizeWeight(weight, height) {
  const result = weight / (height * height);
  if (result < 18.5) {
    return "Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    return "NormalWeight";
  } else if (result >= 25 && result <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

console.log(catagorizeWeight(weight, height));

//practice 10
const text = "Hello World! What a beautiful day.";

function hasSpecificLetters(text) {
  const letters = ["a", "e", "i", "o", "u"];
  const lowerCaseText = text.toLowerCase();

  for (const letter of letters) {
    if (lowerCaseText.includes(letter)) {
      return true;
    }
  }
  return false;
}
console.log( hasSpecificLetters(text));
