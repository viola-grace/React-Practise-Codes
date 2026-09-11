import {useState} from 'react';

const Product =({productsList})=>{
    const[showElectronics, setShowElectronics] = useState(false);
    const[showFashion, setShowFashion] = useState(false);
    const[costlyProducts, setShowCostlyProducts] = useState(false);

    const visibleElectronics = showElectronics ?
                 productsList.filter(item=>item.category==='Electronics') :
                 productsList;

    const visbileFashion = showFashion ?
                productsList.filter(item=>item.category === 'Fashion') :
                productsList;

    const visbileCostlyProducts = costlyProducts ?
                productsList.filter(item=>item.price>10000):
                productsList;

    const total = productsList.reduce((sum, item)=>sum+item.price, 0);
    return(
        <div>
            <button onClick={()=>setShowElectronics(true)}>Show Electronics</button>
            <ul>
                {visibleElectronics.map((electronics)=>{
                    return(
                    <li key={electronics.id}>
                        <p>ID:{electronics.id}</p>
                        <p>name:{electronics.name}</p>
                    </li>)
                  })}
            </ul>
            <button onClick={()=>setShowFashion(true)}>Show Fashion</button>
            <ul>
            {visbileFashion.map((fashion)=>{
                return(
                    <li key={fashion.id}>
                        <p>ID:{fashion.id}</p>
                        <p>Name:{fashion.name}</p>
                    </li>
                )
                })
            }
            </ul>
            <button onClick={()=>setShowCostlyProducts(true)}>Show Products above 10,000 Rupees</button>
            <ul>
                {
                    visbileCostlyProducts.map(costly => (
                        <li key={costly.id}>
                            <p>{costly.id}</p>
                            <p>{costly.name}</p>
                        </li>
                    ))
                }
            </ul>
            <p>Total value of all products displayed {total}</p>
        </div>
    );
}

export default Product;