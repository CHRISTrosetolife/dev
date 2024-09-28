import { log } from "./log.mjs";
import { sermon_transform } from "./sermon_transform.mjs";
export async function sermon_references_combine(sermon_name) {
  await sermon_transform(sermon_name, (lines) => {
    log({});
    return lines;
  });
}
