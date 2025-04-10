import { html_code_generate_generic } from "./html_code_generate_generic.mjs";
export async function html_css_generate(name, input) {
  return await html_code_generate_generic(
    "link",
    input,
    html_css_generate,
    name,
  );
}
