import { getRandomNumbersArr } from "../helpers";

export const testers = {
  0: {
    test(callback) {
      const randomArr = [];
      let correct;

      for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        randomArr.push(getRandomNumbersArr(1, 5, [0, 500]));
      }

      const received = callback(randomArr);

      correct = () => randomArr.flat(Infinity).every((el) => el % 2 === 0);

      return { correct, received, testCase: randomArr };
    },
  },
  1: {
    test(callback) {
      const max = Math.floor(Math.random() * 50);
      let min = Math.floor(Math.random() * max - 1);
      if (min < 0) min = 0;
      const received = callback(min, max);
      let correct;

      correct = () => {
        const arr = [];

        for (let i = min; i < max + 1; i++) {
          if (i % 2 !== 0) {
            arr.push(i);
          }
        }

        return arr;
      };

      return { correct, received, testCase: `${min}, ${max}` };
    },
  },
  2: {
    test(callback) {
      const seconds = Math.floor(Math.random() * 86400);
      const received = callback(seconds);
      let correct;

      correct = () => {
        const secondsLeft = (seconds % 3600) % 60;
        const minutes = ((seconds % 3600) - ((seconds % 3600) % 60)) / 60;
        const hours =
          (seconds -
            ((seconds % 3600) -
              ((seconds % 3600) % 60) +
              ((seconds % 3600) % 60))) /
          3600;

        return `godziny: ${hours}, minuty: ${minutes}, sekundy: ${secondsLeft}`;
      };

      return { correct, received, testCase: seconds };
    },
  },
};
