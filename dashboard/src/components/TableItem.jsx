import PropTypes from "prop-types";

export const TableItem = ({
  product: { id, model, price, category },
  handleEditForm,
  handleDeleteProduct,
}) => {
  return (
    <tr>
      <td>{model}</td>
      <td>{price}</td>
      <td> {category.brand}</td>
      <td>
        <div className="d-flex">
          <button
            className="btn btn-sm btn-outline-success mr-3"
            onClick={() => handleEditForm(id)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDeleteProduct(id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  product: PropTypes.object,
  handleEditForm: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
};
