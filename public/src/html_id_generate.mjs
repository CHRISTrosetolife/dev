import { object_merge } from "./object_merge.mjs";
import { html_id } from "./html_id.mjs";
export function html_id_generate(result) {
  let id = html_id(result);
  object_merge(result, {
    id,
  });
}
