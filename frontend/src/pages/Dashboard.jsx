import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-layout">

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className={`main-content ${sidebarOpen ? "with-sidebar" : "full"}`}>

        {/* BOTÓN MOBILE */}
        <button
          className="mobile-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h1 className="main-title">
          CRM Intelligence Dashboard
        </h1>

        <p className="main-description">
          Plataforma centralizada de gestión empresarial.
        </p>

      </main>
    </div>
  );
}