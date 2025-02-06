import { each_index } from "./each_index.mjs";
export function each_index_1(list, lambda) {
  each_index(list, (item, index) => {
    lambda(item, index + 1);
  });
}
