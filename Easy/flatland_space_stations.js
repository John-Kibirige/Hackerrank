// https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true

// ---- SOLUTION -----

function flatlandSpaceStations(n, c) {
  let max = 0;

  if (n === c.length) return max;

  for (let city = 0; city < n; city++) {
    let min = Infinity;
    for (let station of c) {
      min = Math.min(min, Math.abs(city - station));
    }
    if (min > max) max = min;
  }
  return max;
}
