import { StatCard, Badge, Th, Td, FilterSelect, Pagination } from '../components/ui/shared'

const stats = [
  { label: 'Total Revenue',   value: '$85,420', change: '12.8%', sub: 'vs May 1 – 31', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: 'Total Bookings',  value: '1,245',   change: '8.3%',  sub: 'vs last month', iconBg: '#FFF7ED', iconColor: '#EA580C', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { label: 'Total Refunds',   value: '$4,250',  change: '6.2%',  sub: 'vs last month', changeType: 'down' as const, iconBg: '#FEF2F2', iconColor: '#EE5D50', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.68"/></svg> },
  { label: 'Net Revenue',     value: '$81,170', change: '10.7%', sub: 'vs last month', iconBg: '#ECFDF5', iconColor: '#059669', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  { label: 'Pending Payouts', value: '$12,340', sub: '18 Payouts', iconBg: '#F5F3FF', iconColor: '#7C3AED', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
]

const transactions = [
  { id: 'TRX-10001', date: 'Jun 16, 2025 09:30 AM', customer: 'Ahmad Hussain', service: 'Flight Booking (BK-1001)',  amount: '$320.00', method: 'Visa **** 4242',       status: 'Completed' },
  { id: 'TRX-10002', date: 'Jun 16, 2025 09:15 AM', customer: 'Sara Karim',    service: 'Hotel Booking (BK-1002)',  amount: '$450.00', method: 'Mastercard **** 8888', status: 'Completed' },
  { id: 'TRX-10003', date: 'Jun 15, 2025 04:20 PM', customer: 'Omar Zaman',    service: 'Tour Booking (BK-1003)',   amount: '$180.00', method: 'Bank Transfer',        status: 'Completed' },
  { id: 'TRX-10004', date: 'Jun 15, 2025 11:45 AM', customer: 'Ali Reza',      service: 'Visa Service (BK-1004)',   amount: '$90.00',  method: 'Wallet Balance',       status: 'Completed' },
  { id: 'TRX-10005', date: 'Jun 14, 2025 08:00 AM', customer: 'Fatima Noor',   service: 'Transfer (BK-1005)',       amount: '$70.00',  method: 'Cash',                 status: 'Pending' },
]

const payMethods = [
  { label: 'Credit Card',   value: '$45,230', pct: 52.9, color: '#2563EB' },
  { label: 'Bank Transfer', value: '$18,750', pct: 22.0, color: '#059669' },
  { label: 'Wallet',        value: '$12,840', pct: 15.0, color: '#F59E0B' },
  { label: 'Cash',          value: '$6,600',  pct: 7.7,  color: '#7C3AED' },
  { label: 'Other',         value: '$2,000',  pct: 2.4,  color: '#A3AED0' },
]

const topServices = [
  { label: 'Flights',   value: '$42,250', pct: 100, color: '#2563EB' },
  { label: 'Hotels',    value: '$24,780', pct: 59,  color: '#059669' },
  { label: 'Tours',     value: '$10,950', pct: 26,  color: '#F59E0B' },
  { label: 'Visa',      value: '$4,560',  pct: 11,  color: '#7C3AED' },
  { label: 'Transfers', value: '$2,880',  pct: 7,   color: '#EE5D50' },
]

export default function FinancePage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
            {['Dashboard','Finance','Overview'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Finance Overview</h1>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>Export
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '8px 12px', fontSize: 12, cursor: 'pointer' }}>
          📅 Jun 1, 2025 – Jun 16, 2025 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <FilterSelect label="All Payment Methods" options={['Credit Card','Bank Transfer','Wallet','Cash']} />
        <FilterSelect label="All Currencies"      options={['USD','AFN','EUR','AED']} />
        <FilterSelect label="All Status"          options={['Completed','Pending','Failed','Refunded']} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 16 }}>
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Revenue chart placeholder */}
          <div className="section-card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', margin: 0 }}>Revenue Overview</h3>
              <select style={{ fontSize: 12, border: '1px solid #E8EDF5', borderRadius: 8, padding: '5px 10px', background: 'white', outline: 'none' }}><option>Daily</option></select>
            </div>
            <div style={{ height: 180, background: 'linear-gradient(180deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0) 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A3AED0', fontSize: 12 }}>
              📈 Revenue chart
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="section-card">
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #F8FAFC' }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', margin: 0 }}>Recent Transactions</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                    <Th>ID</Th><Th>Date</Th><Th>Customer</Th><Th>Service</Th><Th>Amount</Th><Th>Payment Method</Th><Th>Status</Th><Th></Th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t, i) => (
                    <tr key={t.id} style={{ borderBottom: i < transactions.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                      <Td><span style={{ color: '#2563EB', fontWeight: 600 }}>{t.id}</span></Td>
                      <Td style={{ fontSize: 11, color: '#4B5563', whiteSpace: 'nowrap' }}>{t.date}</Td>
                      <Td style={{ fontWeight: 500 }}>{t.customer}</Td>
                      <Td style={{ color: '#4B5563' }}>{t.service}</Td>
                      <Td style={{ fontWeight: 700 }}>{t.amount}</Td>
                      <Td style={{ color: '#4B5563' }}>{t.method}</Td>
                      <Td><Badge label={t.status} /></Td>
                      <Td>
                        <button style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '12px 20px' }}>
              <button style={{ fontSize: 12, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View all transactions →</button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Revenue by Payment Method</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
              <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'conic-gradient(#2563EB 0 52.9%, #059669 52.9% 74.9%, #F59E0B 74.9% 89.9%, #7C3AED 89.9% 97.6%, #A3AED0 97.6% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1B2559' }}>$85,420</div>
                </div>
              </div>
            </div>
            {payMethods.map(m => (
              <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #F8FAFC' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: m.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{m.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#1B2559' }}>{m.value}</span>
                <span style={{ fontSize: 11, color: '#A3AED0', width: 36, textAlign: 'right' }}>{m.pct}%</span>
              </div>
            ))}
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Services by Revenue</h3>
              <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            {topServices.map(s => (
              <div key={s.label} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: '#1B2559' }}>{s.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#1B2559' }}>{s.value}</span>
                </div>
                <div style={{ height: 4, background: '#F4F7FE', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Financial Summary</h3>
            {[{ label: 'Total Revenue', value: '$85,420.00', color: '#1B2559' }, { label: 'Total Refunds', value: '-$4,250.00', color: '#EE5D50' }, { label: 'Total Payouts', value: '-$12,340.00', color: '#EE5D50' }, { label: 'Net Revenue', value: '$81,170.00', color: '#2563EB' }].map(r => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 12, color: '#A3AED0' }}>{r.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
