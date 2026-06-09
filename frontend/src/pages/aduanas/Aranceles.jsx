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
        setAranceles(res.data);
      } catch (err) {
        setError("Error al cargar aranceles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAranceles();
  }, []);

  if (loading) return <p className="text-white">Cargando aranceles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">
        Aranceles
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-600 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">HS Code</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Ad Valorem %</th>
              <th className="p-2">IVA %</th>
              <th className="p-2">Activo</th>
              <th className="p-2">Vigencia</th>
            </tr>
          </thead>

          <tbody>
            {aranceles.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-gray-900"
              >
                <td className="p-2">{item.codigo_hs}</td>

                <td className="p-2">
                  {item.descripcion_partida}
                </td>

                <td className="p-2">
                  {item.arancel_ad_valorem}%
                </td>

                <td className="p-2">
                  {item.iva_importacion}%
                </td>

                <td className="p-2">
                  {item.activo ? "Sí" : "No"}
                </td>

                <td className="p-2">
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