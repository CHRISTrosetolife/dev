import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_chunk(list, chunk_size) {
  return list_adder((la) => {
    each_index(list, (item, index) => {});
  });
}
