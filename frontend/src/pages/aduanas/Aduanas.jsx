import { Outlet, NavLink } from "react-router-dom";

export default function Aduanas() {
  return (
    <div className="aduanas-container">

      {/* HEADER */}
      <h1 className="aduanas-title">
        Módulo Aduanas
      </h1>

      {/* MENÚ INTERNO */}
      <div className="aduanas-nav">

        <NavLink
          to="aranceles"
          className={({ isActive }) =>
            isActive ? "aduanas-link active" : "aduanas-link"
          }
        >
          Aranceles
        </NavLink>

        <NavLink
          to="restricciones"
          className={({ isActive }) =>
            isActive ? "aduanas-link active" : "aduanas-link"
          }
        >
          Restricciones
        </NavLink>

        <NavLink
          to="etiquetados"
          className={({ isActive }) =>
            isActive ? "aduanas-link active" : "aduanas-link"
          }
        >
          Etiquetados
        </NavLink>

        <NavLink
          to="fitosanitarios"
          className={({ isActive }) =>
            isActive ? "aduanas-link active" : "aduanas-link"
          }
        >
          Fitosanitarios
        </NavLink>

      </div>

      {/* CONTENIDO DINÁMICO */}
      <div className="aduanas-content">
        <Outlet />
      </div>

    </div>
  );
}