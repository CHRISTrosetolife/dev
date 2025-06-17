import { html_style_display_block_or_none } from "./html_style_display_block_or_none.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_contact() {
  let root = html_style_default_initialize();
  let instructions = html_p_text_multiple(root, [
    "This website will let you contact me",
    "I write computer programs",
    "First my computer program will try to answer your message for me",
    "If my computer program cannot answer your message, then your message will be sent to me and Lord-willing I will answer later",
    "Refresh the page to see if I have answered",
  ]);
  html_button(root, "Hide instructions", function () {
    storage_local();
    html_style_display_block_or_none(instructions);
    html_style_hidden(instructions);
  });
}
