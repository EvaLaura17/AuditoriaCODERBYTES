import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  getPaises,
  deletePais,
} from "../../services/geograficoService";

const ListaPaises = () => {

  const [paises, setPaises] = useState([]);

  const navigate = useNavigate();

  const cargarPaises = () => {

    getPaises()
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

  const handleDelete = async (id) => {

    const confirmar = window.confirm(
      "¿Desactivar país?"
    );

    if (!confirmar) return;

    try {

      await deletePais(id);

      cargarPaises();

    } catch (error) {

      console.error(error);

      alert("Error eliminando");
    }
  };

  return (
    <div>

      <h2 className="subtitulo">
        Países Registrados
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
              <b>ISO3:</b> {p.codigo_iso3}
            </p>

            <p>
              <b>Región:</b> {p.region}
            </p>

            <p>
              <b>Moneda:</b> {p.moneda_nombre}
            </p>

            <p>
              <b>Idioma:</b> {p.idioma_oficial}
            </p>

            <div className="acciones">

              <button
                className="btn-editar"
                onClick={() =>
                  navigate(`/geografico/editar/${p.id}`)
                }
              >
                Editar
              </button>

              <button
                className="btn-eliminar"
                onClick={() =>
                  handleDelete(p.id)
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

export default ListaPaises;