import { server_port } from "./server_port.mjs";
import { url_localhost } from "./url_localhost.mjs";
import { http_post } from "./http_post.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
export async function app_sandbox() {
  await html_scripts_load(root, ["axios"]);
  await http_post(url_localhost(server_port()), {
    data: "test post",
  });
}
