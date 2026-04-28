import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgba(239,246,255,1) 0%, rgba(255,255,255,1) 48%, rgba(219,234,254,1) 100%)",
          padding: "64px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#2563eb",
            fontSize: 24,
            fontWeight: 700
          }}
        >
          <div
            style={{
              height: 14,
              width: 14,
              borderRadius: 9999,
              background: "#2563eb"
            }}
          />
          Website Revenue System
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              maxWidth: 960,
              color: "#0f172a",
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 800
            }}
          >
            Your Website Should Bring You Customers
          </div>
          <div
            style={{
              maxWidth: 820,
              color: "#334155",
              fontSize: 30,
              lineHeight: 1.35
            }}
          >
            Turn your website into a high-converting sales system that generates consistent leads and revenue.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 14
            }}
          >
            {["Conversion Strategy", "CRO Focused", "Lead Systems"].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 9999,
                  border: "1px solid rgba(37,99,235,0.14)",
                  background: "rgba(255,255,255,0.8)",
                  padding: "12px 20px",
                  color: "#1e3a8a",
                  fontSize: 22
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              color: "#2563eb",
              fontSize: 22,
              fontWeight: 700
            }}
          >
            Book a Free Call
          </div>
        </div>
      </div>
    ),
    size
  );
}
