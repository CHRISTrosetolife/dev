import { html_button } from "./html_button.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { grace_good_generic_copy } from "./grace_good_generic_copy.mjs";
import { each } from "./each.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_good() {
  let body = html_style_default_initialize();
  let morning = "morning";
  let messages = [morning, "night"];
  each(messages, function (message) {
    html_button(body, message, function () {
      grace_good_generic_copy(message);
      if (message === morning) {
        html_p_text(
          body,
          "Our Father, Who art in heaven, hallowed be Thy Name; Thy kingdom come; Thy will be done on earth as it is in heaven; give us this day our daily bread; And forgive us our trespasses as we forgive those who trespass against us; Lead us not into temptation, but deliver us from evil",
        );
        html_prayer(body, [
          "Cause me to perfectly obey the Father",
          "Cause me to perfectly obey Jesus",
          "Cause me to perfectly obey the Holy Spirit",
          "Cause me to be with Jesus today",
          "Bless our marriage",
          "Bless trip",
          "Bless our children",
          "Cause me to fulfill my ministry",
          "Cause me to suffer in the flesh and cease from sin",
          "Cause me to either speak perfectly or be silent",
          "Bless the family of love",
          "Bless papa",
          "Bless mama",
          "Bless sister",
          "Bless brothers",
          "Bless my family",
          "Bless Kent",
          "Bless Merry",
          "Bless Jess",
          "Bless Nancy",
          "Bless Sharon",
          "Bless Thom",
          "Bless Micah",
          "Bless Alexa",
          "Bless Thea",
          "Bless Hallie",
          "Bless Brandon",
          "Bless Eric",
          "Bless Naila",
          "Bless Peter",
          "Bless Naheed",
          "Bless Alex",
          "Bless Adam",
          "Bless Alan",
          "Bless Christian",
          "Bless Erica",
          "Bless Shalini",
          "Bless Jennifer",
          "Bless Mandi",
          "Bless Tom",
          "Bless Lindsay",
          "Bless Mike",
          "Bless Sherry",
          "Bless Joseph",
          "Bless Metta",
          "Bless Jakob",
          "Bless Susie",
          "Bless Michael",
          "Bless Nancy",
          "Bless Zachary",
          "Cause me to love",
          "Give me wisdom",
          "Give me humility",
          "Give me faith",
          "Give me hope",
          "Give me patience",
          "Cause me to be faithful in marriage",
          "Let my prayer be perfect",
          "Lead all souls to Jesus",
          "Cause all to choose good",
          "Cause all Christians to love",
          "Wisen all Christians",
          "Give all Christians humility",
          "Give all Christians faith",
          "Give all Christians patience",
          "Cause Christians to be faithful in singleness",
          "Cause Christians to be faithful in marriage",
          "Unite the church",
          "Unite the church about Jesus",
          "Unite the church about the Holy Spirit",
          "Unite the church about the Bible canon",
          "Unite the church about tradition",
          "Unite the church about head coverings",
          "Unite the church about transgender",
          "Unite the church about homosexuality",
          "Unite the church about women in leadership",
          "Unite the church about marriage roles",
          "Unite the church about bible copyrights",
          "Unite the church about believer-to-believer lawsuits",
          "Unite the church about abortion",
          "Unite Catholics",
          "Unite Eastern Orthodox",
          "Unite Oriental Orthodox",
          "Unite Church of the East",
          "Unite Anglican",
          "Unite Lutheran",
          "Unite Presbyterian",
          "Unite Methodist",
          "Unite Pentecostal",
          "Unite Baptist",
          "Unite Assemblies of God",
          "Unite Seventh-Day Adventist",
          "Unite Mormons",
          "Unite Jehovah's Witness",
          "May all shepherds be in communion with each other",
          "May all shepherds be humble",
          "Heal me",
          "Help me learn Cebuano",
          "Help my muscles grow",
          "Let there be harvest workers",
          "Give all Christians the Spirit of wisdom and of revelation in the knowledge of God",
          "Enlighten the eyes of the hearts of every Christian",
          "Let all Christians know the hope God called us",
          "Let all Christians know the riches of God's glorious inheritance in the saints",
          "Let Christians know the immeasurable greatness of God's power toward us who believe",
          "May the God of peace himself sanctify all Christians completely",
          "May the whole spirits and souls and bodies of all Christians be kept blameless at the coming of our Lord Jesus Christ",
          "Make every Christian worthy of God's calling",
          "Fulfill every resolve for good and every work of faith of every Christian by God's power",
          "Comfort the hearts of every Christian",
          "Establish the hearts of all Christans in every good work and word",
          "Deliver all Christians from wicked and evil men",
          "Direct the hearts of every Christian to the love of God and to the steadfastness of Christ",
          "Give every Christian peace at all times in every way",
          "Equip every Chritian with everything good to do the will of God",
          "Work in every Christian that which is pleasing in God's sight, through Jesus Christ",
          "May grace and peace be multiplied to every Christian in the knowledge of God and of Jesus our Lord",
          "May all go well with every Christian",
          "May every Christian be in good health",
          "May it go well with the soul of every Christian",
          "Let there be no adultery",
          "Let there be no murder",
          "Let there be no thievery",
          "Let there be no doubt",
          "Let there be no jealousy or envy",
          "Let there be no pornography",
          "Let there be no rape",
          "Let there be no sexual sin",
          "Let there be no kidnapping",
          "Let there be no hostages",
          "Let there be no unnecessary war",
          "Let there be no violence",
          "Let there be no drugs",
          "Let there be no greed",
          "Let there be life and life abundantly",
          "Let all church meeting buildings be as You desire",
          "Let all preaching be perfect",
          "Let all teaching be perfect",
          "Let all shepherding be perfect",
          "Bless all worship",
          "Bless all worship singing voices",
          "May the voice of every Christian lead all to Christ",
          "Bless Christian songwriting",
          "Bless Christian speaking",
          "Bless Christian writing",
          "Bless Christian prayer",
          "Help the president",
          "Help the Pope",
          "Help the Ecumenical Patriarch",
          "Help Hillsong",
          "Help Cityalight",
          "Help Wickham",
          "Help Tomlin",
          "Help Redman",
          "Help Lauren Daigle",
          "Help Brooke Ligertwood",
          "Help Tauren Wells",
          "Help Big Daddy Weave",
          "Help Maverick City",
          "Let Elon be generous and Christian",
          "Let Zuckerberg be generous and Christian",
          "Let Altman be generous and Christian",
          "Let Gates be generous and Christian",
          "Let Rowling be generous and Christian",
          "Let Putin be generous and Christian",
          "Let Taylor Swift be generous and Christian",
          "Let Kanye be generous and Christian",
          "Let Bieber be generous",
          "Bless the nails of love",
          "Bless my works",
          "Bless my word of God speech",
          "Bless my programming",
          "Bless my apps",
          "Bless my music",
          "Bless my songs",
          "Bless my piano",
          "Bless the works of Christians",
          "Help orphans",
          "Help children",
          "Help widows",
          "Help foreigners",
          "Help the poor",
          "Help the sick",
        ]);
      }
    });
  });
}
