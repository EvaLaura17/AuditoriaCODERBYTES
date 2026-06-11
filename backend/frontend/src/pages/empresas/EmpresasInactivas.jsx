import { useEffect, useState } from "react";

import {
  getEmpresasInactivas,
  restaurarEmpresa,
} from "../../services/empresasService";

const EmpresasInactivas = () => {

  const [empresas, setEmpresas] = useState([]);

  const cargarEmpresas = () => {

    getEmpresasInactivas()
      .then((res) => {

        const data = res.data;

        const lista = data?.results ?? data ?? [];

        setEmpresas(
          Array.isArray(lista) ? lista : []
        );

      })
      .catch((err) => {
        console.error(err);
        setEmpresas([]);
      });
  };

  useEffect(() => {
    cargarEmpresas();
  }, []);

  const handleRestaurar = async (id) => {

    try {

      await restaurarEmpresa(id);

      cargarEmpresas();

    } catch (error) {
      console.error(error);
      alert("Error restaurando");
    }
  };

  return (
    <div>

      <h2 className="subtitulo">
        Empresas Inactivas
      </h2>

      <div className="grid-empresas">

        {empresas.map((e) => (

          <div
            key={e.id}
            className="card-empresa"
          >

            <h3>{e.razon_social}</h3>

            <p>
              <b>RUC/NIT:</b> {e.ruc_nit}
            </p>

            <p>
              <b>Email:</b> {e.email}
            </p>

            <p className="inactivo">
              Inactiva
            </p>

            <div className="acciones">

              <button
                className="btn-restaurar"
                onClick={() =>
                  handleRestaurar(e.id)
                }
              >
                Restaurar
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default EmpresasInactivas;