import { useState } from "react";

const initialState = {
  razon_social: "",
  ruc_nit: "",
  pais_origen: "",
  direccion: "",
  telefono: "",
  email: "",
  representante: "",
  cert_iso9001: false,
  cert_bpm: false,
  cert_haccp: false,
  cert_otros: "",
  activo: true,
};

const EmpresaForm = ({
  initialData = initialState,
  onSubmit,
  buttonText = "Guardar",
}) => {

  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="empresa-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="razon_social"
        placeholder="Razón Social"
        value={form.razon_social}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="ruc_nit"
        placeholder="RUC / NIT"
        value={form.ruc_nit}
        onChange={handleChange}
      />

      <input
        type="text"
        name="pais_origen"
        placeholder="País Origen"
        value={form.pais_origen}
        onChange={handleChange}
      />

      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={form.direccion}
        onChange={handleChange}
      />

      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="representante"
        placeholder="Representante"
        value={form.representante}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cert_otros"
        placeholder="Otras Certificaciones"
        value={form.cert_otros}
        onChange={handleChange}
      />

      <div className="checks">

        <label>
          <input
            type="checkbox"
            name="cert_iso9001"
            checked={form.cert_iso9001}
            onChange={handleChange}
          />
          ISO 9001
        </label>

        <label>
          <input
            type="checkbox"
            name="cert_bpm"
            checked={form.cert_bpm}
            onChange={handleChange}
          />
          BPM
        </label>

        <label>
          <input
            type="checkbox"
            name="cert_haccp"
            checked={form.cert_haccp}
            onChange={handleChange}
          />
          HACCP
        </label>

      </div>

      <button type="submit" className="btn-guardar">
        {buttonText}
      </button>

    </form>
  );
};

export default EmpresaForm;