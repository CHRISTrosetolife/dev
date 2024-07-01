import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { each_index } from "./each_index.mjs";
import { list_first } from "./list_first.mjs";
export function list_maxes(list) {
  let maxes = [];
  let max_index = 0;
  max_add(maxes, list_first(list), max_index);
  each_index(list, (item, index) => {
    let max = list_last(maxes);
    if (item > max.value) {
      max_add(maxes, item, index);
    }
  });
  return maxes;
  function max_add(maxes, value, index) {
    list_add(maxes, {
      value,
      index,
    });
  }
}
