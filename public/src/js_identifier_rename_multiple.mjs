import { list_get } from "./list_get.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { each_index_only } from "./each_index_only.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { assert } from "./assert.mjs";
export function js_identifier_rename_multiple(params_names, args_names, d) {
  assert(list_size_equal, [params_names, args_names]);
  each_index_only(params_names, (index) => {
    js_identifier_rename(
      d,
      list_get(params_names, index),
      list_get(args_names, index),
    );
  });
}
