import {list_adder} from "./list_adder.mjs";
import {js_visit} from "./js_visit.mjs";
export async function js_imports_add(ast) {
    let existing = list_adder(la => {

    })
    let names = await function_names();
    js_visit(ast, v => {
        let {node} = v;
    });
}
