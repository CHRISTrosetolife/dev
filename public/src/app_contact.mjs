import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_contact() {
  let root = html_style_default_initialize();
  html_p_text_mutliple(root, [
    "This website will let you contact me",
    "I write computer programs",
    "First my computer program will try to answer your message for me",
    "If my computer program cannot answer your message, then your message will be sent to me and Lord-willing I will answer later",
    "Refresh the page to see if I have answered",
  ]);
}
