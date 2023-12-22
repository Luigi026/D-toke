import { Row, Col, Card, CardTitle, Table } from "react-bootstrap";
import { FormSearch } from "../components/FormSearch";
import { FormProduct } from "../components/FormProduct";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
//import { deleteProduct } from "../services/product.services";
import ReactPaginate from 'react-paginate'
import { showMessageSuccess } from "../components/Toast";
import Swal from "sweetalert2";

export const ListProductsPage = () => {
  const [products, setProducts] = useState([]);

  const [formValues, setFormValues] = useState({
    id: null,
    model: "",
    price: "",
    category_id: "",
    description: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const handleEditForm = (idProduct) => {

    const { id, model, price, category_id, description } = products.find(product => product.id === idProduct)

    setFormValues({
      id,
      model,
      price,
      category_id,
      description,
    })
  }

  const handleDeleteProduct = async (id, model) => {
    /*  const {msg} = await deleteProduct(id);
     console.log(msg);
     const productsFiltered = products.filter(product => product.id !== id);
 
     setProducts([...productsFiltered]) */
    Swal.fire({
      title: `¿Esta seguro que desea eliminar el producto "${model}"?`,
      showDenyButton: true,
      confirmButtonText: "Si, eliminalo",
      confirmButtonColor: "red",
      denyButtonText: `Cancelar`,
      denyButtonColor: "grey"
    }).then(async (result) => {

      if (result.isConfirmed) {
        try {
          const response = await fetch(`${import.meta.env.VITE_APP_API_URL}products/${id}`,
            {
              method: "DELETE",
            })
          const result = await response.json()

          if (result.ok) {
            showMessageSuccess(result.message)
            setProducts(products.filter(product => product.id !== id))
          }
        } catch (error) {
          console.log(error)
        }
      }
    });
  }

  const getData = async () => {
    const { data } = await UseFetch("products");

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  /* paginator settings */

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };


  return (
    <Row>
      <Col sm={12} lg={4}>
        <Card className="mb-3">
          <Card.Header>
            <CardTitle>{"Agregar"} producto</CardTitle>
          </Card.Header>
          <Card.Body>
            <FormProduct products={products} setProducts={setProducts} formValues={formValues} setFormValues={setFormValues} />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className="shadow mb-5">
          <Card.Header className="d-flex justify-content-between">
            <FormSearch />
            <ReactPaginate
              pageCount={pageCount}
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              marginPagesDisplayed={2}
              containerClassName="pagination justify-content-center cursorPage"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              activeClassName="active"

            />
          </Card.Header>
          <Card.Body>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Precio</th>
                  <th>Marca</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => (
                  <TableItem key={product.model + index} product={product} handleEditForm={handleEditForm} handleDeleteProduct={handleDeleteProduct} />
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
