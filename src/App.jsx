import { Provider } from 'react-redux/es/exports'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { store, persistor } from './redux/store'

import TodosPage from './pages/TodosPage';
import ListsPage from './pages/ListsPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={ <ListsPage /> } />
            <Route path="lists">
              <Route path=":listId" element={ <TodosPage /> }/>
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
