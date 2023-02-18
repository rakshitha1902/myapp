import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import HomeCss from "./pages/Home.css.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/home.css" element={<HomeCss />} />
    </Routes>
  );
}
