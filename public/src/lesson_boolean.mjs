import {lesson_simple} from "./lesson_simple.mjs";
import {html_p} from "./html_p.mjs";
import {list_add} from "./list_add.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {list_map} from "./list_map.mjs";
import {list_join} from "./list_join.mjs";
export function lesson_boolean() {
    const example_message = 'boolean ( true , false )';
    const description = 'outputting true or false';
    return lesson_simple(source_get, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'some questions can be answered using a "yes" or a "no"');
        html_p_text(parent, 'for example if someone asked "is the number two bigger than the number one ?" then the answer is "yes"');
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript the code for "yes" is ', 'true']);
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['in javascript the code for "no" is ', 'false']);
    }
    function source_get() {
        let answers = [true, false];
        list_add(answers, random_50_50());
        list_scramble(answers);
        let mapped = list_map(answers, a => `console.log(${a});`);
        return list_join(mapped, '\n');
    }
}
