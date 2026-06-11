import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD

// ADUANAS
=======
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
import Aduanas from "./pages/aduanas/Aduanas";
import Aranceles from "./pages/aduanas/Aranceles";
import Restricciones from "./pages/aduanas/Restricciones";
import Etiquetados from "./pages/aduanas/Etiquetados";
import Fitosanitarios from "./pages/aduanas/Fitosanitarios";

<<<<<<< HEAD
// COMERCIAL
import Ventas from "./pages/comercial/Ventas";
import ReporteVentasPais from "./pages/comercial/ReporteVentasPais";
import Comercial from "./pages/comercial/Comercial";

=======
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ADUANAS */}
=======

      <Route path="/dashboard" element={<Dashboard />} />

      {/* MÓDULO ADUANAS */}
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
      <Route path="/aduanas" element={<Aduanas />}>
        <Route path="aranceles" element={<Aranceles />} />
        <Route path="restricciones" element={<Restricciones />} />
        <Route path="etiquetados" element={<Etiquetados />} />
        <Route path="fitosanitarios" element={<Fitosanitarios />} />
      </Route>

<<<<<<< HEAD
      {/* COMERCIAL */}
      <Route path="/comercial" element={<Comercial />}>
        <Route path="ventas" element={<Ventas />} />
        <Route path="reporte-pais" element={<ReporteVentasPais />} />
      </Route>

=======
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
    </Routes>
  );
}