
import Carousel from "react-bootstrap/Carousel";


const CarouselHome = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                className = 'd-block w-100'
                style={{maxHeight:"500px", objectFit:'cover'}}
                src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699228800&semt=ais" alt="slide 1"
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
                src="https://img.freepik.com/fotos-premium/vista-superior-disenador-grafico-creativo-arte-mesa-espacio-copia-centro-fines-diseno-grafico_146508-704.jpg?size=626&ext=jpg" alt="slide 1"
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
                src="https://img.freepik.com/fotos-premium/estantes-vidrio-zapatos-hombre-tienda-centran-zapatos_88135-13250.jpg" alt="slide 1"
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