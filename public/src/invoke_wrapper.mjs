export function invoke_wrapper(fn) {
  function invoke_once_wrapper() {
    let v = fn(...arguments);
    return v;
  }
  return invoke_once_wrapper;
}
