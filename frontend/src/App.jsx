import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

// ADUANAS
import Aduanas from "./pages/aduanas/Aduanas";
import Aranceles from "./pages/aduanas/Aranceles";
import Restricciones from "./pages/aduanas/Restricciones";
import Etiquetados from "./pages/aduanas/Etiquetados";
import Fitosanitarios from "./pages/aduanas/Fitosanitarios";

// COMERCIAL
import Ventas from "./pages/comercial/Ventas";
import ReporteVentasPais from "./pages/comercial/ReporteVentasPais";
import Comercial from "./pages/comercial/Comercial";

// DISTRIBUIDORES
import Distribuidor from "./pages/distribuidores/Distribuidor";
import Agentes from "./pages/distribuidores/Agentes";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ADUANAS */}
      <Route path="/aduanas" element={<Aduanas />}>
        <Route path="aranceles" element={<Aranceles />} />
        <Route path="restricciones" element={<Restricciones />} />
        <Route path="etiquetados" element={<Etiquetados />} />
        <Route path="fitosanitarios" element={<Fitosanitarios />} />
      </Route>

      {/* COMERCIAL */}
      <Route path="/comercial" element={<Comercial />}>
        <Route path="ventas" element={<Ventas />} />
        <Route path="reporte-pais" element={<ReporteVentasPais />} />
      </Route>
      
      {/* DISTRIBUIDORES */}
      <Route path="/distribuidores" element={<Distribuidor />}>
        <Route path="agentes" element={<Agentes />} />
      </Route>
    </Routes>
  );
}