import {js_visit} from "./js_visit.mjs";
export async function js_imports_add(ast) {
    let existing;
    let names = await function_names();
    js_visit(ast, v => {
        let {node} = v;
    });
}
