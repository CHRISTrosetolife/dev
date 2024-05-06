import {js_node_type} from "./js_node_type.mjs";
export function js_exports(ast) {
    return js_node_type(ast, 'ExportNamedDeclaration');
}
