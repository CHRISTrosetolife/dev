import { add } from "./add.mjs";
export function list_sum(lambda) {
  let result = 0;
  lambda((item) => (result = add(result, item)));
  return result;
}
