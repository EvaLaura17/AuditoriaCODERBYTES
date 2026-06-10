import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Aduanas from "./pages/aduanas/Aduanas";
import Aranceles from "./pages/aduanas/Aranceles";
import Restricciones from "./pages/aduanas/Restricciones";
import Etiquetados from "./pages/aduanas/Etiquetados";
import Fitosanitarios from "./pages/aduanas/Fitosanitarios";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />

      {/* MÓDULO ADUANAS */}
      <Route path="/aduanas" element={<Aduanas />}>
        <Route path="aranceles" element={<Aranceles />} />
        <Route path="restricciones" element={<Restricciones />} />
        <Route path="etiquetados" element={<Etiquetados />} />
        <Route path="fitosanitarios" element={<Fitosanitarios />} />
      </Route>

    </Routes>
  );
}