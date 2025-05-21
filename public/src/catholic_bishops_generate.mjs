import { string_includes_not } from "./string_includes_not.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { catholic_bishops_generate_pages } from "./catholic_bishops_generate_pages.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { each_async } from "./each_async.mjs";
import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let pages = await catholic_bishops_generate_pages();
    let v2 = await list_adder_multiple_async(async function (la) {
      await each_async(pages, async function (item) {
        let v = await catholic_bishops_page(item);
        let lower = string_case_lower(v);
        if (string_includes_not(lower, "sister")) {
          la(v);
        }
      });
    });
    return v2;
  }, catholic_bishops_generate);
}
