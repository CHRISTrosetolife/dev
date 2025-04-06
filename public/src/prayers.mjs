import { prayers_heal_afflicted } from "./prayers_heal_afflicted.mjs";
import { prayers_countries } from "./prayers_countries.mjs";
import { prayers_sins } from "./prayers_sins.mjs";
import { prayers_famous } from "./prayers_famous.mjs";
import { prayers_music } from "./prayers_music.mjs";
import { prayers_bible } from "./prayers_bible.mjs";
import { prayers_unity } from "./prayers_unity.mjs";
import { prayers_family } from "./prayers_family.mjs";
import { list_denest } from "./list_denest.mjs";
export function prayers() {
  let cough = "cough";
  let v = list_denest([
    "Cause me to perfectly obey the Father",
    "Cause me to perfectly obey Jesus",
    "Cause me to perfectly obey the Holy Spirit",
    "May the words of my mouth and the meditation of my heart be pleasing in your sight, O Lord, my Rock and my Redeemer",
    "Cause me to fulfill my ministry",
    "Cause me to be with Jesus today or rather live on earth than die",
    "Cause me to suffer in the flesh and cease from sin",
    "From now on cause all disciples of Jesus to suffer in the flesh and cease from sin",
    "Cause me to either speak perfectly or be silent",
    "If possible have mercy on all creation",
    "If possible may all come to repentance",
    "If possible may the names of all always be written in the book of life",
    "Lead all souls to Jesus",
    "May the coming of the day of God be hastened",
    prayers_family(),
    "Cause love and I to love",
    "Cause all Christians to love",
    "Cause love and I to be holy",
    "Cause every Christian to be holy",
    "Cause love and I to be merciful",
    "Cause all Christians to be perfect in mercy",
    "Cause all Christians to obey Scripture by not vowing",
    "Cause all my vows to be fulfilled",
    "Cause all vows of all Christians to be fulfilled",
    "Give love and I wisdom",
    "Wisen all Christians",
    "Give love and I humility",
    "Give all Christians humility",
    "Give love and I hope",
    "Cause love and I to be diligent",
    "Cause every Christian to be diligent",
    "Cause love and I to have zero negative emotions",
    "Cause love and I to be patient",
    "Cause all Christians to be patient",
    "Give love and I the faith of a mustard seed",
    "Give all Christians the faith of a mustard seed",
    "Cause love and I to be faithful in marriage",
    "Let the prayer of love and I be perfect",
    "Let the prayer of every Christian be perfect",
    "Cause love and I to be generous",
    "Cause every Christian to be generous",
    "Cause all to choose good",
    "Direct all my footsteps and thoughts",
    "Answer all the prayer requests I should be praying",
    "Answer all the prayer requests every Christian should be praying",
    "Heal me",
    "Heal my emotions",
    prayers_heal_afflicted("self-harm desires"),
    "Heal my thinking",
    prayers_heal_afflicted("hallucinations"),
    prayers_heal_afflicted("delusions"),
    "Heal my memory",
    "Heal my sleep",
    prayers_heal_afflicted("depression"),
    prayers_heal_afflicted(cough),
    "Heal my desire for soda",
    "Help me learn Cebuano",
    "Help my muscles grow",
    "Help me lose weight",
    "Help all Christians lose weight",
    "Help me fast",
    "Help all Christians fast",
    "Protect love and I from all demons",
    "Protect all humans and all angels of the Lord from all demons",
    "Let all Christians speak and behave worthily in the presence of heavenly angels",
    "Perfectly open up the eyes and ears of all to scripture and truth",
    "Perfectly engraft the word of God into every heart",
    "Cause all to be a perfect hearer and perfect doer of the word of God",
    "Cause the increase of your word being planted and watered to be perfectly maximized",
    "Cause all single Christians to be faithful in singleness",
    "Cause all married Christians to be faithful in marriage",
    prayers_unity(),
    prayers_bible(),
    prayers_sins(),
    "Let there be life and life abundantly",
    "Let all church meeting buildings be as You desire",
    "Let all Lord’s Supper bread and drink be as You desire",
    "Let all shepherds be humble",
    "Bless every elder",
    "Bless every overseer",
    "Bless every bishop",
    "Bless every pastor",
    "Bless every teacher",
    "Bless every apostle",
    "Bless every prophet",
    "Bless every deacon",
    "Bless every servant",
    "Bless every messenger",
    "Let all preaching be perfect",
    "Let all teaching be perfect",
    "Let all shepherding be perfect",
    "Let all stewardship be perfect",
    "Bless all worship",
    "Bless all worship singing voices",
    "May the voice of every Christian lead all to Christ",
    "Bless my singing voice",
    "Bless my speaking voice",
    "May my voice lead all listeners to Christ",
    "Bless Christian songwriting",
    "Bless Christian speaking",
    "Bless Christian writing",
    "Bless Christian prayer",
    prayers_music(),
    prayers_famous(),
    prayers_countries(),
    "Save and bless all Jews",
    "Save and bless all Muslims",
    "Save and bless all Hindus",
    "Save and bless all Buddhists",
    "Bless the nails of love",
    "Protect the teeth of love and I",
    "Bless my works",
    "Bless my word of God singing and speaking",
    "Bless my programming",
    "Bless my programming speed",
    "Bless my apps",
    "Bless my music",
    "Bless my songs",
    "Bless my composing and improvising",
    "Bless my piano",
    "Bless my teaching",
    "Bless my proofs",
    "Bless my thinking",
    "Bless my work",
    "Bless my business",
    "Bless the works of Christians",
    "Let me fellowship with any Christians from the generation Jesus spoke of",
    "Help orphans",
    "Help children",
    "Help widows",
    "Help foreigners",
    "Help the poor",
    "Help the elderly",
    "Help prisoners",
    "Help the sick",
  ]);
  return v;
}
