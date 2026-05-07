/* global React */
// Synthetic LifeBee App screens — placeholders that look like real product UI.
// Visual language: blue gradient header + rounded white cards + numbered steps + tabular nums.

const { Fragment } = React;

// ── Common app chrome ────────────────────────────────────────
function AppStatus({ dark = false }) {
  const c = dark ? '#fff' : '#0b1628';
  return (
    <div className="iphone-statusbar" style={{ color: c }}>
      <span className="tnum">9:41</span>
      <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="3" height="4" rx="0.6" fill={c}/><rect x="4" y="4" width="3" height="6" rx="0.6" fill={c}/><rect x="8" y="2" width="3" height="8" rx="0.6" fill={c}/><rect x="12" y="0" width="3" height="10" rx="0.6" fill={c}/></svg>
        <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0.5" y="0.5" width="19" height="9" rx="2.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="16" height="6" rx="1.5" fill={c}/></svg>
      </span>
    </div>
  );
}

function AppNav({ title, dark = false, onBack = true }) {
  return (
    <div style={{
      padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 10,
      color: dark ? '#fff' : 'var(--bee-ink)',
      borderBottom: dark ? 'none' : '1px solid var(--line-2)',
    }}>
      {onBack && <span style={{ fontSize: 18, opacity: 0.7 }}>‹</span>}
      <span style={{ flex: 1, textAlign: 'center', fontSize: 15, fontWeight: 600 }}>{title}</span>
      <span style={{ width: 18 }}></span>
    </div>
  );
}

// ── Screen 1: FNA Overview (mirrors PDF page 1) ──────────────
function ScreenFNAOverview() {
  const steps = [
    { n: 1, t: 'Basic Information', s: 'Done' },
    { n: 2, t: 'Financial Needs Analysis', s: 'Done' },
    { n: 3, t: 'Product Introduction & Selection', s: 'Done' },
    { n: 4, t: 'E-Signature', s: 'Signed' },
    { n: 5, t: 'Form Selection', s: 'Done' },
  ];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <AppNav title="FNA Overview" />
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: 'var(--bee-600)',
                background: 'var(--bee-50)', padding: '2px 6px', borderRadius: 4,
                fontFamily: 'serif', letterSpacing: '0.02em',
              }}>YFLife</div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Chan Dawen</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>MY Endowment Savings Plan</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--good)' }}>Completed</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)' }}>#387</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 14, borderBottom: '1px solid var(--line-2)' }}>
          <div style={{ paddingBottom: 8, fontSize: 12, fontWeight: 600, color: 'var(--bee-500)', borderBottom: '2px solid var(--bee-500)' }}>Overview</div>
          <div style={{ paddingBottom: 8, fontSize: 12, color: 'var(--ink-4)' }}>Linked Records</div>
        </div>
      </div>
      <div style={{ padding: 12, flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {steps.map(st => (
          <div key={st.n} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#fff', border: '1px solid var(--line)',
            borderRadius: 10, padding: '11px 12px',
            boxShadow: '0 1px 0 rgba(11,22,40,0.02)',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: 6,
              background: 'var(--bee-500)', color: '#fff',
              display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700,
            }}>{st.n}</div>
            <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{st.t}</div>
            <div style={{ fontSize: 11, color: 'var(--bee-500)', fontWeight: 600 }}>{st.s} ›</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 16px 14px', fontSize: 10, color: 'var(--ink-4)', textAlign: 'center' }}>
        Tip: data is locked after signing. Reset signature to edit.
      </div>
    </div>
  );
}

// ── Screen 2: Basic data form (mirrors PDF page 2) ───────────
function ScreenBasicData() {
  const Row = ({ label, value, end }) => (
    <div style={{ borderBottom: '1px solid var(--line-2)', padding: '10px 0' }}>
      <div style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
        {label} <span style={{ color: '#ff7eb6' }}>★</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{value}</div>
        {end && <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{end} ›</div>}
      </div>
    </div>
  );
  const Toggle = ({ label, options, active }) => (
    <div style={{ borderBottom: '1px solid var(--line-2)', padding: '10px 0' }}>
      <div style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
        {label} <span style={{ color: '#ff7eb6' }}>★</span>
      </div>
      <div style={{ display: 'flex', background: 'var(--paper)', borderRadius: 8, padding: 3 }}>
        {options.map(o => (
          <div key={o} style={{
            flex: 1, textAlign: 'center', fontSize: 12, padding: '6px 0',
            background: o === active ? 'var(--bee-500)' : 'transparent',
            color: o === active ? '#fff' : 'var(--ink-3)',
            borderRadius: 6, fontWeight: 600,
          }}>{o}</div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <AppNav title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--bee-500)', color: '#fff', fontSize: 10, display: 'grid', placeItems: 'center' }}>1</span>Basic Information</span>} />
      <div style={{ padding: '8px 16px', flex: 1, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'var(--paper)', borderRadius: 8, padding: '8px 10px', marginBottom: 4,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Client Profile <span style={{ color: 'var(--ink-4)', fontWeight: 400 }}>(Policyholder)</span></div>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--bee-500)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12 }}>−</div>
        </div>
        <Row label="Last Name (EN)" value="Chan" />
        <Row label="First Name (EN)" value="Dawen" />
        <Row label="Last Name (中)" value="陈" />
        <Row label="First Name (中)" value="大文" />
        <Toggle label="Gender" options={['Male', 'Female']} active="Male" />
        <Toggle label="Smoking Status" options={['Smoker', 'Non-smoker']} active="Non-smoker" />
        <Row label="Date of Birth" value="01/02/1995" end="" />
      </div>
    </div>
  );
}

// ── Screen 3: Form selection (mirrors PDF page 3) ────────────
function ScreenFormSelect() {
  const Card = ({ label, checked }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '11px 12px', borderBottom: '1px solid var(--line-2)',
    }}>
      <div style={{
        width: 18, height: 18, borderRadius: 5,
        background: checked ? 'var(--bee-500)' : 'transparent',
        border: checked ? 'none' : '1.5px solid #c9d3e2',
        display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11,
      }}>{checked ? '✓' : ''}</div>
      <div style={{ fontSize: 13, fontWeight: 500 }}>{label}</div>
    </div>
  );
  const Insurer = ({ name, checked }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '10px 12px', border: '1px solid var(--line)',
      borderRadius: 10, fontSize: 12, fontWeight: 500,
      background: checked ? 'var(--bee-50)' : '#fff',
      borderColor: checked ? 'var(--bee-500)' : 'var(--line)',
    }}>
      <div style={{
        width: 14, height: 14, borderRadius: '50%',
        background: checked ? 'var(--bee-500)' : 'transparent',
        border: checked ? 'none' : '1.5px solid #c9d3e2',
      }}></div>
      {name}
    </div>
  );
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <AppNav title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--bee-500)', color: '#fff', fontSize: 10, display: 'grid', placeItems: 'center' }}>5</span>Form Selection</span>} />
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 6 }}>Form Language <span style={{ color: '#ff7eb6' }}>★</span></div>
        <div style={{ display: 'flex', background: 'var(--paper)', borderRadius: 8, padding: 3, marginBottom: 14 }}>
          {[['繁體', false], ['简体', false], ['English', true]].map(([t, a]) => (
            <div key={t} style={{
              flex: 1, textAlign: 'center', fontSize: 11, padding: '6px 0',
              background: a ? 'var(--bee-500)' : 'transparent',
              color: a ? '#fff' : 'var(--ink-3)',
              borderRadius: 6, fontWeight: 600,
            }}>{t}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }}>FNA</div>
        <Card label="PIBA-2023" checked />
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', margin: '14px 0 6px' }}>Insurer</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          <Insurer name="CTF Life" />
          <Insurer name="YF Life" checked />
          <Insurer name="Manulife" />
          <Insurer name="China Pacific" />
        </div>
        <div style={{ marginTop: 10 }}>
          <Card label="Life Insurance Application" checked />
          <Card label="Mainland Resident" checked />
          <Card label="With-Profit" checked />
          <Card label="Policy Transfer" checked />
        </div>
      </div>
    </div>
  );
}

// ── Screen 4: Policy dashboard ──────────────────────────────
function ScreenPolicyDash() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: 'linear-gradient(160deg, #2563ff 0%, #1a3aaa 100%)',
        color: '#fff', padding: '4px 16px 22px', position: 'relative',
      }}>
        <AppNav title="Policies" dark />
        <div style={{ padding: '6px 0' }}>
          <div style={{ fontSize: 10, opacity: 0.7, fontWeight: 500 }}>AUM this month</div>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }} className="tnum">HK$ 4,287,520</div>
          <div style={{ fontSize: 10, opacity: 0.85, marginTop: 4 }}>↑ 12.4% vs last month · 47 active policies</div>
        </div>
      </div>
      <div style={{ padding: '0 12px', marginTop: -12, display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 12 }}>
        <div style={{
          background: '#fff', borderRadius: 12, padding: 12,
          boxShadow: '0 8px 24px -12px rgba(11,22,40,0.18)',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6,
        }}>
          {[['Renewals due', '8'], ['Underwriting', '3'], ['Commission pending', '12']].map(([l, n]) => (
            <div key={l} style={{ textAlign: 'center', padding: '4px 0' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--bee-600)' }} className="tnum">{n}</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', marginTop: 4 }}>Recent Policies</div>
        {[
          { c: 'Margaret Wong', p: 'YF Life · MY Endowment', a: 'HK$120,000', s: 'Renew 12d', t: 'warn' },
          { c: 'Andrew Lee', p: 'Manulife · ManuHealth', a: 'HK$85,000', s: 'Active', t: 'good' },
          { c: 'Cassie Chan', p: 'CTF · Harvest Plus', a: 'HK$240,000', s: 'Underwriting', t: 'info' },
        ].map((p, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 10, padding: 10,
            border: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'var(--bee-50)', color: 'var(--bee-600)',
              display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700,
            }}>{p.c[0]}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 1 }}>{p.c}</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.p}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, fontWeight: 700 }} className="tnum">{p.a}</div>
              <div style={{
                fontSize: 9, fontWeight: 600, marginTop: 1,
                color: p.t === 'warn' ? '#d4793a' : p.t === 'good' ? 'var(--good)' : 'var(--bee-500)',
              }}>{p.s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Screen 5: AI Proposal generator ──────────────────────────
function ScreenAIProposal() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#0b1628', color: '#fff' }}>
      <AppStatus dark />
      <div style={{ padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <span style={{ fontSize: 18 }}>‹</span>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 14, fontWeight: 600 }}>AI Proposal</span>
        </div>
        <div style={{
          background: 'rgba(37,99,255,0.12)',
          border: '1px solid rgba(37,99,255,0.4)',
          borderRadius: 10, padding: '8px 10px',
          fontSize: 10, color: '#9bb6ff',
          display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5dd4a8' }}></span>
          ⚡ Generated in 642ms · Bee RAG/KAG
        </div>
        <div style={{ fontSize: 10, color: '#7d8aa3', marginBottom: 4, fontFamily: 'JetBrains Mono, monospace' }}>CLIENT PROFILE</div>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14, lineHeight: 1.5 }}>
          Age 35, married, 2 kids<br />Budget HK$ 5,000/mo · Retirement
        </div>
        <div style={{ fontSize: 10, color: '#7d8aa3', marginBottom: 8, fontFamily: 'JetBrains Mono, monospace' }}>TOP 3 MATCHES</div>
        {[
          { t: 'YF Life · MY Endowment', m: '2,400/mo', f: 92 },
          { t: 'Manulife · Income Plus', m: '1,800/mo', f: 87 },
          { t: 'CTF · Harvest Savings', m: '950/mo', f: 81 },
        ].map((p, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 10, padding: '10px 12px', marginBottom: 6,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{p.t}</div>
              <div style={{ fontSize: 10, color: '#7d8aa3', marginTop: 2 }} className="tnum">HK$ {p.m}</div>
            </div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: '#5dd4a8',
              fontFamily: 'JetBrains Mono, monospace',
            }}>{p.f}%</div>
          </div>
        ))}
        <div style={{
          marginTop: 8, background: 'var(--bee-500)', color: '#fff',
          padding: '11px 0', borderRadius: 10, textAlign: 'center',
          fontSize: 13, fontWeight: 600,
        }}>Export PDF Proposal</div>
      </div>
    </div>
  );
}

// ── Screen 6: Ask Bee AI chat ────────────────────────────────
function ScreenAskBee() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{
        background: 'linear-gradient(180deg, #fff 0%, #f3f6fc 100%)',
        padding: '6px 16px 14px', borderBottom: '1px solid var(--line)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16, opacity: 0.6 }}>‹</span>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'linear-gradient(135deg, #4d8bff, #1a3aaa)',
            display: 'grid', placeItems: 'center', color: '#fff',
            fontSize: 14,
          }}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Ask Bee AI</div>
            <div style={{ fontSize: 9, color: 'var(--good)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--good)' }}></span>
              92.58% accuracy · &lt;800ms
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            maxWidth: '80%', background: 'var(--bee-500)', color: '#fff',
            padding: '8px 12px', borderRadius: '14px 14px 4px 14px',
            fontSize: 12, lineHeight: 1.5,
          }}>Compare YF Life MY Endowment vs Manulife Income Plus for a 35-year-old client</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            background: 'linear-gradient(135deg, #4d8bff, #1a3aaa)',
            display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11,
          }}>✦</div>
          <div style={{
            maxWidth: '80%', background: 'var(--paper)',
            padding: '8px 12px', borderRadius: '14px 14px 14px 4px',
            fontSize: 12, lineHeight: 1.5,
          }}>
            <div>Both are with-profit savings plans. Key differences:</div>
            <div style={{ marginTop: 6, fontSize: 11 }}>
              <div>· <b>MY Endowment</b> — higher guaranteed CV from year 6</div>
              <div>· <b>Income Plus</b> — slightly better long-run IRR (~5.8%)</div>
              <div>· At age 35, <b>MY Endowment</b> is the better fit</div>
            </div>
            <div style={{
              marginTop: 8, fontSize: 9, color: 'var(--ink-4)',
              fontFamily: 'JetBrains Mono, monospace',
              borderTop: '1px solid var(--line-2)', paddingTop: 6,
            }}>
              ⚡ 738ms · Source: Product DB §A.4
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: 12, borderTop: '1px solid var(--line-2)', display: 'flex', gap: 6 }}>
        <div style={{
          flex: 1, background: 'var(--paper)', borderRadius: 999,
          padding: '8px 12px', fontSize: 11, color: 'var(--ink-4)',
        }}>Ask anything about insurance…</div>
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'var(--bee-500)', display: 'grid', placeItems: 'center',
          color: '#fff', fontSize: 12,
        }}>↑</div>
      </div>
    </div>
  );
}

// ── Web dashboard placeholder (used in browser chrome) ───────
function WebDashboard() {
  return (
    <div style={{ display: 'flex', height: '100%', background: '#f6f8fc', fontSize: 12 }}>
      {/* sidebar */}
      <div style={{
        width: 180, background: '#fff', borderRight: '1px solid var(--line)',
        padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px 12px', borderBottom: '1px solid var(--line-2)', marginBottom: 6 }}>
          <div className="bee-logo" style={{ width: 22, height: 22 }}></div>
          <span style={{ fontWeight: 700, letterSpacing: '-0.01em', fontSize: 13 }}>LifeBee</span>
        </div>
        {[
          ['📊', 'Dashboard', true],
          ['👥', 'Clients'],
          ['📋', 'FNA & Proposals'],
          ['📄', 'Policies'],
          ['💰', 'Commissions'],
          ['📈', 'Analytics'],
          ['✦', 'AI Broker', false, true],
        ].map(([i, t, active, ai]) => (
          <div key={t} style={{
            padding: '7px 10px', borderRadius: 7,
            background: active ? 'var(--bee-50)' : 'transparent',
            color: active ? 'var(--bee-600)' : ai ? '#9b6dff' : 'var(--ink-2)',
            fontWeight: active ? 600 : 500, fontSize: 12,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 14, fontSize: 11 }}>{i}</span>{t}
            {ai && <span style={{ fontSize: 8, padding: '1px 4px', background: '#9b6dff20', color: '#9b6dff', borderRadius: 3, marginLeft: 'auto', fontWeight: 700 }}>NEW</span>}
          </div>
        ))}
      </div>
      {/* main */}
      <div style={{ flex: 1, padding: 16, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>Dashboard</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>2025 Q4 · November</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ padding: '5px 10px', background: '#fff', border: '1px solid var(--line)', borderRadius: 6, fontSize: 11 }}>Export</div>
            <div style={{ padding: '5px 10px', background: 'var(--bee-500)', color: '#fff', borderRadius: 6, fontSize: 11, fontWeight: 600 }}>+ New FNA</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
          {[
            ['Active policies', '1,247', '+ 8.2%'],
            ['New this month', '83', '+ 12.4%'],
            ['Renewal rate', '96.4%', '+ 1.2pp'],
            ['Commission pending', 'HK$ 432K', '+ 4.1%'],
          ].map(([l, v, d]) => (
            <div key={l} style={{ background: '#fff', borderRadius: 10, padding: 12, border: '1px solid var(--line)' }}>
              <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4, letterSpacing: '-0.02em' }} className="tnum">{v}</div>
              <div style={{ fontSize: 10, color: 'var(--good)', fontWeight: 600, marginTop: 2 }}>{d}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 10 }}>
          <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid var(--line)', height: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>New policies · last 30 days</div>
              <div style={{ fontSize: 10, color: 'var(--ink-4)' }}>HK$</div>
            </div>
            {/* chart */}
            <svg viewBox="0 0 320 130" style={{ width: '100%', height: 'calc(100% - 24px)' }}>
              <defs>
                <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2563ff" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#2563ff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,90 L20,80 L40,85 L60,70 L80,75 L100,55 L120,60 L140,40 L160,45 L180,30 L200,35 L220,25 L240,40 L260,30 L280,20 L300,25 L320,15 L320,130 L0,130 Z" fill="url(#cg)"/>
              <path d="M0,90 L20,80 L40,85 L60,70 L80,75 L100,55 L120,60 L140,40 L160,45 L180,30 L200,35 L220,25 L240,40 L260,30 L280,20 L300,25 L320,15" fill="none" stroke="#2563ff" strokeWidth="2"/>
              {[0, 50, 100, 150, 200, 250, 300].map(x => (
                <line key={x} x1={x} y1={0} x2={x} y2={130} stroke="#eef2f8"/>
              ))}
            </svg>
          </div>
          <div style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid var(--line)' }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Policy mix</div>
            {[
              ['Life & Savings', 58, 'var(--bee-500)'],
              ['Critical Illness', 22, '#5dd4a8'],
              ['Medical', 14, '#ffb84d'],
              ['Other', 6, '#c9d3e2'],
            ].map(([l, v, c]) => (
              <div key={l} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 3 }}>
                  <span>{l}</span><span className="tnum">{v}%</span>
                </div>
                <div style={{ height: 5, background: 'var(--paper)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${v}%`, height: '100%', background: c }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  ScreenFNAOverview, ScreenBasicData, ScreenFormSelect,
  ScreenPolicyDash, ScreenAIProposal, ScreenAskBee,
  WebDashboard, AppStatus, AppNav,
});
