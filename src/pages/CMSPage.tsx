import { Badge, Avatar, Th, Td, SearchInput, FilterSelect, PrimaryBtn, Pagination } from '../components/ui/shared'

const pages = [
  { icon: '🏠', title: 'Home',              slug: '/',                   author: 'Ahmad Hussain',  category: 'Homepage', catColor: '#2563EB', catBg: '#EEF4FF', status: 'Published', date: 'Jun 16, 2025 10:30 AM', views: 2450 },
  { icon: 'ℹ️', title: 'About Us',          slug: '/about-us',           author: 'Sara Karim',     category: 'Pages',    catColor: '#059669', catBg: '#ECFDF5', status: 'Published', date: 'Jun 15, 2025 09:15 AM', views: 1320 },
  { icon: '🗺️', title: 'Our Tours',        slug: '/our-tours',          author: 'Omar Zaman',     category: 'Pages',    catColor: '#059669', catBg: '#ECFDF5', status: 'Published', date: 'Jun 14, 2025 04:20 PM', views: 3680 },
  { icon: '✈️', title: 'Destinations',     slug: '/destinations',       author: 'Fatima Noor',    category: 'Pages',    catColor: '#059669', catBg: '#ECFDF5', status: 'Published', date: 'Jun 14, 2025 08:00 AM', views: 2150 },
  { icon: '📝', title: 'Blog',             slug: '/blog',               author: 'Ali Reza',       category: 'Blog',     catColor: '#F59E0B', catBg: '#FFFBEB', status: 'Published', date: 'Jun 13, 2025 11:45 AM', views: 1890 },
  { icon: '📞', title: 'Contact Us',       slug: '/contact-us',         author: 'Maryam Ahmadi',  category: 'Pages',    catColor: '#059669', catBg: '#ECFDF5', status: 'Draft',     date: 'Jun 13, 2025 12:30 PM', views: null },
  { icon: '📜', title: 'Terms & Conditions',slug: '/terms-conditions',  author: 'Hassan Noori',   category: 'Legal',    catColor: '#7C3AED', catBg: '#F5F3FF', status: 'Published', date: 'Jun 12, 2025 02:30 PM', views: 980 },
  { icon: '🔒', title: 'Privacy Policy',   slug: '/privacy-policy',     author: 'Zainullah Ahmad',category: 'Legal',    catColor: '#7C3AED', catBg: '#F5F3FF', status: 'Draft',     date: 'Jun 11, 2025 09:10 AM', views: null },
  { icon: '❓', title: 'FAQs',             slug: '/faqs',               author: 'Maryam Ahmadi',  category: 'Pages',    catColor: '#059669', catBg: '#ECFDF5', status: 'Published', date: 'Jun 10, 2025 01:15 PM', views: 1110 },
  { icon: '🗺️', title: 'Travel Guide',    slug: '/travel-guide',       author: 'Ahmad Hussain',  category: 'Blog',     catColor: '#F59E0B', catBg: '#FFFBEB', status: 'Published', date: 'Jun 10, 2025 03:45 PM', views: 1760 },
]

const activity = [
  { icon: '🏠', text: 'Home page updated',          by: 'Ahmad Hussain',  time: '10:30 AM' },
  { icon: '📝', text: 'New blog post added',         by: 'Fatima Noor',    time: '09:15 AM' },
  { icon: 'ℹ️', text: 'About Us page published',    by: 'Sara Karim',     time: 'Yesterday' },
  { icon: '🗺️', text: 'Tour Guide post updated',   by: 'Ali Reza',       time: 'Jun 14, 2025' },
  { icon: '📞', text: 'Contact Us page draft saved', by: 'Maryam Ahmadi', time: 'Jun 13, 2025' },
]

export default function CMSPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
              {['Dashboard','CMS','Pages'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 2 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>CMS Management</h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 10, padding: '9px 14px', fontSize: 13, color: '#1B2559', cursor: 'pointer' }}>⬇ Export</button>
            <PrimaryBtn>+ Add New Page</PrimaryBtn>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 16 }}>
          {[{ label: 'Total Pages', value: '128', change: '+12.5%', color: '#2563EB', bg: '#EEF4FF', icon: '📄' }, { label: 'Published Pages', value: '96', change: '+8.2%', color: '#059669', bg: '#ECFDF5', icon: '✅' }, { label: 'Draft Pages', value: '22', change: '-4.1%', color: '#F59E0B', bg: '#FFFBEB', icon: '📋', down: true }, { label: 'Trash Pages', value: '10', change: '-2.3%', color: '#EE5D50', bg: '#FEF2F2', icon: '🗑️', down: true }].map(s => (
            <div key={s.label} className="stat-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{s.icon}</div>
                <span style={{ fontSize: 12, color: '#A3AED0' }}>{s.label}</span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#1B2559' }}>{s.value}</div>
              <div style={{ fontSize: 11, marginTop: 6, color: (s as any).down ? '#EE5D50' : '#059669', fontWeight: 600 }}>{s.change} vs last month</div>
            </div>
          ))}
        </div>

        <div className="section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px', borderBottom: '1px solid #F8FAFC', flexWrap: 'wrap' }}>
            <SearchInput placeholder="Search pages..." />
            <FilterSelect label="All Categories" options={['Homepage','Pages','Blog','Legal']} />
            <FilterSelect label="All Authors"    options={['Ahmad Hussain','Sara Karim']} />
            <FilterSelect label="All Status"     options={['Published','Draft','Trash']} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '7px 12px', fontSize: 12, color: '#1B2559', cursor: 'pointer' }}>🔍 Filters</button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #F8FAFC' }}>
                  <Th>Page</Th><Th>Author</Th><Th>Category</Th><Th>Status</Th><Th>Last Updated</Th><Th>Views</Th><Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p, i) => (
                  <tr key={p.slug} style={{ borderBottom: i < pages.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{p.icon}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#1B2559' }}>{p.title}</div>
                          <div style={{ fontSize: 11, color: '#A3AED0', fontFamily: 'monospace' }}>{p.slug}</div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Avatar name={p.author} size={24} />
                        <span style={{ fontSize: 12, color: '#4B5563' }}>{p.author}</span>
                      </div>
                    </Td>
                    <Td>
                      <span className="badge" style={{ background: p.catBg, color: p.catColor }}>{p.category}</span>
                    </Td>
                    <Td><Badge label={p.status} /></Td>
                    <Td style={{ fontSize: 11, color: '#4B5563' }}>{p.date}</Td>
                    <Td style={{ fontWeight: 600 }}>{p.views ? p.views.toLocaleString() : '—'}</Td>
                    <Td>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {[<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A3AED0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>].map((icon, j) => (
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
            <span style={{ fontSize: 12, color: '#A3AED0' }}>Showing 1 to 10 of 128 results</span>
            <Pagination total={13} />
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Content Overview</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'conic-gradient(#2563EB 0 75%, #059669 75% 85%, #F59E0B 85% 98%, #EE5D50 98% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 62, height: 62, borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1B2559' }}>128</div>
                <div style={{ fontSize: 8, color: '#A3AED0' }}>Total</div>
              </div>
            </div>
          </div>
          {[{ label: 'Pages', value: 96, pct: '75%', color: '#2563EB' }, { label: 'Posts', value: 13, pct: '10%', color: '#059669' }, { label: 'Drafts', value: 22, pct: '17%', color: '#F59E0B' }, { label: 'Trash', value: 10, pct: '8%', color: '#EE5D50' }].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
              <span style={{ flex: 1, fontSize: 11, color: '#1B2559' }}>{s.label}</span>
              <span style={{ fontSize: 11, color: '#A3AED0' }}>{s.pct} ({s.value})</span>
            </div>
          ))}
          <button style={{ marginTop: 10, fontSize: 12, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>View all content →</button>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Recent Activity</h3>
          {activity.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#F4F7FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>{a.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: '#1B2559' }}>{a.text}</div>
                <div style={{ fontSize: 11, color: '#A3AED0' }}>by {a.by}</div>
              </div>
              <span style={{ fontSize: 10, color: '#A3AED0', whiteSpace: 'nowrap' }}>{a.time}</span>
            </div>
          ))}
          <button style={{ marginTop: 10, fontSize: 12, fontWeight: 600, color: '#2563EB', background: 'none', border: 'none', cursor: 'pointer' }}>View all activity →</button>
        </div>

        <div className="section-card" style={{ padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[{ icon: '📄', label: 'Add New Page' }, { icon: '✏️', label: 'Add New Post' }, { icon: '📁', label: 'Manage Categories' }, { icon: '🖼️', label: 'Media Library' }].map(a => (
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
