import { useEffect, useState } from "react";

import {
  getPaisesInactivos,
  restaurarPais,
} from "../../services/geograficoService";

const PaisesInactivos = () => {

  const [paises, setPaises] = useState([]);

  const cargarPaises = () => {

    getPaisesInactivos()
      .then((res) => {

        const data = res.data;

        const lista = data?.results ?? data ?? [];

        setPaises(
          Array.isArray(lista) ? lista : []
        );

      })
      .catch((err) => {
        console.error(err);
        setPaises([]);
      });
  };

  useEffect(() => {
    cargarPaises();
  }, []);

  const handleRestaurar = async (id) => {

    try {

      await restaurarPais(id);

      cargarPaises();

    } catch (error) {

      console.error(error);

      alert("Error restaurando");
    }
  };

  return (
    <div>

      <h2 className="subtitulo">
        Países Inactivos
      </h2>

      <div className="grid-paises">

        {paises.map((p) => (

          <div
            key={p.id}
            className="card-pais"
          >

            <h3>{p.nombre}</h3>

            <p>
              <b>ISO2:</b> {p.codigo_iso2}
            </p>

            <p>
              <b>Región:</b> {p.region}
            </p>

            <p className="inactivo">
              Inactivo
            </p>

            <button
              className="btn-restaurar"
              onClick={() =>
                handleRestaurar(p.id)
              }
            >
              Restaurar
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PaisesInactivos;