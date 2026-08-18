import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import GettingStarted from "./pages/docs/Gettingstarted";
import Installation from "./pages/docs/Installation";
import ApiReference from "./pages/docs/ApiReference";
import Icons from "./pages/Icons";
import Playground from "./pages/Playground";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/docs/api" element={<ApiReference />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}