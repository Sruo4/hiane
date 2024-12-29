import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function Layout() {
  return (
    <>
      <SideBar />
      <main className="ml-48 p-4">
        <Outlet />
      </main>
    </>
  )
}
