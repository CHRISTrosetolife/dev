export function each_index(list, lambda) {
    let index = 0;
    for (let element of list) {
        lambda(element, index);
        index++;
    }
}
