import { list_map } from "./list_map.mjs";
import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  list_map([watch], async (lambda) => await repeat(lambda));
}
