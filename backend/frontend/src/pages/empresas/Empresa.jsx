import { NavLink, Outlet } from "react-router-dom";

const Empresas = () => {
  return (
    <div className="empresas-container">
      
      <h1 className="titulo-empresas">Módulo Empresas</h1>

      {/* Submenu interno */}
      <div className="empresas-menu">
        <NavLink to="lista" className="link">
          Lista de Empresas
        </NavLink>
        <NavLink to="crear" className="link">
            Crear Empresa
        </NavLink>
        <NavLink to="inactivas" className="link">
            Empresas Inactivas
        </NavLink>
      </div>

      {/* Aquí se renderizan las páginas hijas */}
      <div className="empresas-content">
        <Outlet />
      </div>

    </div>
  );
};

export default Empresas;