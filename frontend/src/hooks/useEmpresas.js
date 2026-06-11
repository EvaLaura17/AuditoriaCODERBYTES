import { useEffect, useState } from "react";
import { getEmpresas } from "../services/empresasService";

export function useEmpresas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEmpresas()
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}