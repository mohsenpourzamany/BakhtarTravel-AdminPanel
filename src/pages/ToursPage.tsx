import { Badge, Th, Td, SearchInput, FilterSelect, PrimaryBtn, ActionBtns, Pagination } from '../components/ui/shared'

const tours = [
  { id: 'TR-1001', name: 'Dubai City Tour',        flag: '🇦🇪', dest: 'Dubai, UAE',          category: 'City Tour',  categoryColor: '#2563EB', duration: '4 Days / 3 Nights', price: 280,  status: 'Published', bookings: 45 },
  { id: 'TR-1002', name: 'Istanbul Discovery',      flag: '🇹🇷', dest: 'Istanbul, Turkey',    category: 'Cultural',   categoryColor: '#7C3AED', duration: '5 Days / 4 Nights', price: 420,  status: 'Published', bookings: 32 },
  { id: 'TR-1003', name: 'Bangkok Adventure',       flag: '🇹🇭', dest: 'Bangkok, Thailand',   category: 'Adventure',  categoryColor: '#EA580C', duration: '6 Days / 5 Nights', price: 350,  status: 'Published', bookings: 28 },
  { id: 'TR-1004', name: 'Switzerland Highlights',  flag: '🇨🇭', dest: 'Switzerland',         category: 'Nature',     categoryColor: '#059669', duration: '7 Days / 6 Nights', price: 890,  status: 'Published', bookings: 18 },
  { id: 'TR-1005', name: 'Maldives Escape',         flag: '🇲🇻', dest: 'Maldives',            category: 'Beach',      categoryColor: '#0EA5E9', duration: '4 Days / 3 Nights', price: 610,  status: 'Draft',     bookings: 0  },
  { id: 'TR-1006', name: 'Baku City Break',         flag: '🇦🇿', dest: 'Baku, Azerbaijan',    category: 'City Tour',  categoryColor: '#2563EB', duration: '3 Days / 2 Nights', price: 220,  status: 'Published', bookings: 12 },
  { id: 'TR-1007', name: 'Paris Getaway',           flag: '🇫🇷', dest: 'Paris, France',       category: 'Romantic',   categoryColor: '#DB2777', duration: '5 Days / 4 Nights', price: 780,  status: 'Published', bookings: 9  },
  { id: 'TR-1008', name: 'Kuala Lumpur Explorer',   flag: '🇲🇾', dest: 'Kuala Lumpur',        category: 'Adventure',  categoryColor: '#EA580C', duration: '5 Days / 4 Nights', price: 310,  status: 'Draft',     bookings: 0  },
]

export default function ToursPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Tours','All Tours'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Tours Management</h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>Export
            </button>
            <PrimaryBtn>+ Add New Tour</PrimaryBtn>
          </div>
        </div>

        <div className="section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search tours..." />
            <FilterSelect label="All Categories"   options={['City Tour','Cultural','Adventure','Nature','Beach','Romantic']} />
            <FilterSelect label="All Destinations" options={['Dubai','Istanbul','Bangkok','Maldives']} />
            <FilterSelect label="All Status"       options={['Published','Draft','Archived']} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>More Filters
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <Th>Tour</Th><Th>Destination</Th><Th>Category</Th><Th>Duration</Th><Th>Price (From)</Th><Th>Status</Th><Th>Bookings</Th><Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {tours.map((t, i) => (
                  <tr key={t.id} style={{ borderBottom: i < tours.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🗺️</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{t.name}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0' }}>#{t.id}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span>{t.flag}</span>
                        <span style={{ fontSize: 12, color: '#4B5563' }}>{t.dest}</span>
                      </div>
                    </Td>
                    <Td>
                      <span className="badge" style={{ background: `${t.categoryColor}15`, color: t.categoryColor }}>{t.category}</span>
                    </Td>
                    <Td style={{ color: '#4B5563' }}>{t.duration}</Td>
                    <Td style={{ fontWeight: 600 }}>${t.price}</Td>
                    <Td><Badge label={t.status} /></Td>
                    <Td style={{ fontWeight: 600 }}>{t.bookings}</Td>
                    <Td><ActionBtns /></Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 128 results</span>
            <Pagination total={13} />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 54 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Tour Overview</h3>
          {[{ label: 'Total Tours', value: '128', color: '#2563EB' }, { label: 'Published', value: '98', color: '#059669' }, { label: 'Draft', value: '18', color: '#F59E0B' }, { label: 'Archived', value: '12', color: '#A3AED0' }].map(r => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 12, color: '#A3AED0' }}>{r.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.value}</span>
            </div>
          ))}
        </div>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Top Destinations</h3>
          {[{ flag: '🇦🇪', name: 'Dubai, UAE', count: 28 }, { flag: '🇹🇷', name: 'Istanbul, Turkey', count: 19 }, { flag: '🇹🇭', name: 'Bangkok, Thailand', count: 14 }, { flag: '🇲🇻', name: 'Maldives', count: 11 }, { flag: '🇦🇿', name: 'Baku, Azerbaijan', count: 9 }].map(d => (
            <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 18 }}>{d.flag}</span>
              <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{d.name}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#2563EB' }}>{d.count}</span>
            </div>
          ))}
        </div>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Top Categories</h3>
          {[{ label: 'City Tour', count: 38, color: '#2563EB' }, { label: 'Adventure', count: 29, color: '#EA580C' }, { label: 'Cultural', count: 22, color: '#7C3AED' }, { label: 'Beach', count: 17, color: '#0EA5E9' }, { label: 'Nature', count: 12, color: '#059669' }].map(c => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{c.label}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#A3AED0' }}>{c.count} Tours</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
