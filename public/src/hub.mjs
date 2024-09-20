import { http_server } from "./http_server.mjs";
import { list_map } from "./list_map.mjs";
import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  list_map([watch, http_server], async (lambda) => await repeat(lambda));
}
