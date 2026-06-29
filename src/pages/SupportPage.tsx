import { Badge, Avatar, Th, Td, SearchInput, FilterSelect, PrimaryBtn, Pagination } from '../components/ui/shared'

const stats = [
  { label: 'Total Tickets',    value: '1,248', change: '12.5%', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: '📋' },
  { label: 'Open Tickets',     value: '356',   change: '8.3%',  iconBg: '#FFF7ED', iconColor: '#EA580C', icon: '🕐' },
  { label: 'Resolved Tickets', value: '842',   change: '15.2%', iconBg: '#ECFDF5', iconColor: '#059669', icon: '✅' },
  { label: 'In Progress',      value: '28',    change: '4.6%',  iconBg: '#F5F3FF', iconColor: '#7C3AED', icon: '⏳', down: true },
  { label: 'SLA Breached',     value: '22',    change: '2.1%',  iconBg: '#FEF2F2', iconColor: '#EE5D50', icon: '⚠️', down: true },
]

const tickets = [
  { id: 'TKT-1258', subject: 'Payment not processed',       subDetail: 'Booking ID: BK-10045', name: 'Ahmad Hussain',  email: 'ahmad@example.com',  channel: 'Email',     priority: 'High',   status: 'Open',       agent: 'Omar Zaman',  date: 'Jun 16, 2025 10:30 AM' },
  { id: 'TKT-1257', subject: 'Visa application help',       subDetail: 'Booking ID: BK-10044', name: 'Fatima Noor',    email: 'fatima@example.com', channel: 'Live Chat', priority: 'Medium', status: 'In Progress',agent: 'Sara Karim',  date: 'Jun 16, 2025 09:45 AM' },
  { id: 'TKT-1256', subject: 'Hotel booking cancellation',  subDetail: 'Booking ID: BK-10043', name: 'Bilal Khan',     email: 'bilal@example.com',  channel: 'WhatsApp',  priority: 'High',   status: 'In Progress',agent: 'Zainullah A.',date: 'Jun 15, 2025 05:20 PM' },
  { id: 'TKT-1255', subject: 'Refund not received',         subDetail: 'Booking ID: BK-10042', name: 'Maryam Ahmed',   email: 'maryam@example.com', channel: 'Email',     priority: 'High',   status: 'Open',       agent: 'Hassan Noori',date: 'Jun 15, 2025 03:10 PM' },
  { id: 'TKT-1254', subject: 'Tour information request',    subDetail: 'Booking ID: BK-10041', name: 'Ali Reza',       email: 'ali@example.com',    channel: 'Live Chat', priority: 'Low',    status: 'Resolved',   agent: 'Fatima Noor', date: 'Jun 15, 2025 11:30 AM' },
  { id: 'TKT-1253', subject: 'Transfer service issue',      subDetail: 'Booking ID: BK-10041', name: 'Omar Ali',       email: 'omar@example.com',   channel: 'WhatsApp',  priority: 'Medium', status: 'Resolved',   agent: 'Ahmad Hussain',date: 'Jun 14, 2025 06:40 PM' },
  { id: 'TKT-1252', subject: 'Change travel dates',         subDetail: 'Booking ID: BK-10040', name: 'Sara Ahmed',     email: 'sara@example.com',   channel: 'Email',     priority: 'Medium', status: 'Open',       agent: 'Maryam Ahmed',date: 'Jun 14, 2025 04:15 PM' },
  { id: 'TKT-1251', subject: 'General inquiry',             subDetail: '',                     name: 'Hamid Rahimi',   email: 'hamid@example.com',  channel: 'Live Chat', priority: 'Low',    status: 'Resolved',   agent: 'Omar Zaman',  date: 'Jun 14, 2025 01:05 PM' },
]

const channelIcon: Record<string, string> = { Email: '📧', 'Live Chat': '💬', WhatsApp: '📱' }

const recentTickets = [
  { id: 'TKT-1258', subject: 'Payment not processed',      status: 'Open'        },
  { id: 'TKT-1257', subject: 'Visa application help',      status: 'In Progress' },
  { id: 'TKT-1256', subject: 'Hotel booking cancellation', status: 'In Progress' },
  { id: 'TKT-1255', subject: 'Refund not received',        status: 'Open'        },
  { id: 'TKT-1254', subject: 'Tour information request',   status: 'Resolved'    },
]

export default function SupportPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Support','Tickets'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Support Center</h1>
          </div>
          <PrimaryBtn>+ New Ticket</PrimaryBtn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 16 }}>
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{s.icon}</div>
                <span style={{ fontSize: 11, color: '#A3AED0' }}>{s.label}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#1B2559' }}>{s.value}</div>
              <div style={{ fontSize: 11, marginTop: 5, color: (s as any).down ? '#EE5D50' : '#059669', fontWeight: 600 }}>{(s as any).down ? '↓' : '↑'} {s.change} vs last month</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
          <SearchInput placeholder="Search tickets..." />
          <FilterSelect label="All Status"     options={['Open','In Progress','Resolved']} />
          <FilterSelect label="All Categories" options={['Payment','Booking','Visa','General']} />
          <FilterSelect label="All Channels"   options={['Email','Live Chat','WhatsApp']} />
          <FilterSelect label="All Priorities" options={['High','Medium','Low']} />
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>🔍 Filters</button>
        </div>

        <div className="section-card">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <th style={{ padding: '10px 16px', width: 36 }}><input type="checkbox" /></th>
                  <Th>Ticket ID</Th><Th>Subject</Th><Th>Customer</Th><Th>Channel</Th><Th>Priority</Th><Th>Status</Th><Th>Agent</Th><Th>Last Update</Th><Th></Th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t, i) => (
                  <tr key={t.id} style={{ borderBottom: i < tickets.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <td style={{ padding: '13px 16px' }}><input type="checkbox" /></td>
                    <Td><span style={{ color: '#2563EB', fontWeight: 600, fontSize: 12 }}>{t.id}</span></Td>
                    <Td>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{t.subject}</div>
                      {t.subDetail && <div style={{ fontSize: 11, color: '#A3AED0' }}>{t.subDetail}</div>}
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Avatar name={t.name} size={26} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 500, color: '#1B2559' }}>{t.name}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0' }}>{t.email}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#4B5563' }}>
                        <span>{channelIcon[t.channel]}</span>{t.channel}
                      </div>
                    </Td>
                    <Td><Badge label={t.priority} /></Td>
                    <Td><Badge label={t.status} /></Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Avatar name={t.agent} size={22} />
                        <span style={{ fontSize: 11, color: '#4B5563' }}>{t.agent}</span>
                      </div>
                    </Td>
                    <Td style={{ fontSize: 11, color: '#A3AED0', whiteSpace: 'nowrap' }}>{t.date}</Td>
                    <Td>
                      <button style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 10 of 1,248 tickets</span>
            <Pagination total={125} />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Support Overview</h3>
            <select style={{ fontSize: 11, border: '1px solid #E8EDF5', borderRadius: 6, padding: '3px 8px', background: 'white', outline: 'none' }}><option>This Month</option></select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'conic-gradient(#2563EB 0 42%, #059669 42% 67%, #F59E0B 67% 87%, #A3AED0 87% 95%, #7C3AED 95% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 62, height: 62, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1B2559' }}>1,248</div>
                <div style={{ fontSize: 8, color: '#A3AED0' }}>Total</div>
              </div>
            </div>
          </div>
          {[{ label: 'Email', pct: '42%', count: 524, color: '#2563EB' }, { label: 'Live Chat', pct: '25%', count: 312, color: '#059669' }, { label: 'WhatsApp', pct: '20%', count: 250, color: '#F59E0B' }, { label: 'Phone', pct: '8%', count: 100, color: '#A3AED0' }, { label: 'Others', pct: '5%', count: 62, color: '#7C3AED' }].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{s.label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.pct} ({s.count})</span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[{ icon: '➕', label: 'New Ticket' }, { icon: '💬', label: 'Live Chat' }, { icon: '📱', label: 'WhatsApp Requests' }, { icon: '📧', label: 'Email Requests' }, { icon: '📁', label: 'Ticket Categories' }, { icon: '👥', label: 'Manage Agents' }].map(a => (
              <button key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '10px 6px', borderRadius: 10, border: '1px solid #F0F3FA', background: 'white', cursor: 'pointer', fontSize: 10, color: '#1B2559', fontWeight: 500 }}>
                <span style={{ fontSize: 16 }}>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Recent Tickets</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {recentTickets.map(t => (
            <div key={t.id} style={{ padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#2563EB' }}>{t.id}</span>
                <Badge label={t.status} />
              </div>
              <div style={{ fontSize: 11, color: '#1B2559', marginTop: 2 }}>{t.subject}</div>
            </div>
          ))}
          <button style={{ marginTop: 10, fontSize: 12, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>View All Tickets →</button>
        </div>
      </div>
    </div>
  )
}
