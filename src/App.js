import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberInputPage from './pages/NumberInputPage';
import VideoBannerPage from './pages/VideoBannerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* подстановочный путь */}
        <Route path="*" element={<VideoBannerPage />} />
        <Route path="two" element={<NumberInputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
