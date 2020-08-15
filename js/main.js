let isOdd;
let camelCaseCombiner;
let sortNumbers;
let countWords;

isOdd = function (number) {
  if (number % 2) {
    alert("Entered number: " + number + " is Odd number!");
  } else {
    alert("Entered number: " + number + " is not Odd number!");
  }
};
camelCaseCombiner = function (string) {
  let camelCasedWordsBlended = "";
  string.split(" ").map(function (indexValue, indexNumber) {
    if (indexNumber === 0) {
      camelCasedWordsBlended +=
        indexValue[0].toLowerCase() + indexValue.slice(1).toLowerCase();
    } else {
      camelCasedWordsBlended +=
        indexValue[0].toUpperCase() + indexValue.slice(1).toLowerCase();
    }
  });
  alert(camelCasedWordsBlended);
};
sortNumbers = function (numbers) {
  let numberArray = numbers.split(" ").map(function (a) {
    return parseInt(a);
  });
  bubbleSort(numberArray);
  alert(numberArray);
  return numberArray;
};

countWords = function (words) {
  let wordsArray = words.split(" ").sort();
  let wordsSet = new Set(wordsArray);
  let dictionary = [...wordsSet];
  let finalArray = [];
  let counter = 0;
  for (let i = 0; i < dictionary.length; i++) {
    for (let j = 0; j < wordsArray.length; j++) {
      if (wordsArray[j] === dictionary[i]) {
        counter++;
      }
    }
    finalArray.push([dictionary[i], counter]);
    counter = 0;
  }
  sortTwoDimArrOverSecondElAndAlert(finalArray);
};

function bubbleSort(arr) {
  let isAnyTwoElementsChangedInLoop = false;
  do {
    isAnyTwoElementsChangedInLoop = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isAnyTwoElementsChangedInLoop = true;
      }
    }
  } while (isAnyTwoElementsChangedInLoop);
  {
  }
}

function sortTwoDimArrOverSecondElAndAlert(arr) {
  let isAnyTwoElementsChangedInLoop = false;
  do {
    isAnyTwoElementsChangedInLoop = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][1] < arr[i + 1][1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isAnyTwoElementsChangedInLoop = true;
      }
    }
  } while (isAnyTwoElementsChangedInLoop);
  {
    let tempString = "";
    for (let i = 0; i < arr.length; i++) {
      tempString += arr[i][0] + " (" + arr[i][1] + "), ";
    }
    alert(tempString);
  }
}
