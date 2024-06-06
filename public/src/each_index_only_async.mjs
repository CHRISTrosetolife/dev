export async function each_index_only_async(list, lambda) {
  let index = 0;
  for (let element of list) {
    await lambda(index);
    index++;
  }
}
