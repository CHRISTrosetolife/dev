import { html_item_add_generic } from "./html_item_add_generic.mjs";
import { string_add_item } from "./string_add_item.mjs";
export function html_item_add(context, app_main_lambda, index_path) {
  let add_item = string_add_item();
  let refresh = () => app_main_lambda(context);
  let value_initial = "";
  html_item_add_generic(
    context,
    add_item,
    app_main_lambda,
    value_initial,
    add_item,
    on_complete,
    index_path,
    refresh,
  );
}
