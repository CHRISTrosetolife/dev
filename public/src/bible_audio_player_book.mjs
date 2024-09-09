import { bible_audio_player_range } from "./bible_audio_player_range.mjs";
export async function bible_audio_player_book(book_from) {
  let book_to = book_from;
  await bible_audio_player_range(book_from, book_to);
}
