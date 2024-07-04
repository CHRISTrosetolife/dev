export function list_all_async(list, predicate) {
  for (let element of list) {
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}
