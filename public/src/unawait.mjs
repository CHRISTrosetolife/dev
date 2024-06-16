import { each } from "./each.mjs";
export function unawait(fn) {
  each([fn], (f) => f());
}
