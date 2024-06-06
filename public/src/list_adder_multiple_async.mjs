import { list_add_multiple } from "./list_add_multiple.mjs";
export async function list_adder_multiple_async(lambda) {
  let result = [];
  await lambda((item) => list_add_multiple(result, item));
  return result;
}
