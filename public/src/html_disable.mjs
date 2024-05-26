import { html_merge } from "./html_merge.mjs";
export function html_disable(button) {
  html_merge(button, {
    disabled: "disabled",
  });
}
