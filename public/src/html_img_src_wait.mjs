import { html_img_wait } from "./html_img_wait.mjs";
import { html_img_src } from "./html_img_src.mjs";
export async function html_img_src_wait(img, img_url) {
  html_img_src(img, img_url);
  await html_img_wait(img);
}
