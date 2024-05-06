import {html_p_text} from "./html_p_text.mjs";
export function screen2(parent) {
    html_p_text(parent, 'after the divisor divides the dividend , there is a quotient and a remainder');
    html_p_text(parent, 'the following formula will give the answer to the division with a decimal point :');
    html_p_text(parent, 'quotient + ( remainder / divisor )');
    html_p_text(parent, 'for example 7 / 4 has a quotient of 1 and a remainder of 3');
    html_p_text(parent, '1 + ( 3 / 4 ) = 1 + 0.75 = 1.75');
}
