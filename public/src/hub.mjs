import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
import { retry_while_error } from "./retry_while_error.mjs";
export async function hub() {
  await retry_while_error(watch);
  let lambda = watch;
  await repeat(lambda);
}
