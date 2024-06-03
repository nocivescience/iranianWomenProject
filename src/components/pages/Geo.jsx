import React from "react";
import "./Geo.css";

export const Geo = () => {
  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "20%",
        marginRight: "20%",
        color: "black",
        backgroundColor: "#ffffff9b",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 className="display-1">Situación Geopolítica de Irán</h1>

      <section>
        <h2 className="h2">Posición Estratégica</h2>
        <p>
          Irán está ubicado en una posición geográfica estratégica en el Medio Oriente, limitando con varios países importantes y el Golfo Pérsico. Esta ubicación le otorga una influencia significativa en la región, particularmente en términos de comercio y seguridad.
        </p>
      </section>

      <section>
        <h2 className="h2">Relaciones Internacionales</h2>
        <p>
          <strong>Relaciones con Occidente:</strong> Las relaciones de Irán con los países occidentales, especialmente Estados Unidos, han sido históricamente tensas. Las principales preocupaciones incluyen el programa nuclear iraní y su apoyo a grupos considerados terroristas por Occidente.
        </p>
        <p>
          <strong>Relaciones con Vecinos Regionales:</strong> Irán mantiene relaciones complejas con sus vecinos. Tiene una rivalidad significativa con Arabia Saudita, pero relaciones más cercanas con Siria, Iraq y Líbano a través de su apoyo a grupos chiítas.
        </p>
      </section>

      <section>
        <h2 className="h2">Programa Nuclear</h2>
        <p>
          El programa nuclear de Irán ha sido una fuente de tensión internacional. Aunque Irán sostiene que su programa tiene fines pacíficos, muchos países, incluidos Estados Unidos e Israel, sospechan que busca desarrollar armas nucleares. El acuerdo nuclear de 2015 (JCPOA) fue un intento de limitar este programa a cambio del levantamiento de sanciones.
        </p>
      </section>

      <section>
        <h2 className="h2">Sanciones Económicas</h2>
        <p>
          Irán ha enfrentado sanciones económicas internacionales debido a su programa nuclear y su apoyo a grupos militantes. Estas sanciones han afectado gravemente la economía iraní, provocando inflación y dificultades económicas para la población.
        </p>
      </section>

      <section>
        <h2 className="h2">Influencia Regional</h2>
        <p>
          <strong>Política de Expansión:</strong> Irán busca expandir su influencia en la región mediante el apoyo a grupos aliados en países como Iraq, Siria, Líbano y Yemen. Esta política ha generado tensiones con otros países de la región, especialmente con Arabia Saudita e Israel.
        </p>
        <p>
          <strong>Guerra en Siria:</strong> Irán ha sido un aliado clave del gobierno sirio durante la guerra civil, proporcionando apoyo militar y financiero significativo, lo que ha consolidado su influencia en el país.
        </p>
      </section>

      <section>
        <h2 className="h2">Seguridad Interna y Defensa</h2>
        <p>
          <strong>Fuerzas Armadas:</strong> Irán posee unas fuerzas armadas significativas, incluyendo el Ejército y la Guardia Revolucionaria. También ha desarrollado capacidades militares avanzadas, como misiles balísticos y tecnología de drones.
        </p>
        <p>
          <strong>Ciberseguridad:</strong> Irán ha invertido en capacidades de ciberseguridad y ha sido acusado de llevar a cabo ataques cibernéticos contra infraestructuras de otros países.
        </p>
      </section>

      <section>
        <h2 className="h2">Economía y Recursos</h2>
        <p>
          <strong>Petróleo y Gas:</strong> Irán es uno de los mayores productores de petróleo y gas del mundo, lo que le proporciona una fuente importante de ingresos. Sin embargo, las sanciones han limitado su capacidad para exportar estos recursos.
        </p>
        <p>
          <strong>Desafíos Económicos:</strong> La economía iraní enfrenta múltiples desafíos, incluyendo sanciones, corrupción y mala gestión. A pesar de su riqueza en recursos naturales, la economía ha estado en recesión y la población sufre de alta inflación y desempleo.
        </p>
      </section>

      <section>
        <h2 className="h2">Derechos Humanos</h2>
        <p>
          Irán ha sido criticado internacionalmente por su historial de derechos humanos. Las restricciones a la libertad de expresión, la persecución de minorías y la represión de disidentes son algunas de las principales preocupaciones.
        </p>
        <p>
          <strong>Activismo:</strong> A pesar de la represión, existen movimientos dentro del país que luchan por mayores libertades y derechos, aunque enfrentan grandes riesgos personales.
        </p>
      </section>
    </div>
  );
};
