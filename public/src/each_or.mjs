import { each } from "./each.mjs";
export function each_or(l, fns) {
  let result = false;
  each(fns, (fn) => {
    if (fn(l)) {
      result = true;
      return true;
    }
  });
  return result;
}
