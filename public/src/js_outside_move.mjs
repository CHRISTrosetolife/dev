import {list_remove} from "./list_remove.mjs";
import {js_parse} from "./js_parse.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {function_new_generic} from "./function_new_generic.mjs";
import {js_declaration_to_name} from "./js_declaration_to_name.mjs";
import {list_filter} from "./list_filter.mjs";
import {js_exports} from "./js_exports.mjs";
import {list_copy} from "./list_copy.mjs";
export async function js_outside_move(ast) {
    let {body} = ast;
    let declarations = list_filter(body, b => b.type === 'FunctionDeclaration');
    for (let declaration of declarations) {
        let function_name = js_declaration_to_name(declaration);
        let {body} = declaration;
        let {body: body2} = body;
        let parsed = js_parse(``);
        parsed.body = body2;
        await function_new_generic(function_name, '', '', false, []);
        list_remove(body, declaration);
    }
}
