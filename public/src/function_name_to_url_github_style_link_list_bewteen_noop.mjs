import { noop } from "./noop.mjs";
import { function_name_to_url_github_style_link } from "./function_name_to_url_github_style_link.mjs";
import { list_map } from "./list_map.mjs";
import { list_between_after } from "./list_between_after.mjs";
export function function_name_to_url_github_style_link_list_bewteen_noop(fns) {
  let v = list_between_after(
    list_map(fns, function_name_to_url_github_style_link),
    noop,
  );
  return v;
}
