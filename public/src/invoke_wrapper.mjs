export function invoke_wrapper(fn) {
  function inner() {
    let v = fn(...arguments);
    return v;
  }
  return inner;
}
