import { bible_audio_player_range } from "./bible_audio_player_range.mjs";
export async function bible_audio_player_proverbs() {
  let book_from = "Proverbs";
  let book_to = book_from;
  await bible_audio_player_range(book_from, book_to);
}
