export function function_get(value) {
  let v = function function_get_inner() {
    let v2 = value;
    return v2;
  };
  return v;
}
