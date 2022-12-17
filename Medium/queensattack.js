//https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  let attackables = 0;

  const obstaclesObj = obstacles.reduce((acc, e) => {
    acc[`${e[0]}-${e[1]}`] = e;
    return acc;
  }, {});

  // Up Traversing
  for (let i = r_q + 1; i <= n; i++) {
    if (obstaclesObj.hasOwnProperty(`${i}-${c_q}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Down Traversing
  for (let i = r_q - 1; i >= 1; i--) {
    if (obstaclesObj.hasOwnProperty(`${i}-${c_q}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Right Traversing
  for (let i = c_q + 1; i <= n; i++) {
    if (obstaclesObj.hasOwnProperty(`${r_q}-${i}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Left Traversing
  for (let i = c_q - 1; i >= 1; i--) {
    if (obstaclesObj.hasOwnProperty(`${r_q}-${i}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Up-Right Traversing
  for (let i = r_q + 1, j = c_q + 1; i <= n && j <= n; i++, j++) {
    if (obstaclesObj.hasOwnProperty(`${i}-${j}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Up-Left Traversing
  for (let i = r_q + 1, j = c_q - 1; i <= n && j >= 1; i++, j--) {
    if (obstaclesObj.hasOwnProperty(`${i}-${j}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Down-Right Traversing
  for (let i = r_q - 1, j = c_q + 1; i >= 1 && j <= n; i--, j++) {
    if (obstaclesObj.hasOwnProperty(`${i}-${j}`) === true) {
      break;
    }

    attackables += 1;
  }

  // Down-Left Traversing
  for (let i = r_q - 1, j = c_q - 1; i >= 1 && j >= 1; i--, j--) {
    if (obstaclesObj.hasOwnProperty(`${i}-${j}`) === true) {
      break;
    }

    attackables += 1;
  }

  return attackables;
}
