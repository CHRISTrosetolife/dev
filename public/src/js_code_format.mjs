import { import_node } from "./import_node.mjs";
export async function js_code_format(code) {
  let prettier = await import_node("prettier");
  return await prettier.format(code, {
    parser: "babel",
  });
}
