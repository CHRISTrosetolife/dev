import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { catholic_bishops_letter } from "./catholic_bishops_letter.mjs";
import { each_async } from "./each_async.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
export async function sandbox_4() {
  let all = await list_adder_multiple_async(async function (la) {
    await each_async(keyboard_keys_sorted(), async function (letter) {
      let bishops = await catholic_bishops_letter(letter);
      la(bishops);
    });
  });
}
