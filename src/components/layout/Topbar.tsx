import { useState } from 'react'

export default function Topbar() {
  const [search, setSearch] = useState('')

  return (
    <header style={{
      position: 'fixed', top: 0, left: 220, right: 0, height: 64,
      background: 'white', borderBottom: '1px solid #F0F3FA',
      zIndex: 20, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 12
    }}>
      <div style={{ flex: 1 }} />

      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--color-surface)', borderRadius: 12,
        padding: '8px 12px', width: 260, border: '1px solid #F0F3FA'
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search anything..."
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            fontSize: 13, color: 'var(--color-navy)', fontFamily: 'var(--font-sans)'
          }}
        />
        <span style={{
          fontSize: 10, color: 'var(--color-muted)', fontWeight: 500,
          background: 'white', border: '1px solid #E8EDF5', borderRadius: 4, padding: '2px 4px'
        }}>⌘K</span>
      </div>

      {/* Notification */}
      <button style={{
        position: 'relative', width: 36, height: 36, borderRadius: 10,
        background: 'var(--color-surface)', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span style={{
          position: 'absolute', top: -2, right: -2, width: 16, height: 16,
          borderRadius: '50%', background: 'var(--color-danger)', color: 'white',
          fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>5</span>
      </button>

      {/* Language */}
      <button style={{
        width: 36, height: 36, borderRadius: 10, background: 'var(--color-surface)',
        border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </button>

      {/* Admin */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: '#EEF4FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#2563EB">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.3 }}>Admin</div>
          <div style={{ fontSize: 10, color: 'var(--color-muted)' }}>Super Admin</div>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </header>
  )
}
