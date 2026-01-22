import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from "./AlbumDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<AlbumDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
