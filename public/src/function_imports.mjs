import { each_async } from "./each_async.mjs";
import { js_imports_sources } from "./js_imports_sources.mjs";
import { function_parse } from "./function_parse.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function function_imports(function_name) {
  let found = {};
  await function_imports_recursive(found, function_name);
  return found;
  async function function_imports_recursive(found, function_name) {
    if (!object_property_exists(found, function_name)) {
      let ast = await function_parse(function_name);
      let imports = js_imports_existing(ast);
      let sources = js_imports_sources(ast);
      sources = list_filter(sources, (s) => !string_starts_with(s, "."));
      object_property_set(found, function_name, {
        imports,
        sources,
      });
      await each_async(imports, async (i) => {
        await function_imports_recursive(found, function_name);
      });
    }
  }
}
