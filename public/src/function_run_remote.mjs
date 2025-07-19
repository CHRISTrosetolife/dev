import { http_post } from "./http_post.mjs";
export async function function_run_remote(function_name, args) {
  let result = await http_post(url_localhost_server(), {
    function_name,
    args,
  });
  return result;
}
