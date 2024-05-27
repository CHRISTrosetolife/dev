import {html_span_text} from "./html_span_text.mjs";
export function app_dev_screen_overview() {
    return {
        name: function overview_name(root) {
            return html_span_text('overview');
            ;
        },
        screen: function overview_screen(root) {}
    };
    ;
}
