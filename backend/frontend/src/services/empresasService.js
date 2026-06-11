import apiClient from "./apiClient";

// ACTIVAS
export const getEmpresas = () =>
  apiClient.get("/empresas/?activo=true");

// INACTIVAS
export const getEmpresasInactivas = () =>
  apiClient.get("/empresas/?activo=false");

// OBTENER
export const getEmpresa = (id) =>
  apiClient.get(`/empresas/${id}/`);

// CREAR
export const createEmpresa = (data) =>
  apiClient.post("/empresas/", data);

// EDITAR
export const updateEmpresa = (id, data) =>
  apiClient.put(`/empresas/${id}/`, data);

// BORRADO LÓGICO
export const deleteEmpresa = (id) =>
  apiClient.delete(`/empresas/${id}/`);

// RESTAURAR
export const restaurarEmpresa = (id) =>
  apiClient.patch(`/empresas/${id}/restaurar/`);