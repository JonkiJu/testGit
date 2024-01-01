const array = ['asd', 'asdasd',]
let asd = 'Всім привіт';

function reverseStr(str) {
    if (typeof str !== 'string'){
      return 'Помилка!';
    }

      return str.split("").reverse().join("");
    
  }
console.log(reverseStr(array));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr) {
      if (curr !== missingCurr) {
          str += `${curr}\n`;
      }
  });

  // Или
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === missingCurr) {
  //         continue;
  //     }
  //     str += `${arr[i]}\n`;
  // }
  console.log(str)
  return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
