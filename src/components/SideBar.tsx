import { Link } from 'react-router-dom'

interface BarItem {
  id: number
  text: string
  url: string
}

const barItems: BarItem[] = [
  { id: 1, text: 'Home', url: '/home' },
  { id: 2, text: 'About', url: '/about' },
  { id: 3, text: 'Projects', url: '/projects' },
  { id: 4, text: 'Contact', url: '/contact' },
]

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-gray-100 p-4 shadow-lg">
      <ul className="space-y-4 list-none p-0 m-0">
        {barItems.map((item) => (
          <li key={item.id} className="w-full hover:bg-gray-200 rounded-lg transition-colors">
            <Link to={item.url} className="block px-4 py-2 text-gray-700 underline-none hover:text-gray-900">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
