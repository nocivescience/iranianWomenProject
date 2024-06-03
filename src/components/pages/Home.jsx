import React from "react";
import "./Home.css";
export const Home = () => {
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
      <h1 className="display-1">La Realidad de las Mujeres en Irán</h1>

      <section>
        <h2 className="h2">Contexto Legal y Político</h2>
        <p>
          <strong>Leyes de la Sharía:</strong> Irán se rige por una
          interpretación estricta de la Sharía (ley islámica), que afecta
          profundamente los derechos de las mujeres. Las leyes iraníes exigen
          que las mujeres sigan un código de vestimenta islámico, como el uso
          del hijab en público.
        </p>
        <p>
          <strong>Derechos Civiles y Políticos:</strong> Las mujeres iraníes
          tienen derecho a votar y pueden ser candidatas para algunos cargos
          públicos. Sin embargo, su participación en la política está limitada,
          y pocos cargos de alta jerarquía son ocupados por mujeres.
        </p>
        <p>
          <strong>Código Penal y Familiar:</strong> Las leyes familiares en Irán
          otorgan más derechos a los hombres en temas como el divorcio, la
          custodia de los hijos y la herencia. El testimonio de una mujer en la
          corte tiene menos peso que el de un hombre.
        </p>
      </section>

      <section>
        <h2 className="h2">Educación y Trabajo</h2>
        <p>
          <strong>Acceso a la Educación:</strong> A pesar de las restricciones,
          las mujeres iraníes tienen un alto nivel de educación. Muchas mujeres
          asisten a la universidad, y algunas áreas de estudio tienen una
          mayoría femenina.
        </p>
        <p>
          <strong>Participación en el Mercado Laboral:</strong> La tasa de
          participación laboral femenina es baja en comparación con la de los
          hombres. Las mujeres enfrentan discriminación en el lugar de trabajo,
          incluyendo diferencias salariales y barreras para acceder a posiciones
          de liderazgo.
        </p>
      </section>

      <section>
        <h2 className="h2">Vida Social y Cultural</h2>
        <p>
          <strong>Vestimenta y Comportamiento:</strong> Las mujeres están
          obligadas a seguir un código de vestimenta estricto en público.
          Además, hay restricciones sobre la interacción entre hombres y mujeres
          no relacionados en espacios públicos.
        </p>
        <p>
          <strong>Movilidad y Libertad Personal:</strong> Las mujeres necesitan
          el permiso de un hombre (normalmente el padre o el esposo) para
          realizar ciertos trámites legales, viajar al extranjero y, en algunos
          casos, trabajar.
        </p>
      </section>

      <section>
        <h2 className="h2">Derechos Humanos y Activismo</h2>
        <p>
          <strong>Movimientos Feministas y Activismo:</strong> A pesar de las
          restricciones, muchas mujeres en Irán son activistas y luchan por sus
          derechos. Movimientos como el de las "Chicas de la Calle de la
          Revolución" protestan contra el uso obligatorio del hijab.
        </p>
        <p>
          <strong>Represión y Riesgos:</strong> Las mujeres activistas y
          defensoras de los derechos humanos a menudo enfrentan represión,
          incluyendo arrestos, encarcelamiento y acoso por parte del gobierno.
        </p>
      </section>

      <section>
        <h2 className="h2">Avances y Desafíos</h2>
        <p>
          <strong>Progresos Recientes:</strong> Ha habido algunos progresos,
          como el aumento en la educación femenina y pequeñas reformas legales.
          Sin embargo, estos cambios suelen ser limitados y enfrentan
          resistencia.
        </p>
        <p>
          <strong>Desafíos Persistentes:</strong> Las mujeres en Irán siguen
          enfrentando numerosos desafíos, incluyendo la discriminación legal y
          social, la violencia de género, y la falta de igualdad de
          oportunidades.
        </p>
      </section>

      <section>
        <h2 className="h2">Ejemplos de Resiliencia y Esperanza</h2>
        <p>
          <strong>Liderazgo y Éxitos:</strong> A pesar de las restricciones,
          muchas mujeres iraníes han logrado éxitos significativos en campos
          como la ciencia, la literatura, el arte y el deporte.
        </p>
        <p>
          <strong>Solidaridad y Comunidad:</strong> Las mujeres en Irán han
          formado redes de apoyo y comunidades que fomentan la solidaridad y la
          lucha conjunta por sus derechos.
        </p>
      </section>
    </div>
  );
};
