// Shared Awards & Credentials block
// Uses 6 cropped images from the original BeeFintech slide (assets/award-*.png)

function AwardsBlock({ theme = 'light' }) {
  const dark = theme === 'dark';
  const bg = dark ? '#06122B' : '#FBFCFE';
  const cardBg = dark ? '#0A1B3D' : '#fff';
  const text = dark ? '#E8EEFA' : '#0E1726';
  const muted = dark ? '#7A89A8' : '#5A6478';
  const border = dark ? '#1B2C52' : '#E2E7EF';
  const accent = '#2B7DF5';

  const items = [
    { src: 'assets/award-hkstp.png',    cap: 'HKSTP InnoCentre Resident' },
    { src: 'assets/award-itc-tvp.png',  cap: 'ITC TVP Qualified Vendor' },
    { src: 'assets/award-ict-2020.png', cap: 'HK ICT Awards 2020' },
    { src: 'assets/award-alibaba.png',  cap: 'Alibaba Cloud HK · Strategic Partner' },
    { src: 'assets/award-dbiz.png',     cap: 'Government D-Biz Vendor' },
    { src: 'assets/award-manulife.png', cap: 'Manulife BOOST · Finalist' },
  ];

  return (
    <div id="awards" style={{ background: bg, color: text, padding: '88px 56px', borderTop: `1px solid ${border}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: 14, fontWeight: 700 }}>
            Awards & Credentials
          </div>
          <h2 style={{ fontSize: 52, lineHeight: 1.02, margin: 0, fontWeight: 700, letterSpacing: '-0.03em' }}>
            <span style={{ color: accent }}>2017</span> · Hong Kong InsurTech, recognised.
          </h2>
        </div>
        <p style={{ color: muted, fontSize: 17, lineHeight: 1.55, margin: 0, maxWidth: 540, justifySelf: 'end' }}>
          Founded in 2017 at HKSTP. Trusted by 160+ broker firms across Hong Kong, Macau and Singapore. Government-vetted, insurer-approved.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: cardBg, border: `1px solid ${border}`, borderRadius: 14,
            padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            boxShadow: dark ? 'none' : '0 4px 16px -8px rgba(11,22,40,0.08)',
          }}>
            <img src={it.src} alt={it.cap} style={{ width: '100%', height: 200, objectFit: 'contain', objectPosition: 'center' }}/>
            <div style={{ fontSize: 13, color: muted, textAlign: 'center', fontWeight: 500 }}>{it.cap}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.AwardsBlock = AwardsBlock;
