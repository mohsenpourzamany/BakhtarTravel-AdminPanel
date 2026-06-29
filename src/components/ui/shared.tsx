// ─── Stat Card ────────────────────────────────────────────────────────────────
interface StatCardProps {
  label: string
  value: string
  change?: string
  changeType?: 'up' | 'down'
  sub?: string
  note?: string
  noteColor?: string
  labelColor?: string
  iconBg: string
  iconColor: string
  icon: React.ReactNode
}
export function StatCard({ label, value, change, changeType = 'up', sub, note, noteColor, labelColor, iconBg, iconColor, icon }: StatCardProps) {
  return (
    <div className="stat-card" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: labelColor || '#A3AED0', marginBottom: 6 }}>{label}</p>
        <p style={{ fontSize: 24, fontWeight: 700, color: '#1B2559', margin: 0 }}>{value}</p>
        {change && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: changeType === 'up' ? '#05CD99' : '#EE5D50', display: 'flex', alignItems: 'center', gap: 2 }}>
              {changeType === 'up'
                ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
                : <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              }
              {change}
            </span>
            {sub && <span style={{ fontSize: 11, color: '#A3AED0' }}>{sub}</span>}
          </div>
        )}
        {note && <p style={{ fontSize: 11, fontWeight: 600, color: noteColor || '#EE5D50', marginTop: 8 }}>{note}</p>}
      </div>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: iconBg, color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
    </div>
  )
}

// ─── Badge ────────────────────────────────────────────────────────────────────
const badgeMap: Record<string, { bg: string; color: string }> = {
  confirmed:   { bg: '#ECFDF5', color: '#059669' },
  completed:   { bg: '#ECFDF5', color: '#059669' },
  approved:    { bg: '#ECFDF5', color: '#059669' },
  published:   { bg: '#ECFDF5', color: '#059669' },
  active:      { bg: '#ECFDF5', color: '#059669' },
  upcoming:    { bg: '#FFF7ED', color: '#EA580C' },
  pending:     { bg: '#FFFBEB', color: '#D97706' },
  processing:  { bg: '#EEF4FF', color: '#2563EB' },
  'in progress': { bg: '#EEF4FF', color: '#2563EB' },
  draft:       { bg: '#F5F3FF', color: '#7C3AED' },
  cancelled:   { bg: '#FEF2F2', color: '#DC2626' },
  rejected:    { bg: '#FEF2F2', color: '#DC2626' },
  inactive:    { bg: '#FEF2F2', color: '#DC2626' },
  blocked:     { bg: '#FEF2F2', color: '#DC2626' },
  expired:     { bg: '#F1F5F9', color: '#64748B' },
  'no show':   { bg: '#F5F3FF', color: '#7C3AED' },
  unverified:  { bg: '#FFF7ED', color: '#EA580C' },
  open:        { bg: '#EEF4FF', color: '#2563EB' },
  resolved:    { bg: '#ECFDF5', color: '#059669' },
  high:        { bg: '#FEF2F2', color: '#DC2626' },
  medium:      { bg: '#FFFBEB', color: '#D97706' },
  low:         { bg: '#ECFDF5', color: '#059669' },
}
export function Badge({ label }: { label: string }) {
  const s = badgeMap[label.toLowerCase()] || { bg: '#F1F5F9', color: '#64748B' }
  return (
    <span className="badge" style={{ background: s.bg, color: s.color }}>{label}</span>
  )
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
const avatarColors = [
  { bg: '#EEF4FF', color: '#2563EB' }, { bg: '#F5F3FF', color: '#7C3AED' },
  { bg: '#ECFDF5', color: '#059669' }, { bg: '#FFFBEB', color: '#D97706' },
  { bg: '#FDF2F8', color: '#DB2777' },
]
export function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const { bg, color } = avatarColors[name.charCodeAt(0) % avatarColors.length]
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.33, fontWeight: 700, flexShrink: 0 }}>
      {initials}
    </div>
  )
}

// ─── Table helpers ────────────────────────────────────────────────────────────
export function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#A3AED0', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{children}</th>
}
export function Td({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <td style={{ padding: '13px 16px', fontSize: 12, color: '#1B2559', ...style }}>{children}</td>
}

// ─── Filter bar button ────────────────────────────────────────────────────────
export function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <select defaultValue={label} style={{ fontSize: 12, color: '#1B2559', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 28px 7px 10px', background: 'white', outline: 'none', cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23A3AED0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}>
      <option value={label}>{label}</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  )
}

// ─── Primary button ───────────────────────────────────────────────────────────
export function PrimaryBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2563EB', color: 'white', border: 'none', borderRadius: 10, padding: '9px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
      {children}
    </button>
  )
}

// ─── Icon buttons (view/edit/more) ────────────────────────────────────────────
export function ActionBtns() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
      <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>
  )
}

// ─── Search input ─────────────────────────────────────────────────────────────
export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '7px 12px', minWidth: 200 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input placeholder={placeholder} style={{ border: 'none', outline: 'none', fontSize: 12, color: '#1B2559', background: 'transparent', width: '100%' }} />
    </div>
  )
}

// ─── Pagination ───────────────────────────────────────────────────────────────
export function Pagination({ total, current = 1 }: { total: number; current?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <button style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      {[1, 2, 3].map(p => (
        <button key={p} style={{ width: 30, height: 30, borderRadius: 6, border: p === current ? 'none' : '1px solid #E8EDF5', background: p === current ? '#2563EB' : 'white', color: p === current ? 'white' : '#1B2559', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{p}</button>
      ))}
      <span style={{ fontSize: 12, color: '#A3AED0' }}>...</span>
      <button style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', fontSize: 12, fontWeight: 600, color: '#1B2559', cursor: 'pointer' }}>{total}</button>
      <button style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #E8EDF5', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  )
}

// ─── Donut chart (SVG) ────────────────────────────────────────────────────────
interface DonutSlice { label: string; value: number; color: string }
export function DonutChart({ slices, centerLabel, centerValue, size = 160 }: { slices: DonutSlice[]; centerLabel?: string; centerValue?: string; size?: number }) {
  const total = slices.reduce((s, d) => s + d.value, 0)
  const r = size / 2 - 20
  const cx = size / 2, cy = size / 2
  const strokeW = 20
  let offset = 0
  const circ = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices.map((s, i) => {
        const pct = s.value / total
        const dash = pct * circ
        const gap = circ - dash
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth={strokeW}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset * circ / 1 + circ * 0.25}
            style={{ transform: `rotate(-90deg)`, transformOrigin: `${cx}px ${cy}px` }}
          />
        )
        offset += pct
        return el
      })}
      {centerValue && (
        <>
          <text x={cx} y={cy - 4} textAnchor="middle" fontSize="16" fontWeight="700" fill="#1B2559" fontFamily="Inter, sans-serif">{centerValue}</text>
          {centerLabel && <text x={cx} y={cy + 14} textAnchor="middle" fontSize="10" fill="#A3AED0" fontFamily="Inter, sans-serif">{centerLabel}</text>}
        </>
      )}
    </svg>
  )
}
