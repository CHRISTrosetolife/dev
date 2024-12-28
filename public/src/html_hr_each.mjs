import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
export function html_hr_each(parent, list, lambda) {
  html_hr(parent);
  each(list, lambda);
}
