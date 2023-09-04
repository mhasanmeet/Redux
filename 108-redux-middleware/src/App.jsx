import HookCounter from "./components/HooksCounter"
import { Provider } from "react-redux"
import store from './redux/store'
import DynamicHooksCounter from "./components/DynamicHooksCounter"

function App() {

  return (
    <Provider store={store}>
      <div className="body">
        <h1>State Change in JavaScript</h1>

        <HookCounter/>
        <DynamicHooksCounter/>
      </div>
    </Provider>
  )
}

export default App
