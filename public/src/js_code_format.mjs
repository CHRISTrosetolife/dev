import { import_multi } from "./import_multi.mjs";
export async function js_code_format(code) {
  let prettier = await import_multi("prettier", "prettier");
  let options = {
    parser: "babel",
  };
  return await prettier.format(code, options);
}
