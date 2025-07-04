import { string_split_space } from "./string_split_space.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_filter } from "./list_filter.mjs";
import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { catholic_bishops_generate_pages } from "./catholic_bishops_generate_pages.mjs";
export async function catholic_bishops_get(include_split) {
  let pages = await catholic_bishops_generate_pages();
  let v2 = await list_adder_multiple_async(async function (la) {
    await each_async(pages, async function (item) {
      let v = await catholic_bishops_page(item);
      let v4 = list_filter(v, function (item) {
        let lower = string_case_lower(item);
        let split = string_split_space(lower);
        let v3 = include_split(split);
        return v3;
      });
      la(v4);
    });
  });
  return v2;
}
