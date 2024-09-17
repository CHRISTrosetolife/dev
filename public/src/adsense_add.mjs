import { fn_name } from "./fn_name.mjs";
import { each } from "./each.mjs";
import { app_index_choices_pages } from "./app_index_choices_pages.mjs";
export function adsense_add() {
  let fn_names = app_index_choices_pages();
  each(fn_names, (fn_name) => {});
}
