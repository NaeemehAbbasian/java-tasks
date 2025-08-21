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



//practice6

function countFrequencies (array) { 
  const frequencies ={} ;
  for (const element of array ) {
    if (frequencies[element]) {
      frequencies [element]++ ;
    } else {
       frequencies [element] = 1 ;
      }
  }
  return frequencies;
}
const element = [ 'a' , 'b' , 'a' , 'd' , 'c', 'd' , 'a' , 'c' , 'b' , 'b' , 'a' ]; 
const result = countFrequencies (element);
console.log(result);
