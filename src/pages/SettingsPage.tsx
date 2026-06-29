export default function SettingsPage() {
  const section = (icon: string, title: string, subtitle: string, children: React.ReactNode) => (
    <div className="section-card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid #F8FAFC' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1B2559' }}>{title}</div>
          <div style={{ fontSize: 11, color: '#A3AED0' }}>{subtitle}</div>
        </div>
      </div>
      {children}
      <button style={{ marginTop: 16, fontSize: 12, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
        Manage {title} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  )

  const field = (label: string, value: string, type: 'input' | 'select' | 'textarea' = 'input') => (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 500, color: '#A3AED0', marginBottom: 4 }}>{label}</label>
      {type === 'textarea'
        ? <textarea defaultValue={value} rows={2} style={{ width: '100%', padding: '8px 10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, color: '#1B2559', outline: 'none', fontFamily: 'Inter, sans-serif', resize: 'none' }} />
        : type === 'select'
        ? <select defaultValue={value} style={{ width: '100%', padding: '8px 10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, color: '#1B2559', outline: 'none', background: 'white' }}><option>{value}</option></select>
        : <input defaultValue={value} style={{ width: '100%', padding: '8px 10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, color: '#1B2559', outline: 'none' }} />
      }
    </div>
  )

  const toggle = (label: string, on: boolean) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #F8FAFC' }}>
      <span style={{ fontSize: 13, color: '#1B2559' }}>{label}</span>
      <div style={{ width: 36, height: 20, borderRadius: 10, background: on ? '#2563EB' : '#E8EDF5', position: 'relative', cursor: 'pointer' }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, left: on ? 18 : 2, transition: 'left 0.2s' }} />
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
            {['Dashboard','Settings','General Settings'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Settings</h1>
        </div>
        <button style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '10px 20px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Save Changes</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
        {section('⚙️', 'General Settings', 'Manage general system settings',
          <div>
            {field('Site Title', 'Bakhtar Travel & Tourism')}
            {field('Site Tagline', 'Explore the world with us')}
            {field('Timezone', 'Asia/Kabul (UTC+4:30)', 'select')}
            {field('Date Format', 'June 16, 2025 (MMM DD, YYYY)', 'select')}
            {field('Time Format', '12 Hour (hh:mm AM/PM)', 'select')}
          </div>
        )}
        {section('🏢', 'Company Information', 'Manage company details',
          <div>
            {field('Company Name', 'Bakhtar Travel & Tourism L.L.C')}
            {field('Email', 'info@bakhtartravel.af')}
            {field('Phone', '+93 789 123 456')}
            {field('Address', 'Kabul, Afghanistan\nShahr-e-Naw, Next to Park', 'textarea')}
            <div style={{ marginTop: 8 }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: '#A3AED0' }}>Logo</label>
              <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✈️</div>
                <div>
                  <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>⬆ Upload New Logo</button>
                  <div style={{ fontSize: 10, color: '#A3AED0' }}>JPG, PNG or SVG (Max. 2MB)</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {section('🌐', 'Languages', 'Manage supported languages',
          <div>
            <button style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', background: 'none', border: '1px dashed #BAD0FF', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', marginBottom: 10 }}>+ Add Language</button>
            {[{ flag: '🇬🇧', name: 'English (Default)', active: true }, { flag: '🇦🇫', name: 'Dari', active: true }, { flag: '🇦🇫', name: 'Pashto', active: true }, { flag: '🇸🇦', name: 'Arabic', active: false }, { flag: '🇷🇺', name: 'Russian', active: false }].map(l => (
              <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 16 }}>{l.flag}</span>
                <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{l.name}</span>
                <span className="badge" style={{ background: l.active ? '#ECFDF5' : '#FEF2F2', color: l.active ? '#059669' : '#DC2626', fontSize: 10 }}>{l.active ? 'Active' : 'Inactive'}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A3AED0' }}>•••</button>
              </div>
            ))}
          </div>
        )}
        {section('💰', 'Currencies', 'Manage supported currencies',
          <div>
            <button style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', background: 'none', border: '1px dashed #BAD0FF', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', marginBottom: 10 }}>+ Add Currency</button>
            {[{ code: 'USD', name: 'US Dollar (Default)', active: true }, { code: 'AFN', name: 'Afghan Afghani', active: true }, { code: 'EUR', name: 'Euro', active: true }, { code: 'GBP', name: 'British Pound', active: false }, { code: 'AED', name: 'UAE Dirham', active: false }].map(c => (
              <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', width: 32 }}>{c.code}</span>
                <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{c.name}</span>
                <span className="badge" style={{ background: c.active ? '#ECFDF5' : '#FEF2F2', color: c.active ? '#059669' : '#DC2626', fontSize: 10 }}>{c.active ? 'Active' : 'Inactive'}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A3AED0' }}>•••</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {section('💳', 'Payment Gateways', 'Configure payment methods',
          <div>
            {[{ icon: 'S', name: 'Stripe', on: true, color: '#6772E5' }, { icon: 'P', name: 'PayPal', on: true, color: '#003087' }, { icon: '🏦', name: 'Afghanistan Bank', on: true, color: '#059669' }, { icon: 'e', name: 'eSewa', on: false, color: '#60B246' }, { icon: '💵', name: 'Cash on Arrival', on: true, color: '#F59E0B' }].map(g => (
              <div key={g.name} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F8FAFC', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: g.color, flexShrink: 0 }}>{g.icon}</div>
                <span style={{ flex: 1, fontSize: 13, color: '#1B2559' }}>{g.name}</span>
                <div style={{ width: 36, height: 20, borderRadius: 10, background: g.on ? '#2563EB' : '#E8EDF5', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, left: g.on ? 18 : 2 }} />
                </div>
              </div>
            ))}
          </div>
        )}
        {section('📧', 'Email Settings', 'Configure email preferences',
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>{(() => { return field('Mail Driver', 'SMTP', 'select') })()}</div>
              <div>{(() => { return field('Host', 'smtp.gmail.com') })()}</div>
            </div>
            {field('Port', '587')}
            {field('Email Address', 'no-reply@bakhtartravel.af')}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>{(() => { return field('Encryption', 'TLS', 'select') })()}</div>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 500, color: '#A3AED0', marginBottom: 4 }}>Password</label>
                <input type="password" defaultValue="••••••••••••••••" style={{ width: '100%', padding: '8px 10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, color: '#1B2559', outline: 'none' }} />
              </div>
            </div>
          </div>
        )}
        {section('📱', 'SMS Settings', 'Configure SMS preferences',
          <div>
            {field('SMS Provider', 'AF SMS', 'select')}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 500, color: '#A3AED0', marginBottom: 4 }}>API Key</label>
                <input type="password" defaultValue="••••••••••••••••••••" style={{ width: '100%', padding: '8px 10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, outline: 'none' }} />
              </div>
              <div>{(() => { return field('Sender ID', 'BAKHTAR') })()}</div>
            </div>
            <div style={{ marginTop: 8 }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: '#A3AED0' }}>Status</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#059669' }}>Connected</span>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: '#A3AED0' }}>SMS Balance</label>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#2563EB', marginTop: 4 }}>1,250.00 AFN</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
