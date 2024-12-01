import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_code_import_path } from "./js_code_import_path.mjs";
import { folder_name_src } from "./folder_name_src.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_prefix } from "./app_prefix.mjs";
export async function app_html_generate_generic(name, folder, output_path_get) {
  let prefix = app_prefix();
  let name_prefixed = string_combine(prefix, name);
  let import_path = string_combine_multiple([
    folder,
    "/",
    folder_name_src(),
    "/",
  ]);
  let html = string_combine_multiple([
    '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <title>',
    name,
    '</title>\n      </head>\n      <body>\n        <script>let global = {};</script>\n        <script type="module">\n          ',
    js_code_import_path(import_path, name_prefixed),
    "\n          ",
    js_code_call(name_prefixed),
    "\n        </script>\n      </body>\n    </html>        \n",
  ]);
  let output_path = output_path_get(name);
  await file_overwrite(output_path, html);
}
