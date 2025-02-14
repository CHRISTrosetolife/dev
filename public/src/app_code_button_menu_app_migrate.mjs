import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { functions_calls_migrate } from "./functions_calls_migrate.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_code_button_menu_app_migrate() {
  let f_name = fn_name("app_code_button_menu_app");
  let v = await functions_calls_migrate(f_name, migrate);
  return v;
  function migrate(params) {
    let first = list_first(params);
    let second = list_second(params);
    if (object_property_get(first, "name") === "root") {
      object_property_set(first, "name", "context");
    }
  }
}
