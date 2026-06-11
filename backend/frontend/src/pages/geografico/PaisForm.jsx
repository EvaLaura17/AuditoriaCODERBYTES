import { useState } from "react";

const initialState = {
  codigo_iso2: "",
  codigo_iso3: "",
  nombre: "",
  nombre_en: "",
  region: "",
  moneda_codigo: "",
  moneda_nombre: "",
  idioma_oficial: "",
  zona_horaria: "",
  acuerdo_comercial: "",
  activo: true,
};

const PaisForm = ({
  initialData = initialState,
  onSubmit,
  buttonText = "Guardar",
}) => {

  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="pais-form" onSubmit={handleSubmit}>

      <label>Código ISO2</label>
      <input
        type="text"
        name="codigo_iso2"
        placeholder="Código ISO2"
        value={form.codigo_iso2}
        onChange={handleChange}
      />

      <label>Código ISO3</label>
      <input
        type="text"
        name="codigo_iso3"
        placeholder="Código ISO3"
        value={form.codigo_iso3}
        onChange={handleChange}
      />

      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />

      <label>Nombre Inglés</label>
      <input
        type="text"
        name="nombre_en"
        placeholder="Nombre Inglés"
        value={form.nombre_en}
        onChange={handleChange}
      />

      <label>Región</label>
      <input
        type="text"
        name="region"
        placeholder="Región"
        value={form.region}
        onChange={handleChange}
      />

      <label>Código Moneda</label>
      <input
        type="text"
        name="moneda_codigo"
        placeholder="Código Moneda"
        value={form.moneda_codigo}
        onChange={handleChange}
      />

      <label>Nombre Moneda</label>
      <input
        type="text"
        name="moneda_nombre"
        placeholder="Nombre Moneda"
        value={form.moneda_nombre}
        onChange={handleChange}
      />

      <label>Idioma Oficial</label>
      <input
        type="text"
        name="idioma_oficial"
        placeholder="Idioma Oficial"
        value={form.idioma_oficial}
        onChange={handleChange}
      />

      <label>Zona Horaria</label>
      <input
        type="text"
        name="zona_horaria"
        placeholder="Zona Horaria"
        value={form.zona_horaria}
        onChange={handleChange}
      />

      <label>Acuerdo Comercial</label>
      <input
        type="text"
        name="acuerdo_comercial"
        placeholder="Acuerdo Comercial"
        value={form.acuerdo_comercial}
        onChange={handleChange}
      />

      <button type="submit" className="btn-guardar">
        {buttonText}
      </button>

    </form>
  );
};

export default PaisForm;