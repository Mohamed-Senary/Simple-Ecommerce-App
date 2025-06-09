import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";

export default function Products (){
    const [products , setProducts] = useState([])
    const [current , setCurrent] = useState(0)
    const [categories , setCategories] = useState([])
    const [filter , setFilter]  = useState("")

    useEffect (()=>{
        fetch ('https://dummyjson.com/products/category-list')
        .then (res => res.json())
        .then (res => setCategories(res))
    } , [])

    useEffect (()=>{
        let url = `https://dummyjson.com/products`
        if (filter)
            url += `/category/${filter}`
        fetch(url)
        .then(res => res.json())
        .then(res => {console.log(res) 
            setProducts(res.products)})
        .catch(error=>console.log(error));
    } , [filter])

    useEffect (()=> setCurrent(0) , [filter])

    const Next = function(){setCurrent(current+10)
        console.log(current)}
    const Prev = function(){
        if (current >=10)
            setCurrent(current-10)
        else
            return
    }

    return(
        <>
            <p>Welcome to our shopping site, start browsing</p>
            <ul className="nav nav-pills">
                {
                categories.map ((category , idx)=>
                    (<li 
                    className={`btn badge rounded-pill m-2 p-2 ${
                            filter === category ? 'bg-primary text-white' : 'bg-light text-dark'
                            }`} 
                    key={idx}
                    onClick={()=>setFilter(category)}>
                        {category}
                    </li>))
                    
                }
                {filter && <li onClick={()=>setFilter("")} className="btn badge rounded-pill bg-danger">Clear Filter</li>}
            </ul>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                   products.map ((product)=>{
                        return (
                            <div className="col" key={product.id}>
                                <ProductCard
                                    product = {product}
                                />
                            </div>
                        )
                    }
                    )
                }
            </div>
            <hr />
            <Pagination
                next ={Next}
                prev ={Prev}
            />
        </>
    )
}