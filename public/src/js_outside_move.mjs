import {js_body_nested} from "./js_body_nested.mjs";
import {js_imports_add} from "./js_imports_add.mjs";
import {function_transform} from "./function_transform.mjs";
import {list_join_comma} from "./list_join_comma.mjs";
import {list_remove} from "./list_remove.mjs";
import {js_parse} from "./js_parse.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {function_new_generic} from "./function_new_generic.mjs";
import {js_declaration_to_name} from "./js_declaration_to_name.mjs";
import {list_filter} from "./list_filter.mjs";
import {js_exports} from "./js_exports.mjs";
import {list_copy} from "./list_copy.mjs";
import {list_map} from "./list_map.mjs";
import {list_join} from "./list_join.mjs";
export async function js_outside_move(ast) {
    const type = 'FunctionDeclaration';
    let {body: body_ast} = ast;
    let declarations = list_filter(body_ast, b => b.type === type);
    let copy = list_copy(declarations);
    for (let declaration of copy) {
        let function_name = js_declaration_to_name(declaration);
        let {params} = declaration;
        let args = list_map(params, p => p.name);
        let args_string = list_join_comma(args);
        let body = js_body_nested(declaration);
        let parsed = js_parse(``);
        parsed.body = body;
        let unparsed = js_unparse(parsed);
        await function_new_generic(function_name, args_string, unparsed, false, []);
        await function_imports_add(function_name);
        list_remove(body_ast, declaration);
    }
    await js_imports_add(ast);
    async function function_imports_add(function_name) {
        await function_transform(js_imports_add.name, function_name, 'a');
    }
}
