import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { apps_list_generate } from "./apps_list_generate.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { app_html_generate_dev } from "./app_html_generate_dev.mjs";
import { app_html_generate } from "./app_html_generate.mjs";
export async function app_new_generic(name, body_string, async_is) {
  await app_html_generate(name);
  await app_html_generate_dev(name);
  let name_prefixed = app_identifier(name);
  let open = true;
  await function_new_generic_code(
    name_prefixed,
    "",
    body_string,
    open,
    [],
    async_is,
    false,
  );
  await apps_list_generate();
  return name_prefixed;
}
