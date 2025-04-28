import { html_hr } from "./html_hr.mjs";
import { html_button_app } from "./html_button_app.mjs";
import { app_name } from "./app_name.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { app_portfolio_app_learn_to_code_name } from "./app_portfolio_app_learn_to_code_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { me_name } from "./me_name.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_portfolio() {
  let root = html_style_default_initialize();
  html_p_text(
    root,
    string_combine_multiple([
      "Welcome to the online portfolio of apps created by ",
      me_name(),
      "!",
    ]),
  );
  let apps = [
    {
      name: app_portfolio_app_learn_to_code_name(),
      app_name: fn_name("app_learn_code"),
      description:
        "Teaches how to code in JavaScript. No prior experience needed.",
    },
  ];
  each(apps, function (a) {
    html_button_app(
      root,
      object_property_get(a, "app_name"),
      object_property_get(a, "name"),
    );
    html_p_text(object_property_get(a, "description"));
    html_hr(root);
  });
}
