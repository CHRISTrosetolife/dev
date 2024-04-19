import {file_new} from './file_new.mjs';
import {file_open} from './file_open.mjs';
import {function_name_to_path} from './function_name_to_path.mjs';
import {list_map} from './list_map.mjs';
import {js_code_import} from './js_code_import.mjs';
import {list_concat} from './list_concat.mjs';
import {list_join} from './list_join.mjs';
import {newline} from './newline.mjs';
import { js_parse } from './js_parse.mjs';
import { js_unparse } from './js_unparse.mjs';
export async function function_new_generic(function_name, args_string, body_string, open, imports) {
    let contents_function = `export function ${function_name}(${args_string}) {
${body_string}
}`;
    let mapped = list_map(imports, js_code_import);
    let concat = list_concat(mapped, [contents_function]);
    let contents = list_join(concat, newline());
    let parsed = js_parse(contents);
    let unparsed = js_unparse(parsed);
    let file_path = function_name_to_path(function_name);
    await file_new(file_path, unparsed);
    if (open) {
        await file_open(file_path);
    }
}
