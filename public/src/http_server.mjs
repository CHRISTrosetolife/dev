import { repeat } from "./repeat.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
export async function http_server() {
  log(fn_name("http_server"));
  await repeat(() => {});
  log(string_combine_multiple([fn_name("http_server"), " ended"]));
}
