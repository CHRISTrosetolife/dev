import {js_imports_add} from "./js_imports_add.mjs";
import {function_transform} from "./function_transform.mjs";
export async function function_imports_add(function_name) {
    await function_transform(js_imports_add.name, function_name);
}
