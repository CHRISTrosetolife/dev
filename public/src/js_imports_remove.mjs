import {js_imports_existing} from "./js_imports_existing.mjs";
export function js_imports_remove(ast) {
    let existing = js_imports_existing(ast);
    return existing;
}
