import { js_dollar_grandparent } from "./js_dollar_grandparent.mjs";
import { list_get } from "./list_get.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
export async function js_dollar_grandparent_next(v, lambda) {
  await js_dollar_grandparent(v, async function (a) {
    let { s2, index } = a;
    let next = list_get(s2, index);
    await lambda(
      object_merge_strict(a, {
        next,
      }),
    );
  });
}
