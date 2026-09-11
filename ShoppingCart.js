const ShoppingCart = ({cart})=>{
    return(
        <div>
            {
             cart.map((cartItem)=>{
                    return(
                        <ul key= {cartItem.id}>
                            <li>Name: {cartItem.name}</li>
                            <li>Price: {cartItem.price}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default ShoppingCart;