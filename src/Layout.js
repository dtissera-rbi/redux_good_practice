import { useNavigate } from "react-router-dom"

function Layout(props) {
    const navigate = useNavigate()
    const menu = [
        'home',
        'navigation',
        'products',
        'login'
    ]
    
    const handleClickMenuItem = (menuItemName) => {
        navigate(`/${menuItemName}`)
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
                            key={menuItem}
                            onClick={() => handleClickMenuItem(menuItem)}
                        >
                            {menuItem}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Layout
