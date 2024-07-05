import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; //delete this line when you have your own pages
import Layout from "./pages/Layout";
import "./styles/reset.css";
import History from "./pages/History";
import About from "./pages/About";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <BrowserRouter basename="/website-randy">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="geschiedenis" element={<History />} />
          <Route path="over" element={<About />} />
          <Route path="virtueel-museum" element={<Gallery />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
