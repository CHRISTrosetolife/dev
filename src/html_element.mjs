export function html_element(parent, tag_name) {
    let result = document.createElement(tag_name);
    parent.appendChild(result);
    return result
}