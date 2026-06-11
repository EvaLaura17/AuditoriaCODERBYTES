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
        setData(res.data.results);
      } catch (err) {
        setError("Error al cargar etiquetados");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-300">Cargando etiquetados...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="aduanas-table-container">
      <h2 className="text-2xl font-bold mb-4">
        Normativas de Etiquetado
      </h2>

      <div className="overflow-x-auto">
        <table className="aduanas-table">
          <thead>
            <tr>
              <th>Idiomas</th>
              <th>Ingredientes</th>
              <th>Lote</th>
              <th>Vencimiento</th>
              <th>Tabla Nutricional</th>
              <th>Registro Sanitario</th>
              <th>Código Barras</th>
              <th>Norma</th>
              <th>Activo</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.idiomas_requeridos?.join(", ")}</td>

                <td>
                  {item.campos_obligatorios?.ingredientes ? "Sí" : "No"}
                </td>

                <td>
                  {item.campos_obligatorios?.lote ? "Sí" : "No"}
                </td>

                <td>
                  {item.requiere_fecha_vencimiento ? "Sí" : "No"}
                </td>

                <td>
                  {item.requiere_tabla_nutricional ? "Sí" : "No"}
                </td>

                <td>
                  {item.requiere_registro_sanitario ? "Sí" : "No"}
                </td>

                <td>
                  {item.requiere_codigo_barras ? "Sí" : "No"}
                </td>

                <td>{item.norma_vigente}</td>

                <td>{item.activo ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Etiquetados;