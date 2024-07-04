export async function list_all_async(list, predicate) {
  for (let element of list) {
    if (!(await predicate(element))) {
      return false;
    }
  }
  return true;
}
