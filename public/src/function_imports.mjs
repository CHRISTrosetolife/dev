import { function_imports_local } from "./function_imports_local.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function function_imports(function_name) {
  let found = {};
  await function_imports_recursive(found, function_name);
  return found;
  async function function_imports_recursive(found, function_name) {
    if (!object_property_exists(found, function_name)) {
      let { imports, sources } = await function_imports_local(function_name);
      object_property_set(found, function_name, {
        imports,
        sources,
      });
      await each_async(imports, async (import_) => {
        await function_imports_recursive(found, import_);
      });
    }
  }
}
