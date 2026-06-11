import apiClient from "./apiClient";

// PREDICCIONES
export const getPredicciones = (payload) =>
  apiClient.post("/ia/predicciones/", payload);

// SUGERENCIAS
export const getSugerencias = (contexto) =>
  apiClient.post("/ia/sugerencias/", contexto);

// ANALISIS CASO
export const analizarCaso = (caso) =>
  apiClient.post("/ia/analizar-caso/", caso);