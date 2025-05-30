import { list_includes_not } from "./list_includes_not.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { catholic_bishops_generate_pages } from "./catholic_bishops_generate_pages.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { each_async } from "./each_async.mjs";
import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_difference } from "./list_difference.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let pages = await catholic_bishops_generate_pages();
    let v2 = await list_adder_multiple_async(async function (la) {
      await each_async(pages, async function (item) {
        let v = await catholic_bishops_page(item);
        let v4 = list_filter(v, function (item) {
          let lower = string_case_lower(item);
          let split = string_split_space(lower);
          let v3 = list_includes_not(split, "sister");
          return v3;
        });
        let difference = list_difference(v, v4);
        la(v4);
      });
    });
    return v2;
  }, catholic_bishops_generate);
}
