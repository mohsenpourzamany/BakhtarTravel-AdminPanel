import { mockBookings } from '../../lib/mockData'
import type { BookingStatus, ServiceType } from '../../types'

const statusStyle: Record<BookingStatus, { bg: string; color: string }> = {
  Confirmed:  { bg: '#ECFDF5', color: '#059669' },
  Pending:    { bg: '#FFFBEB', color: '#D97706' },
  Processing: { bg: '#EEF4FF', color: '#2563EB' },
  Cancelled:  { bg: '#FEF2F2', color: '#DC2626' },
}

const serviceIcons: Record<ServiceType, React.ReactNode> = {
  Flight:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 1.5L11 8 2.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.3-.3.4-.7.3-1.1z"/></svg>,
  Hotel:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  Tour:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
  Visa:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  Transfer: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>,
}

const avatarColors = [
  { bg: '#EEF4FF', color: '#2563EB' },
  { bg: '#F5F3FF', color: '#7C3AED' },
  { bg: '#ECFDF5', color: '#059669' },
  { bg: '#FFFBEB', color: '#D97706' },
  { bg: '#FDF2F8', color: '#DB2777' },
]

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const { bg, color } = avatarColors[name.charCodeAt(0) % avatarColors.length]
  return (
    <div style={{ width: 28, height: 28, borderRadius: '50%', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
      {initials}
    </div>
  )
}

const cols = ['Booking ID', 'Customer', 'Service', 'Destination', 'Amount', 'Status', 'Date']

export default function RecentBookings() {
  return (
    <div className="section-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #F8FAFC' }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-navy)', margin: 0 }}>Recent Bookings</h3>
        <button style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary-500)', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
              {cols.map(c => (
                <th key={c} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockBookings.map((b, i) => (
              <tr key={b.id} style={{ borderBottom: i < mockBookings.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary-500)', cursor: 'pointer' }}>{b.id}</span>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Avatar name={b.customer.name} />
                    <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-navy)', whiteSpace: 'nowrap' }}>{b.customer.name}</span>
                  </div>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-muted)' }}>
                    {serviceIcons[b.service]}
                    <span style={{ fontSize: 12, color: 'var(--color-navy)', fontWeight: 500 }}>{b.service}</span>
                  </div>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ fontSize: 12, color: '#4B5563', whiteSpace: 'nowrap' }}>{b.destination}</span>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-navy)' }}>${b.amount}</span>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span className="badge" style={{ background: statusStyle[b.status].bg, color: statusStyle[b.status].color }}>
                    {b.status}
                  </span>
                </td>
                <td style={{ padding: '13px 16px' }}>
                  <span style={{ fontSize: 12, color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>{b.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
