import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F4F5F6] pt-2 px-2">
      <SideBar />
      <main className="ml-60 p-6 bg-white rounded-lg shadow-sm h-[calc(100vh-14px)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        <Outlet />
      </main>
    </div>
  )
}
