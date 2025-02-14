import { functions_calls_migrate } from "./functions_calls_migrate.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_single } from "./list_single.mjs";
export async function app_code_button_menu_app_migrate() {
  let f_name = fn_name("app_code_button_menu_app");
  let v = await functions_calls_migrate(f_name, migrate);
  return v;
  function migrate(params) {
    let p = list_single(params);
    object_property_set(p, "name", "root");
  }
}
