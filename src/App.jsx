import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumList from './AlbumList.jsx';
import AlbumDetail from './AlbumDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/album" element={<AlbumList />} />
        <Route path="/:slug" element={<AlbumDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
