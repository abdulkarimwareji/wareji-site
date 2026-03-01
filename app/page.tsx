import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background:
          "radial-gradient(900px 400px at 15% -10%, #a7f3d0 0%, transparent 55%), radial-gradient(900px 400px at 100% 110%, #d1fae5 0%, transparent 60%), #f0fdf4",
      }}
    >
      <div
        style={{
          width: "min(1200px, 100%)",
          background: "#fff",
          borderRadius: 28,
          boxShadow: "0 24px 70px rgba(5, 80, 40, .12)",
          overflow: "hidden",
          border: "1px solid #bbf7d0",
        }}
      >
        <div className="inner-grid">
          {/* Left Column */}
          <div className="left-col">
            <Image
              src="/topleftgreen.png"
              alt="Wareji Logo"
              width={72}
              height={72}
              style={{ objectFit: "contain", marginBottom: 22 }}
            />

            <div
              style={{
                display: "inline-block",
                padding: "18px 22px",
                borderRadius: 22,
                background: "linear-gradient(135deg, rgba(5,150,105,0.09), rgba(16,185,129,0.12))",
                border: "1px solid #a7f3d0",
                boxShadow: "0 18px 35px rgba(5, 150, 105, .16)",
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #059669, #10b981)",
                  color: "#fff",
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  borderRadius: 999,
                  padding: "10px 18px",
                  fontSize: 14,
                }}
              >
                Coming Soon
              </span>
            </div>

            <h1 className="hero-title">Coming Soon</h1>

            <p
              style={{
                marginTop: 14,
                fontSize: "clamp(16px, 2vw, 22px)",
                color: "#047857",
                fontWeight: 600,
              }}
            >
              Is diyaariya, mustaqbalka bangiyeynta ayaa soo socda.
            </p>

            <p style={{ marginTop: 18, color: "#6b7280", fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 540 }}>
              Wareji is preparing something big. Stay tuned.
            </p>

            <form
              className="waitlist-form"
              action="#"
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Notify Me</button>
            </form>

            <p style={{ marginTop: 8, fontSize: 12, color: "#6b7280" }}>
              Signups are saved via email for future app updates.
            </p>

            <div className="store-badges desktop-only" style={{ marginTop: 14 }}>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ height: 44, filter: "drop-shadow(0 6px 14px rgba(0,0,0,.18))" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: 44, filter: "drop-shadow(0 6px 14px rgba(0,0,0,.18))" }}
              />
            </div>
          </div>

          {/* Right Column — iPhone Mockup */}
          <div className="right-col">
            <div className="iphone-frame">
              <div className="iphone-notch" />
              <div className="iphone-screen">
                <Image
                  src="/topleftgreen.png"
                  alt="Wareji app icon"
                  width={180}
                  height={180}
                  style={{
                    objectFit: "contain",
                    borderRadius: "22%",
                    border: "1px solid rgba(255,255,255,.24)",
                    boxShadow: "0 18px 32px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.35)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Store Badges */}
        <div className="store-badges mobile-only">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{ height: 44, filter: "drop-shadow(0 6px 14px rgba(0,0,0,.18))" }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            style={{ height: 44, filter: "drop-shadow(0 6px 14px rgba(0,0,0,.18))" }}
          />
        </div>

        <div style={{ padding: "0 42px 26px", color: "#6b7280", fontSize: 14 }} className="footer-text">
          © 2026 Wareji. All rights reserved. · support@wareji.com
        </div>
      </div>
    </div>
  );
}
