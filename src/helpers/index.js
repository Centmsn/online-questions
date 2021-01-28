/**
 * Generates random array
 * @param {number} [min = 0] - array min length
 * @param {number} [max = 100] - array max length
 * @param {number[]} [range = [0, 100]] - [min, max] - range of numbers in the array
 * @returns {number[]} - returns array which contains random numbers within the givne range
 */
export const getRandomNumbersArr = (min = 0, max = 100, range = [0, 100]) => {
  const arr = [];
  const randomArrLength = Math.floor(Math.random() * (max + 1 - min)) + min;

  for (let i = 0; i < randomArrLength; i++) {
    const randomNumber = Math.floor(
      Math.random() * (range[1] + 1 - range[0]) + range[0]
    );
    arr.push(randomNumber);
  }

  return arr;
};
