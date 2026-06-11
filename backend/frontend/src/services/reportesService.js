import apiClient from "./apiClient";

// EXPORTACIONES
export const exportEmpresas = () =>
  apiClient.get("/reportes/empresas/export/");

export const exportProductos = () =>
  apiClient.get("/reportes/productos/export/");

export const exportLogistica = () =>
  apiClient.get("/reportes/logistica/export/");

// PDF / EXCEL general
export const exportGeneral = (tipo) =>
  apiClient.get(`/reportes/export/?tipo=${tipo}`);