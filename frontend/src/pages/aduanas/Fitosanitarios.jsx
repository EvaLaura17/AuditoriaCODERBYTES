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
<<<<<<< HEAD
        setData(res.data.results);
=======
        setData(res.data);
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
      } catch (err) {
        setError("Error al cargar fitosanitarios");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

<<<<<<< HEAD
  if (loading) return <p className="text-gray-300">Cargando fitosanitarios...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="aduanas-table-container">
=======
  if (loading)
    return <p className="text-white">Cargando fitosanitarios...</p>;

  if (error)
    return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 text-white">
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
      <h2 className="text-2xl font-bold mb-4">
        Regulaciones Fitosanitarias
      </h2>

      <div className="overflow-x-auto">
<<<<<<< HEAD
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
=======
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
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
<<<<<<< HEAD
              <tr key={item.id}>
                <td>{item.tipo_regulacion}</td>
                <td>{item.descripcion}</td>
                <td>{item.codigo_hs || "N/A"}</td>
                <td>{item.descripcion_producto || "N/A"}</td>
                <td>{item.plazo_tramite_dias}</td>
                <td>
=======
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
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
                  {item.costo_estimado_usd
                    ? `$${item.costo_estimado_usd}`
                    : "N/A"}
                </td>
<<<<<<< HEAD
                <td>{item.activo ? "Sí" : "No"}</td>
                <td>
=======

                <td className="p-2">
                  {item.activo ? "Sí" : "No"}
                </td>

                <td className="p-2">
>>>>>>> 374f9fecf0a3daa299f5404e27f100a3dfa26c1d
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