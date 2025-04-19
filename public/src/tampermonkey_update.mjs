import { function_name_combine } from "./function_name_combine.mjs";
export function tampermonkey_update(name) {
  name = function_name_combine("tampermonkey_", name);
}
