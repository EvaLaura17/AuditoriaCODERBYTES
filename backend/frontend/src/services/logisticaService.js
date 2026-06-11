import apiClient from "./apiClient";

// ENVÍOS
export const getEnvios = () => apiClient.get("/envios/");
export const getEnvio = (id) => apiClient.get(`/envios/${id}/`);

export const createEnvio = (data) =>
  apiClient.post("/envios/", data);

export const updateEnvio = (id, data) =>
  apiClient.put(`/envios/${id}/`, data);

export const deleteEnvio = (id) =>
  apiClient.delete(`/envios/${id}/`);

// TRAZABILIDAD
export const getTrazabilidad = (idEnvio) =>
  apiClient.get(`/envios/${idEnvio}/trazabilidad/`);