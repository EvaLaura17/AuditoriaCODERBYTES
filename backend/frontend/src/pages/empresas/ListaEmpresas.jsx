import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getEmpresas,
  deleteEmpresa,
} from "../../services/empresasService";

const ListaEmpresas = () => {

  const [empresas, setEmpresas] = useState([]);

  const navigate = useNavigate();

  const cargarEmpresas = () => {
    getEmpresas()
      .then((res) => {
        const data = res.data;
        const lista = data?.results ?? data ?? [];

        setEmpresas(Array.isArray(lista) ? lista : []);
      })
      .catch((err) => {
        console.error(err);
        setEmpresas([]);
      });
  };

  useEffect(() => {
    cargarEmpresas();
  }, []);

  const handleDelete = async (id) => {

    const confirmacion = window.confirm(
      "¿Eliminar empresa?"
    );

    if (!confirmacion) return;

    try {

      await deleteEmpresa(id);

      cargarEmpresas();

    } catch (error) {
      console.error(error);
      alert("Error eliminando");
    }
  };

  return (
    <div>

      <h2 className="subtitulo">
        Empresas Registradas
      </h2>

      <div className="grid-empresas">

        {empresas.map((e) => (

          <div key={e.id} className="card-empresa">

            <h3>{e.razon_social}</h3>

            <p>
              <b>RUC/NIT:</b> {e.ruc_nit}
            </p>

            <p>
              <b>País:</b> {e.pais_origen}
            </p>

            <p>
              <b>Email:</b> {e.email}
            </p>

            <div className="acciones">

              <button
                className="btn-editar"
                onClick={() =>
                  navigate(`/empresas/editar/${e.id}`)
                }
              >
                Editar
              </button>

              <button
                className="btn-eliminar"
                onClick={() =>
                  handleDelete(e.id)
                }
              >
                Eliminar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ListaEmpresas;