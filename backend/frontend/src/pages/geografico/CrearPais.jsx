import PaisForm from "./PaisForm";

import {
  createPais
} from "../../services/geograficoService";

const CrearPais = () => {

  const handleCreate = async (data) => {

    try {

      await createPais(data);

      alert("País creado correctamente");

    } catch (error) {

      console.error(error);

      alert("Error creando país");
    }
  };

  return (
    <div>

      <h2 className="subtitulo">
        Crear País
      </h2>

      <PaisForm
        onSubmit={handleCreate}
        buttonText="Crear País"
      />

    </div>
  );
};

export default CrearPais;