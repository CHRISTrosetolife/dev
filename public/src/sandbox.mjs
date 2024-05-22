import { ceb_dictionary_page_each } from "./ceb_dictionary_page_each.mjs";
import { log } from "./log.mjs";
import { yyy8Uu_translate_upload } from "./yyy8Uu_translate_upload.mjs";
import { yyy8Uu_translate } from "./yyy8Uu_translate.mjs";
export async function sandbox() {
  await ceb_dictionary_page_each((v) => {
    let { url, letter, page_number, parsed } = v;
    if (letter === "a" && page_number === 1) {
      log(url);
    }
  });
  return;
  if (false) {
    await yyy8Uu_translate_upload();
  }
  let filtered = await yyy8Uu_translate();
}
