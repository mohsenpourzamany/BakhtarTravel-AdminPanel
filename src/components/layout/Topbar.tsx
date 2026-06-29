import { useLocation } from 'react-router-dom'

const pageTitles: Record<string, string> = {
  dashboard: 'Dashboard', bookings: 'Bookings', users: 'Users', hotels: 'Hotels',
  tours: 'Tours', visa: 'Visa', transfers: 'Transfers', promotions: 'Promotions',
  reviews: 'Reviews', finance: 'Finance', reports: 'Reports', cms: 'CMS',
  support: 'Support', settings: 'Settings',
}

export default function Topbar() {
  const location = useLocation()
  const current = location.pathname.split('/')[1] || 'dashboard'
  const title = pageTitles[current] || 'Admin'

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, left: 220, height: 64, background: 'white', borderBottom: '1px solid #F0F3FA', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', zIndex: 90, boxShadow: '0 1px 4px rgba(27,37,89,0.04)' }}>
      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F4F7FE', borderRadius: 10, padding: '8px 14px', minWidth: 280 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input placeholder="Search anything..." style={{ border: 'none', outline: 'none', fontSize: 12, color: '#1B2559', background: 'transparent', flex: 1 }} />
        <kbd style={{ fontSize: 10, color: '#A3AED0', background: 'white', border: '1px solid #E8EDF5', borderRadius: 4, padding: '2px 5px' }}>⌘K</kbd>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Notifications */}
        <button style={{ position: 'relative', width: 38, height: 38, borderRadius: 10, background: 'white', border: '1px solid #F0F3FA', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <div style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, borderRadius: '50%', background: '#EE5D50', border: '2px solid white' }} />
        </button>

        {/* Language */}
        <button style={{ width: 38, height: 38, borderRadius: 10, background: 'white', border: '1px solid #F0F3FA', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌐</button>

        {/* Admin profile */}
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#2563EB' }}>A</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#1B2559' }}>Admin</div>
            <div style={{ fontSize: 10, color: '#A3AED0' }}>Super Admin</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    </div>
  )
}
