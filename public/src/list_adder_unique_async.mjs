import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function list_adder_unique_async(lambda) {
  let result = [];
  await lambda((item) => {
    if (list_includes_not(result, item)) {
      list_add(result, item);
    }
  });
  return result;
}
