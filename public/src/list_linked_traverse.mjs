import { list_adder_async } from "./list_adder_async.mjs";
export async function list_linked_traverse(first, next_get, next_exists) {
  let v3 = await list_adder_async(async function (la) {
    la(first);
    let current = first;
    while (next_exists(current)) {
      current = await next_get(current);
      la(current);
    }
  });
  return v3;
}
