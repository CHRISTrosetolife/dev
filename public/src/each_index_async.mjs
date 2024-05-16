export async function each_index_async(list, lambda) {
  let index = 0;
  for (let element of list) {
    await lambda(element, index);
    index++;
  }
}
