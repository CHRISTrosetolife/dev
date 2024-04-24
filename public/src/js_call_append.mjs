import {file_exists} from "./file_exists.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {js_code_declare_assign} from "./js_code_declare_assign.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
import {js_call} from "./js_call.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {list_add} from "./list_add.mjs";
import {list_map} from "./list_map.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_imports_add_specified} from "./js_imports_add_specified.mjs";
export async function js_call_append(ast, fn_name, args, result_name) {
    let {body} = ast;
    let args_list = string_split_comma(args);
    let mapped = list_map(args_list, js_parse_expression);
    let call = js_call(fn_name, mapped);
    let parsed = js_code_declare_assign(result_name);
    object_property_set(parsed, 'init', call);
    list_add(body, parsed);
    let path = function_name_to_path(fn_name);
    if (await file_exists(path)) {
        js_imports_add_specified(ast, [fn_name]);
    }
}
