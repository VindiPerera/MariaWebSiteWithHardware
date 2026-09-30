import { ImageResponse } from "next/og";

export const alt = "MariaPoS — High-Speed POS & FIFO Inventory Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["Works offline", "FIFO stock", "SMS e-bills", "Telegram alerts", "Cloud sync"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #8b0000 0%, #c62828 55%, #ef5350 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>MariaPoS · Made to Bill</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            High-Speed POS &amp; Inventory Software
          </div>
          <div style={{ display: "flex", fontSize: 30, opacity: 0.9 }}>
            Offline-first Windows POS by JAAN Network
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.35)",
                fontSize: 24,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
