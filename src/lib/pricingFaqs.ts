export const pricingFaqs: { q: string; a: string; qSi?: string; aSi?: string }[] = [
  {
    q: "What happens when my license term ends?",
    qSi: "මගේ license කාලය අවසන් වුණාම මොකද වෙන්නේ?",
    aSi: "කල් ඉකුත් වෙන්න කලින් MariaPoS ඔබට මතක් කරනවා. මේ site එකෙන් PayHere හරහා renew කළාම, ආයෙත් install කරන්නවත් data නැති වෙන්නවත් නැතුව ඔබේ license එක දිගු වෙනවා.",
    a: "MariaPoS reminds you before expiry. Renew from this site through PayHere and your license extends without reinstalling or losing data.",
  },
  {
    q: "Are SMS receipts included?",
    qSi: "SMS receipts ඇතුළත්ද?",
    aSi: "SMS receipts අඩු වෙන්නේ ඔබේ license එකට බැඳුණු prepaid SMS-credit wallet එකකින්. ඒවා unlimited නැහැ. ඕනෑම වෙලාවක top up කරන්න පුළුවන්, ඉතිරි messages ගණන cashier ට හැමවිටම පේනවා.",
    a: "SMS receipts draw from a prepaid SMS-credit wallet tied to your license. They are not unlimited. You can top up anytime, and the cashier always sees how many messages are left.",
  },
  {
    q: "Does it work without internet?",
    qSi: "Internet නැතුව වැඩ කරනවද?",
    aSi: "ඔව්. Billing, stock සහ shifts සම්පූර්ණයෙන්ම offline ක්‍රියාත්මක වෙනවා. Connection එක ආපසු ආපු ගමන් license එක check වෙලා data cloud panel එකට sync වෙනවා.",
    a: "Yes. Billing, stock and shifts run fully offline. The license is checked and data syncs to the cloud panel whenever the connection returns.",
  },
  {
    q: "How do I move from the trial to a paid plan?",
    qSi: "Trial එකෙන් paid plan එකකට මාරු වෙන්නේ කොහොමද?",
    aSi: "එකම account එකෙන් ඕනෑම plan එකක් මිලදී ගන්න. ඔබේ trial data එහෙමම තියෙනවා.",
    a: "Buy any plan with the same account. Your trial data stays in place.",
  },
  {
    q: "Is there a monthly fee or automatic renewal?",
    qSi: "මාසික ගාස්තුවක් හෝ automatic renewal එකක් තියෙනවද?",
    aSi: "නැහැ. හැම license එකක්ම අවුරුදු 1, 2 හෝ 3කට එක් ගෙවීමක් පමණයි, ඒවා කවදාවත් automatically renew වෙන්නේ නැහැ.",
    a: "No. Each license is a single payment for 1, 2 or 3 years and never renews automatically.",
  },
  {
    q: "Can I get a refund?",
    qSi: "Refund එකක් ගන්න පුළුවන්ද?",
    aSi: "මුලින් දින 7ක් MariaPoS free try කරන්න. Duplicate හෝ වැරදි charges, failed activation, හෝ අපට විසඳන්න බැරි defect එකක් නිසා, licence payments දින 14ක් ඇතුළත refund කරන්න පුළුවන්. පාවිච්චි කරපු SMS credits refund වෙන්නේ නැහැ.",
    a: "Try MariaPoS free for 7 days first. Licence payments can be refunded within 14 days for duplicate or incorrect charges, failed activation, or a defect we cannot fix. Used SMS credits are not refundable.",
  },
];
