import { catholic_bishops_generate_pages } from "./catholic_bishops_generate_pages.mjs";
import { catholic_bishops_generate_folder } from "./catholic_bishops_generate_folder.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { each_async } from "./each_async.mjs";
import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function catholic_bishops_generate() {
  await generate_list_fn(async function () {
    let pages = await catholic_bishops_generate_pages();
    let v2 = await list_adder_multiple_async(async function (la) {
      let folder = catholic_bishops_generate_folder();
      await each_async(pages, async function (item) {
        let page_url = string_combine_multiple([folder, item]);
        let v = await catholic_bishops_page(page_url);
        la(v);
      });
    });
    return v2;
  }, catholic_bishops_generate);
}
