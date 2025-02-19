import { html_style_pre_wrap } from "./html_style_pre_wrap.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { sermon_path_suffix } from "./sermon_path_suffix.mjs";
import { sermon_folder_name } from "./sermon_folder_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { http_get } from "./http_get.mjs";
export async function app_preach_sermon_contents(s, root) {
  let t = await http_get(
    path_join([
      string_combine_multiple(["/", sermon_folder_name()]),
      string_combine_multiple([s, sermon_path_suffix()]),
    ]),
  );
  let p = html_p_text(root, t);
  html_style_pre_wrap(p);
}
