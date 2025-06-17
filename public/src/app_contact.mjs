import { html_inner_set } from "./html_inner_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_toggle } from "./storage_local_toggle.mjs";
import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_contact() {
  let fn = app_contact;
  let root = html_style_default_initialize();
  let instructions = html_p_text_multiple(root, [
    "This website will let you contact me",
    "I write computer programs",
    "First my computer program will try to answer your message for me",
    "If my computer program cannot answer your message, then your message will be sent to me and Lord-willing I will answer later",
    "Refresh the page to see if I have answered",
  ]);
  let name = "instructions_show";
  if (storage_local_exists_not(fn, name)) {
    storage_local_set(fn, name, true);
  }
  let value_old = storage_local_get(fn, name);
  html_style_display_block_or_none(instructions, value_old);
  let label = instructions_button_label();
  let b = html_button(root, label, function () {
    let value_new = storage_local_toggle(fn, name);
    html_style_display_block_or_none(instructions, value_new);
    html_inner_set(b, instructions_button_label());
  });
  function instructions_button_label() {
    let verb = value_old ? "Hide" : "Show";
    let label = string_combine_multiple([verb, " instructions"]);
    return label;
  }
}
