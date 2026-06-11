import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(true);
      else setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout-container">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Overlay para cerrar en mobile */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <main className={`main-content ${open ? "" : "collapsed"}`}>
        <Outlet />
      </main>
    </div>
  );
}