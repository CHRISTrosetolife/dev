import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { http_cache } from "./http_cache.mjs";
export async function sandbox() {
  let url = "https://www.ccel.org/ccel/b/bible/ceb_p/cache/ceb_p.txt";
  let text = await http_cache(url);
  let symbols = list_adder_unique((la) => each(text, la));
}
