import apiClient from "./apiClient";

export const getProductos = () =>
  apiClient.get("/productos/");

export const getProducto = (id) =>
  apiClient.get(`/productos/${id}/`);

export const createProducto = (data) =>
  apiClient.post("/productos/", data);

export const updateProducto = (id, data) =>
  apiClient.put(`/productos/${id}/`, data);

export const deleteProducto = (id) =>
  apiClient.delete(`/productos/${id}/`);