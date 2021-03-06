import '../Styles/Components/Pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h3>Dejanos tu consulta</h3>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea id="comentario"></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna right">
                <h3>Contactos</h3>
                <ul>
                    <li>Telefono: <a href="tel:2271406600">(2271) 406-600</a></li>
                    <li>Email:<a href="municipalidad_monte@outlook.com.ar"
                        target="_blank">municipalidad_monte@outlook.com.ar</a></li>
                </ul>
                <p>Tambien te podes comunicar con nosotros a traves de nuestras redes</p>
                <ul>
                    <li><a href="www.monte.gov.ar">Sitio Oficial</a></li>
                    <li><a href="https://www.facebook.com/municipalidadmonte" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/municipalidadmonte/" target="_blank">instagram</a></li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;