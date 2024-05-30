import { web_is } from "./web_is.mjs";
import { import_multi } from "./import_multi.mjs";
export async function js_code_format(code) {
  let prettier = await import_multi("prettier", "prettier");
  let options = {
    parser: "babel",
  };
  if (web_is()) {
    options.plugins = prettierPlugins;
  }
  return await prettier.format(code, options);
}
