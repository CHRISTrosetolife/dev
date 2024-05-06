import {app_html_generate} from "./app_html_generate.mjs";
import {app_prefix} from "./app_prefix.mjs";
import {function_new} from "./function_new.mjs";
import {string_combine} from "./string_combine.mjs";
export async function app_new(name) {
    await app_html_generate(name);
    let prefix = app_prefix();
    let name_prefixed = string_combine(prefix, name);
    await function_new(name_prefixed);
}
