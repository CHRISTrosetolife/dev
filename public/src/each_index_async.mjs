export function each_index_async(list, lambda) {
  let index = 0;
  for (let element of list) {
    lambda(element, index);
    index++;
  }
}
