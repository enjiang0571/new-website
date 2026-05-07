// Concept D — Bluechip / Trust Editorial in brand blue
// Soft white paper, charcoal ink, vivid logo blue as accent.

const ConceptD = () => {
  const blue = '#2B7DF5';
  const blueDeep = '#1E5BC6';
  const blueSoft = '#EAF2FF';
  const ink = '#0E1726';
  const paper = '#FBFCFE';
  const line = '#E2E7EF';
  const muted = '#5A6478';

  return (
    <div style={{ background: paper, color: ink, fontFamily: '"Inter", system-ui, sans-serif', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 56px', borderBottom: `1px solid ${line}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <img src="assets/beefintech-logo.png" alt="BeeFintech" style={{ height: 26 }}/>
          <nav style={{ display: 'flex', gap: 28, fontSize: 14, color: muted }}>
            <span>Platform</span><span>AI Broker</span><span>Security</span><span>Customers</span><span>Company</span>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13 }}>
          <span style={{ color: muted }}>EN · 繁中</span>
          <button style={{ background: ink, color: paper, border: 'none', padding: '9px 16px', borderRadius: 6, fontSize: 13, fontWeight: 500 }}>Book a demo</button>
        </div>
      </div>

      <div style={{ padding: '88px 56px 64px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: blueSoft, borderRadius: 999, fontSize: 12, color: blueDeep, marginBottom: 28, fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: blue }}></span>
            Approved by YF Life · FWD · China Life Strategic Partner
          </div>
          <h1 style={{ fontFamily: '"Inter", sans-serif', fontSize: 84, lineHeight: 0.98, letterSpacing: '-0.035em', margin: 0, fontWeight: 600 }}>
            The InsurTech<br/>
            platform Hong Kong's<br/>
            brokers <span style={{ color: blue }}>trust.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.45, color: muted, maxWidth: 560, marginTop: 28 }}>
            Nine years. 150+ broker firms. 130+ insurers. Zero breaches. 95% of customers renew, every year.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <button style={{ background: blue, color: '#fff', border: 'none', padding: '14px 22px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Try Bee AI — no signup →</button>
            <button style={{ background: 'transparent', color: ink, border: `1px solid ${line}`, padding: '14px 22px', borderRadius: 8, fontSize: 15, fontWeight: 500 }}>Book a demo</button>
          </div>
        </div>
        <div style={{ borderLeft: `2px solid ${blue}`, paddingLeft: 28 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 18, fontWeight: 600 }}>Trust, in numbers</div>
          {[['95%+', 'annual renewal rate'], ['8 yrs', 'zero data breaches'], ['60%+', 'long-term life broker share'], ['20,000+', 'pros use our AI daily']].map(([n, l], i) => (
            <div key={i} style={{ paddingTop: 16, paddingBottom: 16, borderBottom: i < 3 ? `1px solid ${line}` : 'none' }}>
              <div style={{ fontSize: 38, lineHeight: 1, letterSpacing: '-0.025em', fontWeight: 700, color: ink }}>{n}</div>
              <div style={{ fontSize: 13, color: muted, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '24px 56px', background: blueSoft, borderTop: `1px solid ${line}`, borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, color: blueDeep, fontSize: 13, fontWeight: 500 }}>
        <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Approved by</span>
        <span>YF Life</span><span style={{ fontWeight: 700 }}>FWD</span><span>中國人壽 (海外)</span><span>HKSTP</span><span>HK ICT 2020</span><span>Microsoft Azure</span><span>Alibaba Cloud HK</span>
      </div>

      <div style={{ padding: '88px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 14, fontWeight: 600 }}>Try it now</div>
            <h2 style={{ fontSize: 44, lineHeight: 1.05, margin: 0, fontWeight: 600, letterSpacing: '-0.025em' }}>
              Don't take our word for it.<br/>
              <span style={{ color: muted }}>Try our AI.</span>
            </h2>
            <p style={{ color: muted, fontSize: 16, lineHeight: 1.5, marginTop: 20, maxWidth: 380 }}>
              Five live demos, free, anonymous. The same AI engine 20,000+ insurance professionals use every day.
            </p>
          </div>
          <div style={{ background: '#fff', border: `1px solid ${line}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 40px -16px rgba(43,125,245,0.25)' }}>
            <div style={{ padding: '14px 18px', borderBottom: `1px solid ${line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: blue }}></span>Bee AI · ready</div>
              <div style={{ color: muted }}>Credits <span style={{ color: blue, fontWeight: 700 }}>3 / 3</span></div>
            </div>
            <div style={{ padding: 18, display: 'flex', flexWrap: 'wrap', gap: 8, borderBottom: `1px solid ${line}` }}>
              {['Compare products', 'Generate proposal', 'Visualize a scenario', 'Ask Bee anything'].map((t, i) => (
                <span key={i} style={{ padding: '8px 14px', borderRadius: 999, border: `1px solid ${i === 0 ? blue : line}`, fontSize: 13, background: i === 0 ? blue : '#fff', color: i === 0 ? '#fff' : ink, fontWeight: i === 0 ? 600 : 400 }}>{t}</span>
              ))}
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 12, color: muted, marginBottom: 6 }}>You</div>
              <div style={{ fontSize: 15, marginBottom: 18 }}>I'm 35, want retirement protection, budget HK$5,000/month. Compare 2-3 options.</div>
              <div style={{ fontSize: 12, color: blue, marginBottom: 6, fontWeight: 600 }}>Bee AI · 642ms</div>
              <div style={{ background: blueSoft, border: `1px solid ${line}`, borderRadius: 10, padding: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, fontSize: 12 }}>
                  {['ManuRetire 5', 'AIA Pro Annuity', 'FWD Easy Save'].map((p, i) => (
                    <div key={i} style={{ background: '#fff', border: `1px solid ${line}`, borderRadius: 8, padding: 10 }}>
                      <div style={{ fontWeight: 600, marginBottom: 6 }}>{p}</div>
                      <div style={{ color: muted, marginBottom: 6 }}>HK${[4800, 5200, 4400][i]}/mo</div>
                      <div style={{ height: 4, background: line, borderRadius: 99, marginBottom: 4 }}>
                        <div style={{ width: `${[78, 86, 64][i]}%`, height: '100%', background: blue, borderRadius: 99 }}></div>
                      </div>
                      <div style={{ color: muted }}>fit score</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: muted }}>
                <span>⚡ &lt;800ms</span><span>·</span><span>🔒 No data stored</span><span>·</span><span>🇭🇰 HK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile + Web product showcase */}
      <window.ProductShowcase theme="light" accent={blue} accentDeep={blueDeep}/>

      {/* Platform — feature grid */}
      <div id="platform" style={{ padding: '88px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 14, fontWeight: 600 }}>Platform</div>
        <h2 style={{ fontSize: 56, lineHeight: 1.02, margin: 0, fontWeight: 600, letterSpacing: '-0.03em', maxWidth: 880 }}>
          One workspace, the entire <span style={{ color: blue }}>policy lifecycle.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
          {[
            ['LifeBee CRM', 'Client onboarding, FNA, e-signature, KYC. Mobile + web, in sync.'],
            ['LifeBee EBA', 'E-Business Application — proposal to issuance, paperless.'],
            ['LifeBee POS', 'Policy admin & service, renewals, claims, commissions.'],
            ['LifeBee BI', 'Realtime dashboards across firm performance.'],
            ['Bee AI Broker', 'RAG/KAG engine — compare 4,400+ products in seconds.'],
            ['LifeBee Quote', 'Multi-insurer quoting & illustration in one click.'],
          ].map(([t, d], i) => (
            <div key={i} style={{ padding: 24, background: '#fff', border: `1px solid ${line}`, borderRadius: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: blueSoft, color: blue, display: 'grid', placeItems: 'center', fontWeight: 700, marginBottom: 16 }}>{i + 1}</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{t}</div>
              <div style={{ color: muted, fontSize: 14, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div id="security" style={{ padding: '88px 56px', background: '#fff', borderTop: `1px solid ${line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 14, fontWeight: 600 }}>Security</div>
            <h2 style={{ fontSize: 48, lineHeight: 1.02, margin: 0, fontWeight: 600, letterSpacing: '-0.03em' }}>
              Eight years.<br/>Zero breaches.
            </h2>
            <p style={{ color: muted, fontSize: 16, lineHeight: 1.55, marginTop: 20, maxWidth: 420 }}>
              Hong Kong residency, end-to-end encryption, every action audited. Trusted with 100,000+ policies/day.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              ['HK PDPO', 'Full compliance, all data resides in Hong Kong.'],
              ['ISO 27001', 'In progress. SOC 2 Type II annual review.'],
              ['Encryption', 'AES-256 at rest, TLS 1.3 in flight.'],
              ['Audit trail', 'Every read/write signed, 7-year retention.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ padding: 22, background: paper, border: `1px solid ${line}`, borderRadius: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: blue }}>{t}</div>
                <div style={{ color: muted, fontSize: 13, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customers */}
      <div id="customers" style={{ padding: '88px 56px', borderTop: `1px solid ${line}` }}>
        <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 14, fontWeight: 600 }}>Customers</div>
        <h2 style={{ fontSize: 48, lineHeight: 1.02, margin: 0, fontWeight: 600, letterSpacing: '-0.03em', maxWidth: 720 }}>
          150+ broker firms. <span style={{ color: muted }}>One trusted backbone.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
          {[
            { q: '"3-min proposals replaced 3-hour spreadsheets. We doubled new-client capacity."', a: 'Director, mid-size HK broker firm' },
            { q: '"95% renewal rate isn\'t marketing — it\'s a year-on-year audit number."', a: 'COO, bancassurance group' },
            { q: '"The AI catches policy mismatches our junior advisors used to miss."', a: 'Head of Compliance, MPF firm' },
          ].map((t, i) => (
            <div key={i} style={{ padding: 28, background: '#fff', border: `1px solid ${line}`, borderRadius: 12 }}>
              <div style={{ fontSize: 17, lineHeight: 1.5, color: ink, marginBottom: 20 }}>{t.q}</div>
              <div style={{ fontSize: 13, color: muted }}>{t.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <window.AwardsBlock theme="light"/>

      {/* Company */}
      <div id="company" style={{ padding: '88px 56px', background: '#fff', borderTop: `1px solid ${line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: blue, marginBottom: 14, fontWeight: 600 }}>Company</div>
            <h2 style={{ fontSize: 48, lineHeight: 1.02, margin: 0, fontWeight: 600, letterSpacing: '-0.03em' }}>
              From HKSTP InnoCentre, since 2017.
            </h2>
          </div>
          <div style={{ fontSize: 16, color: muted, lineHeight: 1.6 }}>
            BeeFintech is Hong Kong's leading insurance SaaS, recognised by HK ICT Awards 2020 and incubated at HKSTP. We exist to make insurance professionals 10× more effective — without compromising on trust.
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 32, fontSize: 14, color: ink }}>
              <div><div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>HQ</div>Unit 505, InnoCentre, Kowloon Tong</div>
              <div><div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Founded</div>2017</div>
              <div><div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Team</div>40+ engineers & insurance experts</div>
              <div><div style={{ fontSize: 11, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Backed by</div>HKSTP, Microsoft, Alibaba Cloud</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '88px 56px', background: blue, color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 600, letterSpacing: '-0.025em', maxWidth: 720 }}>
            Ready to see Bee AI on your book of business?
          </h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ background: '#fff', color: blueDeep, border: 'none', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 700 }}>Try Bee AI →</button>
            <button style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)', padding: '15px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600 }}>Book a demo</button>
          </div>
        </div>
      </div>

      <div style={{ background: ink, color: paper, padding: '32px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: 13 }}>
        <span>🔒 HK PDPO compliant</span><span>🇭🇰 All data in Hong Kong</span><span>🛡 ISO 27001 in progress</span><span>✅ YF Life & FWD approved</span>
        <span style={{ color: blue }}>● All systems operational · 99.99% uptime</span>
      </div>
    </div>
  );
};
window.ConceptD = ConceptD;
