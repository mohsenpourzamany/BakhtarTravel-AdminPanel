import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import DashboardPage from './pages/DashboardPage'

// Placeholder for future pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-64 text-center">
    <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    </div>
    <h2 className="text-lg font-bold text-navy mb-1">{title}</h2>
    <p className="text-sm text-muted">This page is coming soon.</p>
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="bookings/*"   element={<Placeholder title="Bookings" />} />
          <Route path="users/*"      element={<Placeholder title="Users" />} />
          <Route path="hotels/*"     element={<Placeholder title="Hotels" />} />
          <Route path="tours/*"      element={<Placeholder title="Tours" />} />
          <Route path="visa/*"       element={<Placeholder title="Visa" />} />
          <Route path="transfers/*"  element={<Placeholder title="Transfers" />} />
          <Route path="promotions/*" element={<Placeholder title="Promotions" />} />
          <Route path="reviews"      element={<Placeholder title="Reviews" />} />
          <Route path="finance/*"    element={<Placeholder title="Finance" />} />
          <Route path="reports/*"    element={<Placeholder title="Reports" />} />
          <Route path="cms/*"        element={<Placeholder title="CMS" />} />
          <Route path="support/*"    element={<Placeholder title="Support" />} />
          <Route path="settings/*"   element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
