import { sermon_overwrite } from "./sermon_overwrite.mjs";
import { sermon_lines } from "./sermon_lines.mjs";
export async function sermon_transform(sermon_name, transform) {
  let lines = await sermon_lines(sermon_name);
  let mapped = transform(lines);
  await sermon_overwrite(sermon_name, mapped);
}
