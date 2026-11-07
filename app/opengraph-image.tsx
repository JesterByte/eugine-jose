import { ImageResponse } from "next/og";

export const alt =
  "Eugine Jose — Software Engineer focused on application modernization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#f4f8f8",
          backgroundColor: "#10191c",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -180,
            width: 650,
            height: 650,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(28, 180, 174, 0.23) 0%, rgba(16, 25, 28, 0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 30,
            border: "1px solid rgba(148, 185, 185, 0.16)",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "76px 84px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 14,
                backgroundColor: "#63d3cb",
                color: "#102326",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              EJ
            </div>
            <div
              style={{
                color: "#a9c1c2",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 4,
              }}
            >
              EUGINE JOSE
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 64,
                lineHeight: 1.08,
                letterSpacing: -2,
                fontWeight: 700,
              }}
            >
              <span>Modernize what exists.</span>
              <span style={{ color: "#63d3cb" }}>Build what&apos;s next.</span>
            </div>
            <div
              style={{
                color: "#b7c5c6",
                fontSize: 24,
                letterSpacing: 0.5,
              }}
            >
              Software Engineer · Application Modernization
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["Flutter", "Laravel", ".NET", "Mobile · Web · Desktop"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 16px",
                    border: "1px solid rgba(99, 211, 203, 0.3)",
                    borderRadius: 999,
                    color: "#c5e7e5",
                    fontSize: 16,
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
