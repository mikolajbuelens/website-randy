import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; //delete this line when you have your own pages
import Layout from "./pages/Layout";
import "./styles/reset.css";
import History from "./pages/History";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="History" element={<History />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
