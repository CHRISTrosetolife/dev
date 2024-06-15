import { html_on } from "./html_on.mjs";
export async function html_img_wait(img) {
  return await new Promise((resolve) => html_on(img, "load", resolve));
}
