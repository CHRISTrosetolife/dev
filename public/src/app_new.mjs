import {js_code_import} from "./js_code_import.mjs";
export function app_new(name) {
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
}
