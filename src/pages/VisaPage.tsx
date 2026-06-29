import { Badge, Avatar, Th, Td, FilterSelect, PrimaryBtn, Pagination } from '../components/ui/shared'

const stats = [
  { label: 'Total Applications', value: '1,248', change: '12.5%', color: '#2563EB', bg: '#EEF4FF', icon: '📋' },
  { label: 'Approved',           value: '842',   change: '8.3%',  color: '#059669', bg: '#ECFDF5', icon: '✅' },
  { label: 'Pending',            value: '256',   change: '3.1%',  color: '#EA580C', bg: '#FFF7ED', icon: '⏳', down: true },
  { label: 'Rejected',           value: '150',   change: '2.4%',  color: '#DC2626', bg: '#FEF2F2', icon: '❌', down: true },
]

const applications = [
  { id: 'VISA-1001', name: 'Ahmad Hussain', email: 'ahmad@email.com',   flag: '🇦🇪', type: 'UAE Tourist Visa',   country: 'UAE',            passport: 'AB1234567', date: 'Jun 16, 2025', status: 'Approved'  },
  { id: 'VISA-1002', name: 'Sara Karim',    email: 'sara@email.com',    flag: '🇹🇷', type: 'Turkey e-Visa',     country: 'Turkey',         passport: 'CD7654321', date: 'Jun 16, 2025', status: 'Pending'   },
  { id: 'VISA-1003', name: 'Omar Zaman',    email: 'omar@email.com',    flag: '🇪🇺', type: 'Schengen Visa',     country: 'Schengen',       passport: 'EF3456789', date: 'Jun 15, 2025', status: 'Approved'  },
  { id: 'VISA-1004', name: 'Ali Reza',      email: 'ali@email.com',     flag: '🇬🇧', type: 'UK Visit Visa',     country: 'United Kingdom', passport: 'GH9876543', date: 'Jun 15, 2025', status: 'Rejected'  },
  { id: 'VISA-1005', name: 'Fatima Noor',   email: 'fatima@email.com',  flag: '🇸🇦', type: 'Saudi Arabia Visa', country: 'Saudi Arabia',   passport: 'IJ2345678', date: 'Jun 14, 2025', status: 'Approved'  },
]

const recent = [
  { name: 'Ahmad Hussain', type: 'UAE Tourist Visa', flag: '🇦🇪', id: 'VISA-1001', date: 'Jun 16, 2025', status: 'Approved' },
  { name: 'Sara Karim',    type: 'Turkey e-Visa',    flag: '🇹🇷', id: 'VISA-1002', date: 'Jun 16, 2025', status: 'Pending'  },
  { name: 'Omar Zaman',    type: 'Schengen Visa',    flag: '🇪🇺', id: 'VISA-1003', date: 'Jun 15, 2025', status: 'Approved' },
  { name: 'Ali Reza',      type: 'UK Visit Visa',    flag: '🇬🇧', id: 'VISA-1004', date: 'Jun 15, 2025', status: 'Rejected' },
  { name: 'Fatima Noor',   type: 'Saudi Arabia Visa',flag: '🇸🇦', id: 'VISA-1005', date: 'Jun 14, 2025', status: 'Approved' },
]

export default function VisaPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Visa Management</h1>
        <PrimaryBtn>+ Add New Application</PrimaryBtn>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 16 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: '#A3AED0' }}>{s.label}</div>
              </div>
              <button style={{ background: 'none', border: 'none', color: '#A3AED0', cursor: 'pointer' }}>•••</button>
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#1B2559' }}>{s.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: s.down ? '#EE5D50' : '#059669' }}>{s.down ? '↓' : '↑'} {s.change}</span>
              <span style={{ fontSize: 11, color: '#A3AED0' }}>vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, marginBottom: 16 }}>
        <div className="section-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', margin: 0 }}>Applications Overview</h3>
            <select style={{ fontSize: 12, border: '1px solid #E8EDF5', borderRadius: 8, padding: '5px 10px', background: 'white', outline: 'none' }}><option>This Month</option></select>
          </div>
          <div style={{ height: 160, background: 'linear-gradient(180deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0) 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A3AED0', fontSize: 12 }}>📈 Applications chart</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="section-card" style={{ padding: 16 }}>
            <h3 style={{ fontSize: 12, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Applications by Status</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'conic-gradient(#059669 0 67.5%, #F59E0B 67.5% 88%, #EE5D50 88% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1B2559' }}>1,248</div>
                  <div style={{ fontSize: 8, color: '#A3AED0' }}>Total</div>
                </div>
              </div>
            </div>
            {[{ label: 'Approved', pct: '67.5%', color: '#059669' }, { label: 'Pending', pct: '20.5%', color: '#F59E0B' }, { label: 'Rejected', pct: '12.0%', color: '#EE5D50' }].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
                <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{s.label}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#1B2559' }}>{s.pct}</span>
              </div>
            ))}
          </div>

          <div className="section-card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <h3 style={{ fontSize: 12, fontWeight: 600, color: '#1B2559' }}>Recent Applications</h3>
              <button style={{ fontSize: 10, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            {recent.map(r => (
              <div key={r.id} style={{ padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Avatar name={r.name} size={24} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#1B2559', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</div>
                    <div style={{ fontSize: 10, color: '#A3AED0', display: 'flex', alignItems: 'center', gap: 3 }}>
                      <span>{r.flag}</span>{r.type}
                    </div>
                  </div>
                  <Badge label={r.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', margin: 0, marginRight: 8 }}>All Visa Applications</h3>
          <FilterSelect label="All Status"   options={['Approved','Pending','Rejected']} />
          <FilterSelect label="All Countries" options={['UAE','Turkey','UK','Saudi Arabia']} />
          <FilterSelect label="All Visa Types" options={['Tourist','e-Visa','Schengen','Visit']} />
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>🔍 Filter</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>⬇ Export</button>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                <th style={{ padding: '10px 16px', width: 36 }}><input type="checkbox" /></th>
                <Th>Application ID</Th><Th>Applicant</Th><Th>Visa Type</Th><Th>Country</Th><Th>Passport No.</Th><Th>Submitted On</Th><Th>Status</Th><Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {applications.map((a, i) => (
                <tr key={a.id} style={{ borderBottom: i < applications.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <td style={{ padding: '13px 16px' }}><input type="checkbox" /></td>
                  <Td><span style={{ color: '#2563EB', fontWeight: 600 }}>{a.id}</span></Td>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Avatar name={a.name} size={28} />
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, color: '#1B2559' }}>{a.name}</div>
                        <div style={{ fontSize: 11, color: '#A3AED0' }}>{a.email}</div>
                      </div>
                    </div>
                  </Td>
                  <Td style={{ color: '#4B5563' }}>{a.type}</Td>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span>{a.flag}</span>
                      <span style={{ fontSize: 12, color: '#4B5563' }}>{a.country}</span>
                    </div>
                  </Td>
                  <Td style={{ color: '#4B5563', fontFamily: 'monospace' }}>{a.passport}</Td>
                  <Td style={{ color: '#4B5563' }}>{a.date}</Td>
                  <Td><Badge label={a.status} /></Td>
                  <Td>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {[<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>].map((icon, j) => (
                        <button key={j} style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</button>
                      ))}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 5 of 1,248 results</span>
          <Pagination total={250} />
        </div>
      </div>
    </div>
  )
}
