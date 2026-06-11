import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";

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

// EMPRESAS
import Empresas from "./pages/empresas/Empresa";
import ListaEmpresas from "./pages/empresas/ListaEmpresas";
import CrearEmpresa from "./pages/empresas/CrearEmpresa";
import EditarEmpresa from "./pages/empresas/EditarEmpresa";
import EmpresasInactivas from "./pages/empresas/EmpresasInactivas";

// GEOGRAFICO
import Geografico from "./pages/geografico/Geografico";
import ListaPaises from "./pages/geografico/ListaPaises";
import CrearPais from "./pages/geografico/CrearPais";
import EditarPais from "./pages/geografico/EditarPais";
import PaisesInactivos from "./pages/geografico/PaisesInactivos";

export default function App() {
  return (
    <Routes>

      {/*LAYOUT GLOBAL */}
      <Route element={<Layout />}>
        
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

        {/* EMPRESAS */}
        <Route path="/empresas" element={<Empresas />}>
          <Route path="lista" element={<ListaEmpresas />} />
          <Route path="crear" element={<CrearEmpresa />} />
          <Route path="editar/:id" element={<EditarEmpresa />} />
          <Route path="inactivas" element={<EmpresasInactivas />} />
        </Route>

        {/* GEOGRAFICO */}
        <Route path="/geografico" element={<Geografico />}>
          <Route path="lista" element={<ListaPaises />} />
          <Route path="crear" element={<CrearPais />} />
          <Route path="editar/:id" element={<EditarPais />} />
          <Route path="inactivos" element={<PaisesInactivos />} />
        </Route>
                
      </Route>
    </Routes>
  );
}