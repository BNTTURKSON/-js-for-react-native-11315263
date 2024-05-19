
function processArray(arr) {
      return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  

  let numbers = [1, 2, 3, 4, 5];
  console.log(processArray(numbers)); 



function formatArrayStrings(strings, numbers) {
      return strings.map((str, index) => {
          return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
      });
  }
  

  let strings = ["I", "Attend", "University", "of", "Ghana"];
  let processedNumbers = processArray([1, 2, 3, 4, 5]);
  console.log(formatArrayStrings(strings, processedNumbers)); 
  