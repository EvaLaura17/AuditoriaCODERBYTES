import { useEffect, useState } from "react";
import { getEtiquetados } from "../../services/aduanasService";

const Etiquetados = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEtiquetados();
        setData(res.data);
      } catch (err) {
        setError("Error al cargar etiquetados");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-white">Cargando etiquetados...</p>;

  if (error)
    return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Normativas de Etiquetado
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-600 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">Idiomas</th>
              <th className="p-2">Ingredientes</th>
              <th className="p-2">Lote</th>
              <th className="p-2">Vencimiento</th>
              <th className="p-2">Tabla Nutricional</th>
              <th className="p-2">Registro Sanitario</th>
              <th className="p-2">Código Barras</th>
              <th className="p-2">Norma</th>
              <th className="p-2">Activo</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-gray-900"
              >
                {/* idiomas array */}
                <td className="p-2">
                  {item.idiomas_requeridos?.join(", ")}
                </td>

                {/* booleanos de campos_obligatorios */}
                <td className="p-2">
                  {item.campos_obligatorios?.ingredientes
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.campos_obligatorios?.lote
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.requiere_fecha_vencimiento
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.requiere_tabla_nutricional
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.requiere_registro_sanitario
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.requiere_codigo_barras
                    ? "Sí"
                    : "No"}
                </td>

                <td className="p-2">
                  {item.norma_vigente}
                </td>

                <td className="p-2">
                  {item.activo ? "Sí" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Etiquetados;