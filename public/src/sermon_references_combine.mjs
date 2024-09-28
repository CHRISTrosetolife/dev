import { sermon_transform } from "./sermon_transform.mjs";
import { identity } from "./identity.mjs";
export async function sermon_references_combine(sermon_name) {
  let transform = identity;
  await sermon_transform(sermon_name, transform);
}
