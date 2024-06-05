import { log } from "./log.mjs";
export async function sandbox_2() {
  let a = 1;
  let b = 2;
  let c = 3;
  log(sandbox_add_multiply(a, b, c));
}
function sandbox_add_multiply(a, b, c) {
    return a + sandbox_multiply(b, c);
}
function sandbox_multiply(b, c) {
    return b * c;
}

