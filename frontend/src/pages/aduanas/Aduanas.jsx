import { Outlet, NavLink } from "react-router-dom";

export default function Aduanas() {
  return (
    <div className="p-4 text-white">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4">
        Módulo Aduanas
      </h1>

      {/* MENÚ INTERNO */}
      <div className="flex flex-wrap gap-4 mb-6">

        <NavLink
          to="aranceles"
          className={({ isActive }) =>
            isActive ? "text-cyan-300 font-bold" : "text-gray-300"
          }
        >
          Aranceles
        </NavLink>

        <NavLink
          to="restricciones"
          className={({ isActive }) =>
            isActive ? "text-cyan-300 font-bold" : "text-gray-300"
          }
        >
          Restricciones
        </NavLink>

        <NavLink
          to="etiquetados"
          className={({ isActive }) =>
            isActive ? "text-cyan-300 font-bold" : "text-gray-300"
          }
        >
          Etiquetados
        </NavLink>

        <NavLink
          to="fitosanitarios"
          className={({ isActive }) =>
            isActive ? "text-cyan-300 font-bold" : "text-gray-300"
          }
        >
          Fitosanitarios
        </NavLink>

      </div>

      {/* CONTENIDO DINÁMICO */}
      <Outlet />

    </div>
  );
}