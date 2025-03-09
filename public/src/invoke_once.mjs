export function invoke_once(fn) {
  let invoked = false;
  let result;
  function inner() {
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
