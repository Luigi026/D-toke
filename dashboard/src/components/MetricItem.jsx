import PropTypes from 'prop-types'
import { motion } from 'framer-motion'


export const MetricItem = ({title, color, value, icon }) => {
  return (
    <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

MetricItem.propTypes = {
    title : PropTypes.string,
    color : PropTypes.string,
    icon : PropTypes.string,
    value : PropTypes.number,
}