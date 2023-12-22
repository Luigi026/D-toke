import {motion} from 'framer-motion'

export const LastProductInDb = () => {
  return (
    <motion.div className="col-lg-6 mb-4" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Ultimo menú agregado
        </h5>
      </div>
      <div className="card-body">
        <div className="text-center ">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{ width: "40rem" }}
            src="/images/IMG-20220630-WA0009.jpg"
            alt=" Star Wars - Mandalorian "
          />
        </div>
        <div className="home__main__section__cards-text">
        <h5 className="home__main__section__cards-description">
            Nike
         </h5>
        <h5 className="home__main__section__cards-description">
           Jordan
        </h5>
        <p className="home__main__section__cards-price">
            $62000
        </p>
    </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores, consequatur explicabo officia inventore libero
          veritatis iure voluptate reiciendis a magnam, vitae, aperiam
          voluptatum non corporis quae dolorem culpa citationem ratione
          aperiam voluptatum non corporis ratione aperiam voluptatum quae
          dolorem culpa ratione aperiam voluptatum?
        </p>
        <a
          className="btn btn-danger"
          target="_blank"
          rel="nofollow"
          href="/"
        >
          View product detail
        </a>
      </div>
    </div>
  </motion.div>
  )
}
