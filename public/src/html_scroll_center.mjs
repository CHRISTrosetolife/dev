export function html_scroll_center(component) {
    let {element} = component
    current_element.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}
