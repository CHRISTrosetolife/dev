import { retry_while_error_generic } from "./retry_while_error_generic.mjs";
import { watch } from "./watch.mjs";
import { retry_while_error } from "./retry_while_error.mjs";
export async function hub() {
  await retry_while_error(watch);
  let lambda = watch;
  await retry_while_error_generic(watch, false);
}
