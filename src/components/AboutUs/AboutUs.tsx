import { Card, CardGroup } from "react-bootstrap"


const AboutUs = () => {
  return (
    <>
        <div className="container mt-5">
            <h3>Info de nosotros:</h3>
        </div>
        <CardGroup style={{margin:"2rem"}}>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="src/assets/images/par-botas-palabra-palabra-parte-inferior_889227-5881.jpg" />
                <Card.Body>
                <Card.Title>Pisa fuerte</Card.Title>
                <Card.Text>
                    Nadie podrá superar tu estilo.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="src/assets/images/maqueta-camiseta-blanca-camiseta-manga-corta_107791-2029.avif" />
                <Card.Body>
                <Card.Title>Formal y elegante</Card.Title>
                <Card.Text>
                    Hazte notar.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{margin:"1rem"}}>
                <Card.Img variant="top" src="src/assets/images/diferentes-bolsos-mujer-estilo-estantes-tienda_556176-1553.avif" />
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