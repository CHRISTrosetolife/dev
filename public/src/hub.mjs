import { promise_all } from "./promise_all.mjs";
import { server } from "./server.mjs";
import { http_server } from "./http_server.mjs";
import { list_map } from "./list_map.mjs";
import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  let mapped = list_map(
    [watch, http_server, server],
    async (lambda) => await repeat(lambda),
  );
  await promise_all(mapped);
}
