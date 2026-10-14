import type { HardwareCategory } from "./hardwareCatalog";

/** Sinhala + English mix labels and intros for the hardware catalogue categories. Written around what the shop gets, not word for word. */
export const categoryLabelSi: Record<HardwareCategory, string> = {
  all: "සියලුම Hardware",
  "touch-pos": "Touch POS Terminals",
  printers: "Receipt සහ Label Printers",
  scanners: "Barcode Scanners",
  "cash-drawers": "Cash Drawers",
  "bill-counters": "මුදල් ගණන් කරන Bill Counters",
  consumables: "Paper සහ Sticker Rolls",
  bundles: "සම්පූර්ණ POS Bundles",
};

export const categoryIntrosSi: Record<HardwareCategory, { title: string; paragraphs: string[] }> = {
  all: {
    title: "ඔබේ වෙළඳසැලට අවශ්‍ය සියලුම POS Hardware එකම තැනකින්",
    paragraphs: [
      "Touch screen, receipt printer, barcode scanner, cash drawer සහ bill counter — MariaPoS counter එකකට අවශ්‍ය හැමදේම JAAN Network (PVT) Ltd එකෙන් ලැබෙනවා. දිනපතා වෙළඳසැල් භාවිතයට ඔරොත්තු දෙන බව පරීක්ෂා කළ ඒවා පමණයි අපි විකුණන්නේ.",
      "මෙහි ඇති හැම device එකක්ම කොළඹ අපේ ගබඩාවෙන් යවන්න කලින් MariaPoS සමඟ පරීක්ෂා කර ඇති නිසා, ලැබුණු දවසේම plug in කර bill කරන්න පටන් ගන්න පුළුවන්.",
      "පහළ ඇති වර්ග අනුව බලන්න. ඔබේ වෙළඳසැලේ ප්‍රමාණයට සහ දවසක් තුළ වෙන bill ගණනට ගැලපෙන දේ තෝරාගන්න අමාරු නම්, WhatsApp එකෙන් අපේ hardware team එකට කතා කරන්න.",
    ],
  },
  "touch-pos": {
    title: "Touch POS Terminals",
    paragraphs: [
      "Touch POS Terminal එක ඔබේ counter එකේ හදවත. ඉක්මනින් ප්‍රතිචාර දක්වන screen එකක් සහ දවස පුරා නොනවත්වා වැඩ කරන ශක්තිමත් computer එකක් නිසා, කාර්යබහුල වෙලාවලත් queue එක ඉක්මනින් ඉවර වෙනවා.",
      "Screen එකක් හෝ දෙකක් සහිත models තියෙනවා. දෙවන screen එක තියෙනවා නම්, customer ට තමන් ගන්න භාණ්ඩ සහ bill එක පැහැදිලිව පෙනෙන නිසා විශ්වාසයත් වැඩියි.",
      "හැම Touch POS Terminal එකකටම MariaPoS කලින්ම install කර පරීක්ෂා කර එවන නිසා, supermarket, restaurant සහ boutique වගේ තැන් වලට ඉක්මනින් on වෙන, කාර්යබහුල වෙලාවලත් slow නොවන counter එකක් ලැබෙනවා.",
    ],
  },
  printers: {
    title: "POS Printers",
    paragraphs: [
      "පැහැදිලි, තදින් print වන receipts සහ labels ඔබේ customers ලාට විශ්වාසයක් දෙනවා. නොනවත්වා වැඩ කරන්න හදපු මේ printers වලට එක දවසක bill ගණන් විශාල ප්‍රමාණයක් වුණත් පහසුවෙන් හසුරුවන්න පුළුවන්.",
      "Receipt printers, barcode label printers සහ Bluetooth හෝ WiFi වලින් සම්බන්ධ වෙන models තියෙනවා. MariaPoS සහ වෙනත් POS software එක්කත් වැඩ කරනවා.",
      "වේගයටත් නිරවද්‍යතාවටත් හදපු මේ printers නිසා customers ලාට හැමවිටම නිවැරදි bill එකයි වෘත්තීය receipt එකකුත් ලැබෙනවා. Retail වෙළඳසැල්, restaurants සහ supermarkets සඳහා ඉතා සුදුසුයි.",
    ],
  },
  scanners: {
    title: "Barcode Scanners",
    paragraphs: [
      "අපේ scanners තත්පරයකින් barcode එක කියවනවා. Print කළ barcodes, QR codes, හානි වුණු barcodes, phone screen එකේ පෙන්වන codes පවා දෙවෙනි වතාවක් scan කරන්න අවශ්‍ය නැතුව කියවනවා, ඒ නිසා queue එක ඉක්මනින් ඉවර වෙනවා.",
      "සරල wired scanners සිට, internet නැතුව data තියාගන්න පුළුවන් දුර පරාසයක wireless scanners දක්වා — grocery counters, ගබඩා stock ගණන් කිරීම සහ කාර්යබහුල supermarket lanes වලට ගැලපෙන scanner එකක් අපි ළඟ තියෙනවා.",
      "හැම scanner එකක්ම MariaPoS සමඟ පරීක්ෂා කර ඇති නිසා, install කළ දවසේම වෙනත් setup එකක් නැතුව item එක එකවරම bill එකට එකතු වෙනවා.",
    ],
  },
  "cash-drawers": {
    title: "Cash Drawers",
    paragraphs: [
      "ශක්තිමත් steel cash drawer එක printer එකට සම්බන්ධ වෙනවා. MariaPoS එකෙන් receipt එක print වුණු ගමන්ම drawer එක ඉබේම විවෘත වෙනවා, ඒ නිසා ඔබට අතින් විවෘත කරන්න අවශ්‍ය නැහැ.",
      "නෝට්ටු සහ කාසි වර්ග වශයෙන් වෙන වෙනම තියාගන්න තැන් සහ key lock එකක් තියෙන නිසා, මුදල් පිළිවෙලට තියාගන්නත්, කවුරුන්ට drawer එක විවෘත කළ හැකිද කියලා පාලනය කරන්නත් පුළුවන්.",
      "දවසින් දවස පාවිච්චි කරද්දී ගෙවී නොයන විදිහට හදපු මේ cash drawers, ඕනෑම checkout counter එකකට විශ්වාසයෙන් එකතු කරන්න පුළුවන්.",
    ],
  },
  "bill-counters": {
    title: "මුදල් ගණන් කරන Bill Counters",
    paragraphs: [
      "Bill Counter එකක් තියෙනවා නම් නෝට්ටු අතින් ගණන් කරන්න අවශ්‍ය නැහැ. විනාඩියකට නෝට්ටු සිය ගණනක් ගණන් කරමින්, ව්‍යාජ නෝට්ටු UV, magnetic සහ infrared වලින් හඳුනාගන්න නිසා මුදල් ගනුදෙනුවේ වැරදි සහ අවදානම අඩු වෙනවා.",
      "දෛනික භාවිතයට කුඩා counters සිට, බැංකු මට්ටමේ විශාල ධාරිතාවක් ඇති machines දක්වා — supermarkets, wholesale වෙළඳසැල් සහ මුදල් කාර්යාල වලට ගැලපෙන වේගයත් නිරවද්‍යතාවයත් අපි ලබා දෙනවා.",
      "පැහැදිලි display එකක් සහ දෝෂ ඇති වුණාම එන alert නිසා, වැරදි counter එකෙන් පිටවෙන්න කලින්ම අල්ලගන්න පුළුවන්.",
    ],
  },
  consumables: {
    title: "Paper සහ Sticker Rolls",
    paragraphs: [
      "අපේ thermal paper සහ barcode sticker rolls එකම ගුණාත්මක මට්ටමින් හදපු නිසා, හැම receipt එකක්ම, price tag එකක්ම තදින්, පැහැදිලිව print වෙලා, scan කරන්නත් ලේසියි.",
      "ශ්‍රී ලංකාවේ printers වල පාවිච්චි වෙන සාමාන්‍ය ප්‍රමාණවලින් BPA-free receipt rolls සහ ශක්තිමත් ඇලවිය හැකි labels අපි තියාගන්නවා. ඒ නිසා ඔබට අවශ්‍ය වෙලාවේ ඉක්මනින්, ලේසියෙන් නැවත ගන්න පුළුවන්.",
      "මුළු රටටම ඉක්මනින් යවන්න stock එකේ තියෙන මේ දේවල්, ඔබේ counter එක බාධාවක් නැතුව දිගටම වැඩ කරන්න උදව් වෙනවා.",
    ],
  },
  bundles: {
    title: "සම්පූර්ණ POS Bundles",
    paragraphs: [
      "අපේ Bundles වල එකට හොඳින් වැඩ කරන hardware සමඟ MariaPoS licence එකත් ඇතුළත්. ඒ නිසා ඔබේ counter එක පළමු දවසේම bill කරන්න සූදානම්.",
      "හැම bundle එකක්ම හදලා තියෙන්නේ එකට වැඩ කරන බව අපි දැනටමත් දන්න උපකරණ වලින්. ඒ නිසා terminal එකක්, printer එකක්, scanner එකක් සහ cash drawer එකක් වෙන වෙනම තෝරලා, ගැලපෙනවාද කියලා බලන්න ඔබට වෙහෙසෙන්න අවශ්‍ය නැහැ.",
    ],
  },
};
