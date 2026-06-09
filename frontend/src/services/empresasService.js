// src/services/empresasService.js
import apiClient from "./apiClient";

export const getEmpresas = () => {
  return apiClient.get("/empresas/");
};

export const getEmpresa = (id) => {
  return apiClient.get(`/empresas/${id}/`);
};

export const createEmpresa = (data) => {
  return apiClient.post("/empresas/", data);
};

export const updateEmpresa = (id, data) => {
  return apiClient.put(`/empresas/${id}/`, data);
};

export const deleteEmpresa = (id) => {
  return apiClient.delete(`/empresas/${id}/`);
};