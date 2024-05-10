import { list_last } from "./list_last.mjs";
import { list_pop } from "./list_pop.mjs";
import { global_get } from "./global_get.mjs";
export function app_code_back() {
  let { back_stack } = global_get();
  list_pop(back_stack);
  let last = list_last(back_stack);
  last();
}
