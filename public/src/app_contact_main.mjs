import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { app_contact_dictionary } from "./app_contact_dictionary.mjs";
import { log } from "./log.mjs";
import { app_contact_respond_component } from "./app_contact_respond_component.mjs";
import { html_style_italic } from "./html_style_italic.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_share } from "./app_share.mjs";
import { html_bible_verse_navigation_next_data } from "./html_bible_verse_navigation_next_data.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_reference_code } from "./bible_reference_code.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { list_take_bible_books_new_context_random_vc } from "./list_take_bible_books_new_context_random_vc.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p } from "./html_p.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_contact_firebase_folder_combine } from "./app_contact_firebase_folder_combine.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_button } from "./html_button.mjs";
import { html_rows_set } from "./html_rows_set.mjs";
import { html_textarea_width_full_placeholder_storage_local } from "./html_textarea_width_full_placeholder_storage_local.mjs";
import { app_contact_instructions } from "./app_contact_instructions.mjs";
import { uuid } from "./uuid.mjs";
import { app_contact } from "./app_contact.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_style_default_initialize_axios } from "./html_style_default_initialize_axios.mjs";
import { html_button_next_after } from "./html_button_next_after.mjs";
export async function app_contact_main() {
  let context = {};
  let root = await html_style_default_initialize_axios();
  object_property_set(context, "version_code", "engbsb");
  await app_context_books_bible(context);
  let { book_code, chapter_code, verse_number_next } =
    list_take_bible_books_new_context_random_vc(context);
  book_code = storage_local_initialize(app_contact, "book", book_code);
  chapter_code = storage_local_initialize(app_contact, "chapter", chapter_code);
  verse_number_next = storage_local_initialize(
    app_contact,
    "verse_number",
    verse_number_next,
  );
  await firebase_initialize();
  let d = await app_contact_dictionary();
  let id = storage_local_initialize(app_contact, "id", await uuid());
  app_contact_instructions(root);
  let t = html_textarea_width_full_placeholder_storage_local(
    app_contact,
    root,
    "message",
    "Enter the message that you want to send to me:",
    "",
  );
  html_rows_set(t, 8);
  let response_p;
  html_button(root, "Send message to me", async function () {
    try {
      let { response, value } = app_contact_respond_component(t, response_p, d);
      let { output } = response;
      log({
        output,
      });
      if (output === null) {
        html_p_text(
          response_p,
          "💻 Computer program was not able to answer this message",
        );
        let file_name = file_name_json(id);
        let path = app_contact_firebase_folder_combine(file_name);
        await firebase_upload_object(path, {
          message: value,
        });
        html_p_text_multiple(response_p, [
          "📬 Your message has been sent to me",
          "📝 Lord-willing, I will answer",
          "⏰️ Please refresh this page later to see if I have answered",
        ]);
      } else {
        on_response(value, response);
      }
    } catch (e) {
      html_p_text(response_p, e);
    } finally {
      await verse_next();
    }
  });
  response_p = html_p(root);
  let verse_p = html_p(root);
  html_style_bold(verse_p);
  let { response, value } = app_contact_respond_component(t, response_p, d);
  let { output } = response;
  if (output !== null) {
    on_response(value, response);
    await verse_next();
  }
  function on_response(value, repsonse) {
    let { output, valid } = repsonse;
    let value_p = html_p_text(response_p, value);
    html_style_italic(value_p);
    let c = html_p_text(
      response_p,
      "💻 Computer program answered this message:",
    );
    html_style_font_size_default_multiplied(c, 0.9);
    let r = html_p_text(response_p, output);
    html_style_bold(r);
    let change = object_property_get(t, "change");
    if (valid) {
      change("");
    }
    html_scroll_center(response_p);
  }
  async function verse_next() {
    html_clear(verse_p);
    let chapter = app_gs_bible_chapter_name(book_code, chapter_code);
    let text = await firebase_download_bible_verse(
      object_property_get(context, "version_code"),
      chapter,
      verse_number_next,
    );
    let reference = bible_reference_code(chapter, [verse_number_next]);
    html_p_text(
      verse_p,
      string_combine_multiple(["📖 ", reference, " ✝️ ", text]),
    );
    html_button_next_after(verse_p, "verse", verse_next);
    let chapter_code_next, book_code_next;
    ({ verse_number_next, book_code_next, chapter_code_next } =
      await html_bible_verse_navigation_next_data(
        app_share,
        context,
        book_code,
        chapter_code,
        verse_number_next,
      ));
    book_code = storage_local_set(app_contact, "book", book_code_next);
    chapter_code = storage_local_set(app_contact, "chapter", chapter_code_next);
    verse_number_next = storage_local_set(
      app_contact,
      "verse_number",
      verse_number_next,
    );
  }
}
