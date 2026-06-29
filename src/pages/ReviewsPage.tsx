import { Badge, Avatar, Th, Td, SearchInput, FilterSelect, Pagination } from '../components/ui/shared'

const reviews = [
  { img: '🏨', title: 'Excellent Stay!',           place: 'Burj Al Arab, Dubai',           name: 'Ahmad Hussain',  email: 'ahmad.hussain@email.com', flag: '🇦🇪', type: 'Hotel', rating: 5.0, status: 'Approved', date: 'Jun 16, 2025 10:30 AM' },
  { img: '🏝️', title: 'Perfect for Honeymoon',    place: 'Centara Grand, Maldives',        name: 'Fatima Noor',    email: 'fatima.noor@email.com',   flag: '🇵🇰', type: 'Hotel', rating: 5.0, status: 'Approved', date: 'Jun 15, 2025 09:15 AM' },
  { img: '🗼', title: 'Amazing Tour Experience',   place: 'Paris City Tour',                name: 'Omar Zaman',     email: 'omar.zaman@email.com',    flag: '🇦🇫', type: 'Tour',  rating: 4.0, status: 'Approved', date: 'Jun 14, 2025 04:20 PM' },
  { img: '🌉', title: 'Great but can be better',  place: 'Istanbul Bosphorus Tour',        name: 'Sara Karim',     email: 'sara.karim@email.com',    flag: '🇹🇷', type: 'Tour',  rating: 3.0, status: 'Pending',  date: 'Jun 14, 2025 11:45 AM' },
  { img: '🏙️', title: 'Not Worth the Price',      place: 'Burj Khalifa – At The Top',     name: 'Bilal Khan',     email: 'bilal.khan@email.com',    flag: '🇵🇰', type: 'Tour',  rating: 2.0, status: 'Pending',  date: 'Jun 13, 2025 03:30 PM' },
  { img: '🏨', title: 'Bad Service',               place: 'The Plaza Hotel, New York',     name: 'Maryam Ahmed',   email: 'maryam.ahmed@email.com',  flag: '🇺🇸', type: 'Hotel', rating: 1.0, status: 'Rejected', date: 'Jun 12, 2025 08:10 AM' },
  { img: '🌊', title: 'Wonderful Place',           place: 'Kandima Maldives',              name: 'Zainullah Ahmad',email: 'zainullah@email.com',     flag: '🇦🇫', type: 'Hotel', rating: 5.0, status: 'Approved', date: 'Jun 11, 2025 06:40 PM' },
  { img: '🏛️', title: 'Good Value for Money',     place: 'London City Tour',              name: 'Hassan Noori',   email: 'hassan.noori@email.com',  flag: '🇬🇧', type: 'Tour',  rating: 4.0, status: 'Approved', date: 'Jun 10, 2025 02:25 PM' },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i <= n ? '#F59E0B' : '#E8EDF5'} stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
      <span style={{ fontSize: 11, fontWeight: 600, color: '#1B2559', marginLeft: 3 }}>{n.toFixed(1)}</span>
    </div>
  )
}

const tabs = ['All Reviews', 'Hotel Reviews', 'Tour Reviews', 'User Ratings', 'Reported Reviews']
const ratingDist = [{ stars: 5, count: 156, pct: 43.8 }, { stars: 4, count: 98, pct: 27.5 }, { stars: 3, count: 58, pct: 16.3 }, { stars: 2, count: 28, pct: 7.9 }, { stars: 1, count: 16, pct: 4.5 }]
const topHotels = [{ name: 'Burj Al Arab', r: 4.9 }, { name: 'Centara Grand', r: 4.8 }, { name: 'Kandima Maldives', r: 4.7 }, { name: 'The Plaza Hotel', r: 4.6 }, { name: 'Swissôtel The Bosphorus', r: 4.6 }]
const topTours = [{ name: 'Paris City Tour', r: 4.9 }, { name: 'Istanbul Bosphorus Tour', r: 4.7 }, { name: 'London City Tour', r: 4.6 }, { name: 'Dubai City Tour', r: 4.6 }, { name: 'Baku City Tour', r: 4.5 }]

export default function ReviewsPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','Reviews','All Reviews'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Reviews Management</h1>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>Export
          </button>
        </div>

        <div className="section-card">
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 2, padding: '0 16px', borderBottom: '1px solid #F8FAFC', overflowX: 'auto' }}>
            {tabs.map((t, i) => (
              <button key={t} style={{ padding: '13px 14px', fontSize: 13, fontWeight: 500, color: i === 0 ? '#2563EB' : '#A3AED0', background: 'none', border: 'none', cursor: 'pointer', borderBottom: i === 0 ? '2px solid #2563EB' : '2px solid transparent', whiteSpace: 'nowrap' }}>{t}</button>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search reviews..." />
            <FilterSelect label="All Types"   options={['Hotel','Tour']} />
            <FilterSelect label="All Status"  options={['Approved','Pending','Rejected']} />
            <FilterSelect label="All Ratings" options={['5 Stars','4 Stars','3 Stars','2 Stars','1 Star']} />
            <button style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 500, color: '#1B2559', background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', cursor: 'pointer' }}>↕ Newest First</button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <Th>Review</Th><Th>User</Th><Th>Type</Th><Th>Rating</Th><Th>Status</Th><Th>Date</Th><Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((r, i) => (
                  <tr key={i} style={{ borderBottom: i < reviews.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 8, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{r.img}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{r.title}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0' }}>{r.place}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <Avatar name={r.name} size={28} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 500, color: '#1B2559' }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0' }}>{r.email}</div>
                          <span style={{ fontSize: 14 }}>{r.flag}</span>
                        </div>
                      </div>
                    </Td>
                    <Td style={{ color: '#4B5563' }}>{r.type}</Td>
                    <Td><Stars n={r.rating} /></Td>
                    <Td><Badge label={r.status} /></Td>
                    <Td style={{ fontSize: 11, color: '#A3AED0', whiteSpace: 'nowrap' }}>{r.date}</Td>
                    <Td>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {[
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#EE5D50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>,
                        ].map((icon, j) => (
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
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 8 of 356 reviews</span>
            <Pagination total={45} />
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Reviews Overview</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[{ label: 'Total Reviews', value: '356', color: '#2563EB', bg: '#EEF4FF' }, { label: 'Approved', value: '256', color: '#059669', bg: '#ECFDF5' }, { label: 'Pending', value: '78', color: '#EA580C', bg: '#FFF7ED' }, { label: 'Rejected', value: '22', color: '#DC2626', bg: '#FEF2F2' }].map(s => (
              <div key={s.label} style={{ background: s.bg, borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 10, color: s.color, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Rating Distribution</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {ratingDist.map(r => (
            <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: '#1B2559', width: 40, flexShrink: 0 }}>{r.stars} Stars</span>
              <div style={{ flex: 1, height: 6, background: '#F4F7FE', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${r.pct}%`, background: '#F59E0B', borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 11, color: '#A3AED0', width: 50, textAlign: 'right', flexShrink: 0 }}>{r.count} ({r.pct}%)</span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Rated Hotels</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {topHotels.map(h => (
            <div key={h.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>🏨</div>
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{h.name}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: 2 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>{h.r}
              </span>
            </div>
          ))}
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>Top Rated Tours</h3>
            <button style={{ fontSize: 11, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {topTours.map(t => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>🗺️</div>
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{t.name}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: 2 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>{t.r}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
