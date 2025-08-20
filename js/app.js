//practice1
const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter (number => {
  return number %2 === 0 ;
});
console.log(evenNumbers);

//practice2
function flattenArrayWithForEach(arr) {
  let flattened = [];
   arr.forEach(element => {
    if (Array.isArray(element)) {
      flattened.push(...flattenArrayWithForEach(element));
    } 
    else {
      flattened.push(element);
       
    }   
  }); 
  return flattened; 
}
const nestedArray = [1, [2, [3, [4]], 5]];
const flattenedArray = flattenArrayWithForEach(nestedArray);

console.log(flattenedArray);