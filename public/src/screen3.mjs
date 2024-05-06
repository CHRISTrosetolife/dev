import {html_hr} from "./html_hr.mjs";
import {html_style_centered} from "./html_style_centered.mjs";
import {floor} from "./floor.mjs";
import {mod} from "./mod.mjs";
import {range} from "./range.mjs";
import {html_style_background_color} from "./html_style_background_color.mjs";
import {equal} from "./equal.mjs";
import {app_learn_code_style_rounded_padded} from "./app_learn_code_style_rounded_padded.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {each_index} from "./each_index.mjs";
import {html_style_width_full} from "./html_style_width_full.mjs";
import {html_element} from "./html_element.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_ul} from "./html_ul.mjs";
import {string_combine} from "./string_combine.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function screen3(parent) {
    let divisor = 2;
    html_p_text(parent, string_combine('in the table below are some quotient and remainders for a divisor of ', divisor));
    html_p_text(parent, 'pay attention to the remainder');
    html_p_text(parent, 'here is what the letters mean :');
    let ul = html_ul(parent);
    html_li_text(ul, 'a is the dividend');
    html_li_text(ul, 'b is the divisor');
    html_li_text(ul, 'q is the quotient');
    html_li_text(ul, 'r is the remainder');
    let table = html_element(parent, 'table');
    html_style_width_full(table);
    let thead = html_element(table, 'thead');
    let tr_head = html_element(thead, 'tr');
    let columns_head = ['a', 'b', 'a / b', 'q', 'r'];
    each_index(columns_head, (c, c_index) => {
        let th = html_element(tr_head, 'th');
        html_inner_set(th, c);
        let index_last = list_index_last(columns_head);
        app_learn_code_style_rounded_padded(th);
        let color;
        if (equal(c_index, index_last)) {
            color = '#FFEB3B';
        } else {
            color = '#29B6F6';
        }
        html_style_background_color(th, color);
    });
    let tbody = html_element(table, 'tbody');
    each_index(range(11), (n, n_index) => {
        let even = equal(mod(n_index, divisor), 0);
        let tr_body = html_element(tbody, 'tr');
        let quotient = n / divisor;
        let columns_body = [n, divisor, quotient, floor(quotient), n % divisor];
        let index_last = list_index_last(columns_body);
        each_index(columns_body, (c, c_index) => {
            let divisor = 2;
            let td = html_element(tr_body, 'td');
            html_inner_set(td, c);
            html_style_centered(td);
            app_learn_code_style_rounded_padded(td);
            let color;
            if (equal(c_index, index_last)) {
                color = even ? '#F9E79F' : '#F7DC6F';
            } else {
                color = even ? '#D6EAF8' : '#AED6F1';
            }
            html_style_background_color(td, color);
        });
    });
    html_hr(parent);
    html_p_text(parent, 'did you notice how the remainder alternates between 0 and 1 ?');
    html_p_text(parent, 'did you notice that when the number is even the remainder is 0 ?');
    html_p_text(parent, 'did you notice that when the number is odd the remainder is 1 ?');
    html_p_text(parent, 'the remainder can be used to check whether a number is even or odd');
}
