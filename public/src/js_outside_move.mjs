import {js_unparse} from "./js_unparse.mjs";
import {function_new_generic} from "./function_new_generic.mjs";
import {js_declaration_to_name} from "./js_declaration_to_name.mjs";
import {list_filter} from "./list_filter.mjs";
import {js_exports} from "./js_exports.mjs";
export async function js_outside_move(ast) {
    let {body} = ast;
    let declarations = list_filter(body, b => b.type === 'FunctionDeclaration');
    for (let declaration of declarations) {
        let function_name = js_declaration_to_name(declaration);
        let {body} = declaration
        console.log({
            function_name,
            d: js_unparse(body)
        });
        continue;
        await function_new_generic(function_name, '', '', false, []);
    }
}
