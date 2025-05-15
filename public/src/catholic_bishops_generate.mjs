import { generate_list_fn } from "./generate_list_fn.mjs";
import { catholic_bishops_letter } from "./catholic_bishops_letter.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let v = await list_adder_multiple_async(async function (la) {
      await each_async(keyboard_keys_sorted(), async function (letter) {
        let bishops = await catholic_bishops_letter(letter);
        la(bishops);
      });
    });
    return v;
  });
}
