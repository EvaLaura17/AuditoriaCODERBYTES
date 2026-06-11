import { useEffect, useState } from "react";
import { getAgentes } from "../../services/distribuidoresService";

const Agentes = () => {
  const [agentes, setAgentes] = useState([]);

  useEffect(() => {
    getAgentes()
      .then((res) => {
        const data = res.data;

        const lista = Array.isArray(data)
          ? data
          : data?.results ?? [];

        setAgentes(lista);
      })
      .catch((err) => {
        console.error("Error agentes:", err);
        setAgentes([]);
      });
  }, []);

  return (
    <div className="pagina-distribuidores">
      <h2 className="titulo">Agentes</h2>

      <div className="grid-agentes">
        {agentes.map((a) => (
          <div key={a.id} className="card-agente">
            <h3>{a.nombre_comercial}</h3>

            <p><b>Razón Social:</b> {a.razon_social}</p>
            <p><b>Ciudad:</b> {a.ciudad}</p>
            <p><b>Canal:</b> {a.canal}</p>

            <hr />

            <p><b>Contacto:</b> {a.contacto_nombre}</p>
            <p><b>Email:</b> {a.contacto_email}</p>
            <p><b>Tel:</b> {a.contacto_telefono}</p>

            <p className={a.activo ? "activo" : "inactivo"}>
              {a.activo ? "Activo" : "Inactivo"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agentes;