// Ascending Order Array JS

function listGenerator() {
  let listaRandom = [];

  for (let i = 0; i < 10; i++) {
    listaRandom.push(Math.ceil(Math.random() * 100));
  }
  return listaRandom;
}

let numbersList = listGenerator();
console.log(numbersList);

function ascendingOrder() {
  let temp = 0;

  for (let i = 0; i < numbersList.length; i++) {
    for (let j = i; j < numbersList.length; j++) {
      if (numbersList[j] < numbersList[i]) {
        temp = numbersList[j];
        numbersList[j] = numbersList[i];
        numbersList[i] = temp;
      }
    }
  }
  return numbersList;
}

let sorted = ascendingOrder();
console.log(sorted);
