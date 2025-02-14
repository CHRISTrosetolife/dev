import { log } from "./log.mjs";
import { functions_calls_migrate } from "./functions_calls_migrate.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_code_button_menu_app_migrate() {
  let f_name = fn_name("app_code_button_menu_app");
  let v = await functions_calls_migrate(f_name, migrate);
  return v;
  function migrate(params) {
    log({
      params,
    });
  }
}
