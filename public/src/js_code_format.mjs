import { import_multi } from "./import_multi.mjs";
export async function js_code_format(code) {
  let prettier = await import_multi("prettier", "prettier");
  return await prettier.format(code, {
    parser: "babel",
  });
}
