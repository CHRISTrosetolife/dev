import { number_min } from "./number_min.mjs";
import { string_take } from "./string_take.mjs";
import { log } from "./log.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { string_length } from "./string_length.mjs";
export async function yyy8Uu_part(index, index2) {
  const parts = await yyy8Uu_parts(index);
  console.log({
    p: parts.length,
  });
  console.log({
    a: list_map(parts, (p) => {
      const a = string_length(p);
      const b = 3;
      return string_take(p, number_min(a, b));
    }),
  });
  return [list_get(parts, index2)];
}
