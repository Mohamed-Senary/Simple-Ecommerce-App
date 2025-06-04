import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";

export default function Products (){
    const [products , setProducts] = useState([])
    const [current , setCurrent] = useState(0)

    useEffect (()=>{
        fetch(`https://dummyjson.com/products?limit=10&skip=${current}`)
        .then(res => res.json())
        .then(res => {console.log(res) 
            setProducts(res.products)})
        .catch(error=>console.log(error));
    } , [current])

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