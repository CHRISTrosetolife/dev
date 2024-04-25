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
    let prefix = app_prefix();
    let name_prefixed = string_combine(prefix, name);
    let import_path = `${folder_current()}/${folder_src()}/`;
    let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${name}</title>
      </head>
      <body>
        <script type="module">
          ${js_code_import_path(import_path, import_name)}
          ${js_code_call(name_prefixed)}
        </script>
      </body>
    </html>        
`;
    let output_path = path_join([folder_name_public(), `${name}.html`]);
    await file_overwrite(output_path, html);
    await function_new(name_prefixed);
}
