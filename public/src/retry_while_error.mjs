import { retry_while_error_generic } from "./retry_while_error_generic.mjs";
export async function retry_while_error(lambda) {
  let break_on_success = true;
  await retry_while_error_generic(lambda, break_on_success);
}
