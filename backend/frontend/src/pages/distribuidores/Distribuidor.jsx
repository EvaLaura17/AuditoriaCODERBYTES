import { NavLink, Outlet } from "react-router-dom";

const Distribuidores = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold text-cyan-300 mb-4">
        Módulo Distribuidores
      </h1>

      {/* Submenú */}
      <div className="flex gap-4 mb-6 border-b border-gray-700 pb-3">
        <NavLink to="agentes" className="text-white hover:text-cyan-300">
          Agentes
        </NavLink>
      </div>

      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
    </div>
  );
};

export default Distribuidores;