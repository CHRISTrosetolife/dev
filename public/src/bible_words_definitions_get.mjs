import { function_definition } from "./function_definition.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function bible_words_definitions_get(language, list) {
  let result = [];
  let definition_get = await function_definition(language);
  await each_log_async(list, lambda);
  return result;
  async function lambda(item) {
    let { word, definitions } = await definition_get(item.word);
    if (list_empty_not_is(definitions)) {
      list_add(result, {
        word,
        definitions,
      });
    }
  }
}
