let isOdd;
let camelCaseCombiner;

isOdd = function(number){
  if (number % 2){
    alert("Entered number: " + number + " is Odd number!");
    number = "123";
    return;
  }else {
    alert("Entered number: " + number + " is not Odd number!");
    number = "123";
    return;
  }
}
camelCaseCombiner = function (string) {
  let words = [];
  let camelCasedWords;
  let camelCasedWordsBlended = '';
 words = string.split(' ');
  console.log(words);
 camelCasedWords = words.map(function (indexValue,indexNumber ) {
   if (indexNumber === 0){
     camelCasedWordsBlended += indexValue[0].toLowerCase() + indexValue.slice(1);
     console.log(indexValue + "," + indexNumber);
   }else{
     camelCasedWordsBlended +=  indexValue[0].toUpperCase() + indexValue.slice(1);
   console.log(indexValue + "," + indexNumber);
   }
 })
  alert(camelCasedWordsBlended);

}
