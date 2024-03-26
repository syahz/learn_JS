/** @format */

const reverseSeq = n =>
  Array(n)
    .fill()
    .map((_, i) => i + 1)
    .reverse();
console.log(reverseSeq(5));
