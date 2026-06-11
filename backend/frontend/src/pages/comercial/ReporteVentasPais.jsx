import { useEffect, useState } from "react";

export default function ReporteVentasPais() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getReporteVentasPais();
      setData(res.data);
    } catch (err) {
      console.error("Error reporte", err);
    }
  };

  return (
    <div className="comercial-table-container">
      <h2 className="text-2xl font-bold mb-4">
        Ventas por País
      </h2>

      <table className="comercial-table">
        <thead>
          <tr>
            <th>País</th>
            <th>Total Vendido USD</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{Number(p.total_vendido).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}