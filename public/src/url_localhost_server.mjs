import { server_port } from "./server_port.mjs";
import { url_localhost } from "./url_localhost.mjs";
export function url_localhost_server() {
  return url_localhost(server_port());
}
