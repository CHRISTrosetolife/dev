import {lesson_comparisons_source_get_get} from "./lesson_comparisons_source_get_get.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_li_text} from "./html_li_text.mjs";
export function lesson_less_than() {
    const description = 'less than ( `<` )';
    const example_message = 'outputting whether or not a number is less than another number';
    return lesson_simple(lesson_comparisons_source_get_get('<'), example_before, description, example_message, [screen_before1, screen_before2, screen_before3]);
    function screen_before1(parent) {
        html_p_text(parent, 'if "a" and "b" are numbers , then either "a" is less than "b" or "a" is not less than "b"');
        html_p_text(parent, 'we can write "a" is less than "b" as : a < b');
        html_p_text(parent, 'either a < b is true or a < b is false');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '1 < 2 is true');
        html_li_text(ul, '3 < 5 is true');
        html_li_text(ul, '6 < 4 is false');
        html_li_text(ul, '7 < 0 is false');
    }
    function screen_before2(parent) {
        html_p_text(parent, 'if "a" and "b" are equal to each other , then "a" is not less than "b"');
        html_p_text(parent, 'for example :');
        let ul = html_ul(parent);
        html_li_text(ul, '8 < 8 is false');
        html_li_text(ul, '0 < 0 is false');
        html_li_text(ul, '-2 < -2 is false');
    }
    function screen_before3(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript , to check if a number is less than another number or not , use the less than ( ', '<', ' ) sign']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop], ['1', ' , ', '2', ' and ', '3', ' are numbers']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop], ['\'JESUS\'', ' , ', '\'is\'', ' and ', '\'LORD\'', ' are strings']);
        html_style_alternate(parent, html_p, [html_style_monospace, noop, html_style_monospace, noop, html_style_bold], ['true', ' and ', 'false', ' are ', 'boolean']);
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['just as javascript has strings and numbers , javascript also has boolean ', 'true', ' and ', 'false']);
    }
    function example_before(parent) {}
}
