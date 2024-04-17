import {js_visit_identifiers} from './js_visit_identifiers.mjs'
import { list_adder } from './list_adder.mjs'
export function js_identifiers(ast) {
    return list_adder(la => {
        js_visit_identifiers(ast, v => {
            let {node} = v;
            la(node);
        })
    })
}