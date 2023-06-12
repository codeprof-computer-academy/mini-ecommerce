import { useContext } from "react"
import "./product.css"
import { cartContext } from "../Context"

export default function Product({product}){

    const {cart, setCart} =  useContext(cartContext)
 
    return(
        <div className="product-card">
               <img src={product.image} alt={product.name}/>

               <div className="description">

                   <h3>{product.name}</h3>
                   <p>${product.price}</p>
                 
               </div>

               <div className="button-box">
                  {
                    cart.includes(product) ?  
                   <button onClick={()=>{
                       setCart(cart.filter((item)=>{
                            return item.id !== product.id
                       }))
                   }}>Remove from Cart</button> : <button onClick={()=>{
                        setCart([...cart, product])
                   }}>Add to Cart</button>
                     
                  }
               </div>
               

               
               

        </div>
    )
}