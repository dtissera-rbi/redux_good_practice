const { useSelector } = require("react-redux")

function NavigationView() {
    const navigation = useSelector(state => state.navigation)
    
    const handleClickDeleteNavigation = (navigationId) => {
        const newNavigationList = navigation.navigationList.filter(
        (navigationItem) => navigationItem.id !== navigationId
        );

        dispatch({ type: "DELETE_NAVIGATION", payload: newNavigationList });
    }

    return (
        <div>
            <h1>This is Navigation view</h1>
            {navigation.navigationList.map((navigationItem) => {
                return (
                    <div key={navigationItem.id}>
                        <div>{navigationItem.id}</div>
                        <div>{navigationItem.name}</div>
                        <button
                          style={{ backgroundColor: 'red' }}
                          onClick={handleClickDeleteNavigation}
                        >
                            Delete Navigation
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default NavigationView