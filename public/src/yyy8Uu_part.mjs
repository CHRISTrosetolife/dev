import { string_take } from "./string_take.mjs";
import { log } from "./log.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export async function yyy8Uu_part(index, index2) {
  const parts = await yyy8Uu_parts(index);
  console.log({
    p: parts.length,
  });
  console.log({
    a: list_map(parts, (p) => string_take(p, 3)),
  });
  return [list_get(parts, index2)];
}
