import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberInputPage from './pages/NumberInputPage';
import VideoBannerPage from './pages/VideoBannerPage';
import SubmittedPage from './pages/SubmittedPage'; 

function App() {
      // // Initialize the YouTube iFrame API
      // const tag = document.createElement('script');
      // tag.src = 'https://www.youtube.com/iframe_api';
      // const firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
