export function list_all(list, predicate) {
  for (let element of list) {
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}
