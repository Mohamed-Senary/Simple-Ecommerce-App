import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { addTocart } from "../Slices/cart";


export default function productDetails (){
    const [product,setProduct] = useState(null)
    const params = useParams();
    const dispatch = useDispatch()

    useEffect (()=>{
            fetch (`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(res =>{console.log(res) 
            setProduct(res)})
            .catch(error=>console.log(error)) 
        }, [])
    return (
        <div className="row">
            <div className="col-md-6 col-12">
                <img className="img-thumbnail" src={product?.images[0]} alt="" />
            </div>
            <div className="col-md-6 p-5 col-12">
                <h1>{product?.title}</h1>
                <hr />
                <p className="my-2">{product?.description}</p>
                <hr />
                <h2 className="my-2">{`$${product?.price}`}</h2>
                <hr />
                <div className="row my-2">
                    <span className="col-2 text-center rounded-pill bg-light p-1">{product?.category}</span>
                    <span className="col-2 text-center rounded-pill bg-light p-1 ms-4">{product?.brand}</span> 
                </div>
                <br />
                <div className="row">
                <div className="col-3 my-2">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">-</button>
                        <input type="number" id = "qty" className="form-control" placeholder="" aria-label="Example text with two button addons"/>
                        <button className="btn btn-outline-secondary" type="button">+</button>
                    </div>
                </div>
                <span className="col-3">Only <span className="text-success">{product?.stock}</span> Left In Stock</span>
                </div>
                <div className="row justify-content-around my-5">
                    <button className="col-4 btn btn-primary rounded-pill">Buy Now</button>
                    <button className="col-4 btn btn-primary rounded-pill" onClick={()=>{
                        let qty = Number(document.getElementById('qty').value) > 0 ? Number (document.getElementById('qty').value) : 1
                        dispatch(addTocart({
                        item:
                        {id:product.id,
                        title:product.title,
                        sku:product.sku,
                        price:product.price,
                        qty:qty, 
                        img:product.thumbnail}}));
                    setProduct (product=>({...product , stock: product.stock - qty}))}
                    }>
                    Add to cart</button>
                </div>
                </div>

        </div>
    )
}