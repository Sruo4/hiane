const SideBar = () => {
  const barItems = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'About', url: '/about' },
    { id: 3, text: 'Projects', url: '/projects' },
    { id: 4, text: 'Contact', url: '/contact' },
  ]
  return (
    <div className="fixed left-0 top-0 h-full w-48 bg-gray-100 p-4 shadow-lg">
      <ul className="space-y-4">
        {barItems.map((item) => (
          <li key={item.id} className="hover:bg-gray-200 rounded-lg transition-colors">
            <a href={item.url} className="block px-4 py-2 text-gray-700 hover:text-gray-900">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
