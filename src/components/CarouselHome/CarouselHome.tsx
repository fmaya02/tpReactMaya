
import Carousel from "react-bootstrap/Carousel";


const CarouselHome = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                className = 'd-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/images/tiendaropa.avif" alt="slide 1"
                />
                <Carousel.Caption>
                    <h3>Variedad de ropa</h3>
                    <p>Encontrarás lo que buscas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className = 'd-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/images/lugar-trabajo-negocios-accesorios-masculinos-modernos-portatil-sobre-fondo-negro_155003-3944.avif" alt="slide 1"
                />
                <Carousel.Caption>
                    <h3>Accesorios para todos</h3>
                    <p>Las combinaciones son infinitas</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className = 'd-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="src/assets/images/estantes-vidrio-zapatos-hombre-tienda-centran-zapatos_88135-13250.avif" alt="slide 1"
                />
                <Carousel.Caption>
                    <h3>Zapatos increíbles</h3>
                    <p>
                        Dejarás tu huella
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default CarouselHome