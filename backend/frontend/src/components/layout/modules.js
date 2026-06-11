import {
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

export const modules = [
  { title: "Empresas", icon: FaBuilding, path: "/empresas" },
  { title: "Distribuidores", icon: FaUsers, path: "/distribuidores" },
  { title: "Productos", icon: FaBox, path: "/productos" },
  { title: "Logística", icon: FaTruck, path: "/logistica" },
  { title: "Geográfico", icon: FaMapMarkedAlt, path: "/geografico" },
  { title: "Comercial", icon: FaChartLine, path: "/comercial" },
  { title: "Aduanas", icon: FaFileInvoice, path: "/aduanas" },
  { title: "Motor IA", icon: FaRobot, path: "/motor-ia" },
  { title: "Reportes", icon: FaFileExport, path: "/reportes" },
  { title: "Mapa Global", icon: FaGlobe, path: "/geografico/mapa" },
];