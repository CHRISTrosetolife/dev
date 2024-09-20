import { server } from "./server.mjs";
import { http_server } from "./http_server.mjs";
import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  await watch();
  server();
  await repeat(http_server);
}
