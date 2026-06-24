import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AdminLayout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
      <Sidebar />
      <Topbar />
      <main style={{ marginLeft: 220, paddingTop: 64, padding: '80px 24px 24px 244px', minHeight: '100vh' }}>
        <Outlet />
      </main>
    </div>
  )
}
