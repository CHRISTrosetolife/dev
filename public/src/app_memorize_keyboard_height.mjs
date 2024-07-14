import { multiply } from "./multiply.mjs";
import { list_size } from "./list_size.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
export function app_memorize_keyboard_height(context) {
  let keys = keyboard_keys_rows();
  let keys_size = list_size(keys);
  let keyboard_height = multiply(context.button_height, keys_size);
  return keyboard_height;
}
