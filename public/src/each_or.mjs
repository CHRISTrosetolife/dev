import { each } from "./each.mjs";
export function each_or(item, conditions) {
  let result = false;
  each(conditions, (fn) => {
    if (fn(item)) {
      result = true;
      return true;
    }
  });
  return result;
}
