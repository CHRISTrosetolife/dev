import {js_imports_fix} from "./js_imports_fix.mjs";
import {js_outside_move} from "./js_outside_move.mjs";
import {function_transform} from "./function_transform.mjs";
export async function function_auto(function_name) {
    let transforms = [js_outside_move, js_imports_fix];
    for (let t of transforms) {
        await function_transform(t.name, function_name);
    }
}
