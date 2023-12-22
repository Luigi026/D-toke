import { Button, Form } from "react-bootstrap";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createProduct, updateProduct } from "../services/product.services";

export const FormProduct = ({
  products,
  setProducts,
  formValues,
  setFormValues,
}) => {
  const [categories, setCategories] = useState([]);
  //const [sections, setSections] = useState([]);

  const getData = async () => {
    const categories = await UseFetch("categories");
    //const sections = await UseFetch("sections");

    setCategories([...categories.data]);
    //setSections([...sections.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (
      [
        formValues.model,
        formValues.price,
        formValues.category_id,
        formValues.description,
      ].includes("")
    ) {
      alert("upsss... no envíe vacío el formulario!!!");
      return;
    }

    if (formValues.id) {
      const { data } = await updateProduct(formValues)

      const productsUpdated = products.map((product) => {
        if (product.id === data.id) {
          product = data;
        }
        return product;
      });

      setProducts([...productsUpdated]);
    } else {
      const { data } = await createProduct(formValues)
      setProducts([...products, data]);
    }

    setFormValues({
      id: null,
      model: "",
      price: "",
      category_id: "",
      description: "",
    });
  };

  return (
    <Form className="row" onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Título del producto..."
          name="model"
          onChange={handleInputChange}
          value={formValues.model}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          name="price"
          type="number"
          placeholder="Precio del producto..."
          onChange={handleInputChange}
          value={formValues.price}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Marca</Form.Label>
        <Form.Select
          className="form-control"
          name="category_id"
          onChange={handleInputChange}
        >
          <option defaultValue hidden>
            Selecciona...
          </option>
          {categories.map((category, index) =>
            category.id == formValues.category_id ? (
              <option selected key={index + category.brand} value={category.id}>
                {category.brand}
              </option>
            ) : (
              <option key={index + category.brand} value={category.id}>
                {category.brand}
              </option>
            )
          )}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="description"
          placeholder="Descripcion del producto..."
          onChange={handleInputChange}
          value={formValues.description}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <div className="d-flex justify-content-around">
          <Button variant="" style={{background:"#000", color: "#fff"}}>Cancelar</Button>
          <Button type="submit" style={{background: "#3506CD", border: 'none'}}>
            Guardar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
};
