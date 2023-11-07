import { Card, CardGroup } from "react-bootstrap"


const AboutUs = () => {
  return (
    <>
        <div className="container mt-5">
            <h3>Lo que nos caracteriza:</h3>
        </div>
        <CardGroup style={{margin:"2rem"}}>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/par-botas-palabra-palabra-parte-inferior_889227-5881.jpg?w=2000" />
                <Card.Body>
                <Card.Title>Pisamos fuerte</Card.Title>
                <Card.Text>
                    Con nosotros, nadie podrá superar tu estilo.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/maqueta-camiseta-blanca-camiseta-manga-corta_107791-2029.jpg?w=2000" />
                <Card.Body>
                <Card.Title>Bonitos y gorditos</Card.Title>
                <Card.Text>
                    Resaltarás con nuestros productos
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/diferentes-bolsos-mujer-estilo-estantes-tienda_556176-1553.jpg?w=2000" />
                <Card.Body>
                <Card.Title>La mejor calidad</Card.Title>
                <Card.Text>
                    Tenemos lo mejor para darte.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </>
  )
}

export default AboutUs