// https://www.hackerrank.com/challenges/almost-sorted/problem
/*
    - create a helper for checking if an array is sorted 
    - create a helper for checking for swapping an element and checking if that array is sorted 
    after a single swap
    - create another that will handle reversing a segment from the array 
*/

function almostSorted(arr) {
  if (arr.length === 1 || isSortedArray(arr)) {
    console.log('yes');
    return;
  }

  const swappedIndices = isSortedAfterSingleSwap([...arr]);
  const reversedIndices = isSortedAfterReversingSegment([...arr]);

  if (swappedIndices.length !== 0) {
    console.log('yes');
    console.log('swap ', swappedIndices[0], swappedIndices[1]);
    return;
  } else if (reversedIndices.length !== 0) {
    console.log('yes');
    console.log('reverse ', reversedIndices[0], reversedIndices[1]);
    return;
  } else {
    console.log('no');
  }
}

const isSortedArray = (arr) => {
  if (arr.length <= 1) {
    return true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }

  return true;
};

const isSortedAfterSingleSwap = (arr) => {
  const len = arr.length;
  if (len < 1) return true;

  let pointer;
  for (let i = 0; i < len; i++) {
    if (i + 1 < len) {
      if (arr[i] > arr[i + 1]) {
        pointer = i;
        break;
      }
    }
  }

  const slicedRight = arr.slice(pointer + 1);
  const slicedLeft = arr.slice(0, pointer + 1);

  let min = Infinity;
  let minIndex = null;
  slicedRight.forEach((el, idx) => {
    if (el < min) {
      min = el;
      minIndex = idx;
    }
  });

  const derivedMinIndex = minIndex + slicedLeft.length;

  if (min !== Infinity) {
    [arr[pointer], arr[derivedMinIndex]] = [arr[derivedMinIndex], arr[pointer]];
  }

  const sorted = isSortedArray(arr);
  return sorted ? [pointer + 1, derivedMinIndex + 1] : [];
};

const isSortedAfterReversingSegment = (arr) => {
  const len = arr.length;
  let pos = null;
  for (let i = 0; i < len; i++) {
    if (i + 1 < len) {
      if (arr[i + 1] < arr[i]) {
        pos = i;
        break;
      }
    }
  }

  let j = pos;
  while (true) {
    if (j + 1 < len) {
      if (arr[j] < arr[j + 1]) {
        break;
      } else {
        j++;
      }
    } else {
      break;
    }
  }

  const partOne = arr.slice(0, pos);
  const partTwo = arr.slice(pos, j + 1);
  const partThree = arr.slice(j + 1);

  const sortedArr = [...partOne, ...partTwo.reverse(), ...partThree];
  const isArrSorted = isSortedArray(sortedArr);
  return isArrSorted ? [pos + 1, j + 1] : [];
};
