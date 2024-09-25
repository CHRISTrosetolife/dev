import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_imports_sources } from "./js_imports_sources.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_imports_local(function_name) {
  let ast = await function_parse(function_name);
  let imports = js_imports_existing(ast);
  let sources = js_imports_sources(ast);
  sources = list_filter(sources, (s) => !string_starts_with(s, "."));
  return {
    imports,
    sources,
  };
}
