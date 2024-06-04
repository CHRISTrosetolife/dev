import { watch } from "./watch.mjs";
import { sandbox } from "./sandbox.mjs";
import { function_search } from "./function_search.mjs";
import { function_open } from "./function_open.mjs";
import { function_copy } from "./function_copy.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
export async function function_aliases_generate() {
  let a = {};
  function alias_add(fn, aliases) {
    let { name } = fn;
    each(aliases, (a) => {
      assert(object_property_exists_not, [a, a]);
      object_property_set(a, a, name);
    });
  }
  alias_add(function_aliases, ["al"]);
  alias_add(function_auto, ["a"]);
  alias_add(function_copy, ["c"]);
  alias_add(function_open, ["o"]);
  alias_add(function_search, ["s"]);
  alias_add(sandbox, ["sb"]);
  alias_add(watch, ["w"]);
  let name = "function_aliases";
  let delimited = list_map(f, string_delimit);
  await function_new_generic(
    name,
    "",
    js_code_statement_return(js_code_array(delimited)),
    false,
    [],
    false,
    file_overwrite,
  );
}
