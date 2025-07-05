export function noop_recursive() {
  let v = noop_recursive;
  return v;
}
