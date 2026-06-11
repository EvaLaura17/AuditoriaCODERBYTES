import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PaisForm from "./PaisForm";

import {
  getPais,
  updatePais,
} from "../../services/geograficoService";

const EditarPais = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [pais, setPais] = useState(null);

  useEffect(() => {

    getPais(id)
      .then((res) => setPais(res.data))
      .catch((err) => console.error(err));

  }, [id]);

  const handleUpdate = async (data) => {

    try {

      await updatePais(id, data);

      alert("País actualizado");

      navigate("/geografico/lista");

    } catch (error) {

      console.error(error);

      alert("Error actualizando");
    }
  };

  if (!pais) {
    return <p className="text-white">Cargando...</p>;
  }

  return (
    <div>

      <h2 className="subtitulo">
        Editar País
      </h2>

      <PaisForm
        initialData={pais}
        onSubmit={handleUpdate}
        buttonText="Actualizar País"
      />

    </div>
  );
};

export default EditarPais;