import {html_style_alternate_bold} from "./html_style_alternate_bold.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function screen1(parent) {
    html_p_text(parent, 'here is an example of division in math : a / b');
    html_style_alternate_bold(parent, ['when a number ( like "a" ) is divided by another number ( like "b" ) , the first number is called the ', 'dividend']);
    html_style_alternate_bold(parent, ['the second number is called the ', 'divisor']);
    html_p_text(parent, 'for example in 7 / 4 the dividend is 7 and the divisor is 4');
}
