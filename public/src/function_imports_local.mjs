import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { js_import_external_is } from "./js_import_external_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_imports_sources } from "./js_imports_sources.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_imports_local(function_name) {
  let ast = await function_parse(function_name);
  let imports = js_imports_existing_names(ast);
  let sources = js_imports_sources(ast);
  sources = list_filter(sources, js_import_external_is);
  return {
    imports,
    sources,
  };
}
