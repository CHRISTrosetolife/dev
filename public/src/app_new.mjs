import { apps_list_generate } from "./apps_list_generate.mjs";
import { app_html_generate_dev } from "./app_html_generate_dev.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { app_html_generate } from "./app_html_generate.mjs";
export async function app_new(name) {
  await app_html_generate(name);
  await app_html_generate_dev(name);
  let name_prefixed = app_identifier(name);
  let open = true;
  await function_new_generic(
    name_prefixed,
    "",
    "let root = html_style_default_initialize();",
    open,
    [],
    false,
    file_write,
  );
  await apps_list_generate();
  return name_prefixed;
}
