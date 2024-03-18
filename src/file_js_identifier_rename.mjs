import { file_js_parse } from "./file_js_parse.mjs";
export async function file_js_identifier_rename(file_path, identifier_from, identifier_to) {
    let parsed = await file_js_parse(file_path);
    visit(parsed, n => object_values(n), n => n.type === 'Identifier', v => {
        let {node} = v;
        console.log(n);
    });
}