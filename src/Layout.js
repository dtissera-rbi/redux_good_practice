import { useNavigate } from "react-router-dom"

function Layout(props) {
  const navigate = useNavigate()
  const menu = [
    { label: 'home', path: '/' },
    { label: 'navigation', path: '/navigation' },
    { label: 'products', path: '/products' },
    { label: 'login', path: '/login' },
  ]

  const handleClickMenuItem = (path) => {
    navigate(path)
  }

  return (
    <div>
      <div>
        {props.children}
      </div>
      <div>
        {menu.map((menuItem) => {
          return (
            <button
              key={menuItem.path}
              onClick={() => handleClickMenuItem(menuItem.path)}
            >
              {menuItem.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Layout
