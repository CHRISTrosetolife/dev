import { url_repository } from "./url_repository.mjs";
export function url_repository_commit(commit_id) {
  return url_repository() + "commit/" + commit_id;
}
