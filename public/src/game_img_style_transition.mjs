import { html_style } from "./html_style.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_gs_sleep_time } from "./app_gs_sleep_time.mjs";
export function game_img_style_transition(image) {
  let t = app_gs_sleep_time() / 1000;
  let transition = string_combine_multiple(["top ", t, "s, left ", t, "s"]);
  html_style(image, {
    transition: transition,
  });
}
