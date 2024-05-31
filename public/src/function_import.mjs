import { function_name_to_path } from "./function_name_to_path.mjs";
import { log } from "./log.mjs";
import { global_get } from "./global_get.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_combine } from "./string_combine.mjs";
import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { web_is } from "./web_is.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function function_import(function_name) {
  let function_file_name = function_name_to_file_name(function_name);
  let function_file_name_path = string_combine(
    folder_current_prefix(),
    function_file_name,
  );
  let i = 1;
  log("a" + i++);
  if (web_is()) {
    log("a" + function_file_name_path);
    let g = global_get();
    let { files } = g;
    log(files);
    let function_path = function_name_to_path(function_name);
    if (object_property_exists(files, function_path)) {
      log("a" + i++);
      let code = object_property_get(files, function_path);
      let ast = js_parse(code);
      let d = js_declaration_single(ast);
      let unparsed = js_unparse(d);
      log("a" + i++);
      return eval(unparsed);
    }
  }
  let imported = await import(function_file_name_path);
  let imported_function = object_property_get(imported, function_name);
  return imported_function;
}
