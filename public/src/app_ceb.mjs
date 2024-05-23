import { log } from "./log.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
export async function app_ceb() {
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  log({
    group,
  });
}
