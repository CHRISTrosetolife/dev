import {file_write} from "./file_write.mjs";
import {folder_name_public} from "./folder_name_public.mjs";
import {path_join} from "./path_join.mjs";
import {js_code_call} from "./js_code_call.mjs";
import {js_code_import} from "./js_code_import.mjs";
export async function app_new(name) {
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
          ${js_code_import(name)}
          ${js_code_call(name)};
        </script>
      </body>
    </html>        
`;
    let output_path = path_join([folder_name_public(), `${name}.html`]);
    await file_write(output_path, html);
}
