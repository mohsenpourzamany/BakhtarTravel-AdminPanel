import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const icons = {
  dashboard: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  bookings:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  users:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  hotels:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  tours:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  visa:      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  transfer:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  promo:     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  reviews:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  finance:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  reports:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  cms:       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  support:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  settings:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
}

const navItems = [
  { key: 'dashboard', label: 'Dashboard',  path: '/' },
  { key: 'bookings',  label: 'Bookings',   path: '/bookings',    children: ['All Bookings','Flights','Hotels','Tours'] },
  { key: 'users',     label: 'Users',      path: '/users',       children: ['All Users','Admins'] },
  { key: 'hotels',    label: 'Hotels',     path: '/hotels',      children: ['All Hotels','Add Hotel'] },
  { key: 'tours',     label: 'Tours',      path: '/tours',       children: ['All Tours','Add Tour'] },
  { key: 'visa',      label: 'Visa',       path: '/visa',        children: ['Applications','Services'] },
  { key: 'transfer',  label: 'Transfers',  path: '/transfers',   children: ['All Transfers'] },
  { key: 'promo',     label: 'Promotions', path: '/promotions',  children: ['Discounts','Banners'] },
  { key: 'reviews',   label: 'Reviews',    path: '/reviews' },
  { key: 'finance',   label: 'Finance',    path: '/finance',     children: ['Transactions','Refunds'] },
  { key: 'reports',   label: 'Reports',    path: '/reports',     children: ['Overview','Revenue'] },
  { key: 'cms',       label: 'CMS',        path: '/cms',         children: ['Pages','Blog'] },
  { key: 'support',   label: 'Support',    path: '/support',     children: ['Tickets','Chat'] },
  { key: 'settings',  label: 'Settings',   path: '/settings',    children: ['General','Security'] },
]

export default function Sidebar() {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggle = (key: string) =>
    setOpenMenus(p => p.includes(key) ? p.filter(k => k !== key) : [...p, key])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <aside style={{
      position: 'fixed', top: 0, left: 0, height: '100vh', width: 220,
      background: 'white', boxShadow: 'var(--shadow-sidebar)', zIndex: 30,
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '20px 20px 16px', borderBottom: '1px solid #F0F3FA' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: 'var(--color-primary-500)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-1 0-1.5.5-3.5 1.5L11 8 2.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.3-.3.4-.7.3-1.1z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.2 }}>BAKHTAR</div>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'var(--color-muted)', letterSpacing: '0.05em' }}>TRAVEL & TOURISM</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(item => {
          const active = isActive(item.path)
          const isOpen = openMenus.includes(item.key)

          return (
            <div key={item.key}>
              {item.children ? (
                <button
                  onClick={() => toggle(item.key)}
                  className="sidebar-item"
                  style={active ? { background: 'var(--color-primary-500)', color: 'white' } : {}}
                >
                  <span style={{ flexShrink: 0 }}>{icons[item.key as keyof typeof icons]}</span>
                  <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className="sidebar-item"
                  style={({ isActive }) => isActive ? { background: 'var(--color-primary-500)', color: 'white' } : {}}
                >
                  <span style={{ flexShrink: 0 }}>{icons[item.key as keyof typeof icons]}</span>
                  <span>{item.label}</span>
                </NavLink>
              )}

              {item.children && isOpen && (
                <div style={{ marginLeft: 28, marginTop: 2, borderLeft: '2px solid #F0F3FA', paddingLeft: 12, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {item.children.map(child => (
                    <div
                      key={child}
                      style={{ padding: '6px 8px', fontSize: 11, fontWeight: 500, color: 'var(--color-muted)', borderRadius: 6, cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-navy)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
                    >
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Help */}
      <div style={{ margin: '0 10px 12px', padding: '14px', borderRadius: 14, background: '#EEF4FF', border: '1px solid #D9E7FF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--color-primary-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-navy)' }}>Need Help?</span>
        </div>
        <p style={{ fontSize: 10, color: 'var(--color-muted)', marginBottom: 10, lineHeight: 1.5 }}>We are here to help you anytime.</p>
        <button style={{
          width: '100%', padding: '7px 0', borderRadius: 8, background: 'var(--color-primary-500)',
          color: 'white', fontSize: 11, fontWeight: 600, border: 'none', cursor: 'pointer'
        }}>
          Contact Support
        </button>
      </div>
    </aside>
  )
}
