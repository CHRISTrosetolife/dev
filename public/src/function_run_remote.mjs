import { url_localhost } from "./url_localhost.mjs";
import { server_port } from "./server_port.mjs";
import { http_post } from "./http_post.mjs";
export async function function_run_remote(function_name, args) {
  let result = await http_post(url_localhost(server_port()), {
    function_name,
    args,
  });
  return result;
}
