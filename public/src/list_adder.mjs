import { list_add } from "./list_add.mjs";
export function list_adder(lambda) {
  let result = [];
  lambda(function (item) {
    let v = list_add(result, item);
    return v;
  });
  return result;
}
