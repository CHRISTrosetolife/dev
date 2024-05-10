import { string_combine } from "./string_combine.mjs";
export function html_style_default_border_value(color) {
  return {
    border: string_combine("solid 0.5dvh ", color),
  };
}
