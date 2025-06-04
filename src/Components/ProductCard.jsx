import { useNavigate, Link } from "react-router-dom"

export default function ProductCard (props){

    const navigate = useNavigate()

    function handleNavigate (id){
        navigate(`/product-details/${id}`)
    }
    return (
    
        <div className="card h-100" onClick={()=>handleNavigate(props.product.id)} style={{cursor:"pointer"}}>
            <div className="position-relative">
                <img
                src={props.product.images[0]}
                className="card-img-top"
                alt="..."
                />
                <div className="card-img-overlay d-flex align-items-start">
                <h5 className={`${props.product.stock>0?"bg-success":"bg-danger"} text-white p-2 rounded-pill`}>
                    {props.product.stock>0?"In Stock":"Out of Stock"}
                </h5>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">{props.product.title}
                    <span>${props.product.price}</span>
                </h5>
                <p className="card-text">{props.product.description}</p>
            </div>
        </div>
   
    )
}