import { useEffect, useState } from "react";
import { getRestricciones } from "../../services/aduanasService";

const Restricciones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRestricciones();
        setData(res.data.results);
      } catch (err) {
        setError("Error al cargar restricciones");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-300">Cargando restricciones...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="aduanas-table-container">

      <h2 className="text-2xl font-bold mb-4">
        Restricciones Aduaneras
      </h2>

      <div className="overflow-x-auto">

        <table className="aduanas-table">

          <thead>
            <tr>
              <th>HS Code</th>
              <th>Producto</th>
              <th>Tipo</th>
              <th>Descripción</th>
              <th>Autoridad</th>
              <th>Activo</th>
              <th>Vigencia</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.codigo_hs || "N/A"}</td>
                <td>{item.producto_descripcion}</td>
                <td>{item.tipo_restriccion}</td>
                <td>{item.descripcion_restriccion}</td>
                <td>{item.autoridad_competente}</td>
                <td>{item.activo ? "Sí" : "No"}</td>
                <td>{item.fecha_vigencia_desde}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Restricciones;