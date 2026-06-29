import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F7FE' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: 220, display: 'flex', flexDirection: 'column' }}>
        <Topbar />
        <main style={{ flex: 1, padding: '24px', paddingTop: '88px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
