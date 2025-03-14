import { list_map } from "./list_map.mjs";
import { list_between_surround } from "./list_between_surround.mjs";
import { function_name_to_url_github_style_link_list_bewteen_noop } from "./function_name_to_url_github_style_link_list_bewteen_noop.mjs";
import { me_phone } from "./me_phone.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { me_email } from "./me_email.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { function_name_to_url_github_style_link } from "./function_name_to_url_github_style_link.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_rename_alias } from "./function_rename_alias.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_resume_audio_bible } from "./app_resume_audio_bible.mjs";
import { noop } from "./noop.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { app_resume_header_3 } from "./app_resume_header_3.mjs";
import { app_resume_header_2 } from "./app_resume_header_2.mjs";
import { app_resume_header } from "./app_resume_header.mjs";
import { html_replace_nb } from "./html_replace_nb.mjs";
import { html_spacer_bullet } from "./html_spacer_bullet.mjs";
import { html_email } from "./html_email.mjs";
import { html_phone } from "./html_phone.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p } from "./html_p.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_resume() {
  let print = false;
  let root = html_style_default_initialize();
  if (print) {
    html_style_default_font_size(1.2);
    html_style_a_plain();
  }
  app_resume_header(root, "JARED MATHIS");
  let row = html_p(root);
  html_style_centered(row);
  html_span_text(row, html_replace_nb("1612 Orlando Circle South"));
  html_spacer_bullet(row);
  html_span_text(row, html_replace_nb("Jacksonville, Florida 32207"));
  html_spacer_bullet(row);
  html_phone(row, me_phone());
  html_spacer_bullet(row);
  html_email(row, me_email());
  app_resume_header_2(root, "Projects");
  let dev = app_resume_header_3(root, "Development Tools");
  html_cycle_p(
    root,
    function_name_to_url_github_style_link_list_bewteen_noop([
      fn_name("function_transform_args"),
      fn_name("js_parse"),
      fn_name("terminal"),
      fn_name("function_aliases"),
      fn_name("js_dollar"),
      fn_name("watch"),
      fn_name("function_rename"),
    ]),
    string_combine_multiple([
      'Transforms` source code files through its `abstract syntax tree`; Includes a `terminal` for running functions, `aliases` for running commonly used functions and `$-prefixed "macros"` that transform code `when a file is saved`; For example: ',
      function_rename_alias(),
      " is an alias for `",
      fn_name("function_rename"),
      "` that renames a function across all files, including fixing all JavaScript imports",
    ]),
  );
  html_style_link_blank("dev.html")(dev);
  html_cycle_p(root, [noop], "");
  let learn_code = app_resume_header_3(root, "Learn to Code");
  html_style_link_blank("learn_code.html")(learn_code);
  html_cycle_p(
    root,
    [noop],
    "User is presented with JavaScript programming concepts; For each concept: User is presented with randomly generated source code and output examples; Then user chooses correct output given randomly generated source code; Then user chooses correct source code given a randomly generated output",
  );
  let ceb = app_resume_header_3(root, "Language Vocabularly Learning");
  html_cycle_p(
    root,
    list_concat(
      list_between_surround(
        list_map(
          [
            fn_name("bible_words_language_count"),
            fn_name("english_words_dictionary"),
          ],
          function_name_to_url_github_style_link,
        ),
        noop,
      ),
      [
        html_style_link_blank("ceb2.html"),
        html_style_link_blank("tgl.html"),
        html_style_link_blank("el.html"),
        html_style_link_blank("he.html"),
        html_style_link_blank("en_ur.html"),
      ],
    ),
    'Allows user to learn most common words in a language; Most frequent words in English are computed from either the `Bible` or the `most common words found in an English dictionary`; User is presented with words in one language and must remember choose the corresponding word or words in another language; Sometimes user is presented with words from the language they already know and sometimes the user is presented with words from the language they are learning; "both directions" are taught. There are apps for: `English to Cebuano`, `English to Tagalog (with audio)`, `English to Biblical Greek (with Audio)`, `English to Biblical Hebrew` and `Urdu to English`.',
  );
  if (false) {
    app_resume_audio_bible(root);
  }
  let memorize = app_resume_header_3(root, "Memorize Bible");
  html_style_link_blank("memorize.html")(memorize);
  html_cycle_p(
    root,
    [
      noop,
      function_name_to_url_github_style_link(fn_name("app_memorize_keyboard")),
      noop,
    ],
    "Allows user to memorize a chapter of the Bible; User types first letter of each word on physical or `onscreen keyboard`; Words are gradually removed until user is reciting completely from memory; User can choose to memorize chapters from multiple versions of the Bible",
  );
  app_resume_header_2(root, "Skills");
  html_p_text(
    root,
    "JavaScript; Automation; Parsing and transforming code (writing code that writes code); Front-end programming; Back-end programming; Adapting; Communication; Working with difficult people",
  );
  app_resume_header_2(root, "Professional Experience");
  app_resume_header_3(root, "Contractor");
  html_p_text(
    root,
    "~2022: Programmer; Created debt collections software; Used JavaScript, C#, AngularJS and T-SQL",
  );
  app_resume_header_3(root, "Greenshades");
  html_p_text(
    root,
    "~2020: Software Developer; Created tax software; Used C# and T-SQL",
  );
  app_resume_header_3(root, "RF-SMART/ICS");
  html_p_text(
    root,
    "~2017 - ~2019: Senior Software Engineer; Created warehouse software; Used C#, React, Knockout, EntityFramework, MySQL",
  );
  app_resume_header_3(
    root,
    "Genesys/Interactive Intelligence/Latitude Software",
  );
  html_p_text(
    root,
    "~2009 - ~2017: From Intern to Team Lead, Senior Software Engineer; Created debt collections software; Used C#, AngularJS, EntityFramework, T-SQL and IIS",
  );
  app_resume_header_2(root, "Education");
  app_resume_header_3(root, "University of North Florida");
  html_p_text(
    root,
    "Bachelor of Science in Computer Science ~2013; Computer Science Student of the Year Award",
  );
}
