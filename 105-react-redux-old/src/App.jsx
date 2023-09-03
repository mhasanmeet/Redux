import Counter from "./components/Counter"
import { Provider } from "react-redux"
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className="body">
        <h1>State Change in JavaScript</h1>

        <Counter/>
      </div>
    </Provider>
  )
}

export default App
