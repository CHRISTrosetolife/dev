export function invoke_once(fn) {
  let invoked = false;
  let result;
  function inner() {
    if (invoked) {
      let v = result;
      return v;
    }
    result = fn(...arguments);
    invoked = true;
    return result;
  }
  return inner;
}
