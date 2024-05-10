import { list_add } from "./list_add.mjs";
export async function list_adder_async(lambda) {
  let result = [];
  await lambda((item) => list_add(result, item));
  return result;
}
