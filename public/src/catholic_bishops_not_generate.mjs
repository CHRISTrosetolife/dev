import { list_includes_any } from "./list_includes_any.mjs";
import { catholic_bishop_ranks } from "./catholic_bishop_ranks.mjs";
import { catholic_bishops_get } from "./catholic_bishops_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_not_generate() {
  await generate_list_fn(async function () {
    let v = await catholic_bishops_get(include_split);
    return v;
  }, catholic_bishops_not_generate);
  function include_split(split) {
    let items_to_exclude = catholic_bishop_ranks();
    let v3 = !list_includes_any(split, items_to_exclude);
    return v3;
  }
}
