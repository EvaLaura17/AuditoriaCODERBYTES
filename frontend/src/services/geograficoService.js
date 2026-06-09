import apiClient from "./apiClient";

// ZONAS
export const getZonas = () => apiClient.get("/zonas/");
export const getZona = (id) => apiClient.get(`/zonas/${id}/`);

export const createZona = (data) =>
  apiClient.post("/zonas/", data);

// MAPA / UBICACIONES
export const getUbicaciones = () =>
  apiClient.get("/ubicaciones/");

export const getMapaDistribuidores = () =>
  apiClient.get("/mapa/distribuidores/");