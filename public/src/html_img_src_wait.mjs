import { html_on } from "./html_on.mjs";
import { html_img_src } from "./html_img_src.mjs";
export async function html_img_src_wait(player_overlay, img_url) {
  html_img_src(player_overlay, img_url);
  await new Promise((resolve) => html_on(player_overlay, "load", resolve));
}
