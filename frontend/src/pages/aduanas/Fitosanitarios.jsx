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
        setData(res.data);
      } catch (err) {
        setError("Error al cargar fitosanitarios");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-white">Cargando fitosanitarios...</p>;

  if (error)
    return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Regulaciones Fitosanitarias
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-600 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">Tipo</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">HS Code</th>
              <th className="p-2">Producto</th>
              <th className="p-2">Días trámite</th>
              <th className="p-2">Costo USD</th>
              <th className="p-2">Activo</th>
              <th className="p-2">Actualización</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-gray-900"
              >
                <td className="p-2">
                  {item.tipo_regulacion}
                </td>

                <td className="p-2">
                  {item.descripcion}
                </td>

                <td className="p-2">
                  {item.codigo_hs || "N/A"}
                </td>

                <td className="p-2">
                  {item.descripcion_producto || "N/A"}
                </td>

                <td className="p-2">
                  {item.plazo_tramite_dias} días
                </td>

                <td className="p-2">
                  {item.costo_estimado_usd
                    ? `$${item.costo_estimado_usd}`
                    : "N/A"}
                </td>

                <td className="p-2">
                  {item.activo ? "Sí" : "No"}
                </td>

                <td className="p-2">
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