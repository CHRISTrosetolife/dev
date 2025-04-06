import { emoji_music_up } from "./emoji_music_up.mjs";
import { emoji_wrap_music } from "./emoji_wrap_music.mjs";
import { emojis_trinity } from "./emojis_trinity.mjs";
import { error } from "./error.mjs";
import { html_hr } from "./html_hr.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
import { me_phone } from "./me_phone.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { app_share_main } from "./app_share_main.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_link } from "./html_style_link.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
import { app_share_verse } from "./app_share_verse.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { noop } from "./noop.mjs";
import { app_share } from "./app_share.mjs";
import { html_bible_verse_navigation_next } from "./html_bible_verse_navigation_next.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { app_share_verse_download } from "./app_share_verse_download.mjs";
import { list_add } from "./list_add.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_button_copy_get } from "./html_button_copy_get.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
import { string_split_plus } from "./string_split_plus.mjs";
import { app_share_bible_folders } from "./app_share_bible_folders.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_record_verse_buttons } from "./app_record_verse_buttons.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_share_verse_refresh(
  context,
  book_code,
  chapter_code,
  verse_number_next,
) {
  let lookup = html_hash_lookup();
  let { root } = context;
  let chapter = app_gs_bible_chapter_name(book_code, chapter_code);
  let chapter_next = chapter;
  let book_code_next;
  let chapter_code_next;
  let verse_numbers = [];
  app_record_verse_buttons(
    context,
    book_code,
    chapter_code,
    app_share_verse_refresh,
  );
  let bible_folders_text;
  let bible_folders;
  bible_folders_text_set(
    object_property_get(lookup, app_share_bible_folders()),
  );
  let texts = [];
  let copy_message = html_div(root);
  let texts_component = html_div(root);
  let verses_component = html_p(root);
  let lookup_next;
  let next_text = "Copy next verse to clipboard: ";
  html_span_text(root, next_text);
  let next_url_component = html_span(root);
  let location = object_property_get(window, "location");
  let pathname = object_property_get(location, "pathname");
  let origin = object_property_get(location, "origin");
  let without_hash = string_combine_multiple([origin, pathname]);
  let url_next;
  let texts_extra_chosen = [];
  await download();
  html_button_add(root, "verse", download);
  html_button_copy_get(root, copy_get);
  function copy_get() {
    let v2 = list_join_newline(
      list_concat_multiple([
        texts_extra_chosen,
        [bible_reference_code(chapter, verse_numbers)],
        texts,
        ["", string_combine_multiple([next_text, url_next])],
      ]),
    );
    return v2;
  }
  let greet = "👋🏿 Greetings in the name of Jesus ✝️ !";
  let praise = string_combine_multiple([
    "Praise the LORD our God ",
    emojis_trinity(),
  ]);
  let texts_extra = [
    {
      button_text: "👋🏿 Greet",
      value: greet,
    },
    {
      button_text: "👋🏿 Introduce",
      value: string_combine_multiple([
        greet,
        " My parents named me Jared Mathis. I believe Jesus died ✝️ , was buried 🪨 and rose ⬆️ to life ⛪ . I preach 🗣 the gospel ✝️. ",
        emoji_wrap_music("I sing 🎤️ and play 🎹 Bible songs"),
        " .",
      ]),
    },
    {
      button_text: "👌🏿 How r u",
      value:
        "😁 I am doing good 💯 through the grace of God 👌🏿 But please pray for my health 🙏🏿",
    },
    {
      button_text: "🙏🏿 Bless",
      value: string_combine_multiple([
        "🙏🏿 God bless you in the name of the Father and of the Son and of the Holy Spirit amen ",
        emojis_trinity(),
      ]),
    },
    {
      button_text: "🙏🏿 Amen",
      value: "🙏🏿 Amen ✝️",
    },
    {
      button_text: "🙏🏿 Glory",
      value: string_combine_multiple(["🙏🏿 Glory to God ", emojis_trinity()]),
    },
    {
      button_text: "🙏🏿 Thanks",
      value: "🙌🏿 Thank you very much 😁",
    },
    {
      button_text: string_combine_multiple([emoji_music_up(), " Praise"]),
      value: emoji_wrap_music(praise),
    },
    {
      button_text: "📞 Phone",
      value: string_combine_multiple([
        "📞 Here is my WhatsApp phone number: ",
        me_phone(),
        " ☎️",
      ]),
    },
  ];
  each(texts_extra, function (t) {
    let b = html_button_text_click(
      root,
      object_property_get(t, "button_text"),
      async function () {
        let v = object_property_get(t, "value");
        html_style_display_none(b);
        list_add(texts_extra_chosen, v);
        list_add(texts_extra_chosen, "");
        html_p_text(texts_component, v);
        await copy();
      },
    );
  });
  html_button_home(root, function () {
    let v3 = app_share_main(context);
    return v3;
  });
  function bible_folders_text_set(value) {
    bible_folders_text = value;
    bible_folders = string_split_plus(bible_folders_text);
  }
  async function download() {
    list_add(verse_numbers, verse_number_next);
    await app_share_verse_download(
      bible_folders,
      chapter_next,
      verse_number_next,
      texts,
      verses_component,
      verse_numbers,
    );
    let p = bible_chapter_name_parse(chapter_next);
    book_code = object_property_get(p, "book_code");
    chapter_code = object_property_get(p, "chapter_code");
    let next = await new Promise(async function (resolve) {
      await html_bible_verse_navigation_next(
        app_share,
        book_code,
        chapter_code,
        verse_number_next,
        function (book_code, chapter, verse_number_next) {
          let v4 = resolve({
            book_code,
            chapter,
            verse_number_next,
          });
          return v4;
        },
        context,
        noop,
      );
    });
    book_code_next = object_property_get(next, "book_code");
    chapter_code_next = object_property_get(next, "chapter");
    chapter_next = app_gs_bible_chapter_name(book_code_next, chapter_code_next);
    verse_number_next = object_property_get(next, "verse_number_next");
    lookup_next = {};
    object_property_set(
      lookup_next,
      app_share_bible_folders(),
      bible_folders_text,
    );
    object_property_set(lookup_next, app_share_chapter(), chapter_next);
    object_property_set(lookup_next, app_share_verse(), verse_number_next);
    let joined = html_hash_unparse(lookup_next);
    url_next = string_combine_multiple([without_hash, "#", joined]);
    html_inner_set(next_url_component, url_next);
    html_style_link(url_next)(next_url_component);
    html_on_click(next_url_component, async function () {
      await app_share_verse_refresh(
        context,
        book_code_next,
        chapter_code_next,
        verse_number_next,
      );
    });
    await copy();
  }
  async function copy() {
    html_clear(copy_message);
    let message;
    try {
      await clipboard_copy_web(copy_get());
      message = "The following has been copied to your clipboard: ";
    } catch (e) {
      console.error(e);
      message = "Error copying to your clipboard: ";
    }
    html_p_text(copy_message, message);
    html_hr(copy_message);
  }
}
