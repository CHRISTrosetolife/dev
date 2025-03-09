export function invoke_once(fn) {
  let invoked = false;
  function inner() {
    if (false) {
    }
    let v = fn(...arguments);
    return v;
  }
  return inner;
}
