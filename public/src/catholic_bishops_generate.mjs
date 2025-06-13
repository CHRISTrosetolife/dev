import { catholic_bishops_get } from "./catholic_bishops_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let v = await catholic_bishops_get();
    return v;
  }, catholic_bishops_generate);
}
