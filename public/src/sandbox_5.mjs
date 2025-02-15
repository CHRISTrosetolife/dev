import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_duplicates } from "./list_duplicates.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit } from "./js_visit.mjs";
import { function_parse } from "./function_parse.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5b"));
  let duplicates_has = false;
  js_visit(ast, function (v) {
    let names = js_identifiers_scoped(v);
    let ds = list_duplicates(names);
    if (list_empty_not_is(ds)) {
      duplicates_has = true;
      let v2 = true;
      return v2;
    }
  });
}
