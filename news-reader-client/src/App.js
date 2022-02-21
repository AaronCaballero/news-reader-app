import './App.css';
import NewPage from './pages/newPage/newPage'
import ArchivedPage from './pages/archivedPage/archivedPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>

      <Route path='/' element={<NewPage />} />
      <Route path='/new' element={<NewPage />} />
      <Route path='/archived' element={<ArchivedPage />} />

    </Routes>

  );
}

export default App;
