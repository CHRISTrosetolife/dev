import {js_export_single} from "./js_export_single.mjs";
export function js_declaration_single_name(ast) {
    let declaration = js_declaration_single(ast);
    let {id} = declaration;
    let name = id.name;
    return name;
}
function js_declaration_single(ast) {
    let e = js_export_single(ast);
    let { declaration: d } = e;
    let declaration = d;
    return declaration;
}

