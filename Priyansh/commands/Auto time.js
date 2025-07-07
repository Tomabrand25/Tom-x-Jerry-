module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SARDAR RDX",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
  "گلا بھی تجھ سے بہت ہے مگر محبت بھی 💕 وہ بات اپنی جگہ ہے یہ بات اپنی جگہ 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "نگاہیں منتظر ہیں سج سنور کے روبرو تیرے 💕 کہ تیرے لفظ میرے حسن کی تکمیل کرتے ہیں 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "نگاہیں منتظر ہیں سج سنور کے روبرو تیرے 💕 کہ تیرے لفظ میرے حسن کی تکمیل کرتے ہیں 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "کروں ایجاد وہ رنگ محبت بزم دنیا میں 💕 طریق رسم قیس اک افسانہ ہو جائے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "💞 کیا خبر تھی کہ اتنی محبت ہو جائے گی تم سے .....!!! 💞 مجھے تو بس تمہارا مسکرانا اچھا لگا تھا ...!!! 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "ہمارے بعد پِھرے گی بھکاریوں کی طرح 💕 کوئی بھی مُنہ نہ لگائے گا اِس محبت کو 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "محبت کے چاند کو اپنی پناہ میں رہنے دو 💕 لبوں کو نہ کھولو آنکھوں سے کچھ کہنے دو 💕 دل پہ ہاتھ رکھو اور کچھ دیر رہنے دو 💕 مجھے محسوس کرو اور اپنے پاس ہی رہنے دو 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "😻 اظہار محبت؟ 😻 💖 ارے نہیں جـــانِ محــرم💖 ❤️ آپـــ تو کُل کائناتــــ ہیں ❤️ ❣️ ہمــاری 😘❣️ 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "♥️🌸🖤 میں انتہائے محبت بتا نہیں سکتی تجھے 💕 تُو کم سے کم بھی مجھے زندگی سے پیارا ہے🥀 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "میری محبت،❤ میری زندگی،❤ میری عاشقی،❤ لفظ دیکھو تو ہزار ہیں اگر سمیٹ دوں تو صرف تم ° 🍃❤ 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "--- اُن کی نہ تھی خطا ہم ہی کچھ غلط سمجھ بیٹھے.... --- وہ محبت سے بات کرتے تھے ہم محبت ہی سمجھ بیھٹے 💔💔 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "تجھے قسمت سمجھ کر دل سے لگایا تھا 💕 بھول گیا کہ قسمت بدلتے دیر نہیں لگتی 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "بےوفا وقت تھا تم تھے یا مقدر میرا 💕 بات اتنی ہے کہ انجام جدائی نکلا 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "‏محبت میں حرف با حرف مجھے مانگنا نہیں آتا 💕 میں نے آداب دعا سے بہت آگے تجھے چاہا ہے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "اس کے چهوڑ جانے کے بعد ہم نے محبت نہیں کی 💕 چهوٹی سی زندگی ہے، کس کس کو آزماتے پهرے گے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "کتنا عجیب ہے ان کا اندازہ محبت 💕 روز رلا کے کہتے ہیں اپنا خیال رکھنا 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "ان ہواؤں میں سسکی کی صدا کیسی ہے 💕 بیان کرتا ہے کوئی درد پرانا میرا 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "بچھڑنے والوں کو یہ بات کون سمجھائے؟؟ 💕 دوبارہ لوٹ کے آنے میں عمر لگتی ہیں۔۔!!!💔 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "اُمیدیں آرزویں کھیلتی ہیں یوں میرے دل سے 💕 پلٹ جاتی ہیں موجیں جس طراح ٹکرا کے ساحل سے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "کیا یہ درد تھوڑا ہے؟ 💕 کے تم نے مان توڑا ہے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "کچھ خبر نہیں کے کب موت آ جاۓ 💕 تم بھی اک زخم دے دو کہیں تم رہ نہ جاؤ 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "یقین نہ آئے تو اک بار پوچھ کر دیکھو 💕 جو ہنس رہا ہے وہ زخموں سے چور نکلے گا 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "ﺳﻨﻮ ﺍﮎ ﺑﺎﺭ ﺍﻭﺭ ﻣﺤﺒﺖ ﮐﺮﻧﯽ ﮨﮯ ﺗﻢ ﺳﮯ 💕 ﻟﯿﮑﻦ ﺍﺱ ﺑﺎﺭ ﺑﮯ ﻭﻓﺎﺋﯽ ﮨﻢ ﮐﺮﯾﮟ گے 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆",
  "میرا ساتھ اس نے تب چھوڑا 💕 جب اس کے سوا میرا کوئی نہیں تھا 💝-[OWNER :- ☆》『⸙』𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗『⸙』《☆"
];
const imgLinks = [
"https://i.ibb.co/SDPVKCHk/received-1658902918087737.jpg",
"https://i.ibb.co/DPCjNvCn/received-1372477247338330.jpg",
"https://i.ibb.co/ZzB513BD/received-1199306371647867.jpg",
"https://i.ibb.co/S7vb9bNt/received-992977839702824.jpg",
"https://i.ibb.co/CKyTr6K6/received-690751813426718.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/NnJFrzLZ/received-660293663440253.jpg",
"https://i.ibb.co/LhspSYbB/received-552668450906408.jpg",
"https://i.ibb.co/LhspSYbB/received-552668450906408.jpg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = 
  `❖━━━━━━━━━━━━━━━━━━━━━━❖\n` +
  `        𝐑𝐃𝐗 𝐓𝐈𝐌𝐄 𝐙𝐎𝐍𝐄        \n` +
  `❖━━━━━━━━━━━━━━━━━━━━━━❖\n\n` +

  `⏰ 𝗧𝗶𝗺𝗲 ➤ ${hour12}:00 ${ampm}\n` +
  `📅 𝗗𝗮𝘁𝗲 ➤ ${date} ✦ ${month} ✦ ${year}\n` +
  `📆 𝗗𝗮𝘆 ➤ ${day}\n\n` +

  `➤⚘ عَرض کِیا ہے، اِس موقع پر ⚘➤\n` +
  `${randomShayari}\n\n` +

  `❖━━━━━━━━━━━━━━━━━━━━━━❖\n` +
  `       »「⸙」𝐒𝐀𝐑𝐃𝐀𝐑 𝐑𝐃𝐗「⸙」«\n` +
  `❖━━━━━━━━━━━━━━━━━━━━━━❖`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};
