export function each_from(low, high, lambda) {
  for (let i = low; i <= high; i++) {
    lambda(i);
  }
}
