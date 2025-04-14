import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_dev_screen_overview() {
  let v = {
    name: function overview_name(root) {
      let v2 = html_span_text(root, "overview");
      return v2;
    },
    screen: function overview_screen(root) {
      html_cycle_code_multiple(root, [
        "This is an introduction to the development tools I've created for myself",
        "The primary goal is speed: what tools can speed up repetitive development tasks? For example I have a script that automatically adds the let JavaScript keyword so I do not have to type it out anymore",
        "one goal was that a recent college or bootcamp graduate could get started quickly",
        "rather than experts-only , be beginner-friendly",
        "with a larger candidate pool , an employer can find developers easier",
        "therefore , the code should favor simplicity :",
        "to keep the programming simple , `function`s are the basic building block , rather than classes or object-oriented programming",
      ]);
    },
  };
  return v;
}
