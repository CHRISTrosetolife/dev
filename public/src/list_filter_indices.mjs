import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { assert } from "./assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_filter_indices(list, predicate) {
  let mapped = list_map_index(list, (h, index) => {
    let include = predicate(h);
    assert(list_includes, [[true, false], include]);
    return {
      include: include,
      index,
    };
  });
  log({
    mapped,
  });
  let filtered = list_filter(mapped, (m) => m.include === true);
  let mapped2 = list_map(filtered, (f) => f.index);
  return mapped2;
}
