import { useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaBuilding,
  FaTruck,
  FaBox,
  FaMapMarkedAlt,
  FaChartLine,
  FaGlobe,
  FaFileExport,
  FaRobot,
  FaFileInvoice,
  FaUsers,
} from "react-icons/fa";

const modules = [
  { title: "Empresas", icon: <FaBuilding />, path: "/empresas" },
  { title: "Distribuidores", icon: <FaUsers />, path: "/distribuidores" },
  { title: "Productos", icon: <FaBox />, path: "/productos" },
  { title: "Logística", icon: <FaTruck />, path: "/logistica" },
  { title: "Geográfico", icon: <FaMapMarkedAlt />, path: "/geografico" },
  { title: "Comercial", icon: <FaChartLine />, path: "/comercial" },
  { title: "Aduanas", icon: <FaFileInvoice />, path: "/aduanas" },
  { title: "Motor IA", icon: <FaRobot />, path: "/motor-ia" },
  { title: "Reportes", icon: <FaFileExport />, path: "/reportes" },
  { title: "Mapa Global", icon: <FaGlobe />, path: "/geografico/mapa" },
];

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`sidebar ${open ? "open" : "collapsed"}`}>

      {/* TOP */}
      <div className="sidebar-top">
        {open && <div className="logo">CRM Inteligente</div>}

        <button
          className="toggle-btn"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>
      </div>

      {/* MENU */}
      <div className="menu">
        {modules.map((m, i) => (
          <div
            key={i}
            className={`item ${
              location.pathname === m.path ? "active" : ""
            }`}
            onClick={() => navigate(m.path)}
          >
            <div className="icon">{m.icon}</div>
            {open && <span className="text">{m.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}