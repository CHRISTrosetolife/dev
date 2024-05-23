import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_copy } from "./list_copy.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { list_first } from "./list_first.mjs";
export async function app_ceb() {
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let atom = list_first(group);
  let copy = list_copy(atom);
  list_scramble(copy);
  let pair = list_first(copy);
  let [cebuano, english] = pair;
  html_buttons_next_previous;
}
