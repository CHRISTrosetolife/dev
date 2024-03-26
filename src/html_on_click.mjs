export function html_on_click(component, lambda) {
    let {element} = component;
    element.addEventListener("click", lambda);
}