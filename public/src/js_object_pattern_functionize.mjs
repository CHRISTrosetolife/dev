export function js_object_pattern_functionize(ast) {
    let vs = js_variable_declarators(ast, 'ObjectPattern');
    for (let v of vs) {
        let index_insert = js_init_index_insert(v);
        let {node} = v;
        let {id} = node;
        let {init} = node;
        let {properties} = init;
        each_reverse(properties, p => {
            let {key, value} = p;
            let {name: key_name} = key;
            let code_key_string = string_delimit(key_name);
            let key_string = js_parse_expression(code_key_string);
            let call = js_call(object_property_set.name, [id, key_string, value]);
            let {stack} = v;
            let variable_declaration_parent = list_get_end(stack, 2);
            list_insert(variable_declaration_parent, index_insert, call);
        });
        const init_new = js_call(object_new.name, []);
        object_property_set(node, 'init', init_new);
    }}
