import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_li_text} from "./html_li_text.mjs";
export function lesson_equal_not_number() {
    const description = 'not equal ( !== ) ( numbers )';
    const example_message = 'outputting whether or not two numbers are not equal';
    return lesson_simple(source_get, example_before, description, example_message, [screen_before1, screen_before2]);
    function source_get() {
        let a = integer_random_digit_single_positive();
        let b;
        if (random_50_50()) {
            b = a;
        } else {
            b = integer_random_digit_single_positive();
        }
        return `console.log(${a} !== ${b});`;
    }
    function screen_before1(parent) {
        html_p_text(parent, 'if "a" and "b" are numbers and a and b are different from each other , then we can write : a ≠ b');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '1 ≠ 2');
        html_li_text(ul, '7 ≠ 5');
        html_li_text(ul, '10 ≠ -10');
        html_p_text(parent, 'either : a = b or a ≠ b');
        html_p_text(parent, 'if "a" and "b" are not equal to each other then a ≠ b is true');
        html_p_text(parent, '≠ is the opposite of =');
    }
    function screen_before2(parent) {
        html_p_text(parent, 'if "a" and "b" are numbers , and "a" and "b" are are the same number then a ≠ b is false');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '8 ≠ 8 is false');
        html_li_text(ul, '0 ≠ 0 is false');
        html_li_text(ul, '2 ≠ 2 is false');
    }
    function example_before(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript to check if two numbers are not equal , instead of using the not equal sign ( ', '≠', ' ) use this : ', '!==']);
    }
}
