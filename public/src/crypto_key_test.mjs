import { crypto_encrypt } from "./crypto_encrypt.mjs";
import { crypto_key_decrypt } from "./crypto_key_decrypt.mjs";
import { crypto_key } from "./crypto_key.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function crypto_key_test() {
  let key = await crypto_key();
  let message = "hi";
  let public_key = object_property_get(key, "public_key");
  let encrypted = await crypto_encrypt(public_key, message);
  await crypto_key_decrypt(
    "svuhy1ac3Kpp14/7Yq27lgduKeyjnUrv2K2vBuicgEujQfKx5R9bnD8Krx+OBFx/UhN5Mab5SLEWybys0CN5ARQdk4uV9qr5XTacWDJSzn1qcsLbvbG7bm8uNwqPcqKimS3g/pNPcgbnpGTXEdlR99to1I408dIyW2Z9G+6GsJBP6RICrY5sNXZmoluAQ1SirSAkSir7Ze2zftz7TVUZIEpPfN/HG9yrRq9AM7LC8fVgJ34toXX7/tGgbQRlDSnob7biD9c42DPch0z0Ci0lx8Zh2IWxGFoNF4H5V9cVkzEn9KH+mfFmygAVPPL6AUeuGbEQUfFQY52qYa3B74RIyg==",
  );
}
