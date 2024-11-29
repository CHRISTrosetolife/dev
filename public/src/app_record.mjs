import { app_record_lookup } from "./app_record_lookup.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { app_record_version_code } from "./app_record_version_code.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { app_record_verse } from "./app_record_verse.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { app_pray_word } from "./app_pray_word.mjs";
export async function app_record() {
  let version_code = app_record_version_code();
  let app_lambda = app_record;
  let app_verse_lambda = app_record_verse;
  await app_firebase({
    on_logged_in,
    on_initialized: html_style_a_plain,
  });
  async function on_logged_in(context) {
    let { root } = context;
    html_prayer(root, app_pray_word());
    html_button_next(root, async () => {
      context.mr = await html_recorder_media();
      await app_record_lookup(
        context,
        version_code,
        app_lambda,
        app_verse_lambda,
      );
    });
  }
}
