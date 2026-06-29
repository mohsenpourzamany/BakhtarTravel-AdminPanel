import { StatCard, Badge, Avatar, Th, Td, SearchInput, FilterSelect, PrimaryBtn, ActionBtns, Pagination } from '../components/ui/shared'

const stats = [
  { label: 'Total Users',      value: '2,548', change: '12.5%', sub: 'vs last month', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: 'Active Users',     value: '1,856', change: '9.8%',  sub: 'vs last month', iconBg: '#ECFDF5', iconColor: '#059669', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { label: 'Verified Users',   value: '1,642', change: '8.2%',  sub: 'vs last month', iconBg: '#EEF4FF', iconColor: '#2563EB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  { label: 'Unverified Users', value: '214',   change: '3.1%',  sub: 'vs last month', changeType: 'down' as const, iconBg: '#FFF7ED', iconColor: '#EA580C', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  { label: 'Blocked Users',    value: '36',    change: '1.6%',  sub: 'vs last month', changeType: 'down' as const, iconBg: '#FEF2F2', iconColor: '#EE5D50', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
]

const users = [
  { name: 'Ahmad Hussain',  email: 'ahmad@gmail.com',           phone: '+93 77 123 4567', role: 'Customer', status: 'Active',     joined: 'Jun 16, 2025\n10:30 AM', lastActive: 'Jun 16, 2025\n11:20 AM' },
  { name: 'Sara Karim',     email: 'sara.karim@email.com',      phone: '+93 78 987 6543', role: 'Customer', status: 'Active',     joined: 'Jun 15, 2025\n09:15 AM', lastActive: 'Jun 16, 2025\n10:05 AM' },
  { name: 'Omar Zaman',     email: 'omar.zaman@email.com',      phone: '+93 77 111 2233', role: 'Customer', status: 'Active',     joined: 'Jun 14, 2025\n04:20 PM', lastActive: 'Jun 16, 2025\n09:40 AM' },
  { name: 'Fatima Noor',    email: 'fatima.noor@email.com',     phone: '+93 79 555 8899', role: 'Customer', status: 'Active',     joined: 'Jun 14, 2025\n08:00 AM', lastActive: 'Jun 15, 2025\n08:30 PM' },
  { name: 'Ali Reza',       email: 'ali.reza@email.com',        phone: '+93 78 222 3344', role: 'Customer', status: 'Unverified', joined: 'Jun 13, 2025\n11:45 AM', lastActive: 'Jun 13, 2025\n12:30 PM' },
  { name: 'Hassan Noori',   email: 'hassan.noori@email.com',    phone: '+93 77 444 5566', role: 'Agent',    status: 'Active',     joined: 'Jun 12, 2025\n02:30 PM', lastActive: 'Jun 16, 2025\n08:15 AM' },
  { name: 'Zainullah Ahmad',email: 'zainullah@email.com',       phone: '+93 79 333 6677', role: 'Agent',    status: 'Active',     joined: 'Jun 11, 2025\n09:10 AM', lastActive: 'Jun 15, 2025\n07:25 PM' },
  { name: 'Maryam Ahmadi',  email: 'maryam@email.com',          phone: '+93 78 666 7788', role: 'Customer', status: 'Blocked',    joined: 'Jun 10, 2025\n01:15 PM', lastActive: 'Jun 12, 2025\n03:20 PM' },
]

const roleColor: Record<string, { bg: string; color: string }> = {
  Customer: { bg: '#EEF4FF', color: '#2563EB' },
  Agent:    { bg: '#ECFDF5', color: '#059669' },
  Admin:    { bg: '#F5F3FF', color: '#7C3AED' },
}

export default function UsersPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
            {['Dashboard','Users','All Users'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Users Management</h1>
        </div>
        <PrimaryBtn><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add New User</PrimaryBtn>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 20 }}>
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="section-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
          <SearchInput placeholder="Search users..." />
          <FilterSelect label="All Roles"   options={['Customer','Agent','Admin']} />
          <FilterSelect label="All Status" options={['Active','Unverified','Blocked']} />
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>More Filters
          </button>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <PrimaryBtn>+ Add New User</PrimaryBtn>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                <Th>User</Th><Th>Email / Phone</Th><Th>Role</Th><Th>Status</Th><Th>Joined On</Th><Th>Last Active</Th><Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} style={{ borderBottom: i < users.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <Td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Avatar name={u.name} size={36} />
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{u.name}</div>
                        <div style={{ fontSize: 11, color: '#A3AED0' }}>{u.email}</div>
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div style={{ fontSize: 12, color: '#1B2559' }}>{u.email}</div>
                    <div style={{ fontSize: 11, color: '#A3AED0' }}>{u.phone}</div>
                  </Td>
                  <Td>
                    <span className="badge" style={{ background: roleColor[u.role]?.bg, color: roleColor[u.role]?.color }}>{u.role}</span>
                  </Td>
                  <Td><Badge label={u.status} /></Td>
                  <Td style={{ whiteSpace: 'pre-line', fontSize: 12, color: '#4B5563' }}>{u.joined}</Td>
                  <Td style={{ whiteSpace: 'pre-line', fontSize: 12, color: '#4B5563' }}>{u.lastActive}</Td>
                  <Td><ActionBtns /></Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 2,548 results</span>
          <Pagination total={255} />
        </div>
      </div>
    </div>
  )
}
