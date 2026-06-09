import { useEffect, useState } from "react";
import { getFitosanitarios } from "../../services/aduanasService";

const Fitosanitarios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFitosanitarios();
        setData(res.data.results);
      } catch (err) {
        setError("Error al cargar fitosanitarios");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-300">Cargando fitosanitarios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="aduanas-table-container">
      <h2 className="text-2xl font-bold mb-4">
        Regulaciones Fitosanitarias
      </h2>

      <div className="overflow-x-auto">
        <table className="aduanas-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>HS Code</th>
              <th>Producto</th>
              <th>Días</th>
              <th>Costo USD</th>
              <th>Activo</th>
              <th>Actualización</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.tipo_regulacion}</td>
                <td>{item.descripcion}</td>
                <td>{item.codigo_hs || "N/A"}</td>
                <td>{item.descripcion_producto || "N/A"}</td>
                <td>{item.plazo_tramite_dias}</td>
                <td>
                  {item.costo_estimado_usd
                    ? `$${item.costo_estimado_usd}`
                    : "N/A"}
                </td>
                <td>{item.activo ? "Sí" : "No"}</td>
                <td>
                  {item.fecha_actualizacion?.split("T")[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fitosanitarios;