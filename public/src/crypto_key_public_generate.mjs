import { object_property_get } from "./object_property_get.mjs";
import { crypto_key } from "./crypto_key.mjs";
import { function_new_constant_string } from "./function_new_constant_string.mjs";
import { generate_suffix_without } from "./generate_suffix_without.mjs";
export async function crypto_key_public_generate() {
  let k = await crypto_key();
  let public_key = object_property_get(k, "public_key");
  let name = generate_suffix_without(crypto_key_public_generate);
  await function_new_constant_string(name);
}
