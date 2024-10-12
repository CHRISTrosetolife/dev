import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { grace_good_generic } from "./grace_good_generic.mjs";
export function grace_good_generic_copy() {
  let message = grace_good_generic(message);
  clipboard_copy_web(message);
}
