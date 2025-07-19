import { log } from "./log.mjs";
import { server_port } from "./server_port.mjs";
import { url_localhost } from "./url_localhost.mjs";
import { http_post } from "./http_post.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_document_body } from "./html_document_body.mjs";
export async function app_sandbox() {
  let root = html_document_body();
  await html_scripts_load(root, ["axios"]);
  let url = url_localhost_server();
  log({
    url,
  });
  await http_post(url, {
    data: "test post",
  });
}
function url_localhost_server() {
    return url_localhost(server_port());
}

