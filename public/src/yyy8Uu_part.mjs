import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { list_get } from "./list_get.mjs";
export async function yyy8Uu_part(index, index2) {
  return[ list_get(await yyy8Uu_parts(index), index2)];
}
