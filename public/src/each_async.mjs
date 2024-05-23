export async function each_async(list, lambda) {
  for (let element of list) {
    await lambda(element);
  }
}
