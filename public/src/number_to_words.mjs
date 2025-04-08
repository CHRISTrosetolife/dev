import { floor } from "./floor.mjs";
export function number_to_words(num) {
  let units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let thousands = ["", "thousand", "million", "billion"];
  function convertLessThanThousand(n) {
    if (n < 10) {
      let v = units[n];
      return v;
    }
    if (n < 20) {
      let v2 = teens[n - 10];
      return v2;
    }
    if (n < 100) {
      let v3 =
        tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "");
      return v3;
    }
    let v4 =
      units[Math.floor(n / 100)] +
      " hundred" +
      (n % 100 !== 0 ? " " + convertLessThanThousand(n % 100) : "");
    return v4;
  }
  if (num === 0) {
    let v5 = "zero";
    return v5;
  }
  let result = "";
  let i = 0;
  while (num > 0) {
    if (num % 1000 !== 0) {
      result =
        convertLessThanThousand(num % 1000) +
        (i > 0 ? " " + thousands[i] : "") +
        (result ? " " + result : "");
    }
    let num = Math.floor(num / 1000);
    i++;
  }
  return result;
}
