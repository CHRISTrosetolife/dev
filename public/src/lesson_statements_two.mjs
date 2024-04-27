import {lesson_console_log_quiz} from "./lesson_console_log_quiz.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {lesson_add_quiz} from "./lesson_add_quiz.mjs";
import {html_p} from "./html_p.mjs";
import {app_learn_code_unscramble} from "./app_learn_code_unscramble.mjs";
import {lesson_log_number_quiz} from "./lesson_log_number_quiz.mjs";
import {app_learn_code_quiz} from "./app_learn_code_quiz.mjs";
import {lesson_log_number_example} from "./lesson_log_number_example.mjs";
import {lesson_console_log_javascript} from "./lesson_console_log_javascript.mjs";
import {lesson_console_log_process_named} from "./lesson_console_log_process_named.mjs";
import {lesson_console_log_process_computer_program} from "./lesson_console_log_process_computer_program.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
import {object_new} from "./object_new.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {lesson_console_log_analogy_paper} from "./lesson_console_log_analogy_paper.mjs";
import {lesson_console_log_analogy_addition} from "./lesson_console_log_analogy_addition.mjs";
import {lesson_console_log_program_first} from "./lesson_console_log_program_first.mjs";
import {lesson_console_log_strings} from "./lesson_console_log_strings.mjs";
import {lesson_console_log_analogy_addition_symbol} from "./lesson_console_log_analogy_addition_symbol.mjs";
import {lesson_log_number_explain} from "./lesson_log_number_explain.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {noop} from "./noop.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
export function lesson_statements_two() {
    const example_message = 'with two statements';
    const description = example_message;
    return lesson_simple(() => {
        return `${lesson_console_log_quiz()}
${lesson_console_log_quiz()}`;
    }, example_before, description, example_message, [parent => {
        html_p_text(parent, 'in english , there are letters');
        html_p_text(parent, 'words have letters');
        html_p_text(parent, 'phrases have words');
        html_p_text(parent, 'sentences have phrases');
        html_p_text(parent, 'paragraphs have sentences');
        html_p_text(parent, 'and so on');
        html_style_alternate(parent, html_p, [noop, html_style_bold], ['this is a ', 'hierarchy']);
        html_style_alternate(parent, html_p, [noop, html_style_bold], ['a hierarchy can also be called a ', 'tree']);
        html_p_text(parent, 'trees are very important in computer programming');
    }]);
    function example_before(parent) {
        html_style_alternate(parent, html_p, [noop, html_style_bold], ['in javascript , a ', 'statement', ' is analogous to a sentence in english']);
        html_style_alternate(parent, html_p, [noop, html_style_monospace], ['at the end of a statement there should be a semicolon ( ', ';', ' )']);
        html_p_text(parent, 'statements are ran one after the other');
        html_p_text(parent, 'if there are two statements , the first statement will run and then the second statement will run');
    }
}
