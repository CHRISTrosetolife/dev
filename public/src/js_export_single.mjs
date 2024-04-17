import { js_exports } from "./js_exports.mjs";

export function js_export_single(ast) {
    let exports = js_exports(ast);
    return list_single(exports);
}