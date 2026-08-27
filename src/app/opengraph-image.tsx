import { ImageResponse } from "next/og";

export const alt = "Darrance Beh — Strategy, Data & Commercial Analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#08080a";
const BONE = "#edebe6";
const MUTED = "#8b8b95";
const ACCENT = "#e3b455";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          padding: "62px 72px",
          position: "relative",
        }}
      >
        {/* accent hairline down the left edge */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            backgroundColor: ACCENT,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: MUTED,
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Kuala Lumpur, Malaysia
          </div>
          <div
            style={{
              color: MUTED,
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            darrancebeh.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: BONE,
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1,
            }}
          >
            Darrance Beh
          </div>
          <div
            style={{
              marginTop: 26,
              color: ACCENT,
              fontSize: 38,
              letterSpacing: -1,
            }}
          >
            Strategy &amp; Operations · Commercial Analytics
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: MUTED,
            fontSize: 24,
            letterSpacing: 2,
          }}
        >
          <span>PwC South East Asia</span>
          <span style={{ color: "#3a3a42" }}>/</span>
          <span>Citi</span>
          <span style={{ color: "#3a3a42" }}>/</span>
          <span>ex-L&apos;Oréal</span>
        </div>
      </div>
    ),
    size,
  );
}
