export function while_change(lambda) {
  let change = true;
  while (change) {
    change = false;
    change = lambda(change);
  }
}
