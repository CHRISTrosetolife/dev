import { add_1 } from "./add_1.mjs";
export function counter(lambda) {
  let result = 0;
  lambda((item) => (result = add_1(result)));
  return result;
}
