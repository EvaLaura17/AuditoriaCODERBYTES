import apiClient from "./apiClient";

// PEDIDOS
export const getPedidos = () => apiClient.get("/pedidos/");
export const getPedido = (id) => apiClient.get(`/pedidos/${id}/`);

export const createPedido = (data) =>
  apiClient.post("/pedidos/", data);

// PIPELINE
export const getPipeline = () =>
  apiClient.get("/ventas/pipeline/");

// CIERRE MENSUAL
export const getCierreMensual = (mes) =>
  apiClient.get(`/ventas/cierre/?mes=${mes}`);