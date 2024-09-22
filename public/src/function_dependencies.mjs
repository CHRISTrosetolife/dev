import { file_overwrite_gitignore } from "./file_overwrite_gitignore.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { chalk } from "./chalk.mjs";
import { js_code_import_generic } from "./js_code_import_generic.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat } from "./list_concat.mjs";
export async function function_dependencies(function_name) {
  let map = await function_imports(function_name);
  let externals = list_adder_unique((la) => {
    each(object_values(map), (mapped) => {
      let { sources } = mapped;
      each(sources, la);
    });
  });
  let e = {
    chalk: js_code_import_generic(chalk, chalk),
  };
  let e_code = list_map(externals, (n) => object_property_get(e, n));
  let dependency_names = object_properties(map);
  let ds = await list_map_async(dependency_names, function_declaration);
  let us = list_map(ds, js_unparse);
  let c = list_concat(e_code, us);
  let text = list_join_newline(c);
  await file_overwrite_gitignore(
    function_name,
    function_dependencies.name,
    text,
  );
}
