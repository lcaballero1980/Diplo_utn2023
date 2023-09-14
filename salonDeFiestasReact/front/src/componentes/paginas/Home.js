import React from "react";
import '../styles/home.css'


const Home = (props) => {
    return (
        <main className="holder">

            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />
            </div>

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit autem voluptas, suscipit excepturi, totam dolore necessitatibus quas animi harum voluptatibus expedita maxime deserunt quo perferendis nam distinctio veritatis recusandae.</p>
                </div>

                <div class="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor"> Juan Gomez - zapatos.com</span>
                    </div>
                </div>

            </div>
        </main>

    );
}

export default Home;