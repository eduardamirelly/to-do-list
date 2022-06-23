import TodoPage from './pages/TodoPage'
import { Provider } from 'react-redux/es/exports'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  )
}

export default App
