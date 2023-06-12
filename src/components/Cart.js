import { useContext, useEffect, useState} from "react"
import { cartContext } from "../Context"
import Product from "./Product"
import "./cart.css"



export default function Cart(){

    const{cart} = useContext(cartContext)
    const [totalPrice, setTotalPrice] = useState()

    useEffect(()=>{
         setTotalPrice(cart.reduce((total, item)=>{
               return total + Number(item.price)
         }, 0))
    }, [cart])

    return(
        <div className="cart-container">
              <h1>Total Price: $<span>{Number(totalPrice).toLocaleString()}</span></h1>
               <div className="cart-content">
                    {
                     cart.map((product)=>{
                        return <Product product={product}/> 
                     })
                     }
               </div>
        </div>
    )
}