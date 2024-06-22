export function each_index_only(list, lambda) {
  let index = 0;
  for (let element of list) {
    lambda(index);
    index++;
  }
}
