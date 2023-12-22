const db = require('../database/models');

const getAllProducts = async (limit, offset) => {

    try {
    
        // const {count, rows} = await db.Movie.findAndCountAll({ asi lo vemos en la documentación
    
        const products = await db.Product.findAll({
            limit,
            offset,
            attributes : {
                exclude : ['createdAt','updatedAt','category_id','deletedAt']
            },
            include :[
                {
                    association : 'category',
                    attributes : ['id','brand','image'] 
                }
            ]
        });
        const count = await db.Product.count();
        // console.log('>>>>>>>>>>>>',products.price);
        return{ 
            products,
            count
            };
        
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message
        }
    }


}
const getProductById = async (id) => {
 
    try {
    
    if(!id){
    
        throw {
            status : 400,
            message : 'ID inexistente'
        
        }
           
    }
    
    
        const products = await db.Product.findByPk(id,{
            attributes : {
                exclude : ['createdAt','updatedAt','category_id','deletedAt']
            },
            include :[
                {
                    association : 'category',
                    attributes : ['id','brand','image'] 
                }
            
            ]
        });
        
        if(!products){
    
            throw {
                status : 404,
                message : 'No hay una producto con ese ID'
            
            }
               
        }
        
        return products
        
   } catch (error) {
       console.log(error);
       throw {
           status : error.status || 500,
           message : error.message || 'ERROR en el servicio'
       }
   }

}
const storeProduct = async (dataProduct) => {

    try {
    
        const newProduct = await db.Product.create(dataProduct)
       
        
        return await getProductById(newProduct.id)
    
    } catch (error) {
    
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
        
    }

}

const updateProduct = async ( id, dataProduct ) => {

    try {
        
        const {model, description, image, price, category_id} = dataProduct
        
        const product = await db.Product.findByPk(id,{
            attributes : {
                exclude : ['model','description','image','price']
            },
            include : [
                {
                    association : 'category',
                    attributes : ['id','brand','image'] 
                }
            ]
        });
        
        
        if(!product){
    
            throw {
                status : 404,
                message : 'No hay una producto con ese ID'
            
            }
               
        }
        
        product.model = model?.trim() || product.model
        product.description = description || product.description
        product.image = image || product.image
        product.price = price || product.price
        product.category_id = category_id || product.category_id
        
        await product.save();
        
        await product.reload();
        
        return product
        
    
    } catch (error) {
        console.log(error);
        throw {
            status : error.status || 500,
            message : error.message || 'ERROR en el servicio'
        }
        
    
    }

};

const deleteProduct = async (id) => {
    try {
        if (isNaN(id)) {
            throw {
                status: 404,
                message: "ID corrupto",
            };
        }

        const product = await db.Product.findByPk(id)

        if (!product) {
            throw {
                status: 404,
                message: "No hay una pelicula con ese ID",
            };
        }

        await product.destroy();

        return null;

    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || "error en el servicio",
        };
    }
}
module.exports = {

    getAllProducts,
    getProductById,
    storeProduct,
    updateProduct,
    deleteProduct
    
}