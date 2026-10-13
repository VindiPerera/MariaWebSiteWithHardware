import type { HardwareCategory } from "./hardwareCatalog";

/** Sinhala + English mix labels and intros for the hardware catalogue categories. */
export const categoryLabelSi: Record<HardwareCategory, string> = {
  all: "සියලුම Hardware",
  "touch-pos": "Touch POS Terminals",
  printers: "Receipt සහ Label Printers",
  scanners: "Barcode Scanners",
  "cash-drawers": "Cash Drawers",
  "bill-counters": "Bill Counters (මුදල් ගණන් කරන යන්ත්‍ර)",
  consumables: "Paper සහ Sticker Rolls",
  bundles: "සම්පූර්ණ POS Bundles",
};

export const categoryIntrosSi: Record<HardwareCategory, { title: string; paragraphs: string[] }> = {
  all: {
    title: "ශ්‍රී ලාංකික Retail සඳහා තෝරාගත් සම්පූර්ණ POS Hardware",
    paragraphs: [
      "JAAN Network (PVT) Ltd එකෙන්, හැම MariaPoS counter එකක් පිටිපස්සේම ඇති hardware සියල්ල අපි සපයනවා: touch terminals, thermal printers, barcode scanners, cash drawers සහ bill counters. හැමදෙයක්ම දිනපතා වාණිජ භාවිතයට සුදුසු බව පරීක්ෂා කර ලබාගත් ඒවායි.",
      "මෙහි ඇති හැම device එකක්ම කොළඹ warehouse එකෙන් යැවීමට කලින් MariaPoS සමඟ driver-tested කරලා තියෙන නිසා, ඔබේ counter එකේ installation එක ඇත්තටම plug-and-play.",
      "පහළ category අනුව බලන්න. නැත්නම් ඔබේ වෙළඳසැලේ ප්‍රමාණයට සහ transaction volume එකට ගැලපෙන නිර්දේශයක් සඳහා WhatsApp එකෙන් අපේ hardware desk එකට කතා කරන්න.",
    ],
  },
  "touch-pos": {
    title: "Touch POS Terminals",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ Touch POS Terminals හදලා තියෙන්නේ ඔබේ counter එකේ command centre එක වෙන්න: වේගවත් capacitive touchscreens, industrial-grade processors සහ කාර්යබහුල checkout queues වලට දවස පුරා විශ්වාසවන්තව වැඩ කිරීම.",
      "Single-screen සහ dual-display configurations දෙකම තියෙනවා. Cashier ට responsive touch interface එකක් ලැබෙද්දී, customer ට shopping කරද්දී itemized bill එක live පැහැදිලිව පේනවා.",
      "JAAN Network (PVT) Ltd ගේ හැම Touch POS Terminal එකක්ම MariaPoS කලින්ම load කර test කර එවන නිසා, supermarkets, restaurants සහ boutique retailers ලාට ඉක්මනින් boot වෙන, peak hours වලත් කිසිදා slow නොවන counter එකක් ලැබෙනවා.",
    ],
  },
  printers: {
    title: "POS Printers",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ POS Printers අවම දෝෂ සහිතව පැහැදිලි receipts සහ labels print කරනවා. නොනවත්වා වැඩ කිරීමට නිර්මාණය කරපු මේ printers වලට high-volume transactions පහසුවෙන් handle කරන්න පුළුවන්.",
      "Thermal receipt printers, barcode label printers සහ Bluetooth හෝ WiFi සම්බන්ධ models තියෙනවා. MariaPoS සහ අනෙකුත් ප්‍රමුඛ POS software එක්කත් ගැලපෙනවා.",
      "JAAN Network (PVT) Ltd ගේ හැම POS Printer එකක්ම වේගයට සහ නිරවද්‍යතාවයට හදපු ඒවායි. ඒ නිසා customers ලාට හැමවිටම නිවැරදි billing එකකුත්, වෘත්තීය receipts එකකුත් ලැබෙනවා. Retail stores, restaurants සහ supermarkets සඳහා ඉතා ගැලපෙනවා.",
    ],
  },
  scanners: {
    title: "Barcode Scanners",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ Barcode Scanners හදලා තියෙන්නේ තත්පරයෙන් කොටසකින් හඳුනාගන්න. print කරපු 1D barcodes, 2D QR codes, එමෙන්ම හානි වුණු හෝ screen එකේ පෙන්වන codes පවා දෙවෙනි වතාවක් නැතුව read කරනවා.",
      "කුඩා wired scanners සිට offline memory සහිත long-range wireless models දක්වා, grocery counters, warehouse stock counts සහ වේගවත් supermarket lanes සඳහා ගැලපෙන option එකක් අපි ළඟ තියෙනවා.",
      "හැම scanner එකක්ම MariaPoS සමඟ HID plug-and-play test කරලා තියෙනවා, ඒ නිසා install කරන දවසේම configuration නැතුව items එකවරම ring up වෙනවා.",
    ],
  },
  "cash-drawers": {
    title: "Cash Drawers",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ Cash Drawers වල heavy-gauge steel construction එකත්, printer-triggered kick mechanism එකත් එකතු වෙලා තියෙනවා. ඒ නිසා MariaPoS එකේ receipt එකක් print වුණු ගමන්ම till එක automatically open වෙනවා.",
      "Adjustable bill compartments සහ වෙන වෙනම coin cups නිසා හැම denomination එකක්ම පිළිවෙලට තියාගන්න පුළුවන්. 3-position key lock එකෙන් staff සහ management ට access පාලනය කරන්න පුළුවන්.",
      "දවසින් දවස retail භාවිතයේ ගෙවී යාම ඔරොත්තු දෙන විදිහට හදපු මේ cash drawers, ඕනෑම checkout counter එකකට විශ්වාසවන්ත, කරදර නැති එකතු කිරීමක්.",
    ],
  },
  "bill-counters": {
    title: "Bill Counters",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ Bill Counters මගින් cash handle කිරීමේ අනුමාන කිරීම් සහ අවදානම අඩු වෙනවා. විනාඩියකට නෝට්ටු සිය ගණනක් ගණන් කරමින්, UV, magnetic සහ infrared detection වලින් counterfeit (ව්‍යාජ) නෝට්ටු පරීක්ෂා කරනවා.",
      "දෛනික භාවිතයේ කුඩා counters සිට, high-capacity hoppers සහිත banking-grade machines දක්වා, supermarkets, wholesale desks සහ finance offices වලට ගැලපෙන නිරවද්‍යතාවයකුත් වේගයකුත් අපි සපයනවා.",
      "පැහැදිලි digital displays සහ automatic error alerts නිසා, discrepancies counter එකෙන් එළියට යන්න කලින්ම අල්ලගන්න පුළුවන්.",
    ],
  },
  consumables: {
    title: "Paper සහ Sticker Rolls",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ thermal paper සහ barcode sticker rolls නිෂ්පාදනය කරන්නේ ස්ථාවර, high-density standard එකකට. ඒ නිසා හැම receipt එකක්ම සහ price tag එකක්ම තද, පැහැදිලි, scan කරන්න ready විදිහට print වෙනවා.",
      "ශ්‍රී ලාංකික retail printers පාවිච්චි කරන සම්මත ප්‍රමාණවලින් BPA-free receipt rolls සහ ශක්තිමත් self-adhesive label stock අපි තියාගන්නවා, ඒ නිසා reorder කිරීම ඉක්මන්, කරදර නැති වැඩක්.",
      "මුළු රටටම ඉක්මනින් යැවීමට stock එකේ තියෙන මේ consumables, හැම counter එකක්ම බාධාවකින් තොරව ක්‍රියාත්මක කරවන දෛනික අත්‍යවශ්‍ය දේවල්.",
    ],
  },
  bundles: {
    title: "සම්පූර්ණ POS Bundles",
    paragraphs: [
      "JAAN Network (PVT) Ltd ගේ සම්පූර්ණ POS Bundles වල, ගැලපෙන hardware එක්ක MariaPoS software licence එකක් එකතු වෙලා තියෙනවා. ඒ නිසා ඔබේ counter එක පළමු දවසේම bill කරන්න ready.",
      "හැම bundle එකක්ම හදලා තියෙන්නේ එකට හොඳට වැඩ කරනවා කියලා අපි දැනටමත් දන්න devices වලින්. ඒ නිසා terminal එකක්, printer එකක්, scanner එකක් සහ cash drawer එකක් වෙන වෙනම ගැලපෙනවාදැයි අනුමාන කරන්න අවශ්‍ය නැහැ.",
    ],
  },
};
