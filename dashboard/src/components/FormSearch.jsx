import Proptypes from "prop-types";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export const FormSearch = () => {
  const [valuesForm, setValuesForm] = useState({});

  const handleInputChange = ({ target }) => {
    setValuesForm({
      ...valuesForm,
      [target.name]: target.value,
    });
  };

  /* const getProduct = async (endpoint = "/api/v1/movies") => {
    try {
        setLoading(true)
        const response = await fetch(`http://localhost:3001${endpoint}`)
        const result = await response.json()

        setLoading(false)
        setMovies(result.data)
        setPagination(result.meta)
    } catch (error) {
        console.log(error)
    }PEACOCK
} */

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center">

      <InputGroup>
        <input
          type="text"
          name="keyword"
          className="form-control"
          onChange={handleInputChange}
          placeholder="Buscar producto..."
        />
        <button className="btn input-group-text" type="submit">
          <i className="fa fa-search"></i>{" "}
        </button>
      </InputGroup>
    </Form>
  );
};

FormSearch.propTypes = {
  getMovies: Proptypes.func,
};
