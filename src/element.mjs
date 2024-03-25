export function element(parent, tag_name) {
    let result = document.createElement(tag_name);
    parent.appendChild(result);
}