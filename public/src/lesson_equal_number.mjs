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
export function lesson_equal_number() {
    const description = 'equal ( === ) ( numbers )';
    const example_message = 'outputting whether or not two numbers are equal';
    return lesson_simple(source_get, example_before, description, example_message, [screen_before1, screen_before2]);
    function source_get() {
        let a = integer_random_digit_single_positive();
        let b;
        if (random_50_50()) {
            b = a;
        } else {
            b = integer_random_digit_single_positive();
        }
        return `console.log(${a} === ${b});`;
    }
    function screen_before1(parent) {
        html_p_text(parent, 'if "a" and "b" are numbers and a and b are the same number , then we can write : a = b');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '1 = 1');
        html_li_text(ul, '7 = 7');
        html_li_text(ul, '10 = 10');
        html_p_text(parent, 'either two numbers are equal to each other , or they are not equal to each other');
        html_p_text(parent, 'if "a" and "b" are equal to each other then a = b is true');
    }
    function screen_before2(parent) {
        html_p_text(parent, 'if "a" and "b" are numbers , and "a" and "b" are different from each other then a = b is false');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '8 = 9 is false');
        html_li_text(ul, '0 = -4 is false');
        html_li_text(ul, '2.0 = 2.1 is false');
        html_li_text(ul, '6 = -6 is false');
    }
    function example_before(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript to check if two numbers are equal or not , instead of using one equal sign ( ', '=', ' ) use three equal signs ( ', '===', ' )']);
    }
}
