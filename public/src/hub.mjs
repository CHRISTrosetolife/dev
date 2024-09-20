import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  await repeat(watch);
}
