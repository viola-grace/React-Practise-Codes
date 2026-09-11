import { useState } from "react";

const ProductList = ({products})=>{
    const [item, setItem]=useState(products);
    const [form, setForm]=useState({name: "" ,price: "", category: ""});
    
    const handleChange = (field, value) =>{
        setForm(prev =>
            ({...prev, [field]:value})
        )
    }

    const handleAdd = (form) =>{
        const newProduct={
            id: Date.now(),
            name: form.name,
            price: Number(form.price),
            category: form.category
        }
        setItem(prev=>[...prev, newProduct]);
        setForm({name:"",price: "", category: ""} )
    }

    return(
        <>
            {item.map((product) =>{
                return(
                <div>
                    <ul key={product.id}>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.category}</li>
                    </ul>
                </div>
            ) }       
            )}
            Name: <input value={form.name} onChange={(e)=>handleChange("name",e.target.value)}/>
            Price: <input value={form.price} onChange={(e)=>handleChange("price",e.target.value)}/>
            category: <input value={form.category} onChange={(e)=>handleChange("category",e.target.value)}/>
                
            <button onClick={()=>handleAdd(form)}>Add Product</button> 
        </>
    );
}
export default ProductList;