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
              src="/wlogofina.png"
              alt="Wareji Logo"
              width={72}
              height={72}
              style={{ objectFit: "contain", marginBottom: 22, filter: "brightness(0) saturate(100%) invert(36%) sepia(93%) saturate(1352%) hue-rotate(131deg) brightness(97%) contrast(97%)" }}
            />

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
                {/* Decorative orbs */}
                <div style={{
                  position: "absolute", top: -40, right: -30,
                  width: 140, height: 140, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                }} />
                <div style={{
                  position: "absolute", bottom: 120, left: -50,
                  width: 160, height: 160, borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                }} />

                {/* Logo centered */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <Image
                    src="/topleftgreen.png"
                    alt="Wareji app"
                    width={200}
                    height={200}
                    style={{ objectFit: "contain", filter: "brightness(0) invert(1) drop-shadow(0 8px 24px rgba(0,0,0,.2))" }}
                  />
                </div>

                {/* Bottom CTA */}
                <div style={{ zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingBottom: 8 }}>
                  <div style={{
                    width: "85%", padding: "14px 0", borderRadius: 50,
                    background: "#fff",
                    textAlign: "center",
                    fontWeight: 800, fontSize: 13, letterSpacing: 1,
                    color: "#059669",
                    boxShadow: "0 4px 20px rgba(255,255,255,0.25)",
                  }}>
                    GET STARTED
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600 }}>
                    I already have an account
                  </span>
                </div>
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
