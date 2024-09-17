import { each_object } from "./each_object.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_imports_find(function_name_from, name_to) {
  let map = await function_imports(function_name_from);
  each_object(map, (function_name, mapped) => {
    let sources = mapped;
  });
}
