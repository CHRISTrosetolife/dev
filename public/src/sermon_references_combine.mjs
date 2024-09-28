import { sermon_overwrite } from "./sermon_overwrite.mjs";
import { identity } from "./identity.mjs";
import { sermon_lines } from "./sermon_lines.mjs";
export async function sermon_references_combine(sermon_name) {
  let transform = identity;
  let lines = await sermon_lines(name);
  let mapped = transform(lines);
  await sermon_overwrite(name, mapped);
}
