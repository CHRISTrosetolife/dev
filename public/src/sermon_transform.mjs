import { list_join_newline } from "./list_join_newline.mjs";
import { sermon_overwrite } from "./sermon_overwrite.mjs";
import { sermon_lines } from "./sermon_lines.mjs";
export async function sermon_transform(sermon_name, transform) {
  let lines = await sermon_lines(sermon_name);
  let mapped = transform(lines);
  let text = list_join_newline(mapped);
  await sermon_overwrite(sermon_name, text);
}
