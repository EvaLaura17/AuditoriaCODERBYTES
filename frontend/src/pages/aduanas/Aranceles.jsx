import { useEffect, useState } from "react";
import { getAranceles } from "../../services/aduanasService";

const Aranceles = () => {
  const [aranceles, setAranceles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAranceles = async () => {
      try {
        const res = await getAranceles();
        setAranceles(res.data.results);
      } catch (err) {
        setError("Error al cargar aranceles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAranceles();
  }, []);

  if (loading) return <p className="text-gray-300">Cargando aranceles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="aduanas-table-container">

      <h2 className="text-2xl font-bold mb-4">
        Aranceles
      </h2>

      <div className="overflow-x-auto">

        <table className="aduanas-table">

          <thead>
            <tr>
              <th>HS Code</th>
              <th>Descripción</th>
              <th>Ad Valorem %</th>
              <th>IVA %</th>
              <th>Activo</th>
              <th>Vigencia</th>
            </tr>
          </thead>

          <tbody>
            {aranceles.map((item) => (
              <tr key={item.id}>
                <td>{item.codigo_hs}</td>
                <td>{item.descripcion_partida}</td>
                <td>{item.arancel_ad_valorem}%</td>
                <td>{item.iva_importacion}%</td>
                <td>
                  {item.activo ? "Sí" : "No"}
                </td>
                <td>
                  {item.fecha_vigencia_desde}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Aranceles;