import { add } from "./add.mjs";
export function list_summer(lambda) {
  let result = 0;
  lambda((item) => {
    result = add(result, item);
  });
  return result;
}
