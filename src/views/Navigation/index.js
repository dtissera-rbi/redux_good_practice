import { Provider } from "react-redux"
import store from './store'
import NavigationList from "./NavigationList"

function NavigationView() {
  return (
    <Provider store={store}>
      <h1>This is Navigation view</h1>
      <NavigationList />
    </Provider>
  )
}

export default NavigationView
