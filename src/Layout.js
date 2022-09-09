function Layout(props) {
    const navigate = () => {}
    const menu = [
        'home',
        'navigation',
        'products'
    ]
    
    const handleClickMenuItem = (menuItemName) => {
        navigate(`/${menuItemName}`)
    }
    
    return (
        <div>
            {menu.map((menuItem) => {
                return (
                    <div
                        key={menuItem.name}
                        onClick={() => handleClickMenuItem(menuItem.name)}
                    >
                        {menuItem.name}
                    </div>
                )
            })}
            {children}
        </div>
    )
}

export default Layout