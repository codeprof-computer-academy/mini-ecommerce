import faker from "faker"
import Product from "./Product"
import "./products.css"

export default function Products(){

    faker.seed(100)
     
    // generating fake products using faker library
    const products = [...Array(50)].map(()=>{
           return{
                 id:faker.datatype.uuid(),
                 name:faker.commerce.productName(),
                 price:faker.commerce.price(),
                 image:faker.random.image()
           }
       })
    


    return(
        <div className="products-container">
          
        
                   {
                      products.map((product)=>{
                            return <Product key={product.id} product ={product} />
                      })
                   }
        
        </div>
    )
}