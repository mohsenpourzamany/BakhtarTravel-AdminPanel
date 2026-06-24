import { mockDestinations } from '../../lib/mockData'

export function TopDestinations() {
  return (
    <div className="section-card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy)', margin: 0 }}>Top Destinations</h3>
        <button style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary-500)', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {mockDestinations.map(dest => (
          <div key={dest.rank} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-muted)', width: 14, flexShrink: 0 }}>{dest.rank}</span>
            <span style={{ fontSize: 18, flexShrink: 0 }}>{dest.flag}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {dest.name}, {dest.country}
                </span>
                <span style={{ fontSize: 11, color: 'var(--color-muted)', flexShrink: 0, marginLeft: 6 }}>{dest.bookings}</span>
              </div>
              <div style={{ height: 4, background: '#F0F3FA', borderRadius: 9999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${dest.percent}%`, background: 'var(--color-primary-500)', borderRadius: 9999, transition: 'width 0.5s' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const quickActions = [
  { label: 'New Tour',           bg: '#EEF4FF', color: '#2563EB', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: 'New Hotel',          bg: '#FFFBEB', color: '#F59E0B', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: 'Send Notification',  bg: '#ECFDF5', color: '#10B981', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
  { label: 'Create Discount',    bg: '#F5F3FF', color: '#8B5CF6', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg> },
  { label: 'Add Banner',         bg: '#FDF2F8', color: '#EC4899', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> },
  { label: 'View Reports',       bg: '#FEF2F2', color: '#EE5D50', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
]

export function QuickActions() {
  return (
    <div className="section-card" style={{ padding: 20 }}>
      <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy)', marginBottom: 16 }}>Quick Actions</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {quickActions.map(a => (
          <button key={a.label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            padding: '12px 8px', borderRadius: 12, border: '1px solid #F0F3FA',
            background: 'white', cursor: 'pointer', transition: 'border-color 0.15s, box-shadow 0.15s'
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#BAD0FF'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(37,99,235,0.08)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#F0F3FA'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 10, background: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {a.icon}
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--color-navy)', textAlign: 'center', lineHeight: 1.3 }}>{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
