import apiClient from "./apiClient";

export const getAranceles = () =>
  apiClient.get("/aduanera/aranceles/");

export const getRestricciones = () =>
  apiClient.get("/aduanera/restricciones/");

export const getEtiquetados = () =>
  apiClient.get("/aduanera/etiquetados/");

export const getFitosanitarios = () =>
  apiClient.get("/aduanera/fitosanitarios/");