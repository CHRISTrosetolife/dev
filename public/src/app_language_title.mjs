import { app_language_atom_title_patterns } from "./app_language_atom_title_patterns.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { app_language_atom_title } from "./app_language_atom_title.mjs";
import { list_get_or_last } from "./list_get_or_last.mjs";
import { list_get } from "./list_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_language_title(context) {
  let { left, right } = storage_local_get(context.app_fn, "position");
  let gl = list_get(context.group, left);
  let gr = list_get_or_last(context.group, right);
  let text = app_language_atom_title(context.group, gl, gr, context.invert);
  html_cycle_p(context.root, app_language_atom_title_patterns(), text);
}
