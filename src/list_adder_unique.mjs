export function list_adder_unique(lambda) {
    let result = [];
    lambda(item => {
        if (!list_includes(result, item)) {
            list_add(result, item);
        }
    });
    return result;
}