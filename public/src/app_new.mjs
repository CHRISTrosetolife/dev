import { app_name_to } from "./app_name_to.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { app_html_generate } from "./app_html_generate.mjs";
export async function app_new(name) {
  await app_html_generate(name);
  let name_prefixed = app_name_to(name);
  let open = true;
  await function_new_generic(
    name_prefixed,
    "",
    "let body = html_style_default_initialize();",
    open,
    [],
    false,
    file_write,
  );
}
