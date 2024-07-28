// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function randomInt(x) {
  return Math.floor(Math.random() * x)
}

/**
 * Return a random element from an array that is
 * different than `last` (as long as the array has > 1 items). 
 * Return null if the array is empty.
*/
export function getRandomDifferent(arr, last = undefined) {
  if (arr.length === 0) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let num = 0;
    do {
      num = Math.floor(Math.random() * arr.length);
    } while (arr[num] === last);
    return arr[num];
  }
}

export function getRandomElementsFromArray(array, numberOfRandomElementsToExtract = 1) {
  const elements = [];

  function getRandomElement(arr) {
    if (elements.length < numberOfRandomElementsToExtract) {
      const index = Math.floor(Math.random() * arr.length)
      const element = arr.splice(index, 1)[0];

      elements.push(element)

      return getRandomElement(arr)
    } else {
      return elements
    }
  }

  return getRandomElement([...array])
}

// https://stackoverflow.com/questions/962802#962890
