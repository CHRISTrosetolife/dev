import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { catholic_bishops_generate_pages } from "./catholic_bishops_generate_pages.mjs";
export async function catholic_bishops_get() {
  let pages = await catholic_bishops_generate_pages();
  let v2 = await list_adder_multiple_async(async function (la) {
    await each_async(pages, async function (item) {
      let v = await catholic_bishops_page(item);
      la(v);
    });
  });
  return v2;
}
