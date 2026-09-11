import { useCallback, useMemo, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Product from "./Product";

const DisplayProducts=({products})=>{
    const [cart, setCart] = useState([]);

    const handleCart = (product)=>{
        setCart((prev) => [...prev, product]);
    }

    const totalPrice = useMemo(()=>{
        console.log("Recalculating..")
        if(!cart) return 0;
        return cart.reduce((sum, iter)=> sum+iter.price, 0)
    },[cart]);

    
    return (
        <div>
            {
                products.map((product)=>{
                    return(
                        <ul key= {product.id}>
                            <li>Name: {product.name}</li>
                            <li>Price: {product.price}</li>
                            <button onClick={()=>handleCart(product)}>Add to Cart</button>
                        </ul>
                    )
                }
                )
            }
            <h1>Shopping Cart</h1>
            <ShoppingCart cart={cart}/>
            <ProductCallBack addToCart = {addToCart}/> 

            <h2>Total Price: {totalPrice}</h2>
        </div>
    )
}
export default DisplayProducts;