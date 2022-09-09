const { useSelector, useDispatch } = require("react-redux")

function NavigationView() {
    const dispatch = useDispatch()
    const navigation = useSelector(state => state.navigation)

    const handleAddNavigation = () => {
        const newNavigation = createNewNavigation();
        dispatch({ type: "ADD_NAVIGATION", payload: newNavigation });
      };
    
      const createNewNavigation = () => {
        const random = Math.random();
        const newNavigation = {
          id: random,
          name: `NEW_NAVIGATION_${random}`
        };
    
        return newNavigation;
      };
    
    const handleClickDeleteNavigation = (navigationId) => {
        const newNavigationList = navigation.navigationList.filter(
            (navigationItem) => navigationItem.id !== navigationId
        );

        dispatch({ type: "DELETE_NAVIGATION", payload: newNavigationList });
    }

    return (
        <div>
            <h1>This is Navigation view</h1>
            <button onClick={handleAddNavigation}>+ Add new navigation</button>
            {navigation.navigationList.map((navigationItem) => {
                return (
                    <h5 key={navigationItem.id}>
                        <div>ID: {navigationItem.id}</div>
                        <div>Name: {navigationItem.name}</div>
                        <button
                          style={{ backgroundColor: 'red' }}
                          onClick={() => handleClickDeleteNavigation(navigationItem.id)}
                        >
                            Delete Navigation
                        </button>
                    </h5>
                )
            })}
        </div>
    )
}

export default NavigationView
