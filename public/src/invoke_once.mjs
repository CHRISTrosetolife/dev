import { log } from "./log.mjs";
export function invoke_once(fn) {
  let invoked = false;
  let result;
  function inner() {
    log({
      invoked,
    });
    if (invoked) {
      let v = result;
      return v;
    }
    invoked = true;
    result = fn(...arguments);
    return result;
  }
  return inner;
}
