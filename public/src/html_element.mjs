export function html_element(parent, tag_name) {
    let {element} = parent;
    let result = document.createElement(tag_name);
    element.appendChild(result);
    return {
        element: result
    };
}
