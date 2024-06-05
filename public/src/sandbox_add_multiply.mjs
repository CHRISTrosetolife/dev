import { sandbox_multiply } from "./sandbox_multiply.mjs";
export function sandbox_add_multiply(a, b, c) {
  return a + sandbox_multiply(b, c);
}
