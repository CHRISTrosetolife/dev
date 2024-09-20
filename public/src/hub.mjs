import { watch } from "./watch.mjs";
import { retry_while_error } from "./retry_while_error.mjs";
export async function hub() {
  await retry_while_error(watch);
}
