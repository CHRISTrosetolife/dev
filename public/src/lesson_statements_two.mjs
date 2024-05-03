import {lesson_statements_two_quiz} from "./lesson_statements_two_quiz.mjs";
import {lesson_console_log_quiz} from "./lesson_console_log_quiz.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {lesson_add_quiz} from "./lesson_add_quiz.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
export function lesson_statements_two() {
    const description = 'two console.log statements';
    const example_message = 'with two statements';
    return lesson_simple(lesson_statements_two_quiz, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'statements are ran one after the other');
        html_p_text(parent, 'if there are two statements , the first statement will run and then the second statement will run');
    }
}
