let isOdd;
let camelCaseCombiner;
let sortNumbers;
let countWords;


isOdd = function (number) {
  if (number % 2) {
    alert("Entered number: " + number + " is Odd number!");
    number = "123";
    return;
  } else {
    alert("Entered number: " + number + " is not Odd number!");
    number = "123";
    return;
  }
}
camelCaseCombiner = function (string) {
  let camelCasedWordsBlended = '';
  string.split(' ').map(function (indexValue, indexNumber) {
    if (indexNumber === 0) {
      camelCasedWordsBlended += indexValue[0].toLowerCase() + indexValue.slice(1).toLowerCase();
    } else {
      camelCasedWordsBlended += indexValue[0].toUpperCase() + indexValue.slice(1).toLowerCase();
    }
  })
  alert(camelCasedWordsBlended);

}
sortNumbers = function (numbers) {
  let numberArray = numbers.split(' ').map(function (a) {
    return parseInt(a);
  })
// numberArray.sort(function(a, b){return a - b});
for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] > numberArray[i + 1]) {
    let temp = numberArray[i];
    numberArray[i] = numberArray[i+1];
    numberArray[i+1] = temp;
  }

}
alert(numberArray);
}

countWords = function (words) {
  let wordsArray;
  wordsArray = words.split(' ');
  wordsArray.sort();
  sk
  console.log(wordsArray);
}
