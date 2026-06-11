import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import EmpresaForm from "./EmpresaForm";

import {
  getEmpresa,
  updateEmpresa,
} from "../../services/empresasService";

const EditarEmpresa = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    getEmpresa(id)
      .then((res) => setEmpresa(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = async (data) => {
    try {

      await updateEmpresa(id, data);

      alert("Empresa actualizada");

      navigate("/empresas/lista");

    } catch (error) {
      console.error(error);
      alert("Error actualizando");
    }
  };

  if (!empresa) {
    return <p className="text-white">Cargando...</p>;
  }

  return (
    <div className="crear-empresa-container">

      <h2 className="subtitulo">
        Editar Empresa
      </h2>

      <EmpresaForm
        initialData={empresa}
        onSubmit={handleUpdate}
        buttonText="Actualizar Empresa"
      />

    </div>
  );
};

export default EditarEmpresa;