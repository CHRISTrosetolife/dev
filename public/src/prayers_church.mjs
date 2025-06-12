import { prayers_music } from "./prayers_music.mjs";
import { prayers_voices } from "./prayers_voices.mjs";
import { prayers_church_leadership } from "./prayers_church_leadership.mjs";
import { prayers_unity } from "./prayers_unity.mjs";
import { prayers_sanctify } from "./prayers_sanctify.mjs";
import { prayers_bible } from "./prayers_bible.mjs";
export function prayers_church() {
  return [
    prayers_bible(),
    prayers_sanctify(),
    prayers_unity(),
    prayers_church_leadership(),
    prayers_voices(),
    prayers_music(),
  ];
}
