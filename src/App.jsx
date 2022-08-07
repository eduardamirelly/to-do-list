import { Provider } from 'react-redux/es/exports'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from './redux/store'

import TodosPage from './pages/TodosPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path="/" element={ <TodosPage /> } />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
