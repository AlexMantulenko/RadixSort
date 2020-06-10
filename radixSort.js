let FindNumber = (num, position) => (num % position) / (position / 10);

let RadixSort = (A, n, k) => {
  let d = 0;
  while (k > 0) {
    k = k / 10;
    d = d + 1;
  }
  let position = 10;
  for (let i = 0; i <= d; i++) {
    for (let j = 0; j <= n - 1; j++) {
      for (let k = 0; k <= n - j - 1; k++) {
        if (FindNumber(A[k], position) > FindNumber(A[k + 1], position)) {
          [A[k], A[k + 1]] = [A[k + 1], A[k]];
        }
      }
    }
    position = position * 10;
  }
}

let getRandom = (min, max) =>  Math.floor(Math.random() * (max - min) + min);


let A = [];
const N = 10;

for (let i = 0; i < N; i++) {
  A[i] = getRandom(1, 30);
}

let k = Math.max(...A);
RadixSort(A, N, k);
console.log(A);
