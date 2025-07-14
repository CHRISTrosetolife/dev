import { string_starts_with } from "./string_starts_with.mjs";
export function string_starts_with_curry(prefix) {
  let v = function string_starts_with_curry_inner(h) {
    let v2 = string_starts_with(h, prefix);
    return v2;
  };
  return v;
}
