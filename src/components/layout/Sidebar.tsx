import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard',  path: '/dashboard',  icon: '🏠' },
  { label: 'Bookings',   path: '/bookings',   icon: '📋', sub: ['All Bookings','Flights','Hotels','Tours','Visa','Transfers'] },
  { label: 'Users',      path: '/users',      icon: '👥', sub: ['All Users','User Roles','KYC Verification'] },
  { label: 'Hotels',     path: '/hotels',     icon: '🏨', sub: ['All Hotels','Rooms','Amenities','Hotel Reviews'] },
  { label: 'Tours',      path: '/tours',      icon: '🗺️', sub: ['All Tours','Categories','Destinations','Bookings'] },
  { label: 'Visa',       path: '/visa',       icon: '📋', sub: ['Visa Applications','Visa Types','Countries','Visa Settings'] },
  { label: 'Transfers',  path: '/transfers',  icon: '🚗' },
  { label: 'Promotions', path: '/promotions', icon: '🏷️', sub: ['All Promotions','Discount Codes','Campaigns','Banners'] },
  { label: 'Reviews',    path: '/reviews',    icon: '⭐', sub: ['All Reviews','Hotel Reviews','Tour Reviews','User Ratings','Reported Reviews'] },
  { label: 'Finance',    path: '/finance',    icon: '📊', sub: ['Overview','Transactions','Invoices','Refunds','Payouts','Commissions','Payment Methods'] },
  { label: 'Reports',    path: '/reports',    icon: '📈', sub: ['Overview','Sales Analytics','Revenue Analytics','User Growth','Top Destinations','Top Hotels','Top Tours','Conversion Rate','Booking Trends'] },
  { label: 'CMS',        path: '/cms',        icon: '✏️', sub: ['Pages','Posts','Categories','Media','Menus','Settings'] },
  { label: 'Support',    path: '/support',    icon: '🎧', sub: ['Tickets','Live Chat','WhatsApp Requests','Email Requests','Ticket Categories','Agents','SLA Settings'] },
  { label: 'Settings',   path: '/settings',   icon: '⚙️', sub: ['General Settings','Company Information','Languages','Currencies','Payment Gateways','Email Settings','SMS Settings'] },
]

export default function Sidebar() {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (label: string) => {
    setOpenMenus(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label])
  }

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <div style={{ width: 220, background: 'white', height: '100vh', position: 'fixed', left: 0, top: 0, display: 'flex', flexDirection: 'column', boxShadow: '2px 0 8px rgba(27,37,89,0.04)', zIndex: 100, overflowY: 'auto' }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px', borderBottom: '1px solid #F0F3FA', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #1565C0, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✈️</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1B2559', letterSpacing: '-0.3px' }}>BAKHTAR</div>
          <div style={{ fontSize: 9, color: '#A3AED0', fontWeight: 500, letterSpacing: '0.5px' }}>TRAVEL & TOURISM L.L.C</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 8px', overflowY: 'auto' }}>
        {navItems.map(item => {
          const active = isActive(item.path)
          const open = openMenus.includes(item.label)
          return (
            <div key={item.label}>
              {item.sub ? (
                <button
                  onClick={() => toggleMenu(item.label)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 10, background: active ? '#EEF4FF' : 'none', border: 'none', cursor: 'pointer', marginBottom: 2 }}
                >
                  <span style={{ fontSize: 15 }}>{item.icon}</span>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: active ? '#2563EB' : '#1B2559', textAlign: 'left' }}>{item.label}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={active ? '#2563EB' : '#A3AED0'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 10, background: isActive ? '#EEF4FF' : 'none', textDecoration: 'none', marginBottom: 2, borderLeft: isActive ? '3px solid #2563EB' : '3px solid transparent' })}
                >
                  <span style={{ fontSize: 15 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: active ? '#2563EB' : '#1B2559' }}>{item.label}</span>
                </NavLink>
              )}
              {item.sub && open && (
                <div style={{ marginLeft: 20, marginBottom: 4 }}>
                  {item.sub.map((s, j) => (
                    <NavLink
                      key={s}
                      to={item.path}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 8, textDecoration: 'none', marginBottom: 1 }}
                    >
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: j === 0 ? '#2563EB' : '#E8EDF5', flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: j === 0 ? '#2563EB' : '#A3AED0', fontWeight: j === 0 ? 600 : 400 }}>{s}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Help box */}
      <div style={{ margin: '8px 12px 12px', background: '#EEF4FF', borderRadius: 12, padding: '14px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 18 }}>🎧</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#1B2559' }}>Need Help?</div>
            <div style={{ fontSize: 10, color: '#A3AED0' }}>Our support team is available 24/7</div>
          </div>
        </div>
        <button style={{ width: '100%', background: '#2563EB', color: 'white', border: 'none', borderRadius: 8, padding: '8px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Contact Support</button>
      </div>

      {/* Collapse menu */}
      <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 20px', borderTop: '1px solid #F0F3FA', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#A3AED0', flexShrink: 0 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Collapse Menu
      </button>
    </div>
  )
}
