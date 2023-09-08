const Nav = (props) => {
    return (
        <nav>
        <div classNames="holder">
            <ul>
                <li><a className="activo" href="index.html">El lugar</a></li>
                <li><a href="evento.html">eventos</a></li>
                <li><a href="servicio.html">Servicios</a></li>
                <li><a href="contacto.html">Contactos</a></li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;