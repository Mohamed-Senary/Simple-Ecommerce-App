import { useSelector } from "react-redux"
import {removeFromcart , adjustQty} from "../Slices/cart"
import { useDispatch} from "react-redux"

export default function Cart(){
    const currentCart = useSelector (state => state.cart.items)
    const total = useSelector (state => state.cart.items?.reduce((acc , item)=>acc+ item.price*item.qty ,0).toFixed(2) || 0)
    const dispatch = useDispatch ()

    return (
        <>
            <h1>Cart</h1>
            <div className="table-responsive row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentCart.map(
                            cartitem => {
                                return (
                                    <tr key={cartitem.id}>
                                        <td className="align-middle">
                                            <img src={cartitem.img} className="img-fluid img-thumbnail"
                                                style={{ maxWidth: "150px", height: "auto" }} 
                                            alt="..."/>
                                        </td>

                                        <td className="align-middle">
                                            <b>{cartitem.title}</b>
                                            <br/>
                                            Product Code: {cartitem.sku}
                                        </td>

                                        <td className="align-middle">
                                            <div className="input-group mb-3 w-50">
                                                <button className="btn btn-outline-secondary" type="button"
                                                    onClick={()=>dispatch (adjustQty({type:true , id:cartitem.id}))}
                                                >-</button>
                                                <input type="number" className="form-control" placeholder="" 
                                                aria-label="Example text with two button addons" value={cartitem.qty}/>
                                                <button className="btn btn-outline-secondary" type="button"
                                                    onClick={()=>dispatch (adjustQty({type:false , id:cartitem.id}))}
                                                >+</button>
                                                
                                            </div>
                                            
                                        </td>
                                        <td className="align-middle">
                                            <button className="btn"
                                                onClick={()=>dispatch(removeFromcart(cartitem.id))}
                                            >
                                                <i className="fas fa-trash text-danger"></i>
                                            </button>
                                        </td>
                                        <td className="align-middle">
                                                ${cartitem.price}
                                        </td>        
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
            </div>
            <div className="row justify-content-end">
            <div className="card col-3 text-center">
            <div className="card-body">
                <h4>Total  ${total}</h4>
            </div>
            </div>
            </div>
        </>
    )
}