function getHelloWorld() {
  return "Hello World";
}

function getStringByCondition(condition) {
  if (condition === true) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

function addKataToInput(sentence) {
  const subfix = " kata";
  return sentence + subfix;
}

function basicCalculator(number1, number2, operation) {
  if (operation === "+") {
    return number1 + number2;
  } else if (operation === "-") {
    return number1 - number2;
  } else if (operation === "/") {
    return number1 / number2;
  } else if (operation === "*") {
    return number1 * number2;
  }
}

function negativeNumber(number) {
  if (typeof number === "number") {
    if (number < 0) {
      return number;
    } else {
      return number * -1;
    }
  } else {
    return null;
  }
}

function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  } else if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "/" &&
    operation !== "*"
  ) {
    return null;
  }

  return basicCalculator(number1, number2, operation);
}

function sumNumbersInArray(array) {
  let result = 0;

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] === "number") {
      result += array[i];
    }
  }
  return result;
}

function countNegativeNumbersInArray(array) {
  let negativeNumbers = 0;

  if (!Array.isArray(array)) {
    return negativeNumbers;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] < 0) {
      negativeNumbers++;
    }
  }
  return negativeNumbers;
}

function converToEuro(number) {
  let notANumber = 0;
  if (typeof number !== "number") {
    return notANumber.toFixed(2) + "€";
  } else {
    return number.toFixed(2) + "€";
  }
}

function abbreviateWords(word1, word2) {
  if (
    typeof word1 !== "string" ||
    typeof word2 !== "string" ||
    word1 === "" ||
    word2 === ""
  ) {
    return null;
  }
  return `${word1[0]}.${word2[0]}`;
}


/**
 * Función que filtra una frase según la palabra dada
 *
 * En caso de que la frase no sea tipo string. Devuelve null
 * En caso de que el filtro no sea tipo string. Devuelve null
 */

function filterByWord(string, filterString) {
  if (typeof string !== "string" || typeof filterString !== "string") {
    return null;
  } else {
    return string.split(filterString).join("");
  }
}

function reverse(word) {
  if (typeof word !== "string") {
    return null;
  } else {
    return word.split("").reverse().join("");
  }
}

function isAllUpperCase(word) {
  if (typeof word !== "string" || word === "") {
    return false;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i].toUpperCase()) {
        return false;
      }
    }
    return true;
    }
  }
// function isPalindrome(word) {
//   let wordArray = [];

//   if (typeof word !== "string") {
//     return false;
//   }

//   for (let i = 0; i < word.length; i++) {
//     wordArray.push(word[i]);
//   }

//   wordArray.reverse();
//   wordArray = wordArray.join("");

//   if (word.toLowerCase() === wordArray.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(word) {
  if (typeof word !== "string") {
    return false;
  }

  const lowercaseWord = word.toLowerCase();
  const length = lowercaseWord.length;

  /*
  * Cuando i=0, lowercaseWord[0] = 'h' , lowercaseWord[3 - 0] = "a"
  * => Si 'h' es distinto de 'a', devuelve false.

  return true;
  */
  for (let i = 0; i < length; i++) {
    if (lowercaseWord[i] !== lowercaseWord.at(-1)) {
      return false;
    }
  }

  return true;
}



module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome
};
