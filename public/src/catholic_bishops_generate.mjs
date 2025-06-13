import { list_includes_any } from "./list_includes_any.mjs";
import { catholic_bishop_ranks } from "./catholic_bishop_ranks.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_filter } from "./list_filter.mjs";
import { catholic_bishops_get } from "./catholic_bishops_get.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let v = await catholic_bishops_get();
    let v4 = list_filter(v, function (item) {
      let lower = string_case_lower(item);
      let split = string_split_space(lower);
      let items_to_exclude = catholic_bishop_ranks();
      let v3 = !list_includes_any(split, items_to_exclude);
      return v3;
    });
    return v4;
  }, catholic_bishops_generate);
}
