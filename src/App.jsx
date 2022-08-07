import { Provider } from 'react-redux/es/exports'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from './redux/store'

// import TodosPage from './pages/TodosPage';
import ListsPage from './pages/ListsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path="/" element={ <ListsPage /> } />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
