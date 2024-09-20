import { unawait } from "./unawait.mjs";
import { terminal } from "./terminal.mjs";
import { server } from "./server.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  await watch();
  await server();
  unawait(() => {});
  await terminal();
}
