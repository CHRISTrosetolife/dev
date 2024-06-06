import { list_add_multiple } from "./list_add_multiple.mjs";
export async function list_adder_multiple_async(lambda) {
  let result = [];
  await lambda((items) => list_add_multiple(result, items));
  return result;
}
