/* global React, IOSDevice, ChromeWindow,
   ScreenFNAOverview, ScreenBasicData, ScreenFormSelect,
   ScreenPolicyDash, ScreenAIProposal, ScreenAskBee, WebDashboard */

// Shared "Mobile + Web in sync" showcase used by D/E/F desktop concepts.
// Theme: 'light' | 'dark' | 'gradient'
//
// Renders a section header + 3 angled iPhones (real product screens) +
// a browser window with the web dashboard. The same components used in G/H/I.

const IPhoneFrame = ({ width = 280, dark = false, children }) =>
  <window.IOSDevice width={width} height={width * 2.07} dark={dark}>{children}</window.IOSDevice>;

const BrowserWindow = ({ url, height = 460, dark = false, children }) =>
  <window.ChromeWindow url={url} width={1320} height={height} tabs={[{ title: 'LifeBee Dashboard', favicon: '🐝' }]}>
    {children}
  </window.ChromeWindow>;

function ProductShowcase({ theme = 'light', accent = '#2B7DF5', accentDeep = '#1E5BC6' }) {
  const dark = theme === 'dark';
  const bg = dark ? '#06122B' : (theme === 'gradient' ? 'linear-gradient(180deg, #f3f6fc 0%, #fff 60%)' : '#fff');
  const ink = dark ? '#fff' : '#0E1726';
  const muted = dark ? '#7d8aa3' : '#5A6478';
  const line = dark ? 'rgba(255,255,255,0.08)' : '#E2E7EF';
  const eyebrowColor = dark ? '#9bb6ff' : accent;
  const cardBg = dark ? 'rgba(255,255,255,0.03)' : '#fff';

  const phones = [
    { screen: <window.ScreenFNAOverview />,
      n: '01', t: 'FNA Overview',
      d: 'Five-step FNA, signed-and-locked. PIBA-2023 aligned, 7-year audit log.' },
    { screen: <window.ScreenAIProposal />,
      n: '02', t: 'AI Proposal',
      d: '3-min personalised proposals across 4,400+ products. RAG/KAG-grounded.', dark: true },
    { screen: <window.ScreenPolicyDash />,
      n: '03', t: 'Policy Dashboard',
      d: 'AUM, renewals, underwriting, commission — refreshed in real time.' },
  ];

  return (
    <section style={{ background: bg, color: ink, padding: '88px 56px', borderTop: `1px solid ${line}` }} id="platform-product">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 56 }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: eyebrowColor, fontWeight: 700, marginBottom: 14 }}>
            The product · Mobile + Web in sync
          </div>
          <h2 style={{ fontSize: 56, lineHeight: 1.02, margin: 0, fontWeight: 600, letterSpacing: '-0.03em' }}>
            From client onboarding<br/>to electronic signature.
          </h2>
        </div>
        <p style={{ fontSize: 16, color: muted, lineHeight: 1.55, maxWidth: 380, margin: 0 }}>
          FNA · proposal · AML · underwriting · settlement — the entire chain on one phone, mirrored on a manager-grade web console. Used daily by 200,000+ HK professionals.
        </p>
      </div>

      {/* Three phones */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 80 }}>
        {phones.map((p, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
              <IPhoneFrame width={280} dark={p.dark && dark}>{p.screen}</IPhoneFrame>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: accent, fontFamily: 'JetBrains Mono, monospace' }}>{p.n}</span>
              <span style={{ flex: 1, height: 1, background: line }}></span>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{p.t}</div>
            <div style={{ fontSize: 14, color: muted, lineHeight: 1.55 }}>{p.d}</div>
          </div>
        ))}
      </div>

      {/* Web console */}
      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: eyebrowColor, fontWeight: 700, marginBottom: 12 }}>Web Console</div>
          <h3 style={{ fontSize: 36, lineHeight: 1.05, margin: 0, fontWeight: 600, letterSpacing: '-0.025em', marginBottom: 16 }}>
            Brokerage HQ in your browser.
          </h3>
          <p style={{ fontSize: 15, color: muted, lineHeight: 1.55, margin: 0, marginBottom: 22 }}>
            Real-time policy dashboard, commission settlement, and performance analytics for the whole team — synced with every phone.
          </p>
          <div style={{ display: 'grid', gap: 10 }}>
            {[['100K+', 'daily policy capacity'], ['16+', 'data sources unified'], ['95%', 'process automation']].map(([n, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 12, paddingBottom: 8, borderBottom: `1px solid ${line}` }}>
                <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', minWidth: 90, color: ink }} className="tnum">{n}</span>
                <span style={{ fontSize: 13, color: muted }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <BrowserWindow url="app.beefintech.hk/dashboard" height={500} dark={dark}>
          <window.WebDashboard />
        </BrowserWindow>
      </div>
    </section>
  );
}

window.ProductShowcase = ProductShowcase;
