import TodosPage from './pages/TodosPage'
import { Provider } from 'react-redux/es/exports'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <TodosPage />
    </Provider>
  )
}

export default App
