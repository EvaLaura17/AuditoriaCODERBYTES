import apiClient from "./apiClient";

// ACTIVOS
export const getPaises = () =>
  apiClient.get("/geografico/?activo=true");

// INACTIVOS
export const getPaisesInactivos = () =>
  apiClient.get("/geografico/?activo=false");

// OBTENER UNO
export const getPais = (id) =>
  apiClient.get(`/geografico/${id}/`);

// CREAR
export const createPais = (data) =>
  apiClient.post("/geografico/", data);

// EDITAR
export const updatePais = (id, data) =>
  apiClient.put(`/geografico/${id}/`, data);

// ELIMINAR (LÓGICO)
export const deletePais = (id) =>
  apiClient.delete(`/geografico/${id}/`);

// RESTAURAR
export const restaurarPais = (id) =>
  apiClient.patch(`/geografico/${id}/restaurar/`);