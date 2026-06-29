import { Badge, Th, Td, SearchInput, FilterSelect, PrimaryBtn, ActionBtns, Pagination } from '../components/ui/shared'

const hotels = [
  { id: 'HTL-1001', name: 'Burj Al Arab',             flag: '🇦🇪', location: 'Dubai, UAE',        stars: 5, rooms: 202,   price: 650, status: 'Active',   rating: 4.8, reviews: 1245 },
  { id: 'HTL-1002', name: 'Swissôtel The Bosphorus',  flag: '🇹🇷', location: 'Istanbul, Turkey',  stars: 5, rooms: 566,   price: 220, status: 'Active',   rating: 4.6, reviews: 856  },
  { id: 'HTL-1003', name: 'Centara Grand Beach Resort',flag: '🇹🇭', location: 'Phuket, Thailand',  stars: 5, rooms: 262,   price: 180, status: 'Active',   rating: 4.7, reviews: 1102 },
  { id: 'HTL-1004', name: 'Marina Bay Sands',          flag: '🇸🇬', location: 'Singapore',         stars: 5, rooms: 2561,  price: 320, status: 'Active',   rating: 4.5, reviews: 2015 },
  { id: 'HTL-1005', name: 'Kandima Maldives',          flag: '🇲🇻', location: 'Maldives',          stars: 5, rooms: 264,   price: 480, status: 'Active',   rating: 4.9, reviews: 1350 },
  { id: 'HTL-1006', name: 'The Ritz London',           flag: '🇬🇧', location: 'London, UK',        stars: 5, rooms: 136,   price: 710, status: 'Active',   rating: 4.8, reviews: 923  },
  { id: 'HTL-1007', name: 'Shangri-La Paris',          flag: '🇫🇷', location: 'Paris, France',     stars: 5, rooms: 100,   price: 560, status: 'Inactive', rating: 4.4, reviews: 632  },
  { id: 'HTL-1008', name: 'The Plaza Hotel',           flag: '🇺🇸', location: 'New York, USA',     stars: 5, rooms: 282,   price: 590, status: 'Active',   rating: 4.6, reviews: 1120 },
]

const topRated = [
  { name: 'Kandima Maldives',     rating: 4.9 },
  { name: 'Burj Al Arab',         rating: 4.8 },
  { name: 'The Ritz London',      rating: 4.8 },
  { name: 'Centara Grand Phuket', rating: 4.7 },
  { name: 'Swissôtel Bosphorus',  rating: 4.6 },
]

const topDest = [
  { flag: '🇦🇪', name: 'Dubai, UAE',        count: 56 },
  { flag: '🇹🇷', name: 'Istanbul, Turkey',  count: 34 },
  { flag: '🇲🇻', name: 'Maldives',          count: 28 },
  { flag: '🇬🇧', name: 'London, UK',        count: 24 },
  { flag: '🇫🇷', name: 'Paris, France',     count: 20 },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function HotelsPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Hotels','All Hotels'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Hotels Management</h1>
          </div>
          <PrimaryBtn>+ Add New Hotel</PrimaryBtn>
        </div>

        <div className="section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search hotels..." />
            <FilterSelect label="All Destinations" options={['Dubai','Istanbul','Maldives','London']} />
            <FilterSelect label="All Star Ratings"  options={['5 Stars','4 Stars','3 Stars']} />
            <FilterSelect label="All Status"        options={['Active','Inactive']} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>More Filters
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <Th>Hotel</Th><Th>Location</Th><Th>Star Rating</Th><Th>Rooms</Th><Th>Price (From)</Th><Th>Status</Th><Th>Reviews</Th><Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h, i) => (
                  <tr key={h.id} style={{ borderBottom: i < hotels.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 8, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🏨</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{h.name}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0' }}>#{h.id}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span>{h.flag}</span>
                        <span style={{ fontSize: 12, color: '#4B5563' }}>{h.location}</span>
                      </div>
                    </Td>
                    <Td><Stars n={h.stars} /></Td>
                    <Td style={{ color: '#4B5563' }}>{h.rooms.toLocaleString()} Rooms</Td>
                    <Td style={{ fontWeight: 600 }}>${h.price}</Td>
                    <Td><Badge label={h.status} /></Td>
                    <Td>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#1B2559' }}>{h.rating}</div>
                      <div style={{ fontSize: 11, color: '#A3AED0' }}>({h.reviews.toLocaleString()})</div>
                    </Td>
                    <Td><ActionBtns /></Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 256 results</span>
            <Pagination total={32} />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 54 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Hotel Overview</h3>
          {[{ label: 'Total Hotels', value: '256', color: '#2563EB' }, { label: 'Active Hotels', value: '218', color: '#059669' }, { label: 'Inactive Hotels', value: '18', color: '#EE5D50' }, { label: 'Total Rooms', value: '18,450', color: '#F59E0B' }].map(r => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <span style={{ fontSize: 12, color: '#A3AED0' }}>{r.label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.value}</span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Rated Hotels</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {topRated.map(h => (
            <div key={h.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>🏨</div>
              <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{h.name}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: 3 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                {h.rating}
              </span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Destinations</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {topDest.map(d => (
            <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{d.flag}</div>
              <span style={{ flex: 1, fontSize: 12, color: '#1B2559' }}>{d.name}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#2563EB' }}>{d.count} Hotels</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
