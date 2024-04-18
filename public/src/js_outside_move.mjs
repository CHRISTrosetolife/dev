import {list_filter} from "./list_filter.mjs";
import {js_exports} from "./js_exports.mjs";
export function js_outside_move(ast) {
    let {body} = ast;
    let declarations = list_filter(body, b => b.type === 'FunctionDeclaration');
    console.log({
        declarations
    });
}
