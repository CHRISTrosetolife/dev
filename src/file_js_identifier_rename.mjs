import { file_js_parse } from "./file_js_parse.mjs";
import { visit } from "./visit.mjs";
import { object_values } from "./object_values.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_is } from "./list_is.mjs";
export async function file_js_identifier_rename(file_path, identifier_from, identifier_to) {
    let parsed = await file_js_parse(file_path);
    visit(parsed, n => {
        if (js_node_is(n)) {
            return object_values(n);
        }
        if (list_is(n)) {
            return n;
        }
        return []
    }, n => n.type === 'Identifier', v => {
        let {node} = v;
        console.log(node);
    });
}