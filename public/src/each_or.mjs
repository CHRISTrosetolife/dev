import { each } from "./each.mjs";
export function each_or(fns, l) {
  let result = false;
  each(fns, (fn) => {
    if (fn(l)) {
      result = true;
      return true;
    }
  });
  return result;
}
