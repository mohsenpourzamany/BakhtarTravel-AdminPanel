import RevenueChart from '../components/dashboard/RevenueChart'
import RecentBookings from '../components/dashboard/RecentBookings'
import { TopDestinations, QuickActions } from '../components/dashboard/RightSidebar'

const stats = [
  { label: 'Total Revenue',   value: '$85,420', change: '12.8%', sub: 'vs last month', labelColor: '#A3AED0',  iconBg: '#EEF4FF', iconColor: '#2563EB',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: 'Total Bookings',  value: '1,245',   change: '8.3%',  sub: 'vs last month', labelColor: '#F59E0B',  iconBg: '#FFFBEB', iconColor: '#F59E0B',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { label: 'Active Users',    value: '542',     change: '5.1%',  sub: 'vs last month', labelColor: '#10B981',  iconBg: '#ECFDF5', iconColor: '#10B981',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: 'Pending Refunds', value: '18',      note: 'Needs Review',                  labelColor: '#EE5D50',  iconBg: '#FEF2F2', iconColor: '#EE5D50',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg> },
]

export default function DashboardPage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>Dashboard</h1>
        <p style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 4 }}>Welcome back, Admin! Here's what's happening today.</p>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: s.labelColor, marginBottom: 6 }}>{s.label}</p>
              <p style={{ fontSize: 26, fontWeight: 700, color: 'var(--color-navy)', margin: 0 }}>{s.value}</p>
              {s.change && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#05CD99', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                    {s.change}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>{s.sub}</span>
                </div>
              )}
              {s.note && <p style={{ fontSize: 12, fontWeight: 600, color: '#EE5D50', marginTop: 8 }}>{s.note}</p>}
            </div>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: s.iconBg,
              color: s.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 16 }}>
        <RevenueChart />
        <TopDestinations />
      </div>

      {/* Bookings + Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <RecentBookings />
        <QuickActions />
      </div>
    </div>
  )
}
