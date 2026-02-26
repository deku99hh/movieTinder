import { Route, Routes } from 'react-router'
import { CardPage } from './pages/CardPage'

import './App.css'

function App() {


  return (
    <Routes>
      <Route index element={<CardPage />}></Route>
    </Routes>
  );
}

export default App
