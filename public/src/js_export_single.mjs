import { js_exports } from "./js_exports.mjs";
import { list_single } from "./list_single.mjs";
export function js_export_single(ast) {
    let exports = js_exports(ast);
    return list_single(exports);
}