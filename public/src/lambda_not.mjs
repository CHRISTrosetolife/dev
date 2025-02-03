import { not } from "./not.mjs";
export function lambda_not(fn) {
  return function fn_wrapped() {
    return not(fn(...arguments));
  };
}
