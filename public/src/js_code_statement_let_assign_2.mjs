import {js_code_assign} from "./js_code_assign.mjs";
import {list_join_comma} from "./list_join_comma.mjs";
import {js_code_statement_let} from "./js_code_statement_let.mjs";
export function js_code_statement_let_assign_2(name_a, a, name_b, b) {
    return js_code_statement_let(list_join_comma(js_code_assign(name_a, a), js_code_assign(name_b, b)));
}
