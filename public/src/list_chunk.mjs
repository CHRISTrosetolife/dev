import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_size } from "./list_size.mjs";
export function list_chunk(list, chunk_size) {
  return list_adder((la) => {
    let chunk = null;
    each_index(list, (item, index) => {
      if (index % chunk_size === 0) {
        if (chunk !== null) {
          la(chunk);
        }
        chunk = [];
      }
    });
    if (chunk !== null && list_size(chunk) >= 1) {
      la(chunk);
    }
  });
}
