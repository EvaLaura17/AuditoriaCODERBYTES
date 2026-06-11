import { Outlet, NavLink } from "react-router-dom";

export default function Comercial() {
  return (
    <div className="comercial-container">

      <h1 className="comercial-title">
        Módulo Comercial
      </h1>

      <div className="comercial-nav">

        <NavLink
          to="ventas"
          className={({ isActive }) =>
            isActive ? "comercial-link active" : "comercial-link"
          }
        >
          Ventas
        </NavLink>

        <NavLink
          to="reporte-pais"
          className={({ isActive }) =>
            isActive ? "comercial-link active" : "comercial-link"
          }
        >
          Reporte por País
        </NavLink>

      </div>

      <div className="comercial-content">
        <Outlet />
      </div>

    </div>
  );
}