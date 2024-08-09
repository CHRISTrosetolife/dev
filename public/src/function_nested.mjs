export function function_nested(fn, input) {
  return fn(fn(input));
}
