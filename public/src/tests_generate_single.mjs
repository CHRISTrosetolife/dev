import { tests_generate_single_generic } from "./tests_generate_single_generic.mjs";
import { identity } from "./identity.mjs";
export async function tests_generate_single(function_name, args, test_number) {
  let args_mappers = [identity, identity];
  let result_mapper = identity;
  await tests_generate_single_generic(
    function_name,
    args,
    test_number,
    args_mappers,
    result_mapper,
  );
}
