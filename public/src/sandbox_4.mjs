import { catholic_bishops_letter } from "./catholic_bishops_letter.mjs";
import { each_async } from "./each_async.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
export async function sandbox_4() {
  await each_async(keyboard_keys_sorted(), async function (letter) {
    await catholic_bishops_letter(letter);
  });
}
