export function app_contact_download_responses() {
  let v = [
    {
      message: "Praise God in the name of jesus christ 🙏 ",
      outputs: ["🎵 Praise the LORD our God ❤️‍🔥✝️🕊 🎶"],
      valid: true,
    },
    {
      message: "Greetings in Jesus name Amen ",
      outputs: ["👋 Greetings in the name of the Lord Jesus Christ ✝️ !"],
      valid: true,
    },
    {
      message: "hii",
      outputs: ["👋 Greetings in the name of the Lord Jesus Christ ✝️ !"],
      valid: true,
    },
    {
      message: "hif",
      outputs: [
        "Your message contains an invalid word. Please remove invalid words. Invalid word(s): hif",
      ],
      valid: false,
    },
    {
      message: "Hello sir, how are you doing ",
      outputs: [
        "👋 Greetings in the name of the Lord Jesus Christ ✝️ !",
        "😁 I am doing good 💯 through the grace of God 👌 But please pray for my health 🙏",
      ],
      valid: true,
    },
    {
      message:
        "Great to meet with you servant of the Most High God keep on praying for us so that God's will be done on us and keep sending us such scriptures ",
      outputs: [
        "🙌 Thank you very much 😁 ! Great to meet you, too 🤝!",
        "God, let there be prayer",
        "If you send me a message here 📨, then you will receive a scripture 📖.",
      ],
      valid: true,
    },
    {
      message:
        "Yes we are want to send it's message.but we have not computer 🖥️ maybe lord God willing he gives me answer 🙏🙏🙏 only we have Urdu translation bible verse john1:7 but you are contact with us through your message about computer 💻 nice to meet you here 💐.we will try.we are interested brother.",
      outputs: [
        "You said you are interested. Please edit your message to say what what you are interested in.",
      ],
      valid: false,
    },
    {
      message: "How're you doing today",
      outputs: [
        "😁 I am doing good 💯 through the grace of God 👌 But please pray for my health 🙏",
      ],
      valid: true,
    },
    {
      message:
        "Hello praise God I really need help from you andGod will bless you so much",
      outputs: [
        "You asked for help. Please edit your message to say what kind of help you need.",
        "🙏 God bless you, your family, your friends and your country exceedingly and abundantly, more than anyone can ask or think in the name of the Father and of the Son and of the Holy Spirit amen ❤️‍🔥✝️🕊",
      ],
      valid: false,
    },
    {
      message: "Hi",
      outputs: ["👋 Greetings in the name of the Lord Jesus Christ ✝️ !"],
      valid: true,
    },
    {
      message: "Hello ",
      outputs: ["👋 Greetings in the name of the Lord Jesus Christ ✝️ !"],
      valid: true,
    },
  ];
  return v;
}
