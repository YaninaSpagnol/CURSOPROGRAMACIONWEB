import React from 'react';

const GaleriaPage = ( props) => {
    return(
        <main>
        <h2>Postales</h2>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/galeria/laguna/laguna1.jpg" class="d-block w-100" alt="laguna1"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/laguna/laguna2.jpg" class="d-block w-100" alt="laguna2"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/laguna/laguna3.jpg" class="d-block w-100" alt="laguna3"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/laguna/laguna4.jpg" class="d-block w-100" alt="laguna4"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img1.jpg" class="d-block w-100" alt="img1"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img2.jpg" class="d-block w-100" alt="img2"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img3.jpg" class="d-block w-100" alt="img3"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img4.jpg" class="d-block w-100" alt="img4"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img5.jpg" class="d-block w-100" alt="img5"/>
                </div>
                <div class="carousel-item">
                    <img src="images/galeria/monte/img6.jpg" class="d-block w-100" alt="img6"/>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </main>
    );
}
export default GaleriaPage;