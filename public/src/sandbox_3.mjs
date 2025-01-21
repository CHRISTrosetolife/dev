import { html_parse_text } from "./html_parse_text.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { log } from "./log.mjs";
export async function sandbox_3() {
  let d = await ceb_defintion_en("god");
  log(d);
}
