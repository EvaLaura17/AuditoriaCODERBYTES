import { useEffect, useState } from "react";
import { getVentas } from "../../services/comercialService";

export default function Ventas() {
  const [ventas, setVentas] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNumber) => {
    try {
      const res = await getVentas(pageNumber);
      setVentas(res.data.results);
      setCount(res.data.count);
    } catch (err) {
      console.error("Error cargando ventas", err);
    }
  };

  return (
    <div className="p-4 text-white">

      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-4">
        Ventas Históricas
      </h2>

      {/* TABLE WRAPPER */}
      <div className="comercial-table-container">

        <table className="comercial-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Distribuidor</th>
              <th>Unidades</th>
              <th>Total USD</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {ventas.map((v) => (
              <tr key={v.id}>
                <td>{v.producto_nombre}</td>
                <td>{v.distribuidor_nombre}</td>
                <td>{v.cantidad_unidades}</td>
                <td>{v.total_venta_usd}</td>
                <td>{v.fecha_venta}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* PAGINACIÓN */}
      <div className="comercial-pagination">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="comercial-btn"
        >
          Anterior
        </button>

        <span className="comercial-page-info">
          Página {page}
        </span>

        <button
          disabled={ventas.length === 0}
          onClick={() => setPage(page + 1)}
          className="comercial-btn"
        >
          Siguiente
        </button>

      </div>

    </div>
  );
}