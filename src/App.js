import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberInputPage from './pages/NumberInputPage';
import VideoBannerPage from './pages/VideoBannerPage';
import SubmittedPage from './pages/SubmittedPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* подстановочный путь */}
        <Route path="/" element={<VideoBannerPage />} />
        <Route path="numberInput" element={<NumberInputPage />} />
        <Route path="submitted" element={<SubmittedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
