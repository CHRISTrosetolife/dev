import {list_adder} from "./list_adder.mjs";
import {js_visit} from "./js_visit.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
export async function js_imports_add(ast) {
    let existing = js_imports_existing(ast)
    let names = await function_names();
    js_visit(ast, v => {
        let {node} = v;
    });
}
