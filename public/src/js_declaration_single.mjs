import {js_export_single} from "./js_export_single.mjs";
export function js_declaration_single(ast) {
    let e = js_export_single(ast);
    let {declaration: d} = e;
    let declaration = d;
    return declaration;
}
