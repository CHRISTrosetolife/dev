export async function counter_async(lambda) {
  let result = 0;
  await lambda(() => {
    result = result + 1;
    return result;
  });
  return result;
}
