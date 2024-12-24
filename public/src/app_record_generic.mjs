import { object_property_set } from "./object_property_set.mjs";
import { app_record_lookup } from "./app_record_lookup.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { app_pray_word } from "./app_pray_word.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_record_generic(
  version_code,
  app_lambda,
  app_verse_lambda,
  mr_initialize,
) {
  await app_firebase({
    on_logged_in,
    on_initialized: html_style_a_plain,
  });
  async function on_logged_in(context) {
    let { root } = context;
    object_property_set(context, "app_lambda", app_lambda);
    html_prayer(root, app_pray_word());
    html_button_next(root, async () => {
      context.mr = await html_recorder_media();
      object_property_set(context, "version_code", version_code);
      await app_record_lookup(context, app_verse_lambda);
    });
  }
}
