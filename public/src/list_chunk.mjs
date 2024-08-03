import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
export function list_chunk(list, chunk_size) {
  return list_adder((la) => {
    each(list, (item) => {});
  });
}
