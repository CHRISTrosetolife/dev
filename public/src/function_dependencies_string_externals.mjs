import { js_code_await } from "./js_code_await.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_code_import_generic } from "./js_code_import_generic.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
import { list_is } from "./list_is.mjs";
import { each_object } from "./each_object.mjs";
import { function_dependencies_string_froms } from "./function_dependencies_string_froms.mjs";
export function function_dependencies_string_externals() {
  let e = {};
  let froms = function_dependencies_string_froms();
  each_object(froms, (from, identifiers) => {
    let imported;
    if (list_is(identifiers)) {
      imported = js_code_braces_inside(list_join_comma_space(identifiers));
    } else {
      imported = identifiers;
    }
    let code = js_code_statement_let_assign(
      imported,
      js_code_await(js_code_call_args("import", [js_code_string(from)])),
    );
    object_property_set(e, from, {
      code,
    });
  });
  let standard = ["chalk"];
  each(standard, (s) => {
    object_property_set(e, s, js_code_import_generic(s, s));
  });
  return e;
}
