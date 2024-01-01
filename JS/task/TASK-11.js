const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let str = '';
  if (arr.length !== 0) {
    str = (`Сім'я складається з: ${arr.join(' ')}`);
  }
  else {
    str = 'Сімя пуста';
  }
  return str;
}

showFamily(family)

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(function(item, i, arr) {
    console.log(`${item.toLowerCase()}`)
  }) 


}

standardizeStrings(favoriteCities)

// OR

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   for(let i of arr) {
//     console.log(i.toLowerCase())
//   }



// }

// standardizeStrings(favoriteCities)