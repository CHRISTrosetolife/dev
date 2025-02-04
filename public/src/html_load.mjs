import { global_function } from "./global_function.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_loader } from "./html_loader.mjs";
export async function html_load(lambda) {
  let g = global_function(html_load);
  let o = {};
  let overlay = html_loader();
  await sleep_0();
}
