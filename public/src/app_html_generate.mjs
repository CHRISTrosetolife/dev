import { app_html_path } from "./app_html_path.mjs";
import { folder_name_src } from "./folder_name_src.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_code_import_path } from "./js_code_import_path.mjs";
import { folder_current } from "./folder_current.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_prefix } from "./app_prefix.mjs";
export async function app_html_generate(name) {
  let prefix = app_prefix();
  let name_prefixed = string_combine(prefix, name);
  let import_path = `${folder_current()}/${folder_name_src()}/`;
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${name}</title>
      </head>
      <body>
        <script>
          let global = {};
        </script>
        <script type="module">
          ${js_code_import_path(import_path, name_prefixed)}
          ${js_code_call(name_prefixed)}
        </script>
      </body>
    </html>        
`;
  let output_path = app_html_path(name);
  await file_overwrite(output_path, html);
}
