export default function BookingDetailsPage() {
  const timelineSteps = [
    { label: 'Booking Created',  date: 'Jun 16, 2025', time: '10:30 AM', done: true  },
    { label: 'Payment Received', date: 'Jun 16, 2025', time: '10:31 AM', done: true  },
    { label: 'Booking Confirmed',date: 'Jun 16, 2025', time: '10:32 AM', done: true  },
    { label: 'Voucher Sent',     date: 'Jun 16, 2025', time: '10:33 AM', active: true },
    { label: 'Completed',        date: '',             time: '',          done: false },
  ]

  const actionBtn = (icon: React.ReactNode, label: string, color = '#1B2559', bg = 'white', border = '#E8EDF5') => (
    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: 10, background: bg, border: `1px solid ${border}`, color, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {icon}
        {label}
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  )

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
            {['Dashboard','Bookings','All Bookings','BK-1001'].map((b, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{i > 0 && <span style={{ color: '#A3AED0', fontSize: 12 }}>›</span>}<span style={{ fontSize: 12, color: i === 3 ? '#1B2559' : '#A3AED0' }}>{b}</span></span>)}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>Booking Details</h1>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 16 }}>
        <div>
          {/* Back + booking ID */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 600, color: '#1B2559', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              Back to Bookings
            </button>
          </div>

          <div className="section-card" style={{ padding: 24, marginBottom: 16 }}>
            {/* Booking header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="badge" style={{ background: '#ECFDF5', color: '#059669', fontSize: 12 }}>Confirmed</span>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1B2559', margin: 0 }}>BK-1001</h2>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[{ icon: '🖨️', label: 'Print Voucher' }, { icon: '✉️', label: 'Send Email' }].map(b => (
                  <button key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 500, color: '#1B2559', cursor: 'pointer' }}>
                    {b.icon} {b.label}
                  </button>
                ))}
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #E8EDF5', borderRadius: 8, padding: '8px 14px', fontSize: 12, fontWeight: 500, color: '#1B2559', cursor: 'pointer' }}>
                  More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#A3AED0', margin: 0 }}>Booked on Jun 16, 2025 at 10:30 AM</p>
          </div>

          {/* Flight Information */}
          <div className="section-card" style={{ padding: 24, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1B2559', marginBottom: 16 }}>Flight Information</h3>
            <div style={{ background: '#F8FAFC', borderRadius: 12, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {/* Airline */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 80 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: 'white', border: '1px solid #E8EDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✈️</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#EE2020' }}>Emirates</div>
                    <div style={{ fontSize: 10, color: '#A3AED0' }}>EK 224</div>
                  </div>
                </div>

                {/* Route */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#1B2559' }}>DXB</div>
                    <div style={{ fontSize: 11, color: '#A3AED0' }}>Dubai, UAE</div>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ fontSize: 11, color: '#2563EB', fontWeight: 600 }}>7h 20m</div>
                    <div style={{ width: '100%', height: 2, background: '#E8EDF5', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 14 }}>✈️</div>
                    </div>
                    <div style={{ fontSize: 10, color: '#2563EB' }}>Non-stop</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#1B2559' }}>IST</div>
                    <div style={{ fontSize: 11, color: '#A3AED0' }}>Istanbul, Turkey</div>
                  </div>
                </div>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 140 }}>
                  {[{ icon: '📅', text: 'Jun 16, 2025\n10:30 AM' }, { icon: '💺', text: '12A (Economy)' }, { icon: '🧳', text: '30 kg' }].map(d => (
                    <div key={d.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                      <span style={{ fontSize: 13 }}>{d.icon}</span>
                      <span style={{ fontSize: 11, color: '#4B5563', whiteSpace: 'pre-line' }}>{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Passenger Information */}
          <div className="section-card" style={{ padding: 24, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1B2559', marginBottom: 16 }}>Passenger Information</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#2563EB' }}>AH</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1B2559' }}>Ahmad Hussain</div>
                  <div style={{ fontSize: 11, color: '#A3AED0' }}>ahmad@gmail.com</div>
                  <div style={{ fontSize: 11, color: '#2563EB' }}>+93 77 123 4567</div>
                </div>
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginLeft: 20 }}>
                {[{ label: 'Passport No.', value: 'A12345678' }, { label: 'Nationality', value: 'Afghanistan' }, { label: 'Date of Birth', value: 'May 15, 1990' }, { label: 'Gender', value: 'Male' }].map(f => (
                  <div key={f.label}>
                    <div style={{ fontSize: 11, color: '#A3AED0', marginBottom: 3 }}>{f.label}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#1B2559' }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="section-card" style={{ padding: 24, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1B2559', marginBottom: 16 }}>Payment Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: '#A3AED0', marginBottom: 4 }}>Payment Method</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#1B2559', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Credit Card (**** 4242)
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1F71', background: '#E8E8FF', padding: '2px 6px', borderRadius: 4 }}>VISA</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#A3AED0', marginBottom: 4 }}>Payment Status</div>
                <span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>Paid</span>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#A3AED0', marginBottom: 4 }}>Paid Amount</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1B2559' }}>$320.00</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#A3AED0', marginBottom: 4 }}>Booking Total</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1B2559' }}>$320.00</div>
              </div>
            </div>
          </div>

          {/* Booking Timeline */}
          <div className="section-card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1B2559', marginBottom: 20 }}>Booking Timeline</h3>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              {timelineSteps.map((step, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  {/* Line */}
                  {i < timelineSteps.length - 1 && (
                    <div style={{ position: 'absolute', top: 16, left: '60%', width: '80%', height: 2, background: step.done || step.active ? '#2563EB' : '#E8EDF5', zIndex: 0 }} />
                  )}
                  {/* Circle */}
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: step.done ? '#2563EB' : step.active ? '#2563EB' : '#F4F7FE', border: step.active ? '3px solid #BAD0FF' : step.done ? 'none' : '2px solid #E8EDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, marginBottom: 8, flexShrink: 0 }}>
                    {step.done ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                     : step.active ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                     : <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E8EDF5' }} />}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: step.done || step.active ? '#1B2559' : '#A3AED0' }}>{step.label}</div>
                    {step.date && <div style={{ fontSize: 10, color: '#A3AED0', marginTop: 2 }}>{step.date}</div>}
                    {step.time && <div style={{ fontSize: 10, color: '#A3AED0' }}>{step.time}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="section-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', marginBottom: 16 }}>Price Breakdown</h3>
            {[{ label: 'Base Fare',    value: '$280.00' }, { label: 'Taxes & Fees', value: '$30.00' }, { label: 'Service Fee', value: '$10.00' }].map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 13, color: '#4B5563' }}>{r.label}</span>
                <span style={{ fontSize: 13, color: '#1B2559' }}>{r.value}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderTop: '2px solid #E8EDF5', marginTop: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1B2559' }}>Total Amount</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#2563EB' }}>$320.00</span>
            </div>
          </div>

          <div className="section-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', marginBottom: 14 }}>Customer Information</h3>
            {[{ icon: '👤', label: 'Customer ID', value: 'CUS-1001', isLink: false }, { icon: '📧', label: 'Email', value: 'ahmad@gmail.com', isLink: true }, { icon: '📞', label: 'Phone', value: '+93 77 123 4567', isLink: true }, { icon: '📅', label: 'Registered On', value: 'Jan 10, 2025', isLink: false }].map(r => (
              <div key={r.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid #F8FAFC' }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{r.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: '#A3AED0', marginBottom: 2 }}>{r.label}</div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: r.isLink ? '#2563EB' : '#1B2559' }}>{r.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', marginBottom: 14 }}>Booking Actions</h3>
            {actionBtn(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, 'Edit Booking', 'white', '#2563EB', '#2563EB')}
            {actionBtn(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EE5D50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>, 'Cancel Booking', '#EE5D50')}
            {actionBtn(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.68"/></svg>, 'Process Refund', '#F59E0B')}
            {actionBtn(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, 'Download Invoice')}
            {actionBtn(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B2559" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, 'View / Print Voucher')}
          </div>

          <div className="section-card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: '#1B2559', marginBottom: 12 }}>Notes</h3>
            <textarea placeholder="Add a note..." rows={3} style={{ width: '100%', padding: '10px', border: '1px solid #E8EDF5', borderRadius: 8, fontSize: 12, color: '#1B2559', outline: 'none', resize: 'none', fontFamily: 'Inter, sans-serif' }} />
            <button style={{ marginTop: 10, width: '100%', background: '#2563EB', color: 'white', border: 'none', borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Save Note</button>
          </div>
        </div>
      </div>
    </div>
  )
}
