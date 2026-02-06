import Header from "./components/Header";
import SideBarre from "./components/SideBarre";
import Nouveautes from "./pages/Nouveautes";
import { Route, Routes } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import Collection from "./pages/Collection";
import Fil from "./pages/Fil";
import Recherche from "./pages/Recherche";
import VueDetail from "./pages/VueDetail";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Nouveautes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/fil" element={<Fil />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/vuedetail" element={<VueDetail />} />
      </Routes>
      <SideBarre />
    </div>
  );
}

export default App;
