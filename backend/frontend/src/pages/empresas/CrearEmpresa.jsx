import EmpresaForm from "./EmpresaForm";
import { createEmpresa } from "../../services/empresasService";

const CrearEmpresa = () => {

  const handleCreate = async (data) => {
    try {
      await createEmpresa(data);

      alert("Empresa creada correctamente");

    } catch (error) {
      console.error(error);
      alert("Error al crear empresa");
    }
  };

  return (
    <div className="crear-empresa-container">
      <h2 className="subtitulo">Crear Empresa</h2>

      <EmpresaForm
        onSubmit={handleCreate}
        buttonText="Crear Empresa"
      />
    </div>
  );
};

export default CrearEmpresa;