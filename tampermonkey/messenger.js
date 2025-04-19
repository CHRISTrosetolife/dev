tampermonkey_messenger();
async function tampermonkey_messenger() {
    alert("working");
    await html_element_wait("div[aria-label=Thread composer]");
    alert("It's loaded!");
}
async function html_element_wait(selector) {
    let v = new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            let v2 = resolve(document.querySelector(selector));
            return v2;
        }
        let observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
        string_combine_multiple(["// If you get \"parameter 1 is not of type 'Node'\" error, see https://stackoverflow.com/a/77855838/492336"]);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
    return v;
}
function string_combine_multiple(list) {
    assert_arguments_length(arguments, 1);
    assert(list_is, [list]);
    let result = "";
    for (let l of list) {
        result = string_combine(result, l);
    }
    return result;
}
function assert(fn, args) {
    returns(fn, true, args);
}
function returns(fn, expected, args) {
    returns_message(fn, expected, args, message_get);
    function message_get() {
        return json_to(args);
    }
}
function returns_message(fn, expected, args, message_get) {
    let actual = fn(...args);
    let e = equal(actual, expected);
    assert_boolean_message(e, message_get);
}
function assert_boolean_message(condition, message_get) {
    if (condition === false) {
        error(message_get());
    }
}
function error(message) {
    throw new Error(message);
}
function equal(a, b) {
    return a === b;
}
function json_to(object) {
    return JSON.stringify(object);
}
function assert_arguments_length(args, expected) {
    assert(equal, [arguments.length, 2]);
    let actual = args.length;
    assert_message(equal, [actual, expected], () => ({
        message: "expecting different argument count",
        expected,
        actual
    }));
}
function assert_message(fn, args, message_get) {
    let v = assert_message_string(fn, args, function () {
        let j = json_to(message_get());
        let limit = 1000;
        let v2 = string_take_soft(j, limit);
        return v2;
    });
    return v;
}
function string_take_soft(j, limit) {
    if (string_size(j) > limit) {
        let v = string_take(j, limit);
        return v;
    }
    return j;
}
function string_take(input, count) {
    let length = string_size(input);
    assert_message(less_than_equal, [count, length], () => ({
        input,
        count,
        length
    }));
    return string_substring(input, 0, count);
}
function string_size(input) {
    return input.length;
}
function less_than_equal(a, b) {
    return a <= b;
}
function string_substring(input, start, end) {
    assert_arguments_length(arguments, 3);
    return input.substring(start, end);
}
function assert_message_string(fn, args, message_get) {
    returns_message(fn, true, args, message_get);
}
function list_is(candidate) {
    return Array.isArray(candidate);
}
function string_combine(a, b) {
    assert_arguments_length(arguments, 2);
    return a + b;
}