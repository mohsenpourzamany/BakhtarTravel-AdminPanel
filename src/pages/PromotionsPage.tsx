import { Badge, Th, Td, SearchInput, FilterSelect, PrimaryBtn, Pagination } from '../components/ui/shared'

const promotions = [
  { img: '🌞', name: 'Summer Sale 2025',  code: 'SUMMER25',  type: 'Percentage', applies: 'Tours, Hotels',    discount: '20% OFF', from: 'Jun 1, 2025',  to: 'Jun 30, 2025', status: 'Active',   used: 245, max: 500 },
  { img: '💯', name: 'Flat 100$ OFF',     code: 'FLAT100',   type: 'Fixed Amount',applies: 'Flight Bookings', discount: '$100 OFF', from: 'May 15, 2025', to: 'Jun 15, 2025', status: 'Active',   used: 123, max: 300 },
  { img: '🏨', name: 'Hotel Special 15%', code: 'HOTEL15',   type: 'Percentage', applies: 'Hotels',           discount: '15% OFF', from: 'May 1, 2025',  to: 'May 31, 2025', status: 'Active',   used: 89,  max: 200 },
  { img: '🌍', name: 'Visa Discount',     code: 'VISA10',    type: 'Percentage', applies: 'Visa Services',    discount: '10% OFF', from: 'Apr 20, 2025', to: 'May 20, 2025', status: 'Active',   used: 56,  max: 150 },
  { img: '🏖️', name: 'Weekend Deal',     code: 'WEEKEND25', type: 'Percentage', applies: 'Tours',            discount: '25% OFF', from: 'May 10, 2025', to: 'May 12, 2025', status: 'Expired',  used: 200, max: 200 },
  { img: '🐦', name: 'Early Bird 2025',   code: 'EARLYBIRD', type: 'Percentage', applies: 'Tours, Hotels',    discount: '15% OFF', from: 'Mar 1, 2025',  to: 'Apr 30, 2025', status: 'Expired',  used: 310, max: 500 },
  { img: '🌙', name: 'Ramadan Offer',     code: 'RAMADAN25', type: 'Fixed Amount',applies: 'All Services',    discount: '$50 OFF', from: 'Mar 1, 2025',  to: 'Mar 31, 2025', status: 'Expired',  used: 178, max: 300 },
  { img: '🎆', name: 'New Year Special',  code: 'NEWYEAR25', type: 'Percentage', applies: 'All Services',     discount: '25% OFF', from: 'Dec 20, 2024', to: 'Jan 5, 2025',  status: 'Inactive', used: 0,   max: 400 },
]

const top = [
  { name: 'Summer Sale 2025', uses: 245, change: '+23%' },
  { name: 'Flat 100$ OFF',    uses: 123, change: '+18%' },
  { name: 'Hotel Special 15%',uses: 89,  change: '+12%' },
  { name: 'Visa Discount',    uses: 56,  change: '+8%'  },
  { name: 'Weekend Deal',     uses: 45,  change: '+5%'  },
]

const usageData = [
  { label: 'Tours',     pct: 45, color: '#2563EB' },
  { label: 'Hotels',    pct: 25, color: '#059669' },
  { label: 'Flights',   pct: 15, color: '#F59E0B' },
  { label: 'Visa',      pct: 10, color: '#7C3AED' },
  { label: 'Transfers', pct: 5,  color: '#A3AED0' },
]

export default function PromotionsPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Promotions','All Promotions'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Promotions Management</h1>
          </div>
          <PrimaryBtn>+ Create Promotion</PrimaryBtn>
        </div>

        <div className="section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search promotions..." />
            <FilterSelect label="All Types"    options={['Percentage','Fixed Amount']} />
            <FilterSelect label="All Status"   options={['Active','Expired','Inactive']} />
            <FilterSelect label="All Services" options={['Tours','Hotels','Flights','Visa']} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>🔍 Filters</button>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '8px 14px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>⬇ Export</button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <Th>Promotion</Th><Th>Type</Th><Th>Applies To</Th><Th>Discount</Th><Th>Valid Period</Th><Th>Status</Th><Th>Usage</Th><Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {promotions.map((p, i) => (
                  <tr key={p.code} style={{ borderBottom: i < promotions.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 42, height: 42, borderRadius: 8, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{p.img}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{p.name}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0', fontFamily: 'monospace' }}>{p.code}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <span className="badge" style={{ background: p.type === 'Percentage' ? '#EEF4FF' : '#F5F3FF', color: p.type === 'Percentage' ? '#2563EB' : '#7C3AED' }}>{p.type}</span>
                    </Td>
                    <Td style={{ color: '#4B5563', fontSize: 11 }}>{p.applies}</Td>
                    <Td style={{ fontWeight: 700, color: '#2563EB' }}>{p.discount}</Td>
                    <Td style={{ fontSize: 11, color: '#4B5563' }}>{p.from}<br/>{p.to}</Td>
                    <Td><Badge label={p.status} /></Td>
                    <Td>
                      <div style={{ fontSize: 12, color: '#1B2559', marginBottom: 4 }}>{p.used} / {p.max}</div>
                      <div style={{ height: 4, background: '#F4F7FE', borderRadius: 4, overflow: 'hidden', width: 80 }}>
                        <div style={{ height: '100%', width: `${(p.used / p.max) * 100}%`, background: '#2563EB', borderRadius: 4 }} />
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {[<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>].map((icon, j) => (
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
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 18 results</span>
            <Pagination total={2} />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Promotion Overview</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[{ label: 'Total', value: '18', color: '#2563EB', bg: '#EEF4FF' }, { label: 'Active', value: '5', color: '#059669', bg: '#ECFDF5' }, { label: 'Expired', value: '8', color: '#A3AED0', bg: '#F1F5F9' }, { label: 'Inactive', value: '5', color: '#EE5D50', bg: '#FEF2F2' }].map(s => (
              <div key={s.label} style={{ background: s.bg, borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 10, color: s.color, marginTop: 2 }}>{s.label} Promotions</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Usage Overview</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'conic-gradient(#2563EB 0 45%, #059669 45% 70%, #F59E0B 70% 85%, #7C3AED 85% 95%, #A3AED0 95% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 62, height: 62, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1B2559' }}>1,201</div>
                <div style={{ fontSize: 8, color: '#A3AED0' }}>Total Used</div>
              </div>
            </div>
          </div>
          {usageData.map(u => (
            <div key={u.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: u.color, flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{u.label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#A3AED0' }}>{u.pct}%</span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Performing</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {top.map((t, i) => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#A3AED0', width: 14 }}>{i + 1}</span>
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{t.name}</span>
              <span style={{ fontSize: 11, color: '#A3AED0' }}>{t.uses} Uses</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#059669' }}>{t.change}</span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[{ icon: '➕', label: 'Create Promotion' }, { icon: '🏷️', label: 'Discount Codes' }, { icon: '📢', label: 'Campaigns' }, { icon: '🖼️', label: 'Banners' }].map(a => (
              <button key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '12px 8px', borderRadius: 10, border: '1px solid #F0F3FA', background: 'white', cursor: 'pointer', fontSize: 11, color: '#1B2559', fontWeight: 500 }}>
                <span style={{ fontSize: 18 }}>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
