import { retry_while_error } from "./retry_while_error.mjs";
import { http_server } from "./http_server.mjs";
import { unawait } from "./unawait.mjs";
import { terminal } from "./terminal.mjs";
import { server } from "./server.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  await watch();
  await server();
  unawait(await retry_while_error(http_server));
  await terminal();
}
