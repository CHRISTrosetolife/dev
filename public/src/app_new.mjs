import {app_html_generate} from "./app_html_generate.mjs";
import {js_code_import_path} from "./js_code_import_path.mjs";
import {folder_current} from "./folder_current.mjs";
import {app_prefix} from "./app_prefix.mjs";
import {function_new} from "./function_new.mjs";
import {file_write} from "./file_write.mjs";
import {folder_name_public} from "./folder_name_public.mjs";
import {path_join} from "./path_join.mjs";
import {js_code_call} from "./js_code_call.mjs";
import {js_code_import} from "./js_code_import.mjs";
import {string_combine} from "./string_combine.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
export async function app_new(name) {
    await app_html_generate(name);
    let prefix = app_prefix();
    let name_prefixed = string_combine(prefix, name);
    await function_new(name_prefixed);
}
