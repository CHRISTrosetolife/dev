import {html_style_bold} from "./html_style_bold.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
export function html_style_monospace_bold(component) {
    html_style_monospace(component);
    html_style_bold(component);
}
