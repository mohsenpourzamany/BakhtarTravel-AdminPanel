import { StatCard, Badge, Avatar, Th, Td, SearchInput, FilterSelect, PrimaryBtn, ActionBtns, Pagination } from '../components/ui/shared'

const stats = [
  { label: 'Total Bookings', value: '1,576', change: '10.4%', sub: 'vs last month', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { label: 'Completed',      value: '1,125', change: '9.7%',  sub: 'vs last month', labelColor: '#059669', iconBg: '#ECFDF5', iconColor: '#059669', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { label: 'Upcoming',       value: '287',   change: '5.6%',  sub: 'vs last month', labelColor: '#EA580C', iconBg: '#FFF7ED', iconColor: '#EA580C', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { label: 'Cancelled',      value: '98',    change: '3.1%',  sub: 'vs last month', changeType: 'down' as const, labelColor: '#DC2626', iconBg: '#FEF2F2', iconColor: '#DC2626', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> },
  { label: 'No Show',        value: '66',    change: '1.8%',  sub: 'vs last month', changeType: 'down' as const, labelColor: '#7C3AED', iconBg: '#F5F3FF', iconColor: '#7C3AED', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="11" x2="23" y2="11"/></svg> },
]

const transfers = [
  { id: 'TRF-1001', name: 'Ahmad Hussain',  type: 'Airport Transfer', from: 'Kabul Airport (KBL)', to: 'Downtown Kabul',  date: 'Jun 16, 2025', time: '10:00 AM', vehicle: 'Toyota Camry',  status: 'Completed', amount: 35 },
  { id: 'TRF-1002', name: 'Sara Karim',     type: 'City Transfer',    from: 'Dubai Mall',          to: 'Burj Khalifa',   date: 'Jun 16, 2025', time: '02:00 PM', vehicle: 'SUV',           status: 'Upcoming',  amount: 45 },
  { id: 'TRF-1003', name: 'Omar Zaman',     type: 'Airport Transfer', from: 'Istanbul Airport',    to: 'Taksim Square',  date: 'Jun 17, 2025', time: '11:30 AM', vehicle: 'Mercedes Vito', status: 'Completed', amount: 40 },
  { id: 'TRF-1004', name: 'Fatima Noor',    type: 'City Transfer',    from: 'Riyadh Hotel',        to: 'Riyadh Airport', date: 'Jun 17, 2025', time: '09:00 PM', vehicle: 'Toyota Camry',  status: 'Cancelled', amount: 30 },
  { id: 'TRF-1005', name: 'Ali Reza',       type: 'Airport Transfer', from: 'Doha Airport',        to: 'West Bay',       date: 'Jun 18, 2025', time: '08:45 AM', vehicle: 'SUV',           status: 'Upcoming',  amount: 50 },
  { id: 'TRF-1006', name: 'Zainab Shah',    type: 'City Transfer',    from: 'Jeddah Airport',      to: 'Jeddah Hotel',   date: 'Jun 18, 2025', time: '07:15 PM', vehicle: 'Hyundai H1',   status: 'No Show',   amount: 25 },
  { id: 'TRF-1007', name: 'Waseem Khan',    type: 'Airport Transfer', from: 'Baku Airport',        to: 'Flame Towers',   date: 'Jun 19, 2025', time: '01:20 PM', vehicle: 'Toyota Camry',  status: 'Completed', amount: 38 },
  { id: 'TRF-1008', name: 'Huda Hassan',    type: 'City Transfer',    from: 'Abu Dhabi Mall',      to: 'Yas Island',     date: 'Jun 19, 2025', time: '06:30 PM', vehicle: 'SUV',           status: 'Upcoming',  amount: 60 },
]

const tabs = ['All Transfers', 'Upcoming', 'Completed', 'Cancelled', 'No Show']

export default function TransfersPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Transfers Management</h1>
        <PrimaryBtn><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add Transfer</PrimaryBtn>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 20 }}>
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="section-card">
        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid #F8FAFC' }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {tabs.map((t, i) => (
              <button key={t} style={{ padding: '14px 16px', fontSize: 13, fontWeight: 500, color: i === 0 ? '#2563EB' : '#A3AED0', background: 'none', border: 'none', cursor: 'pointer', borderBottom: i === 0 ? '2px solid #2563EB' : '2px solid transparent' }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>Filter
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>Export
            </button>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: '12px 20px', borderBottom: '1px solid #F8FAFC', display: 'flex', justifyContent: 'flex-end' }}>
          <SearchInput placeholder="Search transfers..." />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                <Th>Transfer ID</Th><Th>Customer</Th><Th>Transfer Type</Th><Th>From</Th><Th>To</Th><Th>Date & Time</Th><Th>Vehicle</Th><Th>Status</Th><Th>Amount</Th><Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {transfers.map((t, i) => (
                <tr key={t.id} style={{ borderBottom: i < transfers.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <Td><span style={{ color: '#2563EB', fontWeight: 600, cursor: 'pointer' }}>{t.id}</span></Td>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Avatar name={t.name} size={30} />
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{t.name}</span>
                    </div>
                  </Td>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {t.type === 'Airport Transfer'
                        ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 1.5L11 8 2.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.3-.3.4-.7.3-1.1z"/></svg>
                        : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>
                      }
                      <span style={{ fontSize: 12 }}>{t.type}</span>
                    </div>
                  </Td>
                  <Td style={{ color: '#4B5563' }}>{t.from}</Td>
                  <Td style={{ color: '#4B5563' }}>{t.to}</Td>
                  <Td>
                    <div style={{ fontSize: 12, color: '#1B2559' }}>{t.date}</div>
                    <div style={{ fontSize: 11, color: '#A3AED0' }}>{t.time}</div>
                  </Td>
                  <Td style={{ color: '#4B5563' }}>{t.vehicle}</Td>
                  <Td><Badge label={t.status} /></Td>
                  <Td style={{ fontWeight: 600 }}>${t.amount}</Td>
                  <Td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                      <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 1,576 results</span>
          <Pagination total={316} />
        </div>
      </div>
    </div>
  )
}
