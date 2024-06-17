import { add } from "./add.mjs";
export function summation(lambda) {
  let result = 0;
  lambda((item) => {
    result = add(result, item);
  });
  return result;
}
