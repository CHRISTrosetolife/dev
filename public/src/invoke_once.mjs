export function invoke_once(fn) {
  function invoke_once_wrapper() {
    let v = fn();
    return v;
  }
  return invoke_once_wrapper;
}
