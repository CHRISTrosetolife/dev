import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { html_button_back } from "./html_button_back.mjs";
export function app_language_refresh_node_back(context) {
  let { root } = context;
  html_button_back(root, async () => {
    await app_language_refresh_node(context);
  });
}
