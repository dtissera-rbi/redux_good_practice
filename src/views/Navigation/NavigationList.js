import { useDispatch, useSelector } from "react-redux";
import store from './store'

function NavigationList() {
  const dispatch = useDispatch();
  const navigation2 = useSelector((state) => state.navigation);
  const navigation = store.getState()

  const handleAddNavigation = () => {
    const newProduct = createNewNavigation();
    dispatch({ type: "ADD_NAVIGATION", payload: newProduct });
  };

  const handleDeleteNavigation = (navigationId) => {
    const newNavigation = navigation.navigationList.filter((navigationItem) => navigationItem.id !== navigationId)

    dispatch({ type: 'DELETE_NAVIGATION', payload: newNavigation })
  }

  const createNewNavigation = () => {
    const random = Math.random();
    const newProduct = {
      id: random,
      name: `NEW_NAVIGATION_${random}`
    };

    return newProduct;
  };

  console.log('navigation from useSelector', navigation2)

  return (
    <>
      <button onClick={handleAddNavigation}>+ Add new navigation</button>
      <div>
        {navigation.navigationList.map((navigation) => {
          return (
            <h5 key={navigation.id}>
              <div>ID: {navigation.id}</div>
              <div>Name: {navigation.name}</div>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDeleteNavigation(navigation.id)}
              >
                Delete Navigation
              </button>
            </h5>
          );
        })}
      </div>
    </>
  )
}

export default NavigationList
