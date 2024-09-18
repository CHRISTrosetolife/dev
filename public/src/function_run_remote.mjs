import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { server_port } from "./server_port.mjs";
import { http_post } from "./http_post.mjs";
export async function function_run_remote(function_name, args) {
  let result = await http_post(
    string_combine_multiple([url_secure(), "localhost:", server_port(), "/"]),
    {
      function_name,
      args,
    },
  );
  return result;
}
