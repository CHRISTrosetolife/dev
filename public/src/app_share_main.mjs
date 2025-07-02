import { app_share_book_random } from "./app_share_book_random.mjs";
import { html_hash_set_lookup } from "./html_hash_set_lookup.mjs";
import { html_button } from "./html_button.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { app_share_verse_refresh } from "./app_share_verse_refresh.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function app_share_main(context) {
  let root = html_clear_scroll_top_context(context);
  let folders = [
    {
      text: "English",
      code: "engbsb",
    },
    {
      text: "Urdu and English",
      code: "urdgvu+engbsb",
    },
    {
      text: "Swahili (+254) and English",
      code: "swhulb+engbsb",
    },
    {
      text: "Hindi and English",
      code: "hin2017+engbsb",
    },
    {
      text: "Luganda (+256) and English",
      code: "lug+engbsb",
    },
    {
      text: "Telugu (India) and English",
      code: "tel2017+engbsb",
    },
    {
      text: "Hausa (+234) (Nigeria) and English",
      code: "hausa+engbsb",
    },
    {
      text: "French and English",
      code: "frasbl+engbsb",
    },
    {
      text: "Spanish and English",
      code: "spablm+engbsb",
    },
    {
      text: "Bengali (+880) and English",
      code: "benirv+engbsb",
    },
    {
      text: "Chichewa (Malawi) and English",
      code: "nya+engbsb",
    },
    {
      text: "bahasa Indonesia and English",
      code: "indags+engbsb",
    },
    {
      text: "Malay (Malaysia) and English",
      code: "zlmKSZI+engbsb",
    },
  ];
  each(folders, function (folder) {
    html_button(root, object_property_get(folder, "text"), async function () {
      let { lookup, book_code, chapter_code, verse_number_next } =
        app_share_book_random(context);
      let f = object_property_get(folder, "code");
      object_property_set(lookup, app_share_bible_folders(), f);
      html_hash_set_lookup(lookup);
      await app_share_verse_refresh(
        context,
        book_code,
        chapter_code,
        verse_number_next,
        true,
      );
    });
  });
}
