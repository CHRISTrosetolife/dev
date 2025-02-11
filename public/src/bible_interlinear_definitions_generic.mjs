import { bible_interlinear_definition_hub } from "./bible_interlinear_definition_hub.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_second } from "./list_second.mjs";
import { list_sort_map } from "./list_sort_map.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { bible_interlinear_each_token_strong_number } from "./bible_interlinear_each_token_strong_number.mjs";
export async function bible_interlinear_definitions_generic(
  bible_interlinear_cache_fn,
  language,
) {
  let counts = {};
  let books = await bible_interlinear_cache_fn();
  bible_interlinear_each_token_strong_number(books, (strong) => {
    object_property_increment(counts, strong);
  });
  let pairs = list_adder((la) => {
    each_object(counts, (strong, count) => {
      la([strong, count]);
    });
  });
  list_sort_map(pairs, (p) => list_second(p));
  list_reverse(pairs);
  let taken = list_take(pairs, 50);
  let mapped = list_map(taken, list_first);
  let mapped2 = await list_map_async(mapped, async (strong) =>
    object_merge_strict(
      {
        strong,
      },
      await bible_interlinear_definition_hub(language, strong),
    ),
  );
  return mapped2;
}
