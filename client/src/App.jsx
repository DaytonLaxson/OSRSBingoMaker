import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateBoardPage from './pages/CreateBoardPage';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-board" element={<CreateBoardPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;