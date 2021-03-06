import '../Styles/Components/Pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <h2>Bienvenidos</h2>
            <p>San Miguel del Monte, llamado habitualmente Monte, es una ciudad que esta situada en el interior de la
                provincia de Buenos Aires, Argentina, sobre la margen izquierda del río Salado del sur, a 107 km de la
                Ciudad Autónoma de Buenos Aires. Creada sobre el núcleo de la Guardia del Monte, es una de las ciudades
                más antiguas de la provincia de Buenos Aires.</p>
            <div className="homeimg">
                <img src="images/inicio/ciudad2.jpg" alt="ciudad" />
            </div>
        </main>
    );
}

export default HomePage;