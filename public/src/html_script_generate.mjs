import { html_code_generate_generic } from "./html_code_generate_generic.mjs";
export async function html_script_generate(name, input) {
  return await html_code_generate_generic(
    "script",
    input,
    html_script_generate,
    name,
  );
}
