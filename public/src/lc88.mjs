import { list_set } from "./list_set.mjs";
import { list_get } from "./list_get.mjs";
export function lc88(nums1, m, nums2, n) {
  let index_1 = m - 1;
  let index_2 = n - 1;
  let index_current = m + n - 1;
  let value_1 = list_get(nums1, index_1);
  let value_2 = list_get(nums2, index_2);
  let value;
  if (value_1 > value_2) {
    value = value_1;
    index_1--;
  } else {
    value = value_2;
    index_2--;
  }
  list_set(num, index_current, value_1);
}
