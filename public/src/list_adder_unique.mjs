import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { set_new } from "./set_new.mjs";
import { list_add } from "./list_add.mjs";
export function list_adder_unique(lambda) {
  let included = set_new();
  let result = [];
  lambda((item) => {
    if (!set_includes(included, item)) {
      list_add(result, item);
      set_add(included, item);
    }
  });
  return result;
}
