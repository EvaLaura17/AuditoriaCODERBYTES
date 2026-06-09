import apiClient from "./apiClient";

export const getDistribuidores = () =>
  apiClient.get("/distribuidores/");

export const getDistribuidor = (id) =>
  apiClient.get(`/distribuidores/${id}/`);

export const createDistribuidor = (data) =>
  apiClient.post("/distribuidores/", data);

export const updateDistribuidor = (id, data) =>
  apiClient.put(`/distribuidores/${id}/`, data);

export const deleteDistribuidor = (id) =>
  apiClient.delete(`/distribuidores/${id}/`);