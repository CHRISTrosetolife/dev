import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
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
    if (chunk !== null && list_empty_not_is(chunk)) {
      la(chunk);
    }
  });
}
