import { add } from "./add.mjs";
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
function set_add(set, item) {
    set.add(item); 
}

function set_includes(set, item) {
    return set.has(item);
}

function set_new() {
    return new Set();
}

