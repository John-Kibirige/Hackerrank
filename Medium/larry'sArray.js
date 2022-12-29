// https://www.hackerrank.com/challenges/larrys-array/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

function larrysArray(A) {
  return `${recursive(A) ? 'YES' : 'NO'}`;
}

const recursive = (arr) => {
  if (isSorted(arr)) return true;
  for (let i = 0; i < arr.length - 2; i++) {
    let a = arr[i],
      b = arr[i + 1],
      c = arr[i + 2];
    let smallestInRightPlace = a < b && a < c;
    const segmentSorted = a < b && b < c;
    const firstSlice = arr.slice(0, i);
    if (
      smallestInRightPlace &&
      i === arr.length - 3 &&
      !segmentSorted &&
      isSorted(firstSlice)
    ) {
      return false;
    }

    if (b < a && b < c) {
      // bca
      arr[i] = b;
      arr[i + 1] = c;
      arr[i + 2] = a;
    }
    if (c < a && c < b) {
      // cab
      arr[i] = c;
      arr[i + 1] = a;
      arr[i + 2] = b;
    }
  }

  if (recursive(arr)) {
    return true;
  }
};

// checks if an array is sorted
const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1]) {
      if (arr[i + 1] < arr[i]) return false;
    }
  }
  return true;
};

// slide through the array while rotating the feasible
// if we reach the last slide and it is impossible to rotate the string and its preceding slice is sorted then return false
// other wise rotate and repeat the process

let strings = [
  '9 6 8 12 3 7 1 11 10 2 5 4',
  '17 21 2 1 16 9 12 11 6 18 20 7 14 8 19 10 3 4 13 5 15',
  '5 8 13 3 10 4 12 1 2 7 14 6 15 11 9',
  '8 10 6 11 7 1 9 12 3 5 13 4 2',
  '7 9 15 8 10 16 6 14 5 13 17 12 3 11 4 1 18 2',
];

let res = strings.map((str) => {
  let nums = str.split(' ').map((char) => Number(char));
  return larrysArray(nums);
});

console.log('the results are ', res);
