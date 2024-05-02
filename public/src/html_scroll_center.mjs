export function html_scroll_center(current_element) {
    current_element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}
