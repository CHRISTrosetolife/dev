import { retry_while_error_generic } from "./retry_while_error_generic.mjs";
export async function repeat(lambda) {
  await retry_while_error_generic(lambda, false);
}
