import '../styles/contacto.css'


import React from "react";
const Contacto = (props) => {
  return (
    <main className="holder">
      <div className="columna contacto">
        <h2>Complete el siguiente formulario</h2>
        <form action="" method="" class="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>

          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="columna datos">
        <h2>Otras vias de comunicacion</h2>
        <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
        <ul>
          <li>Telefono:</li>
          <li>Email:</li>
          <li>Facebook:</li>
          <li>Twitter</li>
          <li>Skype:</li>
        </ul>
      </div>

    </main >
  )
}

export default Contacto;