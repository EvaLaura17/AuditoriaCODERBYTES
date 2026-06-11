import apiClient from "./apiClient";

// =========================
// VENTAS HISTÓRICAS
// =========================
export const getVentas = (page = 1) =>
  apiClient.get(`/comercial/ventas/?page=${page}`);

export const getVenta = (id) =>
  apiClient.get(`/comercial/ventas/${id}/`);

// =========================
// REPORTE POR PAÍS
// =========================
export const getReporteVentasPais = () =>
  apiClient.get("/comercial/reporte-ventas/");
