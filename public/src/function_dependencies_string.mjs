import { function_imports_recursive } from "./function_imports_recursive.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_dependencies_string_externals } from "./function_dependencies_string_externals.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export async function function_dependencies_string(function_name) {
  let map = await function_imports(function_name);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  if (list_empty_not_is(externals)) {
    await function_imports_recursive(found, fn_name("list_wait"));
  }
  let e = function_dependencies_string_externals();
  let mapped = list_map(externals, (n) => {
    let en = object_property_get(e, n);
    return en;
  });
  let e_import = list_map(mapped, (en) => {
    let import_ = object_property_get(en, "import_");
    return import_;
  });
  let imports = js_code_await(
    js_code_call_args(fn_name("list_wait"), e_import),
  );
  if (false) {
    return imports;
  }
  let e_code = list_map(mapped, (en) => {
    let code = object_property_get(en, "code");
    return code;
  });
  if (false) {
    return e_code;
  }
  let dependency_names = object_properties(map);
  let ds = await list_map_async(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  let c = list_concat_multiple([imports, e_code, us]);
  let text = list_join_newline(c);
  return text;
}
