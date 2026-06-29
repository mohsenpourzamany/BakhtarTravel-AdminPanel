import { StatCard, Th, Td } from '../components/ui/shared'

const stats = [
  { label: 'Total Revenue',    value: '$85,420', change: '12.8%', sub: 'vs May 16 – May 31', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: 'Total Bookings',   value: '1,245',   change: '8.3%',  sub: 'vs May 16 – May 31', iconBg: '#FFF7ED', iconColor: '#EA580C', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { label: 'Total Users',      value: '2,856',   change: '15.6%', sub: 'vs May 16 – May 31', iconBg: '#ECFDF5', iconColor: '#059669', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { label: 'Conversion Rate',  value: '3.48%',   change: '1.2%',  sub: 'vs May 16 – May 31', iconBg: '#F5F3FF', iconColor: '#7C3AED', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg> },
  { label: 'Total Refunds',    value: '$4,250',  change: '6.2%',  sub: 'vs May 16 – May 31', changeType: 'down' as const, iconBg: '#FEF2F2', iconColor: '#EE5D50', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.68"/></svg> },
]

const topDest = [
  { rank: 1, flag: '🇦🇪', dest: 'Dubai, UAE',       bookings: 320, revenue: '$21,450.00' },
  { rank: 2, flag: '🇹🇷', dest: 'Istanbul, Turkey', bookings: 210, revenue: '$14,780.00' },
  { rank: 3, flag: '🇹🇭', dest: 'Bangkok, Thailand',bookings: 180, revenue: '$11,560.00' },
  { rank: 4, flag: '🇲🇻', dest: 'Maldives',         bookings: 135, revenue: '$8,950.00'  },
  { rank: 5, flag: '🇦🇿', dest: 'Baku, Azerbaijan', bookings: 110, revenue: '$6,320.00'  },
]

const topServices = [
  { icon: '✈️', label: 'Flight Bookings', bookings: 520, revenue: '$34,250.00' },
  { icon: '🏨', label: 'Hotel Bookings',  bookings: 410, revenue: '$24,780.00' },
  { icon: '🗺️', label: 'Tour Bookings',  bookings: 210, revenue: '$14,950.00' },
  { icon: '📋', label: 'Visa Services',   bookings: 65,  revenue: '$4,560.00'  },
  { icon: '🚗', label: 'Transfers',       bookings: 40,  revenue: '$2,880.00'  },
]

const bookingStatus = [
  { label: 'Confirmed', count: 692, pct: 55.6, color: '#059669' },
  { label: 'Completed', count: 312, pct: 25.1, color: '#2563EB' },
  { label: 'Pending',   count: 156, pct: 12.5, color: '#F59E0B' },
  { label: 'Cancelled', count: 65,  pct: 5.2,  color: '#7C3AED' },
  { label: 'Refunded',  count: 20,  pct: 1.6,  color: '#EE5D50' },
]

const revByCategory = [
  { label: 'Tours',     value: '$42,250', pct: 49.5, color: '#2563EB' },
  { label: 'Hotels',    value: '$24,780', pct: 29.0, color: '#059669' },
  { label: 'Transfers', value: '$8,950',  pct: 10.5, color: '#F59E0B' },
  { label: 'Visa',      value: '$4,560',  pct: 5.3,  color: '#7C3AED' },
  { label: 'Others',    value: '$4,880',  pct: 5.7,  color: '#A3AED0' },
]

const quickReports = ['Sales Analytics','Revenue Analytics','User Growth','Top Destinations','Top Hotels','Top Tours','Conversion Rate','Booking Trends']
const summary = [
  { label: 'Average Daily Revenue',  value: '$5,338.75',               color: '#1B2559' },
  { label: 'Average Daily Bookings', value: '77.81',                   color: '#1B2559' },
  { label: 'Highest Revenue Day',    value: 'Jun 13, 2025 ($16,850.00)', color: '#2563EB' },
  { label: 'Highest Bookings Day',   value: 'Jun 13, 2025 (156)',      color: '#2563EB' },
  { label: 'Lowest Revenue Day',     value: 'Jun 5, 2025 ($2,450.00)', color: '#EE5D50' },
  { label: 'Lowest Bookings Day',    value: 'Jun 5, 2025 (28)',        color: '#EE5D50' },
]

export default function ReportsPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Reports','Overview'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Reports & Analytics</h1>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>Export Report
          </button>
        </div>

        {/* Date filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
          {['📅 Jun 1, 2025 – Jun 16, 2025 ▾', 'Compare to: May 16 – May 31, 2025 ▾', 'All Categories ▾'].map(f => (
            <button key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '8px 14px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 16 }}>
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

        {/* Charts row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16, marginBottom: 16 }}>
          <div className="section-card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', margin: 0 }}>Sales Overview</h3>
              <select style={{ fontSize: 12, border: '1px solid #E8EDF5', borderRadius: 8, padding: '5px 10px', background: 'white', outline: 'none' }}><option>Daily</option></select>
            </div>
            {/* SVG line chart */}
            <svg width="100%" height="160" viewBox="0 0 500 140" preserveAspectRatio="none" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,110 L31,90 L63,105 L94,80 L125,70 L156,85 L188,55 L219,40 L250,35 L281,50 L313,30 L344,25 L375,35 L406,45 L438,30 L469,35 L500,28" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0,110 L31,90 L63,105 L94,80 L125,70 L156,85 L188,55 L219,40 L250,35 L281,50 L313,30 L344,25 L375,35 L406,45 L438,30 L469,35 L500,28 L500,140 L0,140 Z" fill="url(#salesGrad)"/>
              {[0,63,125,188,250,313,375,438,500].map((x, i) => (
                <text key={i} x={x} y="135" fontSize="8" fill="#A3AED0" textAnchor="middle">Jun {i*2+1}</text>
              ))}
            </svg>
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Revenue by Category</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'conic-gradient(#2563EB 0 49.5%, #059669 49.5% 78.5%, #F59E0B 78.5% 89%, #7C3AED 89% 94.3%, #A3AED0 94.3% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#1B2559' }}>$85,420</span>
                  <span style={{ fontSize: 8, color: '#A3AED0' }}>Total</span>
                </div>
              </div>
            </div>
            {revByCategory.map(r => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{r.label}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#1B2559' }}>{r.value}</span>
                <span style={{ fontSize: 10, color: '#A3AED0' }}>({r.pct}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Bookings by Status</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'conic-gradient(#059669 0 55.6%, #2563EB 55.6% 80.7%, #F59E0B 80.7% 93.2%, #7C3AED 93.2% 98.4%, #EE5D50 98.4% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#1B2559' }}>1,245</span>
                  <span style={{ fontSize: 8, color: '#A3AED0' }}>Total</span>
                </div>
              </div>
            </div>
            {bookingStatus.map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 0' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 10, color: '#1B2559' }}>{s.label}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#1B2559' }}>{s.count}</span>
                <span style={{ fontSize: 10, color: '#A3AED0' }}>({s.pct}%)</span>
              </div>
            ))}
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', margin: 0 }}>Top Destinations</h3>
              <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View full report →</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'left' }}>#</th>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'left' }}>Destination</th>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'right' }}>Bookings</th>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'right' }}>Revenue</th>
              </tr></thead>
              <tbody>
                {topDest.map(d => (
                  <tr key={d.rank} style={{ borderBottom: '1px solid #F8FAFC' }}>
                    <td style={{ padding: '8px', fontSize: 11, color: '#A3AED0' }}>{d.rank}</td>
                    <td style={{ padding: '8px', fontSize: 11, color: '#1B2559' }}><span style={{ marginRight: 5 }}>{d.flag}</span>{d.dest}</td>
                    <td style={{ padding: '8px', fontSize: 11, color: '#1B2559', textAlign: 'right' }}>{d.bookings}</td>
                    <td style={{ padding: '8px', fontSize: 11, fontWeight: 600, color: '#1B2559', textAlign: 'right' }}>{d.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', margin: 0 }}>Top Services</h3>
              <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View full report →</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'left' }}>Service</th>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'right' }}>Bookings</th>
                <th style={{ padding: '6px 8px', fontSize: 10, fontWeight: 600, color: '#A3AED0', textAlign: 'right' }}>Revenue</th>
              </tr></thead>
              <tbody>
                {topServices.map(s => (
                  <tr key={s.label} style={{ borderBottom: '1px solid #F8FAFC' }}>
                    <td style={{ padding: '8px', fontSize: 11, color: '#1B2559' }}><span style={{ marginRight: 5 }}>{s.icon}</span>{s.label}</td>
                    <td style={{ padding: '8px', fontSize: 11, color: '#1B2559', textAlign: 'right' }}>{s.bookings}</td>
                    <td style={{ padding: '8px', fontSize: 11, fontWeight: 600, color: '#1B2559', textAlign: 'right' }}>{s.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booking Trends + Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 16 }}>
          <div className="section-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Booking Trends</h3>
            <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#1B2559' }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#2563EB' }} />Bookings
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#1B2559' }}>
                <div style={{ width: 10, height: 2, background: '#059669' }} />Revenue
              </div>
            </div>
            <svg width="100%" height="140" viewBox="0 0 500 130" preserveAspectRatio="none">
              {/* Bar chart (bookings) */}
              {[100,85,110,95,70,120,115,130,140,125,145,155,160,150].map((h, i) => (
                <rect key={i} x={i * 36 + 2} y={130 - h * 0.75} width={28} height={h * 0.75} rx="3" fill="#2563EB" fillOpacity="0.8"/>
              ))}
              {/* Line (revenue) */}
              <path d="M16,110 L52,100 L88,90 L124,105 L160,120 L196,80 L232,75 L268,55 L304,45 L340,60 L376,40 L412,35 L448,30 L484,38" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Summary</h3>
            {summary.map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 11, color: '#A3AED0', flex: 1 }}>{s.label}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: s.color, textAlign: 'right' }}>{s.value}</span>
              </div>
            ))}
            <p style={{ fontSize: 10, color: '#A3AED0', marginTop: 12, textAlign: 'center' }}>ℹ All times are in (UTC+4) Afghanistan Time</p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Report Overview</h3>
          {[{ icon: '📈', label: 'Total Reports', value: '24' }, { icon: '📅', label: 'Scheduled Reports', value: '8' }, { icon: '🕐', label: 'Last Updated', value: '16 Jun, 2025 11:30 AM' }].map(r => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 14 }}>{r.icon}</span>
              <span style={{ flex: 1, fontSize: 12, color: '#A3AED0' }}>{r.label}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#1B2559' }}>{r.value}</span>
            </div>
          ))}
          <button style={{ marginTop: 12, width: '100%', background: '#EEF4FF', color: '#2563EB', border: 'none', borderRadius: 8, padding: '9px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            📅 Schedule New Report
          </button>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Quick Reports</h3>
          {quickReports.map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 12, color: '#1B2559' }}>{r}</span>
              <button style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>
                View <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Export Options</h3>
          {[{ icon: '📄', label: 'Download PDF', sub: 'Export report as PDF', color: '#EE5D50' }, { icon: '📊', label: 'Download Excel', sub: 'Export report as Excel', color: '#059669' }, { icon: '📋', label: 'Download CSV', sub: 'Export report as CSV', color: '#2563EB' }, { icon: '🖨️', label: 'Print Report', sub: 'Print current report', color: '#1B2559' }].map(e => (
            <button key={e.label} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid #F8FAFC', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid #F8FAFC' as any }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{e.icon}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: e.color }}>{e.label}</div>
                <div style={{ fontSize: 10, color: '#A3AED0' }}>{e.sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
