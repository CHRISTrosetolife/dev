import {function_names} from "./function_names.mjs";
import {function_transform} from "./function_transform.mjs";
export async function function_transform_all(lambda_name, args) {
    let function_names_result = await function_names();
    for (let function_name of function_names_result) {
        console.log({
            function_name
        });
        await function_transform(lambda_name, function_name, args);
    }
}
