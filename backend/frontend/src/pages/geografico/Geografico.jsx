import { NavLink, Outlet } from "react-router-dom";


const Geografico = () => {
  return (
    <div className="geografico-container">

      <h1 className="titulo-modulo">
        Módulo Geográfico
      </h1>

      <div className="tabs">

        <NavLink to="lista" className="tab">
          Países
        </NavLink>

        <NavLink to="crear" className="tab">
          Crear País
        </NavLink>

        <NavLink to="inactivos" className="tab">
          Inactivos
        </NavLink>

      </div>

      <Outlet />

    </div>
  );
};

export default Geografico;