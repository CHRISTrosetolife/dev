export async function list_wait(mapped) {
  return await Promise.all(mapped);
}
