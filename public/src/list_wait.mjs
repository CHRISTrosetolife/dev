export async function list_wait(promises_list) {
  return await Promise.all(promises_list);
}
