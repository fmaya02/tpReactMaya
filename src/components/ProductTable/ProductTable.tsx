import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";


const ProductTable = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    //Variable que actualizará los datos de la tabla luego de que se realice una operación CRUD
    const [refreshData, setRefreshData] = useState(false);

    //Efecto secundario que acompaña a cada nueva renderización del componente
    //o cuando se realiza una operación y se quiere reflejar el cambio en los datos
    useEffect( () => {
        //Obtener productos usando el ProductService
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, [refreshData]);

    //Se inicializa un producto por defecto para evitar el undefined a la hora de crear un nuevo producto
    const initializableNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: ""
        };
    };

    const [product, setProduct] = useState<Product>(initializableNewProduct);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState('');

    //Modal
    const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    };

    //Log para mostrar los datos en un formato más legible
    console.log(JSON.stringify(products, null, 2));

  return (
    <>
        <Button onClick={() => handleClick("Nuevo Producto", initializableNewProduct(), ModalType.CREATE)}> 
            Nuevo Producto 
        </Button>
        {isLoading ? <Loader/> : (
            <Table hover>
                <thead>
                    <tr>
                        <th> Titulo </th>
                        <th> Precio </th>
                        <th> Descripcion </th>
                        <th> Categoria </th>
                        <th> Imagen </th>
                        <th> Editar </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.title} style={{width: '50px'}}/></td>
                            <td> <EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/> </td>
                            <td> <DeleteButton onClick={() => handleClick("Eliminar producto", product, ModalType.DELETE)}/> </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        )}

        {showModal && (
            <ProductModal
            show={showModal}
            onHide={() => setShowModal(false)}
            title={title}
            modalType={modalType}
            prod={product}
            refreshData={setRefreshData}
            />
        )}
    </>
  )
}

export default ProductTable