import PropTypes from 'prop-types'
import { motion } from 'framer-motion'


export const CategoriesInDb = ({ categories }) => {

  return (
    <motion.div className="col-lg-6 mb-4" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas de Calzado Deportivo
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              categories.map(({ brand }, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card text-white shadow" style={{ background: "#3506CD" }}>
                    <div className="card-body">{brand}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  );
};


CategoriesInDb.propTypes = {
  categories: PropTypes.array
}