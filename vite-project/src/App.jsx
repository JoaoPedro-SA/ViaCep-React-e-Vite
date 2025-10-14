import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Atividade from "./pages/Atividade.jsx";
import NotFound from "./pages/NotFound.jsx"; // ✅ importar

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividade" element={<Atividade />} />
        <Route path="*" element={<NotFound />} /> {/* rota 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
