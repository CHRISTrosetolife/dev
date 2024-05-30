import { import_node } from "./import_node.mjs";
export async function js_code_format(code) {
  let pretter = await import_node("prettier");
  return await prettier.format(code, {
    parser: "babel",
  });
}
